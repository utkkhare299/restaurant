import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <maim>
        <Meals />
      </maim>
    </Fragment>
  );
}

export default App;
