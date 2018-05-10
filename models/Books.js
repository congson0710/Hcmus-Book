const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('books', {
  bookID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  bookName: { type: Sequelize.STRING, allowNull: false },
  bookQuantityLeft: { type: Sequelize.INTEGER, allowNull: false },
  bookPrice: { type: Sequelize.FLOAT, allowNull: false },
  bookImage: { type: Sequelize.STRING, allowNull: false },
  bookDescription: { type: Sequelize.STRING, allowNull: false },
});
