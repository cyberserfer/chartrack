const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        edge(input: EdgeInput): Edge!
        edges(input: EdgeInput): [Edge]!
	}
	extend type Mutation {
		addEdge(input: EdgeInput): Edge!
	}
	type Edge {
        _id: ID!
        name: String,
        type: [String],
        requirements: [String],
        description: String,
        effects: [String]
    }
    
    input EdgeInput {
        name: String,
        type: String,
        requirements: [String],
        description: String,
        effects: [String],
        }
`;
