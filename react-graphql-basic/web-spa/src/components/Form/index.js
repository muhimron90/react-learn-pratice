import React from 'react';

const Form = ({ children , ...rest }) => {
  return (
    <>
      <form {...rest} className='form__style'>
        {children}
      </form>
    </>
  );
};
export default Form;
