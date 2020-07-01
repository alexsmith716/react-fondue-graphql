import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { matchRoutes } from "react-router-config";
import { HelmetProvider } from "react-helmet-async";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import serialize from "serialize-javascript";
import Routes, { routes } from "../App/Routes";
import createStore from "./createStore";
import { guessLocale } from "./client-locale/guessLocale";
import { LOCALE_COOKIE_NAME, COOKIE_MAX_AGE } from "./client-locale/constants";
//	----------------- new -----------------------
import fetch from 'node-fetch';

import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloLink,
	gql,
} from '@apollo/client';

//	import { RestLink } from 'apollo-link-rest';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/react-ssr';

import { GetReviews, GetADroid, GetCharacter } from '../graphql/queries/queries.graphql';
import * as graphqlQueries from '../graphql/queries/queries.js';
import { resolvers } from '../graphql/resolvers/resolvers.js';

import defineHeaders from '../utils/defineHeaders';
//	----------------- endnew --------------------
const store = createStore();

//	----------------- new -----------------------
defineHeaders();

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
	fetch: fetch,
});

//	const restLink = new RestLink({ 
//		uri: 'https://rickandmortyapi.com/api/',
//		// endpoints: '/api',
//		customFetch: fetch,
//	});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(`>>>> RENDER.JS > [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,),
		);
	}

	if (networkError) {
		console.log(`>>>> RENDER.JS > [Network error]: ${networkError}`);
	}
});

const link = ApolloLink.from([
	//	authLink,
	// restLink,
	errorLink,
	//	retryLink,
	httpLink,
]);

const clientApollo = new ApolloClient({
	ssrMode: true,
	cache,
	link,
	resolvers,
});
//	----------------- endnew --------------------

export default ({ clientStats }) => async (req, res) => {

	//	const promises = matchRoutes(routes, req.path).map(({ route }) => {
	//		route.loadData ? route.loadData(store) : null;
	//	});

	await matchRoutes(routes, req.path).map(({ route }) => {
		route.loadData ? route.loadData(store) : null;
	});

	//	----------------- new -----------------------
	//	const queryCharacter = await clientApollo.query({query: gql`
	//		query Character($id: ID){
	//			character(id: "1") @rest(type: "Post", path: "character/1") {
	//				id
	//				name
	//				status
	//				species
	//				type
	//				gender
	//				origin {
	//					name
	//					type
	//					dimension
	//				}
	//				location {
	//					name
	//					type
	//					dimension
	//				}
	//				image
	//				episode {
	//					name
	//					episode
	//				}
	//			}
	//		}
	//	`});

	//	console.log('>>>> SERVER > clientApollo.query > REST: ', queryCharacter);

	clientApollo.writeQuery({
		query: gql`
			query GetCartItems {
				cartItems
			}
		`,
		data: {
			cartItems: []
		}
	});

	//	const q = await clientApollo.query({
	//		fetchPolicy: 'network-only',
	//		query: gql`
	//			query {
	//				character
	//			}`
	//	}).then(result => console.log(result))

	// ==========================================================================
	// ==========================================================================

	//	prefetch data (load data into cache): "client.query"
	//	set "initialState" of data
	// -------------------------------------------------------------------
	// const qq = await clientApollo.query({ query: GetCharacter });
	// const qq = await clientApollo.query({ query: GetReviews, variables: { episode: "EMPIRE" } });
	// const qq = await clientApollo.query({ query: GetADroid, variables: { droidID: 2001 } });
	const qq = await clientApollo.query({ query: graphqlQueries.GET_HERO, });
	// await clientApollo.query({ query: graphqlQueries.GET_THE_SCHEMA, });
	// -------------------------------------------------------------------

	console.log('>>>> RENDER.JS > clientApollo.query: ', JSON.stringify(qq));
	console.log('>>>> RENDER.JS > InMemoryCache > CACHE > cache.extract() 2: ', cache.extract());
	//	----------------- endnew --------------------

	const lang = guessLocale(req);
	const context = {};
	const helmetContext = {};

	const app = renderToString(
		<HelmetProvider context={helmetContext}>
			<ApolloProvider client={clientApollo}>
				<Provider store={store}>
					<StaticRouter location={req.originalUrl} context={context}>
						<Routes lang={lang} />
					</StaticRouter>
				</Provider>
			</ApolloProvider>
		</HelmetProvider>,
	);

	const { helmet } = helmetContext;

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const status = context.status || 200;

	if (context.status == 404) {
		console.log("Error 404: ", req.originalUrl);
	}

	if (context.url) {
		const redirectStatus = context.status || 302;
		res.redirect(redirectStatus, context.url);
		return;
	}

	//	----------------- new -----------------------
	await getDataFromTree(app);
	console.log('>>>> RENDER.JS > InMemoryCache > CACHE >>>>>>>>>>>>>>>>>>>: ', cache);
	//	----------------- endnew --------------------

	res.status(status)
		.cookie(LOCALE_COOKIE_NAME, lang, {
			maxAge: COOKIE_MAX_AGE,
			httpOnly: false,
		})
		.header("Content-Type", "text/html")
		.send(
			`<!DOCTYPE html><html lang="${lang}"><head><meta name="theme-color" content="#000000"/>${styles}${
				helmet.title
			}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}<script>window.REDUX_DATA = ${serialize(
				store.getState(),
			)}</script><script>window.APOLLO_STATE = ${serialize(
				clientApollo.extract(),
			)}</script></body></html>`,
		);

};
