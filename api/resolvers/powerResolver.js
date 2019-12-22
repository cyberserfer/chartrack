module.exports = {
	Query: {
		power: async (_, { input }, { models }) => {
			const power = await models.Power.findOne(input);
			if (!power) return new Error('Power not found');
			return power;
		},
		powers: async (_, { input }, { models }) => {
			const powers = await models.Power.find(input);
			if (!powers) return new Error('Savage Worlds character sheet not found');
			return powers;
		}
	},
	Mutation: {
		addPower: async (_, { input }, { models }) => await new models.Power(input).save()
	}
};
