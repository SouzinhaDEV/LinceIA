//Contato
import React from "react";
import Card from "../Components/CardContato"
import Formulario from "../Components/ContatoForm"
import Rating from '../Components/PedroFudido.jsx'
import '../CSS/Contato.css'

const Contato = () => {
  return (
    <>
      <div className="PaginaDeContato">
        <Formulario />
        <Card />
        <Rating />
      </div>
    </>
  );
};

export default Contato;