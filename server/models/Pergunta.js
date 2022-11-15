const db = require('./db.js');
const Sequelize = require('sequelize');

const Pergunta = db.sequelize.define('perguntas', {
	titulo: {
		type: Sequelize.STRING,
		allowNull: false
	},
	descricao: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

//Pergunta.sync({force: false}).then(() =>{ console.log('Tabela criada');});