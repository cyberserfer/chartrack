const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isSheetOwner } = require('./authorization');

module.exports = {
	Query: {
		character: async (_, { input }, { models }) => {
			
			let sheet = await models.Sheet.findOne(input).populate(['edges','hindrances']);
			if (!sheet) return new Error('No Savage Worlds character sheet found');
			return sheet;
		},
		characters: async (_, { input }, { me, models }) => {
			let newInput = input
			if (input.userId) {
				newInput = { userId: me._id }
			}
			const sheets = await models.Sheet.find(newInput).populate(['edges','hindrances']);
			if (!sheets) return new Error('Savage Worlds character sheets not found');
			return sheets;
		}
	},
	Mutation: {
		addSheet: combineResolvers(isAuthenticated, async (_, { input } , { me, models }) => {
			const sheet = new models.Sheet({ userId: me._id, ...input});
			return await sheet.save();
		}),
		updateSheet: combineResolvers(isAuthenticated, isSheetOwner, async (_, { input }, { models }) => {
			const { id } = input;
			return await models.Sheet.findOneAndUpdate({ _id: id }, { ...input }, { new: true })
		}),
		deleteSheet: combineResolvers(isAuthenticated, isSheetOwner, async (_, { input }, { models }) => {
			const { _id } = input;
			const { deletedCount } = await models.Sheet.deleteOne({ _id: _id });			
			return deletedCount;			
		}),
	}
};
