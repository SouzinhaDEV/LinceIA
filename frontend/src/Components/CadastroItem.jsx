import React from 'react';

// ORDEM CORRETA:
// '-> Nome Completo
// '-> E-Mail
// '-> Senha
// '-> Telefone 
// '-> CPF 

// "cadastros", como está na tabela do MySQL.
const CadastroItem = ({ cadastros, onDelete }) => {
  return (
    <tr>
      <td>{cadastros.idCadastro}</td>
      <td>{cadastros.nome}</td>
      <td>{cadastros.email}</td>      
      <td>{cadastros.senha}</td>
      <td>{cadastros.telefone}</td>
      <td>{cadastros.cpf}</td>
      <td>
        <button onClick={() => onDelete(cadastros.idCadastro)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroItem;
