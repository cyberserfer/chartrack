const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EdgeSchema = new Schema({
    name: String,
    type: [String],
    requirements: [String],
    description: String,
    effects: [String]
})

module.exports = mongoose.model('Edge', EdgeSchema);