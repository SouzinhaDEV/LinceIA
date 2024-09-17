//Lista de Usuarios
import React from "react";
import TabelaLogin from "../Components/TabelaLogin";
import TabelaContato from "../Components/TabelaContato";
import TabelaCadastro from "../Components/TabelaCadastro";

const ListaUsuarios = () => {
  return (
    <>
      <div>
        <h2>Lista de Usuários</h2>
        <TabelaLogin />
        <TabelaContato />
        <TabelaCadastro />
      </div>
    </>
  );
};

export default ListaUsuarios;
