import React from "react";
import { Card, CardBody, Button, Spinner } from "reactstrap";

const SearchResults = (props) => {
  let loadingAnim;
  if (props.loading) {
    loadingAnim = (
      <div>
        <Spinner color="primary" />
        {"  "}
        <Spinner color="success" />
        {"  "}
        <Spinner color="danger" />
      </div>
    );
  }

  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Results for "{props.resultsFor}"</h5>
        {loadingAnim}
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
