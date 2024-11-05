const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastros = require("./routescadastros");
const contato = require('./routescontato');
const login = require('./routeslogin')
const dataset = require('./routesia')

// Importa as rotas do backend a partir daqui.

const app = express();
const port = 3001; // Defina a porta que deseja utilizar.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/', routes);

app.use('/cadastros', cadastros);
app.use('/contato', contato);
app.use('/login', login);
app.use('/dataset', dataset);

// Inicia o servidor na porta definida.

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

