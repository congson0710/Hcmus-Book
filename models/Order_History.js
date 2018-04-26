const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('order_history', {
  orderID: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false },
  date: { type: Sequelize.DATE, allowNull: false },
  createBy: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
});
