import React from 'react';

// ORDEM CORRETA:
// '-> Nome Completo
// '-> E-Mail
// '-> Senha
// '-> Telefone 
// '-> CPF 

const CadastroItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{cadastro.idCadastro}</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.email}</td>      
      <td>{cadastro.senha}</td>
      <td>{cadastro.telefone}</td>
      <td>{cadastro.cpf}</td>
      <td>
        <button onClick={() => onDelete(cadastro.idCadastro)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
