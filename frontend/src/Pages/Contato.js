//Contato
import React from "react";
import Card from "../Components/CardContato"
import Formulario from "../Components/ContatoForm"
import "../CSS/Contato.css";


const Contato = () => {
  return (
    <>
      <div className="PaginaDeContato">
        <Formulario />
        <Card />
      </div>
    </>
  );
};

export default Contato;