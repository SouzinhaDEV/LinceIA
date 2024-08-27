import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaContato = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
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
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastros) => (
            <tr key={cadastros.idCadastro}>
              <td>{cadastros.idCadastro}</td>
              <td>{cadastros.nome}</td>
              <td>{cadastros.email}</td>
              <td>{cadastros.telefone}</td>
              <td>{cadastros.senha}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastros.idCadastro)}
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaContato;