const Sheet = require('../models/Sheet');

module.exports = {
	Query: {
		character: async (_, { input }) => {
			const sheet = await Sheet.findOne(input);
			if (!sheet) return new Error('No Savage Worlds character sheet found');
			return sheet;
		},
		characters: async (_, { input }) => {
			const sheets = await Sheet.find(input);
			if (!sheets) return new Error('Savage Worlds character sheets not found');
			return sheets;
		}
	},
	Mutation: {
		addSheet: async (_, { input }) => await new Sheet(input).save()
	}
};
