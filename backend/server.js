const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); 

// Importa as rotas do backend a partir daqui.

const cadastros = require("./routes");

const app = express();
const port = 3001; // Defina a porta que deseja utilizar.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend aqui.

app.use('/', routes);
app.use("/", cadastros);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
