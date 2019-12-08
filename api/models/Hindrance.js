const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HindranceSchema = new Schema({
    name: String,
    type: [String],
    requirements: [String],
    description: String,
    effects: [String],
    severity: String
})

module.exports = mongoose.model('Hindrance', HindranceSchema);