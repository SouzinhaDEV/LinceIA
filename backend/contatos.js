const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros.

//"contatos", no plural, por causa do banco.

router.get('/contatos', (req, res) => {
  connection.query('SELECT * FROM contatos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID.

router.get('/contatos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM contatos WHERE id = ?', [id], (err, results) => {
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
// '-> Nome Completo
// '-> E-Mail
// '-> Telefone 

// NÃO ESQUECER de colocar o mesmo número de "?" que a quantidade de campos solicitados.

router.post('/contatos', (req, res) => {
  const { nome, email, telefone } = req.body;
  connection.query('INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?)',
    [nome, email, telefone], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID.

router.put('/contatos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  connection.query('UPDATE contatos SET nome = ?, email = ?, telefone = ?, WHERE id = ?',
    [nome, email, telefone, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID.

// OBS: Aqui, o "idContato" é no singular porque se trata de cada cadastro individualmente, como no banco de dados.

router.delete('/contatos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM contatos WHERE idContato = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;