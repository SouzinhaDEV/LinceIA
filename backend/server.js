const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routescadastros = require("./routescadastros");
const routescontato = require("./routescontato");
const routeslogin = require("./routeslogin");
const routesia = require("./routesia");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/Cadastro", routescadastros);
app.use("/Contato", routescontato);
app.use("/Login", routeslogin);
app.use("/Dataset", routesia);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
