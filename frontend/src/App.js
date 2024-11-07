import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rotas from "./Routes";
import Navegacao from "./Components/Navegacao";
import Rodape from './Components/Rodape';

const App = () => {
  const Layout = () => {
    const location = useLocation();
    const isAdminPage = location.pathname === "/admin";

    return (
      <>
        {!isAdminPage && <Navegacao />}
        <Rotas />
        {!isAdminPage && <Rodape />}
      </>
    );
  };
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
