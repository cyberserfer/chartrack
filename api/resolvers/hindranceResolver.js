const Hindrance = require('../models/Hindrance');

module.exports = {
	Query: {
		getHindrances: async () => {
			const hindrance = await Hindrance.find({});
			if (!hindrance) return new Error('hindrance not found');
			return hindrance;
        },
        getHindranceById: async (_, { _id}) => {
            const hindrance = await Hindrance.find(_id);
			if (!hindrance) return new Error('Hindrance not found');
			return hindrance;
        }
	},
	Mutation: {
		addHindrance: async (_, args) => await new Hindrance(args).save()
	}
};
