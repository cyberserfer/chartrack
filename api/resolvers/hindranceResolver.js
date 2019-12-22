module.exports = {
	Query: {
		hindrance: async (_, { input }, { models }) => {
			const hindrance = await models.Hindrance.findOne(input);
			if (!hindrance) return new Error('hindrance not found');
			return hindrance;
		},
		hindrances: async (_, { input }, { models }) => {
			const hindrances = await models.Hindrance.find(input);
			if (!hindrances) return new Error('Hindrances not found');
			return hindrances;
		}
	},
	Mutation: {
		addHindrance: async (_, { input }, { models }) => await new models.Hindrance(input).save()
	}
};
