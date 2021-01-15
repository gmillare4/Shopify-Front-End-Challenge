import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const SearchBar = (props) => {
  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Movie Title</h5>
        <Form onSubmit={props.search}>
          <FormGroup>
            <Input
              type="text"
              value={props.searchParam}
              onChange={props.handleChange}
              placeholder="Search"
            />
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default SearchBar;
