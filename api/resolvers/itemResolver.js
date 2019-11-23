const Item = require('../models/Item');

module.exports = {
	Query: {
		getItems: async () => {
			const item = await Item.find({});
			if (!item) return new Error('Item not found');
			return item;
        },
        getItemById: async (_, { _id}) => {
            const item= await Item.find(_id);
			if (!item) return new Error('Savage Worlds character sheet not found');
			return item;
        }
	},
	Mutation: {
		addItem: async (_, args) => await new Item(args).save()
	}
};
