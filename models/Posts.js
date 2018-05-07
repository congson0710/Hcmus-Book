const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');

module.exports = sequelizeConnect.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: { type: Sequelize.INTEGER, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false },
  cond: { type: Sequelize.FLOAT, allowNull: false },
  image: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  postBy: { type: Sequelize.INTEGER, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'PENDING' },
});
