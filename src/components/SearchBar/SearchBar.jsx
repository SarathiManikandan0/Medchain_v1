// SearchBar.jsx
import React from "react";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../libs/icons/search.svg";

function SearchBar({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
