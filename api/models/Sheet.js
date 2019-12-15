const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = {
	baseAttribute: String,
	name: String,
	value: Number
};

const Attribute = {
	name: String,
	value: Number
}

const Detail = {
    name: String,
    type: String,
    value: String,
    require: String,
	effects: [String]
}

const Sheet = new Schema({
	userId: String,
	details: [Detail],
	startingPoints: {
		// Base 5
		attributePoints: Number,
		// Base 12
		skills: Number
	},
	attributes: [Attribute],
	skills: [Skill],
	edges: [{ type: mongoose.Schema.ObjectId, ref: 'Edge' }],
	hindrances: [{ type: mongoose.Schema.ObjectId, ref: 'Hindrance' }],
	items: [{ type: mongoose.Schema.ObjectId, ref: 'Item' }],
	powers: [{ type: mongoose.Schema.ObjectId, ref: 'Power' }]
});
module.exports = mongoose.model('Sheet', Sheet);
