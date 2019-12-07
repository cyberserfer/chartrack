const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getHindrances: [Hindrance!]
        getHindranceById(_id: ID): Hindrance!
	}
	extend type Mutation {
		addHindrance(
            name: String!,
            type: [String],
            requirements: [String],
            description: String,
            effects: [String]
            severity: String
        ): Hindrance!
	}
	type Hindrance {
        _id: ID!
        name: String,
        type: [String],
        requirements: [String],
        description: String,
        effects: [String]
        severity: String
    }
    
    input HindranceInput {
        name: String,
        type: [String],
        requirements: [String],
        description: String,
        effects: [String]
        severity: String
	}
`;
