import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const ShopNavbar = (props) => {
  return (
    <Container fluid id="navContainer" className="m-0 ">
      <Navbar collapseOnSelect className="nav">
        <Navbar.Brand href="#">Book&More - {props.addText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Books</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default ShopNavbar;
