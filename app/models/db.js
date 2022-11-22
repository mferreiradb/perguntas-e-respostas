const Sequelize = require('sequelize');
const banco = 'guia_perguntas';
const sequelize = new Sequelize(banco, 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql'
});

sequelize.authenticate().then(() => {
	console.log(`Banco de dados [${banco}] conectado`);
}).catch((err) => {
	console.log(`Falha na conexão: ${err}`);
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};