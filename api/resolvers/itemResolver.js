const Item = require('../models/Item');

module.exports = {
	Query: {
		item: async (_, { input }) => {
			const item = await Item.findOne(input);
			if (!item) return new Error('Item not found');
			return item;
        },
        items: async (_, { input }) => {
            const items = await Item.find(input);
			if (!items) return new Error('Item not found');
			return items;
        }
	},
	Mutation: {
		addItem: async (_, args) => await new Item(args).save()
	}
};
