import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Lists from './components/Lists';

const cache = new InMemoryCache();


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3030/gqli',
    cache: cache,
  });
  return (
    <ApolloProvider client={client}>
      <div id='App'>
        <h1 className='title'>Hellow Javascript !== ss01 @ $</h1>
        <Lists />
      </div>
    </ApolloProvider>
  );
}

export default App;
