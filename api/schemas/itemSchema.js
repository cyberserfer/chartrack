const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		item(input: ItemInput): Item!
		items(input: ItemInput): [Item]!
	}
	extend type Mutation {
		addItem(input: ItemInput): Boolean
		addItems(input: [ItemInput]): Boolean
	}
	type Item {
		_id: ID!
		armor: Int
		ap: Int
		cost: Int
		cover: Int
		damage: String
		effects: [String]
		minimumStrength: Int
		name: String!
		notes: String
		parry: Int
		range: String
		reach: Int
		rof: Int
		shots: Int
		weight: Int
	}

	input ItemInput {
		armor: Int
		ap: Int
		cost: Int
		cover: Int
		damage: String
		effects: [String]
		minimumStrength: Int
		name: String!
		notes: String
		parry: Int
		range: String
		reach: Int
		rof: Int
		shots: Int
		weight: Int
	}
`;
