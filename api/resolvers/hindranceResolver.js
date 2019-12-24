const Hindrance = require('../models/Hindrance');

module.exports = {
	Query: {
		hindrance: async (_, { input }) => {
			const hindrance = await Hindrance.findOne(input);
			if (!hindrance) return new Error('hindrance not found');
			return hindrance;
		},
		hindrances: async (_, { input }) => {
			const hindrances = await Hindrance.find(input);
			if (!hindrances) return new Error('Hindrances not found');
			return hindrances;
		}
	},
	Mutation: {
		addHindrance: async (_, { input }) => await new Hindrance(input).save()
	}
};
