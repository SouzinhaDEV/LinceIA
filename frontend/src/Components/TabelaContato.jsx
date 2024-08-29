import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaContato = () => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/contatos");
        setContatos(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idContato) => {
    try {
      await axios.delete(`http://localhost:3001/contatos/${idContato}`);
      // Atualiza a lista de contatos após a exclusão
      const { data } = await axios.get("http://localhost:3001/contatos");
      setContatos(data);
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
          {contatos.map((contatos) => (
            <tr key={contatos.idContato}>
              <td>{contatos.idContato}</td>
              <td>{contatos.nome}</td>
              <td>{contatos.email}</td>
              <td>{contatos.telefone}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(contatos.idContato)}
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