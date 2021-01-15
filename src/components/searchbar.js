import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <h3>Movie Title</h3>
      <form onSubmit={props.search}>
        <input
          type="text"
          value={props.searchParam}
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchBar;
