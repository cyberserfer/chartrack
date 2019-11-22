const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		user(email: String!): User!
		users: [User!]
	}
	extend type Mutation {
		addUser(email: String!, password: String!): User!
		removeUser(email: String!): User!
		logIn(email: String!, password: String!): User!
	}
	type User {
		id: ID!
		email: String!
		password: String!
	}
`;
