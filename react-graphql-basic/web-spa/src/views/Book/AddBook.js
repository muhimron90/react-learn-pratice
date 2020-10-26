import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Form from '../../components/Form';


const GETAUTHORS = gql`
  query {
    listAuthors {
      name
    id
    }
  }
`;

const FindAuthor = () => {
  const { loading, error, data } = useQuery(GETAUTHORS);
  const [authors, setAuthors] = useState([]);

  function ErrorHandle() {
     return (
      <>
        <p>Error</p>
      </>
    );
  }
  function Loading() {
    return (
      <>
        <p>Loading data...</p>
      </>
    );
  }
   const FetchData = () => {
     
  
     return data.listAuthors.map((item, index) => {
       return (
         <option key={index} value={item.id}>
           {item.name}
         </option>
       );
     });
   };

  function handleOpt(e) {
    console.log();
    
    setAuthors();
  };

  return (
    <div>
      {loading ? (
        Loading()
      ) : error ? (
        ErrorHandle()
      ) : (
        <Form>
          <div className='field'>
            <label>Name: </label>
            <input type='text' name='' id='' />
          </div>
          <div className='field'>
            <label>Genre: </label>
            <input type='text' name='' id='' />
          </div>
          <div className='field'>
            <label>Author: </label>
            <select>{FetchData()}</select>
          </div>
          <button className='add__book'>Add</button>
        </Form>
      )}
    </div>
  );
}

export default FindAuthor;