import mongoose from 'mongoose';


const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
 
},{collection : 'Author'});
//create collection,schema
const author = mongoose.model('Author', authorSchema);

export { author };
