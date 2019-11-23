const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getPowers(): [Power!]
        getPowerById(_id: ID): Power!
	}
	extend type Mutation {
		addPower(
            duration: Number,
            modifiers: [Object],
            name: String!,
            powerPoints: Number,
            range: String,
            rank: String,
            trappings: [Object]
        ): Power!
	}
	type Power {
        _id: ID!
        duration: Number,
        modifiers: [Object],
        name: String,
        powerPoints: Number,
        range: String,
        rank: String,
        trappings: [Object]
	}
`;
