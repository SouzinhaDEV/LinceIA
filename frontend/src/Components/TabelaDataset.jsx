import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/Admin.css';

const TabelaDataset = () => {
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/dataset/dataset");
                setDataset(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };
        fetchData();
    }, []);

    const handleExcluirUsuario = async (idDataset) => {
        try {
            await axios.delete(`http://localhost:3001/dataset/${idDataset}`);
            const { data } = await axios.get("http://localhost:3001/dataset");
            setDataset(data);
            console.log("Usuário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (

        

        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="titulotab">Tabela da IA</h2>
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Rotação do Motor RPM</th>
                        <th>Pressão de Combustível N/m²</th>
                        <th>Pressão do Óleo Lubrificante N/m²</th>
                        <th>Temperatura do Óleo Lubrificante °C</th>
                        <th>Pressão do Ar de Arrefecimento N/m²</th>
                        <th>Temperatura do Ar de Arrefecimento °C</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((dataset) => (
                        <tr key={dataset.idDataset}>
                            <td>{dataset.idDataset}</td>
                            <td>{dataset.EngRPM}</td>
                            <td>{dataset.FuelP}</td>
                            <td>{dataset.LubOilP}</td>
                            <td>{dataset.LubOilT}</td>
                            <td>{dataset.AirP}</td>
                            <td>{dataset.AirT}</td>
                            <td>
                                <button onClick={() => handleExcluirUsuario(dataset.idDataset)}>
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

export default TabelaDataset;
