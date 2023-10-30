import { Col, ListGroup, Row } from "react-bootstrap";
import { Component } from "react";

const getBook = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        headers: {
          methos: "POST",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmY2VjZGIzOTczNDAwMTRkNWU4YjciLCJpYXQiOjE2OTg2ODA1MjUsImV4cCI6MTY5OTg5MDEyNX0.MuMNXqESQh1bkpJFDF2TfTmH8gkx6Y_V689XmjDy9ME",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    throw new Error(Error);
  }
};

class Comment extends Component {
  state = {
    comment: "",
    rate: "",
    id: "",
  };

  render() {
    getBook();

    return (
      <Col className="col-4 d-flex flex-column">
        <Row>
          <h3 className="h3">Comment</h3>
          <ListGroup>
            <ListGroup.Item>Comment:{this.state.comment}</ListGroup.Item>
            <ListGroup.Item>Rate: {this.state.rate} </ListGroup.Item>
            <ListGroup.Item>Id: {this.state.id}</ListGroup.Item>
          </ListGroup>
        </Row>
      </Col>
    );
  }
}

export default Comment;
