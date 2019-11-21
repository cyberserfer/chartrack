const { gql } = require('apollo-server-express');
const userSchema = require('./userSchema');
const itemSchema = require('./itemSchema');

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

module.exports = [baseSchema, userSchema, itemSchema];
