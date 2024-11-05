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

export default DatasetItem;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 917ad45e29b8ddda5fbd6e06054f836df5c00c05
=======
>>>>>>> 5ddf4c6d82e5b2e3efae1c97c9e9b17e04adc38d
>>>>>>> 031d7143dea04a8de23d4ea7aeb6be68bb1883d3
=======
>>>>>>> d193575c4d96d5c81cbf6a20605d5fbc9bb58c60
