const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getItems: [Item!]
        getItemById(_id: ID): Item!
	}
	extend type Mutation {
		addItem(
            armor: Int,
            ap: Int,
            cost: Int,
            cover: Int,
            damage: String,
            effects: [String],
            minimumStrength: String,
            name: String!,
            notes: String,
            parry: Int,
            range: String,
            rof: Int,
            shots: Int,
            weight: Int,
        ): Item!
	}
	type Item {
        _id: ID!
        armor: Int,
        ap: Int,
        cost: Int,
        cover: Int,
        damage: String,
        effects: [String],
        minimumStrength: String,
        name: String!,
        notes: String,
        parry: Int,
        range: String,
        rof: Int,
        shots: Int,
        weight: Int,
    }
    
    input ItemInput {
        armor: Int,
        ap: Int,
        cost: Int,
        cover: Int,
        damage: String,
        effects: [String],
        minimumStrength: String,
        name: String!,
        notes: String,
        parry: Int,
        range: String,
        rof: Int,
        shots: Int,
        weight: Int,
	}
`;
