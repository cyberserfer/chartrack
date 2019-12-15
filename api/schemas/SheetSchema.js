const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		character(input: SheetInput): Sheet!
		characters(input: SheetInput): [Sheet!]
	}

	extend type Mutation {
		addSheet(input: SheetInput): Sheet!
	}
	type Attribute {
		name: String
		value: Int
	}

	type CharacterDetail {
		name: String
		value: String
		effects: [String]
	}
	input CharacterDetailInput {
		name: String
		value: String
		effects: [String]
	}

	input AttributeInput {
		name: String
		value: Int
	}
	type Skill {
		baseAttribute: String
		name: String
		value: Int
	}

	input SkillInput {
		baseAttribute: String
		name: String
		value: Int
	}

	type Race {
		name: String
		effects: [String]
	}

	input RaceInput {
		name: String
		effects: [String]
	}

	type StartingPoints {
		attributePoints: Int
		skills: Int
	}

	input StartingPointsInput {
		attributePoints: Int
		skills: Int
	}

	type Sheet {
		_id: ID!
		userId: ID
		details: [CharacterDetail]
		startingPoints: StartingPoints
		attributes: [Attribute]
		skills: [Skill]
		edges: [Edge]
		hindrances: [Hindrance]
		items: [Item]
		powers: [Power]
	}

	input SheetInput {
		_id: ID
		userId: ID
		details: [CharacterDetailInput]
		startingPoints: StartingPointsInput
		attributes: [AttributeInput]
		skills: [SkillInput]
		edges: [EdgeInput]
		hindrances: [HindranceInput]
		items: [ItemInput]
		powers: [PowerInput]
	}
`;
