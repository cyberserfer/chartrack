const edgeResolver = require('./edgeResolver');
const hindranceResolver = require('./hindranceResolver');
const itemResolver = require('./itemResolver');
const powerResolver = require('./powerResolver');
const sheetResolver = require('./sheetResolver');
const userResolver = require('./userResolver');

const deleteResolver = {
	Mutation: {
		delete: async (_, { input }, { models }) => await Object.keys(models).forEach(model => {
			models[model].deleteMany({ _id: { $in: input}}, (err, docs) => {
				if (err) {
					return console.error(err);
				} else {
					console.log(`Docoments deleted from ${model}`)
				}
			})
	})
}
}

module.exports = [
	deleteResolver,
	edgeResolver,
	hindranceResolver,
	itemResolver,
	powerResolver,
	sheetResolver,
	userResolver
];
