import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopNavbar from "./components/shopNavbar";
import Book from "./components/cardbook";
function App() {
  return (
    <div className="App">
      <ShopNavbar addText="ovunque e comunque" />
      <Book />
    </div>
  );
}

export default App;
