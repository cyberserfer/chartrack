const mongoose = require('mongoose');

const raceArraySchema = new mongoose.Schema({
	name: String,
	edges: [String],
	hindrances: [String]
});

const raceSchema = new mongoose.Schema({
	game: String,
	races: [raceArraySchema]
});

module.exports = mongoose.model('Race', raceSchema);
