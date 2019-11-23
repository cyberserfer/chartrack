const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getEdges(): [Edge!]
        getEdgeById(_id: ID!): Edge!
	}
	extend type Mutation {
		addEdge(
            name: String,
            type: [String],
            requirements: [Object],
            description: String,
            effects: [Object]
        ): Edge!
	}
	type Edge {
    _id: ID!
    name: String,
    type: [String],
    requirements: [Object],
    description: String,
    effects: [Object]
	}
`;
