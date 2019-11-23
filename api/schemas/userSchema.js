const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		user(email: String!): User!
		users: [User!]
	}
	extend type Mutation {		
		signUp(email: String!, password: String!): Token!
		signIn(email: String!, password: String!): Token!		
	}
	type User {
		id: ID!
		email: String!
		characters: [Character!]
	}
	type Token {
		token: String!
	}	
`;