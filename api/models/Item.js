const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Item', itemSchema);
