const express = require('express');
const app = express();

const db = require('./models/db.js');
const perguntaModel = require('./models/Pergunta.js');

// Configura o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));
// Configura o Express para receber os dados do front
app.use(express.urlencoded({ extended: false }));
// Permite a leitura de dados via JSON
app.use(express.json());

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/perguntar', (req, res) => {
	res.render('perguntar');
});

app.post('/insertPergunta', (req, res) => {
	//const { titulo, pergunta} = req.body;
	const titulo = req.body.titulo;
	const pergunta = req.body.pergunta;
	res.redirect('/');
	console.log({titulo: titulo, pergunta: pergunta});
});

app.listen(8080, () => {
	console.log('Servidor online em: http://localhost:8080');
});