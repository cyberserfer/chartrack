import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EdgeSchema = new Schema({
    name: String,
    type: [String],
    requirements: [Object],
    description: String,
    effects: [Object]
})

export default mongoose.model('Edge', EdgeSchema);