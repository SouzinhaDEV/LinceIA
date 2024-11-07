import React from 'react';

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

<<<<<<< HEAD
export default DatasetItem;
=======
export default DatasetItem;
>>>>>>> f08d3300a8b63958bc26b97e899b8212de8e67e7
