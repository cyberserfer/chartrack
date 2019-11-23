const Character = require('../models/Character');
const { combineResolvers } = require('graphql-resolvers');
const { isAuthenticated, isCharacterOwner } = require('./authorization')

module.exports = {
	Query: {
		character: async (parent, args) => {			            
            const { name } = args;
            const char = await Character.findOne({ name })
            if (!char) return new Error('Character not found');
            return char;
        },
        characters: async (parent, args) => {			
            const { userId } = args;
            const chars = await Character.find({ userId })
            if (!chars) return new Error('userId not found');
            return chars;
        }
	},
	Mutation: {        
        createCharacter: combineResolvers(isAuthenticated, async (parent, args, { me }) => {
            const { name } = args;
            const character = new Character({ name, userId: me.email });
            
            const createdCharacter = await character.save();	
            
			return createdCharacter;
        }),
        deleteCharacter: combineResolvers(isAuthenticated, isCharacterOwner, async (parent, args) => {
            const { name } = args;
            const removed = await Character.findOneAndRemove({ name });
			if (!removed) return new Error('Character not found');
        		return removed;            
        })     
	}
};