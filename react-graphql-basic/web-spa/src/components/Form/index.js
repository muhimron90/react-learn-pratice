import React from "react";

const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <>
      <form {...rest} onSubmit={onSubmit} className="form__style">
        <div className="form__head">Add Books</div>
        {children}
      </form>
    </>
  );
};
export default Form;
