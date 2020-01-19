module.exports = {
	Query: {
		item: async (_, { input }, { models }) => {
			const item = await models.Item.findOne(input);
			if (!item) return new Error('Item not found');
			return item;
		},
		items: async (_, { input }, { models }) => {
			let items

			input 
			? items = await models.Item.find({ _id: { $in: input}})
			: items = await models.Item.find(input)
			if (!items) return new Error('Item not found');
			return items;
		}
	},
	Mutation: {
		addItem: async (_, args, { models }) => await new models.Item(args).save(),

		addItems: async (_, { input }) => await models.Item.insertMany(input, function (err, docs) {
			if (err) {
				return console.error(err);
			} else {
				console.log("Multiple documents inserted to Collection");
			}
		})
	}
};
