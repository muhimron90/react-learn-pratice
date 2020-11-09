import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import List from "../../components/List";
import { FETCHBOOK } from "../../queries";
import DetailBooks from "./DetailBook";

const BookLists = () => {
  const { loading, error, data } = useQuery(FETCHBOOK);

  const [selected, setSelected] = useState("");

  const FetchData = () => {
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error.message}</p>;

    return data.listBooks.map((item, index) => (
      <div key={index} className="books">
        <span className="title__book">Book</span>
        <p className="name__book"> {item.name}</p>
        <button className="detail__btn" onClick={() => setSelected(item.id)}>
          Detail
        </button>
      </div>
    ));
  };

  return (
    <div className="book__list">
      <h2>List Book</h2>
      <List items={FetchData()} />
      <DetailBooks bookId={selected} />
    </div>
  );
};
//binding hoc
export default BookLists;
