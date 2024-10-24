import React from 'react';

// ORDEM CORRETA:
// EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

// "dataset", como está na tabela do MySQL.
const DatasetItem = ({ dataset, onDelete }) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 917ad45e29b8ddda5fbd6e06054f836df5c00c05
