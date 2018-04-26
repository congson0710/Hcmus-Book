const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define({
  detailID: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false },
  orderID: { type: Sequelize.STRING, allowNull: false },
  bookID: { type: Sequelize.INTEGER, allowNull: false },
});
