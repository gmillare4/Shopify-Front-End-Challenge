import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const SearchResults = (props) => {
  return (
    <div>
      <Card body outline color="secondary">
        <CardBody>
          <CardTitle tag="h2">test card</CardTitle>
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
        </CardBody>
      </Card>
    </div>
  );
};
export default SearchResults;
