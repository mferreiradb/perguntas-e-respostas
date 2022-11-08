const express = require('express');
const app = express();

// Configura o EJS como view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
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