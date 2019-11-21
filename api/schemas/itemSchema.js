const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		items: [Item!]
	}
	extend type Mutation {
		addItem(type: String!, power: Int!): Item!
	}
	type Item {
		id: ID!
		type: String
		power: Int
	}
`;
