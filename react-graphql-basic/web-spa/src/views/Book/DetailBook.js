import React from "react";
import { useQuery } from "@apollo/client";
import { DETAILBOOKS } from "../../queries";
import List from "../../components/List";

const DetailBooks = (props) => {
  const { bookId } = props;
  const { loading, error, data } = useQuery(DETAILBOOKS, {
    variables: {
      id: bookId,
    },
  });

  const DisplayDetails = () => {
    // const { name, genre, author } = data;
    // map or destructuring cannot read propery
    if (!data) return <p>Not found</p>;
    return (
      <div>
        <p>Title : {data.book.name}</p>
        <p>Genre : {data.book.genre}</p>
        <p>Author Name : {data.book.author.name}</p>
        <p>Author Age: {data.book.author.age}</p>
      </div>
    );
  };

  function ErrorHandle() {
    return (
      <>
        {bookId === "" || undefined || null ? (
          <p>{bookId}</p>
        ) : (
          <pre>{error.message}</pre>
        )}
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

  return (
    <>
      {loading ? (
        Loading()
      ) : error ? (
        ErrorHandle()
      ) : (
        <List items={DisplayDetails()} />
      )}
    </>
  );
};

export default DetailBooks;
