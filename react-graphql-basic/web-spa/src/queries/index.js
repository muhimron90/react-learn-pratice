import { gql } from "@apollo/client";
const FETCHBOOK = gql`
  query {
    listBooks {
      id
      name
    }
  }
`;

const GETAUTHORS = gql`
  query {
    listAuthors {
      name
      id
    }
  }
`;
//String! not Null
const ADDBOOK = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;

const DETAILBOOKS = gql`
  query book($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

export { FETCHBOOK, GETAUTHORS, ADDBOOK, DETAILBOOKS };
