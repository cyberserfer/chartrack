const Sheet = require('../models/SavageWorldsCharacterSheet');

module.exports = {
	Query: {
		getCharactersByUserId: async (_, { userId }) => {
			const sheets = await SavageWorldsCharacterSheet.find(_id);
			if (!sheets) return new Error('No Savage Worlds character sheets found');
			return sheets;
        },
        getCharacterById: async (_, { _id }) => {
            const sheet = await SavageWorldsCharacterSheet.find(_id);
			if (!sheet) return new Error('Savage Worlds character sheet not found');
			return sheet;
        }
	},
	Mutation: {
        addSavageWorldsCharacterSheet: async (_, args) => await new Sheet(args).save()
	}
};
