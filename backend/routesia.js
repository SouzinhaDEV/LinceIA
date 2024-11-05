const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para buscar todos os registros
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

router.get('/dataset/:idDataset', (req, res) => {
    const { id } = req.params;
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

// Rota para criar um novo registro
router.post('/dataset', (req, res) => {
    const { EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT } = req.body;
    console.log(req.body);
    connection.query('INSERT INTO dataset (EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT) VALUES (?, ?, ?, ?, ?, ?)',
        [EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
        });
});

// Rota para atualizar um registro existente pelo ID
router.put('/dataset/:idDataset', (req, res) => {
    const { idDataset } = req.params;
    const { EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT } = req.body;
    connection.query('UPDATE dataset SET EngRPM = ?, FuelP = ?, LubOilP = ?, LubOilT = ?, AirP = ?, AirT = ?',
        [EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT, idDataset], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar o registro:', err);
                res.status(500).json({ error: 'Erro ao atualizar o registro' });
                return;
            }
            res.json({ message: 'Registro atualizado com sucesso' });
        });
});

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