const Races = require('../models/Race');

module.exports = {
	Query: {
		races: async (parent, args) => {
			const { game } = args			
            const { races }  = await Races.findOne({ game });		            
			if (!races) return new Error('Races not found');
			return races;
		}
	},	
}
   