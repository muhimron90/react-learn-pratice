import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";
const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.container}>
      <SearchIcon color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};
export default SearchInput;
