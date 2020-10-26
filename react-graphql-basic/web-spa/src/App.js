import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from '@apollo/client';
import BookLists from './views/Book/BookList';
import FindAuthor from './views/Book/AddBook';

const cache = new InMemoryCache();


function App() {
  const client = new ApolloClient({
    uri: '/gqli',
    cache: cache,
   
  });
  return (
    <ApolloProvider client={client}>
      <div id='App'>
        <h1 className='title'>Hellow Javascript !== $</h1>
        <BookLists />
        <FindAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;
