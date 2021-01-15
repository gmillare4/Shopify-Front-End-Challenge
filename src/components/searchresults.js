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
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Results for "{props.resultsFor}"</h5>
        <ul>
          {props.searchResults.map((result, index) => {
            return (
              <li key={index}>
                {result.Title} ({result.Year}){" "}
                <Button
                  outline
                  color="success"
                  size="sm"
                  value={result.imdbID}
                  onClick={props.nominate}
                >
                  Nominate
                </Button>
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};
export default SearchResults;
