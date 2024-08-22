//Contato
import React from "react";
import Card from "../Components/CardCadastro"
import Formulario from "../Components/FormularioContato"
import "../CSS/Contato.css";


const Contato = () => {
  return (
    <>
      <div className="containerContainer">
        <Formulario />
        <Card />
      </div>
    </>
  );
};

export default Contato;