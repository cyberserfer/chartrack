const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		power(input: PowerInput): Power!
		powers(input: PowerInput): [Power]!
	}

	extend type Mutation {
		addPower(input: PowerInput): Power!
	}

	type Power {
		_id: ID!
		duration: Int
		modifiers: [String]
		name: String
		powerPoints: Int
		range: String
		rank: String
		trappings: [String]
	}

	input PowerInput {
		duration: Int
		modifiers: [String]
		name: String
		powerPoints: Int
		range: String
		rank: String
		trappings: [String]
	}
`;
