const express = require('express');
const app = express();

// Configura o EJS como view engine
app.set('view engine', 'ejs');

app.get('/:nome?/:lang?', (req, res) => {
	let nome = req.params.nome;
	let lang = req.params.lang;
	let isAdm = false;

	let produtos = [
		{nome: 'Arroz', valor:12, ativo: true},
		{nome: 'Feijao', valor: 10, ativo: false},
		{nome: 'Batata', valor: 11.50, ativo: true},
		{nome: 'Pao', valor: 0.50, ativo: false}
	];
	res.render('index', {
		nome: nome,
		lang: lang,
		empresa: 'TicBox Sistemas',
		colaboradores: 12,
		adm: isAdm,
		produtos: produtos
	});
});

app.get('/home', (req, res) => {
	res.render('Home');
});

app.get('/perfil', (req, res) => {
	res.render('main/Perfil');
});

app.listen(8080, () => {
	console.log('Servidor online em: http://localhost:8080');
});