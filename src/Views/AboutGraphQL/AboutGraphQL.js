import React, { Component } from "react";
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';

import Head from "../../Components/Head";
import { Container, Readable } from "../../Components/Layout";
const styles = require("./AboutGraphQL.css");
const dataEn = require("./data-aboutGraphQL-en.md");
const dataDe = require("./data-aboutGraphQL-de.md");
import { t } from "../../Components/Languages";
import { 
	gql, 
	useQuery, 
	useMutation,
	useApolloClient, } from '@apollo/client';

import {
  fragmentTypeDroid,
} from "../../graphql/fragments/fragments";

// address hooks and TS later
class AboutGraphQL extends Component {
	render() {
		const { lang } = this.props.match.params;

		return (
			<>
				<Head title="ReactFondue • AboutGraphQL" />
				<Container>
					<Readable>
						{lang === "en" && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataEn.__content,
								}}
							/>
						)}
						{lang === "de" && (
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataDe.__content,
								}}
							/>
						)}
						<div className={styles.flexContainerFullVhCentered}>
							<div className={styles.heightOneHundredPercent}>
								<GraphiQL
									fetcher={async graphQLParams => {
										const data = await fetch(
											'http://localhost:4000/graphql',
											{
												method: 'POST',
												headers: {
													Accept: 'application/json',
													'Content-Type': 'application/json',
												},
												body: JSON.stringify(graphQLParams),
											},
										);
										return data.json().catch(() => data.text());
									}}
								/>
							</div>
						</div>
					</Readable>
				</Container>
			</>
		);
	}
}

export default AboutGraphQL;
