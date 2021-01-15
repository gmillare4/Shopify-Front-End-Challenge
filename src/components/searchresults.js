import React from "react";

const SearchResults = (props) => {
  return (
    <div>
      <h2>Results for "{props.resultsFor}"</h2>
      <ul>
        {props.searchResults.map((result, index) => {
          return (
            <li key={index}>
              {result.Title} ({result.Year}) {}
              <button value={result.imdbID} onClick={props.nominate}>
                Nominate
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SearchResults;
