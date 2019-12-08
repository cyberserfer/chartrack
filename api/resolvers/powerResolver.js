const Power = require('../models/Power');

module.exports = {
	Query: {
		power: async (_, { input }) => {
			const power = await Power.findOne(input);
			if (!power) return new Error('Power not found');
			return power;
		},
		powers: async (_, { input }) => {
			const powers = await Power.find(input);
			if (!powers) return new Error('Savage Worlds character sheet not found');
			return powers;
		}
	},
	Mutation: {
		addPower: async (_, { input }) => await new Power(input).save()
	}
};
