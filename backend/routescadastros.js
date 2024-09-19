const express = require('express');
const connection = require('./db');
const router = express.Router();

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

// Rota para buscar um registro específico pelo ID.
router.get('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastros WHERE id = ?', [id], (err, results) => {
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

// Rota para atualizar um registro existente pelo ID.

router.put('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, telefone, cpf } = req.body;
  connection.query('INSERT INTO cadastros (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)',
    [nome, email, senha, telefone, cpf], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID.

// OBS: Aqui, o "idContato" é no singular porque se trata de cada cadastro individualmente, como no banco de dados.

router.delete('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastros WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;