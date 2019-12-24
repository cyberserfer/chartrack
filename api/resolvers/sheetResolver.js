const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isSheetOwner } = require('./authorization');

module.exports = {
	Query: {
		character: async (_, { input }, { models }) => {
			
			let sheet = await models.Sheet.findOne(input).populate(['edges','hindrances']);
			// sheet.edges = (sheet, arg, { models }) => models.Edge.find({
			// 		where: {
			// 			_id: arg
			// 		}
			// 	});
			if (!sheet) return new Error('No Savage Worlds character sheet found');
			return sheet;
		},
		characters: async (_, { input }, { models }) => {
			const sheets = await models.Sheet.find(input).populate(['edges','hindrances']);
			if (!sheets) return new Error('Savage Worlds character sheets not found');
			return sheets;
		}
	},
	Mutation: {
		addSheet: combineResolvers(isAuthenticated, async (_, { input }, { me, models }) => {										
			if (input._id) return new Error('Sheet already exists');							
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
