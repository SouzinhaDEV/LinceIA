const express = require("express");
const connection = require("./db");
const router = express.Router();

// Rota para listar todos os registros
router.get("/login", (req, res) => {
  connection.query("SELECT * FROM login", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get("/login/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM login WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Erro ao buscar o registro:", err);
      res.status(500).json({ error: "Erro ao buscar o registro" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Registro não encontrado" });
      return;
    }
    res.json(results[0]);
  });
});


// Rota para consultar dados de acesso
router.post("/login", (req, res) => {
  const { email, senha } = req.body;
  connection.query(
    "SELECT * FROM cadastros WHERE email=? and senha=?",
    [email, senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      if (result.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(result[0]);
    });
  });

// Rota para criar um novo registro
// router.post("/login", (req, res) => {
//   const { email, senha } = req.body;
//   connection.query(
//     "INSERT INTO login (email, senha) VALUES (?, ?)",
//     [email, senha],
//     (err, result) => {
//       if (err) {
//         console.error("Erro ao criar o registro:", err);
//         res.status(500).json({ error: "Erro ao criar o registro" });
//         return;
//       }
//       res
//         .status(201)
//         .json({ message: "Registro criado com sucesso", id: result.insertId });
//     }
//   );
// });

// Rota para atualizar um registro existente pelo ID
router.put("/login/:id", (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;
  connection.query(
    "UPDATE login SET email = ?, senha = ?, WHERE id = ?",
    [email, senha, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

// Rota para excluir um registro pelo ID
router.delete("/login/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM login WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Erro ao excluir o registro:", err);
      res.status(500).json({ error: "Erro ao excluir o registro" });
      return;
    }
    res.json({ message: "Registro excluído com sucesso" });
  });
});

module.exports = router;