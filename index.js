const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelizeConnect = require('./database/mysqlConfig');

// models
const Users = require('./models/Users');

sequelizeConnect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

require('./routes/homeRoutes')(app);

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
