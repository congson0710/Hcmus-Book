const Sequelize = require('sequelize');

const keys = require('../config/key');

module.exports = new Sequelize(
  keys.database.name,
  keys.database.user,
  keys.database.password,
  {
    host: keys.database.host,
    port: keys.database.port,
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
