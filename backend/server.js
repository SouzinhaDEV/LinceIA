const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const cadastros = require('./routescadastros'); 
const contatos = require('./routescontatos');
=======
// const cadastros = require('./routescadastros'); 
const cadastros = require("./routescadastros");
const contatos = require('./routescontatos');

// Importa as rotas do backend a partir daqui.
>>>>>>> ee831fae50e472787abb94fae49ae43cc18a02c1

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

<<<<<<< HEAD

app.use('/cadastros', cadastros); 
app.use('/contatos', contatos); 
=======
// app.use('/', routes);

app.use('/routescadastros', cadastros);
app.use('/routescontatos', contatos);
>>>>>>> ee831fae50e472787abb94fae49ae43cc18a02c1


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
