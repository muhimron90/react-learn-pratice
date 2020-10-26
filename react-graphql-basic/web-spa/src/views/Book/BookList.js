import React from 'react';
import { gql, useQuery } from '@apollo/client';
import List from '../../components/List';
const FETCHBOOK = gql`
  query {
    listBooks {
      name
      genre
    }
  }
`;
const BookLists = () => {
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
    };


  return (
    <div>
      <List items={FetchData()} />
    </div>
  );
};
//binding hoc
export default BookLists;
