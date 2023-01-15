import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <maim>
        <Meals/>
      </maim>
    </Fragment>
  );
}

export default App;
