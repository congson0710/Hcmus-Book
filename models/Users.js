const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define({
  userID: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false },
  userName: { type: Sequelize.STRING, allowNull: false },
  userAccount: { type: Sequelize.INTEGER, allowNull: false },
  userPassword: { type: Sequelize.FLOAT, allowNull: false },
  userAddress: { type: Sequelize.STRING, allowNull: false },
  isAdmin: { type: Sequelize.TINYINT, allowNull: false },
});
