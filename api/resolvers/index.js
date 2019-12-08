const edgeResolver = require('./edgeResolver');
const hindranceResolver = require('./hindranceResolver');
const itemResolver = require('./itemResolver');
const powerResolver = require('./powerResolver');
const sheetResolver = require('./sheetResolver');
const userResolver = require('./userResolver');

module.exports = [
	edgeResolver,
	hindranceResolver,
	itemResolver,
	powerResolver,
	sheetResolver,
	userResolver
];
