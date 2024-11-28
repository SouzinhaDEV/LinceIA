import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Admin.css";

const TabelaContato = () => {
  const [contato, setContato] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/contato/contato");
        setContato(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idContato) => {
    try {
      await axios.delete(`http://localhost:3001/contato/contato/${idContato}`);
      const { data } = await axios.get("http://localhost:3001/contato/contato");
      setContato(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 className="titulotab">Tabela do Contato</h2>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        className="responsive-table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
          backgroundColor: "#ff7300",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#ff7300", color: "white" }}>
          <tr>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Nome</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Comentario</th>
            <th style={{ padding: "12px" }}>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {contato.map((contato, index) => (
            <tr
              key={contato.idContato}
              style={{
                borderBottom:
                  index === contato.length - 1 || contato[index + 1]?.idContato !== contato.idContato
                    ? "3px solid black" // Linha preta grossa separando grupos
                    : "1px solid #ddd",
              }}
            >
              <td style={{ padding: "12px" }}>{contato.idContato}</td>
              <td style={{ padding: "12px" }}>{contato.nome}</td>
              <td style={{ padding: "12px" }}>{contato.email}</td>
              <td style={{ padding: "12px" }}>{contato.comentario}</td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleExcluirUsuario(contato.idContato)}
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

export default TabelaContato;
