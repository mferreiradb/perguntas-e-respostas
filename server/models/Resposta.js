const db = require('./db.js');
const Sequelize = require('sequelize');

const Resposta = db.sequelize.define('respostas', {
	idPergunta: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	corpo: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

//Resposta.sync({force: false}).then(() =>{ console.log('Tabela criada');});

module.exports = Resposta;