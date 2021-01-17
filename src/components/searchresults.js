import React from "react";
import {
  Card,
  CardBody,
  Button,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
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
  if (paginationNum !== 1) {
    for (let i = 1; i < paginationNum + 1; i++) {
      paginationArr.push(i);
    }
  }

  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>
          {props.totalResults} results for "{props.resultsFor}"
        </h5>
        {loadingAnim}
        <ul>
          {props.searchResults.map((result, index) => {
            let disabled = false;
            let color = "success";
            props.nominations.map((nomination, i) => {
              if (nomination.imdbID === result.imdbID) {
                disabled = true;
                color = "secondary";
              }
            });
            return (
              <li key={index}>
                {result.Title} ({result.Year}){" "}
                <Button
                  outline
                  color={color}
                  size="sm"
                  value={result.imdbID}
                  onClick={props.nominate}
                  disabled={disabled}
                >
                  Nominate
                </Button>
              </li>
            );
          })}
          <Pagination>
            <Container>
              <Row xs="10">
                {paginationArr.map((page) => {
                  return (
                    <PaginationItem active={page === props.currPage}>
                      <PaginationLink
                        onClick={(event) => props.search(event, page)}
                        href="#"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
              </Row>
            </Container>
          </Pagination>
        </ul>
      </CardBody>
    </Card>
  );
};

export default SearchResults;
