const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EdgeSchema = new Schema({
    name: String,
    edgeType: [String],
    requirements: [String],
    description: String,
    effects: [String]
})

module.exports = mongoose.model('Edge', EdgeSchema);