const Sequelize = require('sequelize');

// const keys = require('../config/key');

if (process.env.NODE_ENV === 'production') {
  module.exports = new Sequelize(
    'gcp_33023d63a4b70199cc1d',
    'b8f4920c05ed20',
    '4312efa3',
    {
      host: 'us-cdbr-gcp-east-01.cleardb.net',
      port: '3306',
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
} else {
  module.exports = new Sequelize('hcmus-book', 'root', '123456', {
    host: '127.0.0.1',
    port: '8000',
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
  });
}
