const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    armor: Number,
    ap: Number,
    cost: Number,
    cover: Number,
    damage: String,
    effects: [Object],
    minimumStrength: String,
    name: String,
    notes: String,
    parry: Number,
    range: String,
    rof: Number,
    shots: Number,
    weight: Number,
});

module.exports = mongoose.model('Item', itemSchema);
