import { makeExecutableSchema } from 'graphql-tools';

// ------------------------------------------------------------------

const starships = [
	{
		id: '3000',
		name: 'Millenium FalconZZ',
		length: 34.37,
	},
	{
		id: '3001',
		name: 'X-WingZZ',
		length: 12.5,
	},
	{
		id: '3002',
		name: 'TIE Advanced x1ZZ',
		length: 9.2,
	},
	{
		id: '3003',
		name: 'Imperial shuttleZZ',
		length: 20,
	},
];

const starshipData = {};

starships.forEach((ship) => {
	starshipData[ship.id] = ship;
});

// ------------------------------------------------------------------

function getStarship(id) {
	return starshipData[id];
}

// ------------------------------------------------------------------

export const typeDefs = `
	enum LengthUnit {
		METER
		FOOT
	}

	type Starship {
		id: ID!
		name: String!
		length(unit: LengthUnit = METER): Float
		coordinates: [[Float!]!]
	}

	type Query {
		starship(id: ID!): Starship
	}
`;

export const localResolvers = {
	Query: {
		starship: (root, { id }) => getStarship(id),
	},
};

export const localSchema = makeExecutableSchema({
	typeDefs,
	localResolvers,
});
