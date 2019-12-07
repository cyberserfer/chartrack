const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getEdges: [Edge!]
        getEdgeById(_id: ID!): Edge!
	}
	extend type Mutation {
		addEdge(
            name: String,
            type: [String],
            requirements: [String],
            description: String,
            effects: [String]
        ): Edge!
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
        type: [String],
        requirements: [String],
        description: String,
        effects: [String]
        }
`;
