const Edge = require('../models/Edge');

module.exports = {
	Query: {
        edge: async (_, { input }) => {
            const edge = await Edge.findOne(input);
			if (!edge) return new Error('Edge not found');
			return edge;
        },
        edges: async (_, { input }) => {
			const edges = await Edge.find(input);
			if (!edges) return new Error('Edges not found');
			return edges;
        }
	},
	Mutation: {
		addEdge: async (_, { input }) => await new Edge(input).save()
	}
};
