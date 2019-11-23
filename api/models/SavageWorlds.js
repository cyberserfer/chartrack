const mongoose = require('mongoose');
const raceSchema = require('./Race')
const skillSchema = require('./Skill')

const savageWorldsSchema = new mongoose.Schema({	    
    id: String,
    skills: [skillSchema],
    races: [raceSchema]
});

module.exports = mongoose.model('Model', savageWorldsSchema, 'savageWorlds');