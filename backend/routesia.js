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

// Rota para buscar um registro específico pelo ID
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

// Série de dados disponíveis em ORDEM:
// EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

// Rota para criar um novo registro
router.post('/dataset', (req, res) => {
    const { EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT } = req.body;
    console.log(req.body);  // Adicione este log para verificar os dados que estão sendo enviados
    connection.query('INSERT INTO Dataset (EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT) VALUES (?, ?, ?, ?, ?, ?)',
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
    connection.query('UPDATE Dataset SET EngRPM = ?, FuelP = ?, LubOilP = ?, LubOilT = ?, AirP = ?, AirT = ?',
        [EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT, IdDataset], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar o registro:', err);
                res.status(500).json({ error: 'Erro ao atualizar o registro' });
                return;
            }
            res.json({ message: 'Registro atualizado com sucesso' });
        });
});

// Rota para excluir um registro pelo ID
router.delete('/dataset/:idDataset', (req, res) => {
    const { idDataset } = req.params;
    connection.query('DELETE FROM dataset WHERE idDataset = ?', [idDataset], (err, result) => {
        if (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).json({ error: 'Erro ao excluir o registro' });
            return;
        }
        if (result.affectedRows > 0) {
            res.json({ message: 'Registro excluído com sucesso' });
        } else {
            res.status(404).json({ message: 'Registro não encontrado' });
        }
    });
});

module.exports = router;

// AAAAAA