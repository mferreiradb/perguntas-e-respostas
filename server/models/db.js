const Sequelize = require('sequelize');
const sequelize = new Sequelize('guia_perguntas', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate().then(() => {
	console.log('Banco de dados conectado');
}).catch((err) => {
	console.log(`Falha na conexão: ${err}`);
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};