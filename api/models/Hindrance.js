import mongoose from 'mongoose';
import EdgeSchema from './Edge';

const HindranceSchema = new EdgeSchema({
    severity: String
})

export default mongoose.model('Hindrance', HindranceSchema);