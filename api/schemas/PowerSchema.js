const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getPowers: [Power!]
        getPowerById(_id: ID): Power!
	}
	extend type Mutation {
		addPower(
            duration: Int,
            modifiers: [String],
            name: String!,
            powerPoints: Int,
            range: String,
            rank: String,
            trappings: [String]
        ): Power!
	}
	type Power {
        _id: ID!
        duration: Int,
        modifiers: [String],
        name: String,
        powerPoints: Int,
        range: String,
        rank: String,
        trappings: [String]
    }
    
    input PowerInput {
        duration: Int,
        modifiers: [String],
        name: String,
        powerPoints: Int,
        range: String,
        rank: String,
        trappings: [String]
	}
`;
