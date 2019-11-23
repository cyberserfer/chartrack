const SavageWorld = require('../models/savageWorlds');

module.exports = {
	Query: {
		savageWorlds: async (parent, args) => {			
			const { id, races, skills } = await SavageWorld.findOne({})						
			if (!id) return new Error('SavageWorlds not found');
			const savageWorlds = { id, skills, races }			
			return savageWorlds;
		}
	},	
};
