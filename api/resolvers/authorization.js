const { ForbiddenError } = require('apollo-server');
const { skip } = require('graphql-resolvers');

const isAuthenticated = (parent, args, { me }) =>
	me ? skip : new ForbiddenError('Not authenticated as user.');

const isSheetOwner = async (parent, { input }, { me, models }) => {
	const { id } = input;

	const sheet = await models.Sheet.findOne({ _id: id });

	if (!sheet) {
		throw new Error('Sheet not found.');
	}

	if (sheet.userId !== me._id) {
		throw new ForbiddenError('Not authenticated as Sheet owner.');
	}

	return skip;
};

module.exports = {
	isAuthenticated,
	isSheetOwner
};
