import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} from 'graphql';
import _ from 'lodash';
import { books, authors } from '../datasources/dummies';

const BookType = new GraphQLObjectType({
  name: 'Book', //parent or entity
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author', //parent or entity
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
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
        console.log(typeof args.id);

        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType, 
      args: {
        id: { type: GraphQLID }, 
      },
      resolve(parent, args) {

        return _.find(authors, { id: args.id });
      },
    },
  },
});


//Bundle Schema
const BookSchema = new GraphQLSchema({
  query: RootQuery
});


export { BookSchema };