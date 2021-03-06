const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('order_history', {
  orderID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: { type: Sequelize.DATE, allowNull: false },
  createBy: { type: Sequelize.STRING, allowNull: false },
  totalPayment: { type: Sequelize.INTEGER, allowNull: false },
  area: {type: Sequelize.INTEGER, allowNull: false},
  status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'PENDING' },
});
