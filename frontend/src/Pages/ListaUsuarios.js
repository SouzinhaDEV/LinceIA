//Lista de Usuarios
import React from "react";
import TabelaCadastro from "../Components/TabelaCadastro";
import TabelaContato from "../Components/TabelaContato";

const ListaUsuarios = () => {
  return (
    <>
      <div>
        <h2>Lista de Usuários</h2>
        <TabelaCadastro />
        <TabelaContato />
      </div>
    </>
  );
};

export default ListaUsuarios;
