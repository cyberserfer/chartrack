module.exports = {
	Query: {
		item: async (_, { input }, { models }) => {
			const item = await models.Item.findOne(input);
			if (!item) return new Error('Item not found');
			return item;
		},
		items: async (_, { input }, { models }) => {
			const items = await models.Item.find(input);
			if (!items) return new Error('Item not found');
			return items;
		}
	},
	Mutation: {
		addItem: async (_, { input }, { models }) => await new models.Item(input).save()
	}
};
