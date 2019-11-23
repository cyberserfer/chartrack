const Power = require('../models/Power');

module.exports = {
	Query: {
		getPowers: async () => {
			const power = await Power.find({});
			if (!power) return new Error('Power not found');
			return power;
        },
        getPowerById: async (_, { _id}) => {
            const power= await Power.find(_id);
			if (!power) return new Error('Savage Worlds character sheet not found');
			return power;
        }
	},
	Mutation: {
		addPower: async (_, args) => await new Power(args).save()
	}
};
