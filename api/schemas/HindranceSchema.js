const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		hindrance(input: HindranceInput): Hindrance!
		hindrances(input: HindranceInput): [Hindrance]!
	}

	extend type Mutation {
		addHindrance(input: HindranceInput): Boolean
		addHindrances(input: [HindranceInput]): Boolean
	}

	type Hindrance {
		_id: ID!
		name: String
		description: String
		effects: [String]
		severity: String
	}

	input HindranceInput {
		name: String
		description: String
		effects: [String]
		severity: String
	}
`;
