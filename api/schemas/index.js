const { gql } = require('apollo-server-express');
const userSchema = require('./userSchema');
const savageWorldsSchema = require('./savageWorldsSchema');
const characterSchema = require('./characterSchema');


const baseSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
	type Subscription {
		_: Boolean
	}
`;

module.exports = [baseSchema, userSchema, savageWorldsSchema, characterSchema];
