import {
  Card,
  Row,
  Button,
  CardTitle,
  CardImg,
  CardFooter,
  Col,
} from "react-bootstrap";

import fantasy from "../books/fantasy.json";
const Book = (props) => {
  return (
    <Col className="col-7">
      <Row className="  w-100 justify-content-center ">
        <Row className=" p-2 w-75  justify-content-center">
          {fantasy.map((thumb) => {
            return (
              <Card className="mx-3 my-3 w-25" key={thumb.asin}>
                <CardImg src={thumb.img} className="h-75 pt-2"></CardImg>
                <CardTitle>
                  <h4 className="fs-6 pt-4 ">{thumb.title}</h4>
                </CardTitle>
                <CardFooter id="cardFooter" className="d-flex">
                  <Button
                    id="btnPrice"
                    className="btn btn-small rounded-pill flex-grow-1"
                  >
                    {thumb.price}€
                  </Button>
                </CardFooter>
                <p className="category">Category: {thumb.category}</p>
              </Card>
            );
          })}
        </Row>
      </Row>
    </Col>
  );
};

export default Book;
