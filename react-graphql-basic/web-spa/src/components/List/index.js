import React from "react";

const List = ({ items, ...rest }) => {
  return (
    <div className="lists">
      <ul {...rest} className="list__items">
        {items}
      </ul>
    </div>
  );
};
export default List;
