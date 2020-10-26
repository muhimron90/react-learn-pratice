import React from 'react'

const List = ({ items, ...rest }) => {
  
  return (
    <div>
      <ul {...rest} className='list__items'>
        {items}
      </ul>
    </div>
  );
};
export default List;