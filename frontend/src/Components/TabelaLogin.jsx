import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaLogin = () => {
  const [login, setCasdastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/login/login");
        setCasdastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idLogin) => {
    try {
      await axios.delete(`http://localhost:3001/login/login/${idLogin}`);
      const { data } = await axios.get("http://localhost:3001/login/login");
      setCasdastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
<div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
  <table
    border={1}
    cellPadding={10}
    cellSpacing={0}
    style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', backgroundColor: '#ff7300', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
  >
    <thead style={{ backgroundColor: '#ff7300', color: 'white' }}>
      <tr>
        <th style={{ padding: '12px' }}>ID</th>
        <th style={{ padding: '12px' }}>Email</th>
        <th style={{ padding: '12px' }}>Senha</th>
        <th style={{ padding: '12px' }}>Excluir</th>
      </tr>
    </thead>
    <tbody>
      {login.map((login) => (
        <tr key={login.id} style={{ borderBottom: '1px solid #ddd' }}>
          <td style={{ padding: '12px' }}>{login.id}</td>
          <td style={{ padding: '12px' }}>{login.email}</td>
          <td style={{ padding: '12px' }}>{login.senha}</td>
          <td style={{ padding: '12px' }}>
            <button
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleExcluirUsuario(login.id)}
            >
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default TabelaLogin;