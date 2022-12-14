const express = require('express');
const app = express();

// eslint-disable-next-line no-unused-vars
const db = require('./models/db.js');
const Pergunta = require('./models/Pergunta.js');
const Resposta = require('./models/Resposta.js');

// Configura o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));
// Configura o Express para receber os dados do front
app.use(express.urlencoded({ extended: false }));
// Permite a leitura de dados via JSON
app.use(express.json());

app.get('/', (req, res) => {
	Pergunta.findAll({ order: [['id', 'desc']], raw: true }).then((perguntas) => {
		res.render('index', { perguntas: perguntas });
	});
});

app.get('/pergunta/:id', (req, res) => {
	let idFront = req.params.id;
	Pergunta.findOne({
		where: { id: idFront }
	}).then((result) => {
		if (result != undefined) {
			Resposta.findAll({
				order: [['id', 'desc']],
				raw: true,
				where: { idPergunta: result.id }
			}).then((respostas) => {

				res.render(
					'pergunta', {
						perguntas: result,
						respostas: respostas
					}
				);
				console.log(respostas);
			});
		} else {
			res.redirect('/');
		}
	}).catch((err) => {
		console.log(err);
	});
});

app.get('/perguntar', (req, res) => {
	res.render('perguntar');
});

app.post('/insertPergunta', (req, res) => {
	const titulo = req.body.titulo;
	const pergunta = req.body.pergunta;

	Pergunta.create({
		titulo: titulo,
		descricao: pergunta
	}).then(() => {
		res.redirect('/');
	}).catch((err) => {
		console.log(err);
	});
});

app.post('/insertResposta/:id?', (req, res) => {
	const corpo = req.body.corpo;
	const idPergunta = req.params.id;

	Resposta.create({
		idPergunta: idPergunta,
		corpo: corpo
	}).then(() => {
		res.redirect(`/pergunta/${idPergunta}`);
	}).catch((err) => {
		console.log(err);
	});
});

app.listen(8080, () => {
	console.log('Servidor online em: http://localhost:8080');
});