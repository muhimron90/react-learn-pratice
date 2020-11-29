import { useState } from "react";
import styles from "./TableContent.module.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
function sortItems(items, value, sortBy) {
  if (sortBy === "asc") {
    //or by population (x,y) => x.population > y.population
    return [...items].sort((x, y) => (x[value] > y[value] ? 1 : -1));
  }
  if (sortBy === "desc") {
    return [...items].sort((x, y) => (x[value] < y[value] ? 1 : -1));
  }
  return items;
}
const TableContent = ({ data }) => {
  const [sortBy, setSortBy] = useState("asc");
  const [value, setValue] = useState("");
  const dataSorted = sortItems(data, value, sortBy);

  const SortedArrow = ({ sort }) => {
    return (
      <div className={styles.heading__arrow}>
        {sort === "asc" ? (
          <ArrowDropDownOutlinedIcon fontSize="large" color="inherit" />
        ) : (
          <ArrowDropUpOutlinedIcon fontSize="large" color="inherit" />
        )}
      </div>
    );
  };
  const handleSort = () => {
    return sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
  };
  const handleSortValue = (val) => {
    handleSort();
    setValue(val);
  };
  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.headinig__name}
          onClick={() => handleSortValue("name")}
        >
          <div>Name</div>
          <SortedArrow sort={sortBy} />
        </button>
        <button
          className={styles.headinig__population}
          onClick={() => handleSortValue("population")}
        >
          <div>Population</div>
          <SortedArrow sort={sortBy} />
        </button>
      </div>
      <div className={styles.order__by}>
        [{value.toUpperCase()}] : {""}
        {sortBy}
      </div>
      {dataSorted.map((item, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.population}>{item.population}</div>
        </div>
      ))}
    </div>
  );
};
export default TableContent;
