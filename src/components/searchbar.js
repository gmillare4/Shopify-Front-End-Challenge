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

const SearchBar = (props) => {
  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Movie Title</h5>
        <form onSubmit={props.search}>
          <input
            type="text"
            value={props.searchParam}
            onChange={props.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </CardBody>
    </Card>
  );
};
export default SearchBar;
