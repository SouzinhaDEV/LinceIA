import React from 'react';

const ContatoItem = ({ contato, onDelete }) => {
  return (
    <tr>
      <td>{contato.idContato}</td>
      <td>{contato.nome}</td>
      <td>{contato.email}</td>      
      <td>
        <button onClick={() => onDelete(contato.idContato)}>Excluir</button>
      </td>
    </tr>
  );
};

export default ContatoItem;
