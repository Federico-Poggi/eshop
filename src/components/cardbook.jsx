import {
  Card,
  CardGroup,
  //   CardImg,
  CardTitle,
  //   Col,
  Container,
} from "react-bootstrap";

import fantasy from "../../assets/books/fantasy.json";

const Book = (props) => {
  return (
    <Container fluid className="align-content-center">
      <CardGroup className="bg-transparent">
        <Card>
          {fantasy.map((title) => {
            return (
              <CardTitle key={fantasy.id}>
                <h4>{fantasy.title}</h4>
              </CardTitle>
            );
          })}
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Book;
