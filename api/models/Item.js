const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    armor: Number,
    ap: Number,
    cost: Number,
    cover: Number,
    damage: String,
    effects: [String],
    minimumStrength: Number,
    name: String,
    notes: String,
    parry: Number,
    range: String,
    reach: Number,
    rof: Number,
    shots: Number,
    weight: Number,
    tag: [String]

});

module.exports = mongoose.model('Item', ItemSchema);
