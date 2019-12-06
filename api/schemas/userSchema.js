const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		user(email: String!): User!
		users: [User!]
	}
	extend type Mutation {
		signUp(data: UserInput!): Token!
		signIn(data: UserInput!): Token!
	}
	type User {
		id: ID!
		email: String!
		characters: [Character!]
	}
	type Token {
		token: String!
	}
	input UserInput {
		email: String!
		password: String!
	}
`;
