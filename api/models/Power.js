import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PowerSchema = new Schema({
    duration: Number,
    modifiers: [Object],
    name: String,
    powerPoints: Number,
    range: String,
    rank: String,
    trappings: [Object]
})

export default mongoose.model('Power', PowerSchema);