import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Login from "./Pages/Login";
import TabelaUsuarios from "./Pages/ListaUsuarios";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/listaUsuarios" element={<TabelaUsuarios />} />
      </Routes>
    </>
  );
};

export default Rotas;
