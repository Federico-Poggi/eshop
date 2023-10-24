import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const ShopNavbar = (props) => {
  return (
    <Container fluid id="navContainer" className="m-0 ">
      <Navbar collapseOnSelect className="nav">
        <Navbar.Brand href="#" id="brand" className="fs-1 fw-medium">
          Book&More {props.addText}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mx-5">
            <Nav.Link href="#" className="fs-5 fw-s fw-light linksNav">
              Books
            </Nav.Link>
            <Nav.Link href="#" className="fs-5 fw-s fw-light linksNav">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default ShopNavbar;
