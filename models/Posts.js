const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('posts', {
  title: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false },
  cond: { type: Sequelize.FLOAT, allowNull: false },
  image: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  createBy: {type: Sequelize.INTERGER, allowNull: false}
});