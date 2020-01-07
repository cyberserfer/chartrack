const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    armor: Number,
    ap: Number,
    cost: Number,
    cover: Number,
    damage: String,
    effects: [String],
    minimumStrength: String,
    name: String,
    notes: String,
    parry: Number,
    range: String,
    rof: Number,
    shots: Number,
    weight: Number,
    tag: [String]

});

module.exports = mongoose.model('Item', ItemSchema);
