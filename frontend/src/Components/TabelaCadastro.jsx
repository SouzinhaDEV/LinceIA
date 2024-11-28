import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/Admin.css';

const TabelaCadastros = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar cadastro:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/cadastros/${idCadastro}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastros/cadastros");
      setCadastros(data);
      console.log("Cadastro excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir cadastro:", error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="titulotab">Tabela do Cadastro</h2>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        className="responsive-table"
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          backgroundColor: '#ff7300',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
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
          {cadastros.map((cadastro, index) => (
            <React.Fragment key={cadastro.idCadastro}>
              <tr>
                <td style={{ padding: '12px' }}>{cadastro.idCadastro}</td>
                <td style={{ padding: '12px' }}>{cadastro.nome}</td>
                <td style={{ padding: '12px' }}>{cadastro.email}</td>
                <td style={{ padding: '12px' }}>{cadastro.telefone}</td>
                <td style={{ padding: '12px' }}>{cadastro.cpf}</td>
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
                    onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
              {/* Linha preta grossa entre os grupos */}
              {index < cadastros.length - 1 && (
                <tr>
                  <td colSpan="6" style={{ borderBottom: '4px solid black' }}></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastros;
