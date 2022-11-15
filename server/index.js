const express = require('express');
const app = express();

// eslint-disable-next-line no-unused-vars
const db = require('./models/db.js');
const Pergunta = require('./models/Pergunta.js');

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

	Pergunta.create({
		titulo: titulo,
		descricao: pergunta
	}).then(() => {
		res.redirect('/');
		console.log({titulo: titulo, pergunta: pergunta});
	}).catch((err) => {
		console.log(err);
	});
});

app.listen(8080, () => {
	console.log('Servidor online em: http://localhost:8080');
});