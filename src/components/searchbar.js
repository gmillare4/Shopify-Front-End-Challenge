import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <h2>SearchBar</h2>
      <form onSubmit={props.search}>
        <input
          type="text"
          value={props.searchParam}
          onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SearchBar;
