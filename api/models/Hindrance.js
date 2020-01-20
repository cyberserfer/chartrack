const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HindranceSchema = new Schema({
    _id: Schema.ObjectId,
    name: String,
    hindranceType: [String],
    requirements: [String],
    description: String,
    effects: [String],
    severity: String
})

module.exports = mongoose.model('Hindrance', HindranceSchema);