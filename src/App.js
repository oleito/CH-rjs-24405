import "./App.scss";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <section className="container text-center">
            <Route exact path={"/"}>
              <ItemListContainer greeting={"Item List"} />
            </Route>
            <Route path={"/category/:categoryId"}>
              <ItemListContainer greeting={"Item List Categoria"} />
            </Route>
            <Route path={"/item/:itemId"}>
              <ItemDetailContainer greeting={"Item Detail"} />
            </Route>
          </section>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
