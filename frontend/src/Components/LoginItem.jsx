import React from 'react';

const LoginItem = ({ login, onDelete }) => {
  return (
    <tr>
      <td>{login.idLogin}</td>
      <td>{login.email}</td>      
      <td>{login.senha}</td>
      <td>
        <button onClick={() => onDelete(login.idLogin)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LoginItem;