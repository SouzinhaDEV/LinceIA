const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastros = require('./routescadastros'); 
const contatos = require('./routescontatos');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/cadastros', cadastros); 
app.use('/contatos', contatos); 


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
