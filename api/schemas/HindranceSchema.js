const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		hindrance(input: HindranceInput): Hindrance!
		hindrances(input: HindranceInput): [Hindrance]!
	}

	extend type Mutation {
		addHindrance(input: HindranceInput): Hindrance!
	}

	type Hindrance {
		_id: ID!
		name: String
		hindranceType: [String]
		requirements: [String]
		description: String
		effects: [String]
		severity: String
	}

	input HindranceInput {
		name: String
		hindranceType: String
		requirements: [String]
		description: String
		effects: [String]
		severity: String
	}
`;
