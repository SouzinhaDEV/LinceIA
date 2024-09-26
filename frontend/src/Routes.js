import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Login from "./Pages/Login";
import Privacidade from "./Pages/Privacidade";
import Cadastro from "./Pages/Cadastro";
import Admin from "./Pages/Admin";

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
      </Routes>
    </>
  );
};

export default Rotas;
