const Sequelize = require('sequelize');

module.exports = new Sequelize('hcmus-book', 'root', '123456', {
  host: '127.0.0.1',
  port: '8000',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
