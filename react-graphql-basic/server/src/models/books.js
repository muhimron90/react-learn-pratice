import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String
}, {collection : 'Book'});
//create collection,schema
const books = mongoose.model('Book', bookSchema);

export { books };
