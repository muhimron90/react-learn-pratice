import React from 'react'
import { gql, useQuery } from '@apollo/client';
const FETCHBOOK = gql`
  query {
    listBooks {
      name
      genre
    }
  }
`;
const Lists = () => {
  const { loading, error, data } = useQuery(FETCHBOOK);
  
  const FetchData = () => {
     if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error Query data : </p>;
   
    return data.listBooks.map((item, index) => {
      return (
        <li key={index}>
          Name Book : {item.name} , genre : {item.genre}
        </li>
      );
    });

  }
 
  return (
    <div>
      <ul className='list__books'>{FetchData()} </ul>
    </div>
  );
}
export default Lists;