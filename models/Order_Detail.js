const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('order_detail', {
  detailID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  orderID: { type: Sequelize.STRING, allowNull: false },
  bookID: { type: Sequelize.INTEGER, allowNull: false },
  quantityOrder: { type: Sequelize.INTEGER, allowNull: false },
});
