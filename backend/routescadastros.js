const express = require('express');
const connection = require('./db');
const router = express.Router();


router.get('/cadastros', (req, res) => {
  console.log('Rota /cadastros chamada');
  connection.query('SELECT * FROM cadastros', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      return res.status(500).json({ error: 'Erro ao buscar os registros' });
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
      return res.status(500).json({ error: 'Erro ao buscar o registro' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Registro não encontrado' });
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, senha, telefone, cpf } = req.body;
  console.log('Dados recebidos:', req.body);  // Log para verificar os dados recebidos
  connection.query(
    'INSERT INTO cadastros (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)',
    [nome, email, senha, telefone, cpf],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        return res.status(500).json({ error: 'Erro ao criar o registro' });
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    }
  );
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  const { nome, email, senha, telefone, cpf } = req.body;
  connection.query(
    'UPDATE cadastros SET nome = ?, email = ?, senha = ?, telefone = ?, cpf = ? WHERE idCadastro = ?',
    [nome, email, senha, telefone, cpf, idCadastro],
    (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        return res.status(500).json({ error: 'Erro ao atualizar o registro' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    }
  );
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  connection.query('DELETE FROM cadastros WHERE idCadastro = ?', [idCadastro], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      return res.status(500).json({ error: 'Erro ao excluir o registro' });
    }
    if (result.affectedRows > 0) {
      res.json({ message: 'Registro excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Registro não encontrado' });
    }
  });
});

module.exports = router;
