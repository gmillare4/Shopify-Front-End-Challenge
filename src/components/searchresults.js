import React from "react";
import {
  Card,
  CardBody,
  Button,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

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
  let paginationArr = [];
  let paginationNum = Math.ceil(props.totalResults / 10);
  for (let i = 1; i < paginationNum + 1; i++) {
    paginationArr.push(i);
  }
  console.log("state props.totalResults", props.totalResults);
  console.log("paginationNum", paginationNum);
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
          <Pagination>
            {console.log("paginationArr", paginationArr)}
            {paginationArr.map((page) => {
              return (
                <PaginationItem>
                  <PaginationLink href="#">{page}</PaginationLink>
                </PaginationItem>
              );
            })}
          </Pagination>
        </ul>
      </CardBody>
    </Card>
  );
};

export default SearchResults;
