import {
  Card,
  Row,
  //   CardImg,
  CardTitle,
  Col,
  Container,
  CardImg,
  Button,
  CardFooter,
} from "react-bootstrap";

import fantasy from "../books/fantasy.json";

const Book = (props) => {
  return (
    <Row className="  w-100 justify-content-center ">
      <Row className=" p-2 w-75  justify-content-center">
        {fantasy.map((thumb) => {
          return (
            <Card className="mx-3 my-3 w-25">
              <CardImg
                key={thumb.img}
                src={thumb.img}
                className="h-75 pt-2"
              ></CardImg>
              <CardTitle key={thumb.title}>
                <h4 className="fs-6 pt-4 ">{thumb.title}</h4>
              </CardTitle>
              <CardFooter id="cardFooter" className="d-flex">
                <button
                  id="btnPrice"
                  key={thumb.price}
                  className="btn btn-small rounded-pill flex-grow-1"
                >
                  {thumb.price}€
                </button>
              </CardFooter>
              <p className="category" key={thumb.category}>
                Category: {thumb.category}
              </p>
            </Card>
          );
        })}
      </Row>
    </Row>
  );
};

export default Book;
