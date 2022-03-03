import "./App.scss";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "./context/cartContext";
import Cart from "./Components/Cart";
import NewOrder from "./Components/newOrder";

function App() {
  return (
    <CartContext>
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
              <Route path={"/cart"}>
                <Cart></Cart>
              </Route>
              <Route path={"/formulario"}>
                <NewOrder></NewOrder>
              </Route>
            </section>
          </Switch>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
