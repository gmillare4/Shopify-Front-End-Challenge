import React from "react";

const Nominations = (props) => {
  return (
    <div>
      <h2>Nominations</h2>
      <ul>
        {props.nominations.map((result, index) => {
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
export default Nominations;
