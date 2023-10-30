import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopNavbar from "./components/shopNavbar";
import Book from "./components/cardbook";
import Comment from "./components/comment";
function App() {
  return (
    <div className="App">
      <ShopNavbar />
      <main className="d-flex mt-2">
        <Book />
        <Comment />
      </main>
    </div>
  );
}

export default App;
