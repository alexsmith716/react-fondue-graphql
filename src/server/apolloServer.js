import * as express from 'express';
import {
	ApolloServer,
} from 'apollo-server-express';
import {
	mergeSchemas,
	introspectSchema,
	wrapSchema
} from 'graphql-tools';

import { print } from 'graphql';
import fetch from 'node-fetch';

import { localResolvers, localSchema } from '../graphql/schema';

// http://localhost:4000/graphql

const executor = async ({ document, variables }) => {
	const query = print(document);
	const fetchResult = await fetch('https://rickandmortyapi.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query, variables })
	});
	return fetchResult.json();
};

export async function apolloServer(app) {
	const schema = wrapSchema({
		schema: await introspectSchema(executor),
		executor,
	});
	const finalSchema = mergeSchemas({
		schemas: [
			localSchema,
			schema,
		],
		resolvers: localResolvers
	});
	const apollo = new ApolloServer({
		schema: finalSchema,
	});
	apollo.applyMiddleware({ app });
}
