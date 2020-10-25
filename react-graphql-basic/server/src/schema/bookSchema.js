import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import _ from 'lodash';
import { SET_CACHE, GET_CACHE } from '../helper/Cache';
// import { books, authors } from '../datasources/dummies';
import { books, author } from '../models';
const BookType = new GraphQLObjectType({
  name: 'Book', //parent or entity
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        //grab Authors
        //finding id author parent ID, grab data authors id
        //return _.find(authors, { id: parent.authorId });
        //get or find data in collection author by authorid, will get bookk and author reference
        //dont need object id anymore in mongodb, will automatic
        return author.findById(parent.authorId);
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author', //parent or entity
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent ,args) {
        //return _.filter(books, {authorId : parent.id})

        //get or find data in collection boos by author id, will get books with id specify
        return books.find({authorId : parent.id});
      }
    },
  }),
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType, //grab entity from Book,
      args: {
        id: { type: GraphQLID }, //args is similiar like params on HTTP REST e.g :Book(id: '123' or 123)
      },
      resolve(parent, args) {
        //code get data from db or resources
        //with lodash helper
        

        //return _.find(books, { id: args.id });
        //collections find book by ID 
        return books.findById(args.id);
      },
    },
    listBooks: {
      type: new GraphQLList(BookType),
      resolve : async (parent, args) => {
        //particulary we actually dont need any Parameter resolve for return all data
        //return books; //you can use _.foreEach or _.map
        //mongo find is queries All data with empty object
        // try Caching w/ redis
        const cacheBookList = await GET_CACHE('key-books');
        if (cacheBookList) {
          console.log('Cache Used at', cacheBookList);
          return JSON.parse(cacheBookList);
          
        }
        const list_books = await books.find({});
        const saveResult = await SET_CACHE(
          'key-booklist',
          JSON.stringify(list_books),
          'EX',
          5
        );
        console.log('Cache ?', saveResult);
        
        return list_books;
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        //return _.find(authors, { id: args.id });
        //collections find Author by ID
        return author.findById(args.id);
      },
    },
    listAuthors: {
      type: new GraphQLList(AuthorType),
      resolve : async (parent, args) => {
        //particulary we  dont need any Parameters resolve for return all data
        //return authors; //you can use _.foreEach or _.map
        //mongo find is queries All data with empty object
    
        const cacheAuthorList = await GET_CACHE('key-authorlist');
        if (cacheAuthorList) {
          console.log('Cache Used at ', cacheAuthorList);
          return JSON.parse(cacheAuthorList);
          
        }
        const list_author = await author.find({});
        const AuthorCache = await SET_CACHE(
          'key-authorlist',
          JSON.stringify(list_author),
          'EX',
          5
        );
        console.log('Cache ?', AuthorCache);
        
        return list_author;
      },
    },
  },
});

///mutatuin UPDATE,DELETE,INSERT
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull (GraphQLInt) },
      },
      resolve(parent, args) {
        let newAuthor = new author({
          name: args.name,
          age: args.age,
        });
        return newAuthor.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let newBook = new books({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });

        return newBook.save();
      },
    },
  },
});
//Bundle Schema
const BookSchema = new GraphQLSchema({
  query: RootQuery,
  mutation : Mutation
});

export { BookSchema };