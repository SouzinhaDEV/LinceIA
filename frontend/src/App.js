import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rotas from "./Routes";
import Navegacao from "./Components/Navegacao";
import Rodape from './Components/Rodape';

const App = () => {

  return (
    <Router>
      <Navegacao />
      <Rotas />
      <Rodape />
    </Router>
  );
};

export default App;
