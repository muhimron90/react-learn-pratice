import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Form from "../../components/Form";
import { ADDBOOK, FETCHBOOK, GETAUTHORS } from "../../queries";

const FindAuthor = () => {
  const { loading: queryLoading, error: queryError, data } = useQuery(
    GETAUTHORS
  );

  const [state, setState] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const [
    addData,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADDBOOK, {
    onCompleted: (data) => {
      resetInput(data);
    },
    onError: (error) => console.error("Error creating a post", error),
  });

  function ErrorHandle() {
    return (
      <>
        <p>Error </p>
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

  function resetInput(message) {
    console.error("Data from mutation", message);
    setState({ name: "", genre: "", authorId: "" });
  }
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addData({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId,
      },
      //call Booklist Query after sukses mutation
      refetchQueries: [{ query: FETCHBOOK }],
    });

    console.log(state);
  };

  return (
    <div>
      {queryLoading || mutationLoading ? (
        Loading()
      ) : queryError || mutationError ? (
        ErrorHandle()
      ) : (
        <Form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              className="field"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Book Name"
              required
            />
          </label>

          <label>
            Genre:
            <input
              className="field"
              type="text"
              name="genre"
              onChange={handleChange}
              placeholder="Book Genre"
              required
            />
          </label>

          <label>
            Author:
            <select
              name="authorId"
              onChange={handleChange}
              className="field"
              required
            >
              <option value="">Select Authors</option>
              {FetchData()}
            </select>
          </label>
          <button className="btn__add" type="submit">
            Add
          </button>
        </Form>
      )}
    </div>
  );
};

export default FindAuthor;
