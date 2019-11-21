const Item = require('../models/Item');

module.exports = {
	Query: {
		items: async (parent, args) => {
			const item = await Item.find({});
			if (!item) return new Error('Item not found');
			return item;
		}
	},
	Mutation: {
		addItem: async (parent, args) => {
			const { type, power } = args;

			const item = new Item({ type, power });
			const added = await item.save();

			return added;
		}
	}
};
