const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros.

//"cadastros", no plural, por causa do banco.

router.get('/dataset', (req, res) => {
  connection.query('SELECT * FROM dataset', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID.

router.get('/dataset/:idDataset', (req, res) => {
  const { idDataset } = req.params;
  connection.query('SELECT * FROM dataset WHERE idDataset = ?', [idDataset], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro.

// ORDEM CORRETA:
// '-> RPM do Motor (Engine RPM)
// '-> Pressão de Combustível (Fuel Pressure)
// '-> Pressão do Óleo Lubrificante (Lub Oil Pressure)
// '-> Temperatura do Óleo Lubrificante (Lub Oil Temp)
// '-> Pressão do Ar (Coolant Pressure)
// '-> Temperatura do Ar (Coolant Temp)

// EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

// NÃO ESQUECER de colocar o mesmo número de "?" que a quantidade de campos solicitados.

router.post('/cadastros', (req, res) => {
  const { EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT } = req.body;
  connection.query('INSERT INTO dataset (EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID.

router.put('/dataset/:idDataset', (req, res) => {
  const { idDataset } = req.params;
  const { EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT } = req.body;
  connection.query('UPDATE dataset SET EngRPM = ?, FuelP = ?, LubOilP = ?, LubOilT = ?, AirP = ?, AirT = ?, WHERE idDataset = ?',
    [EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT, idDataset], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID.

// OBS: Aqui, o "idCadastro" é no singular porque se trata de cada cadastro individualmente, como no banco de dados.

router.delete('/dataset/:idDataset', (req, res) => {
  const { idDataset } = req.params;
  connection.query('DELETE FROM dataset WHERE idDataset = ?', [idDataset], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;