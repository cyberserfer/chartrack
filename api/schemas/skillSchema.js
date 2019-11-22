const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		skills(game: String!): [Skill!]
	}	
	type Skill {
		id: ID!
		name: String
		attribute: String
	}
`;

