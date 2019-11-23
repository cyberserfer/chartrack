const Edge = require('../models/Edge');

module.exports = {
	Query: {
		getEdges: async () => {
			const edge = await Edge.find({});
			if (!edge) return new Error('Edges not found');
			return edge;
        },
        getEdgeById: async (_, { _id}) => {
            const edge= await Edge.find(_id);
			if (!edge) return new Error('Edge not found');
			return edge;
        }
	},
	Mutation: {
		addEdge: async (_, args) => await new Edge(args).save()
	}
};
