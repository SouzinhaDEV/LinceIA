const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para buscar todos os registros
router.get('/cadastros', (req, res) => {
  connection.query('SELECT * FROM cadastros', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastros/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  connection.query('SELECT * FROM cadastros WHERE idCadastro = ?', [idCadastro], (err, results) => {
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
router.post('/cadastros', (req, res) => {
  const { nome, email, senha, telefone, cpf } = req.body;
  console.log(req.body);  // Adicione este log para verificar os dados que estão sendo enviados
  connection.query('INSERT INTO cadastros (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)',
    [nome, email, senha, telefone, cpf], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  const { nome, email, senha, telefone, cpf } = req.body;
  connection.query('UPDATE cadastros SET nome = ?, email = ?, senha = ?, telefone = ?, cpf = ? WHERE idCadastro = ?',
    [nome, email, senha, telefone, cpf, idCadastro], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  connection.query('DELETE FROM cadastros WHERE idCadastro = ?', [idCadastro], (err, result) => {
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
