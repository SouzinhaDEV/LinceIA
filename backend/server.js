const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesCadastros = require("./routesCadastros");
const routesContato = require("./routesContato");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/", routescadastrosCadastros);
app.use("/", routescontatosContato);


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
