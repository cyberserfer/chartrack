const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PowerSchema = new Schema({
    duration: String,
    modifiers: [String],
    name: String,
    powerPoints: String,
    range: String,
    rank: Number,
    trappings: [String]
})

module.exports = mongoose.model('Power', PowerSchema);