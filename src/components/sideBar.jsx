import { Col, Row, Nav, NavLink, Button } from "react-bootstrap";
// import Fantasy from "../books/fantasy.json";
// import History from "../books/history.json";
// import Romance from "../books/romance.json";
// import Horror from "../books/horror.json";
// import Scifi from "../books/scifi.json";



const Category = ["Fantasy", "History", "Romance", "Horror", "Scifi"];
const BookCategory = () => {
    
  return (
    <Col className="col-3">
      <h3>Wlcome - {this.props.name}</h3>;
      <ul className="list-unstyled">Category.map((type)=>{
        return
        <li key={type.id}>
        {
            type
        }
      </li>})
      </ul>;
    </Col>
  );
};
