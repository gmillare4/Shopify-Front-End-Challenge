import React from "react";

const SearchResults = (props) => {
  return (
    <div>
      <h2>SearchResults</h2>
      <ul>
        {props.searchResults.map((result, index) => {
          return (
            <li key={index}>
              {result.Title}, {result.Year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SearchResults;
