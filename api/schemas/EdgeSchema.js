const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		edge(input: EdgeInput): Edge!
		edges(input: EdgeInput): [Edge]!
	}

	extend type Mutation {
		addEdge(input: EdgeInput): Boolean
		addEdges(input: [EdgeInput]): Boolean
	}

	type Edge {
		_id: ID!
		name: String
		edgeType: [String]
		requirements: [String]
		description: String
		effects: [String]
	}

	input EdgeInput {
		name: String
		edgeType: [String]
		requirements: [String]
		description: String
		effects: [String]
	}
`;
