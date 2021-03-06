const { gql } = require('apollo-server-express');
const edgeSchema = require('./edgeSchema');
const hindranceSchema = require('./hindranceSchema');
const itemSchema = require('./itemSchema');
const powerSchema = require('./powerSchema');
const sheetchema = require('./SheetSchema');
const userSchema = require('./userSchema');

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

module.exports = [
	baseSchema,
	edgeSchema,
	hindranceSchema,
	itemSchema,
	powerSchema,
	sheetchema,
	userSchema
];
