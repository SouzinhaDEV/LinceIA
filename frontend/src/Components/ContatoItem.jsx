import React from 'react';

const ContatoItem = ({ contatos, onDelete }) => {
  return (
    <tr>
      <td>{contatos.idContato}</td>
      <td>{contatos.nome}</td>
      <td>{contatos.email}</td>      
      <td>{contatos.telefone}</td>
      <td>
        <button onClick={() => onDelete(contatos.idContato)}>Excluir</button>
      </td>
    </tr>
  );
};

export default ContatoItem;
