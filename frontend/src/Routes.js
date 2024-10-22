import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Admin from "./Pages/Admin";
import Privacidade from "./Pages/Privacidade";
import Planos from "./Pages/Planos";
import Oficinas from "./Pages/Oficinas";
import Dataset from "./Components/DatasetForm";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Privacidade" element={<Privacidade />} />
        <Route path="/Planos" element={<Planos />} />
        <Route path="/Oficinas" element={<Oficinas />} />
        <Route path="/Dataset" element={<Dataset />} />
      </Routes>
    </>
  );
};

export default Rotas;