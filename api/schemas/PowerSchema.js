const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		power(input: PowerInput): Power!
		powers(input: PowerInput): [Power]!
	}

	extend type Mutation {
		addPower(input: PowerInput): Boolean
		addPowers(input: [PowerInput]): Boolean
	}

	type Power {
		_id: ID!
		duration: String
		modifiers: [String]
		name: String
		powerPoints: String
		range: String
		rank: Int
		trappings: [String]
	}

	input PowerInput {
		duration: String
		modifiers: [String]
		name: String
		powerPoints: String
		range: String
		rank: Int
		trappings: [String]
	}
`;
