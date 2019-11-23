const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getItems: [Item!]
        getItemById(_id: ID): Item!
	}
	extend type Mutation {
		addItem(
            armor: Number,
            ap: Number,
            cost: Number,
            cover: Number,
            damage: String,
            effects: [Object],
            minimumStrength: String,
            name: String!,
            notes: String,
            parry: Number,
            range: String,
            rof: Number,
            shots: Number,
            weight: Number,
        ): Item!
	}
	type Item {
        _id: ID!
        armor: Number,
        ap: Number,
        cost: Number,
        cover: Number,
        damage: String,
        effects: [Object],
        minimumStrength: String,
        name: String!,
        notes: String,
        parry: Number,
        range: String,
        rof: Number,
        shots: Number,
        weight: Number,
	}
`;
