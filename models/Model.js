import chemSchema from './schemas/Schema';
import mongoose, { mongo } from 'mongoose';

let chems = mongoose.model('chemicals', chemSchema);

export default chems;
