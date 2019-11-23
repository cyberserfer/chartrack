const { gql } = require('apollo-server-express');

const hindrances = gql`
	extend type Query {
        getHindrances(): [Hindrance!]
        getHindranceById(_id: ID): Hindrance!
	}
	extend type Mutation {
		addHindrance(
            name: String!,
            type: [String],
            requirements: [Object],
            description: String,
            effects: [Object]
            severity: String
        ): Hindrance!
	}
	type Hindrance {
        _id: ID!
        name: String,
        type: [String],
        requirements: [Object],
        description: String,
        effects: [Object]
        severity: String
	}
`;

module.exports = hindrances