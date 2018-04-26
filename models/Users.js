const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('users', {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: { type: Sequelize.STRING, allowNull: false },
  userAccount: { type: Sequelize.STRING, allowNull: false },
  userPassword: { type: Sequelize.STRING, allowNull: false },
  userAddress: { type: Sequelize.STRING, allowNull: false },
  isAdmin: { type: Sequelize.TINYINT, allowNull: false },
});
