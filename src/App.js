import "./App.scss";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="container text-center">
        <ItemDetailContainer greeting={"ItemDetailContainer"} />
      </section>
      <section className="container text-center">
        <ItemListContainer greeting={"ItemListContainer"} />
      </section>
    </div>
  );
}

export default App;
