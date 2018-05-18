const Sequelize = require('sequelize');

const keys = require('../config/key');

module.exports = new Sequelize(
  keys.databaseName,
  keys.databaseUser,
  keys.databasePassword,
  {
    host: keys.databaseHost,
    port: keys.databasePort,
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
