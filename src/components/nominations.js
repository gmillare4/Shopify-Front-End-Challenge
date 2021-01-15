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

const Nominations = (props) => {
  return (
    <Card className="card shadow p-3 mb-5 bg-white rounded">
      <CardBody>
        <h5>Nominations</h5>
        <ul>
          {props.nominations.map((result, index) => {
            return (
              <li key={index}>
                {result.Title} ({result.Year}){" "}
                <Button
                  outline
                  color="danger"
                  size="sm"
                  value={result.imdbID}
                  onClick={props.remove}
                >
                  Remove
                </Button>
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};
export default Nominations;
