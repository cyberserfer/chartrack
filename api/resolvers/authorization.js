const { ForbiddenError } = require('apollo-server');
const { skip } = require('graphql-resolvers');
const Character = require('../models/Character')

const isAuthenticated = (parent, args, { me }) => (me ? skip : new ForbiddenError('Not authenticated as user.'));

const isCharacterOwner = async (parent, args, { me }) => {
    const { name } = args;
    
    const character = await Character.findOne({ name })	

	if (!character) {
		throw new Error('Character not found.');
	}

	if (character.userId !== me.email) {
		throw new ForbiddenError('Not authenticated as Character owner.');
	}

	return skip;
};

module.exports = {
	isAuthenticated,
	isCharacterOwner
};