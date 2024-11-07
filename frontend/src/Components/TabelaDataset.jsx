import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaDataset = () => {
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/dataset/dataset");
                setDataset(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
            }
        };
        fetchData();
    }, []);

    const handleExcluirUsuario = async (idDataset) => {
        try {
            await axios.delete('http://localhost:3001/dataset/${id}');
            const { data } = await axios.get("http://localhost:3001/dataset");
            setDataset(data);
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
                        <th style={{ padding: '12px' }}>Rotação do Motor RPM</th>
                        <th style={{ padding: '12px' }}>Pressão de Combustível N/m²</th>
                        <th style={{ padding: '12px' }}>Pressão do Óleo Lubrificante N/m²</th>
                        <th style={{ padding: '12px' }}>Temperatura do Óleo Lubrificante °C</th>
                        <th style={{ padding: '12px' }}>Pressão do Ar de Arrefecimento N/m²</th>
                        <th style={{ padding: '12px' }}>Temperatura do Ar de Arrefecimento °C</th>
                        <th style={{ padding: '12px' }}>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {dataset.map((dataset) => (
                        <tr key={dataset.idDataset} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '12px' }}>{dataset.idDataset}</td>
                            <td style={{ padding: '12px' }}>{dataset.EngRPM}</td>
                            <td style={{ padding: '12px' }}>{dataset.FuelP}</td>
                            <td style={{ padding: '12px' }}>{dataset.LubOilP}</td>
                            <td style={{ padding: '12px' }}>{dataset.LubOilT}</td>
                            <td style={{ padding: '12px' }}>{dataset.AirP}</td>
                            <td style={{ padding: '12px' }}>{dataset.AirT}</td>
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
                                    onClick={() => handleExcluirUsuario(dataset.idDataset)}
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

<<<<<<< HEAD
export default TabelaDataset;
=======

export default TabelaDataset;
>>>>>>> f08d3300a8b63958bc26b97e899b8212de8e67e7
