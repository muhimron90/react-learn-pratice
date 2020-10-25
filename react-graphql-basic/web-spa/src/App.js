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
   uri: '/gqli',
    cache: cache,
  });
  return (
    <ApolloProvider client={client}>
      <div id='App'>
        <h1 className='title'>Hellow Javascript !== $</h1>
        <Lists />
      </div>
    </ApolloProvider>
  );
}

export default App;
