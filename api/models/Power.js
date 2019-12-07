const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PowerSchema = new Schema({
    duration: Number,
    modifiers: [String],
    name: String,
    powerPoints: Number,
    range: String,
    rank: String,
    trappings: [String]
})

module.exports = mongoose.model('Power', PowerSchema);