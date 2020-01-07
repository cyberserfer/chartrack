module.exports = {
	Query: {
		edge: async (_, { input }, { models }) => {
			const edge = await models.Edge.findOne(input);
			if (!edge) return new Error('Edge not found');
			return edge;
		},
		edges: async (_, { input }, { models }) => {
			const edges = await models.Edge.find(input);
			if (!edges) return new Error('Edges not found');
			return edges;
		}
	},
	Mutation: {
		addEdge: async (_, { input }, { models }) => await new models.Edge(input).save(),

		addEdges: async (_, { input }) => await models.Edge.insertMany(input, function (err, docs) {
			if (err){ 
				return console.error(err);
			} else {
			  console.log("Multiple documents inserted to Collection");
			}
		  })
	}
};
