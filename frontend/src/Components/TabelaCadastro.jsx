import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastros = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar cadastro:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${idCadastro}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastros");
      setCadastros(data);
      console.log("Cadastro excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir cadastro:", error);
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
        <th style={{ padding: '12px' }}>Nome</th>
        <th style={{ padding: '12px' }}>Email</th>
        <th style={{ padding: '12px' }}>Telefone</th>
        <th style={{ padding: '12px' }}>CPF</th>
        <th style={{ padding: '12px' }}>Excluir</th>
      </tr>
    </thead>
    <tbody>
      {cadastros.map((cadastros) => (
        <tr key={cadastros.idCadastro} style={{ borderBottom: '1px solid #ddd' }}>
          <td style={{ padding: '12px' }}>{cadastros.idCadastro}</td>
          <td style={{ padding: '12px' }}>{cadastros.nome}</td>
          <td style={{ padding: '12px' }}>{cadastros.email}</td>
          <td style={{ padding: '12px' }}>{cadastros.telefone}</td>
          <td style={{ padding: '12px' }}>{cadastros.cpf}</td>
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
              onClick={() => handleExcluirUsuario(cadastros.idCadastro)}
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

export default TabelaCadastros;