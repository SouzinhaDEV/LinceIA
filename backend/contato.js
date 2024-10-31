const express = require('express');
const connection = require('./db'); // Certifique-se de que o caminho para o arquivo 'db' está correto
const router = express.Router();

// Rota para buscar todos os registros
router.get('/contato', (req, res) => {
  connection.query('SELECT * FROM contato', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('SELECT * FROM contato WHERE idContato = ?', [idContato], (err, results) => {
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
router.post('/contato', (req, res) => {
  const { nome, email, comentario } = req.body;
  connection.query(
    'INSERT INTO contato (nome, email, comentario) VALUES (?, ?, ?)',
    [nome, email, comentario],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    }
  );
});

// Rota para atualizar um registro existente pelo ID
router.put('/contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  const { nome, email, comentario } = req.body;
  connection.query(
    'UPDATE contato SET nome = ?, email = ?, comentario = ? WHERE idContato = ?',
    [nome, email, comentario, idContato],
    (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    }
  );
});

// Rota para excluir um registro pelo ID
router.delete('/contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('DELETE FROM contato WHERE idContato = ?', [idContato], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
