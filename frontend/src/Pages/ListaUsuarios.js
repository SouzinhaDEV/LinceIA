//Lista de Usuarios
import React from "react";
import TabelaContato from "../Components/TabelaContato";
import TabelaCadastro from "../Components/TabelaCadastro";

const ListaUsuarios = () => {
  return (
    <>
      <div>
        <h2>Lista de Usuários</h2>
        <TabelaContato />
        <TabelaCadastro />
      </div>
    </>
  );
};

export default ListaUsuarios;
