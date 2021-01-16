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
  FormFeedback,
} from "reactstrap";

const SearchBar = (props) => {
  let errorMsg;
  let formInput;
  if (props.apiError) {
    formInput = (
      <Input
        type="text"
        value={props.searchParam}
        onChange={props.handleChange}
        placeholder="Search"
        invalid
      />
    );
    errorMsg = <FormFeedback>{props.apiError}</FormFeedback>;
  } else {
    formInput = (
      <Input
        type="text"
        value={props.searchParam}
        onChange={props.handleChange}
        placeholder="Search"
      />
    );
  }
  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Movie Title</h5>
        <Form onSubmit={props.search}>
          <FormGroup>
            {formInput}
            {errorMsg}
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default SearchBar;
