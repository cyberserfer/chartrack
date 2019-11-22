const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		races(game: String!): [Race!]
	}	
	type Race {
		id: ID!
		name: String
		edges: [String]
		hindrances: [String]		
	}
`;