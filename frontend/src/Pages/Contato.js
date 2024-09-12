//Contato
import React from "react";
import Card from "../Components/CardContato"
import Formulario from "../Components/ContatoForm"
import '../CSS/Contato.css'

const Contato = () => {
  return (
    <>
      <div className="PaginaDeContato">
        <div className="respon">
          <div className="component1">
            <Card />
          </div>
          <div className="component2">
            <Formulario />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;