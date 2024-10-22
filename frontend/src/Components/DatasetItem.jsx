import React from 'react';

// ORDEM CORRETA:
// EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

// "dataset", como está na tabela do MySQL.
const DatasetItem = ({ dataset, onDelete }) => {
    return (
        <tr>
            <td>{dataset.idDataset}</td>
            <td>{dataset.EngRPM}</td>
            <td>{dataset.FuelP}</td>
            <td>{dataset.LubOilP}</td>
            <td>{dataset.LubOilT}</td>
            <td>{dataset.AirP}</td>
            <td>{dataset.AirT}</td>
            <td>
                <button onClick={() => onDelete(dataset.idDataset)}>Excluir</button>
            </td>
        </tr>
    );
};

export default DatasetItem;