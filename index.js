const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
//
const sequelizeConnect = require('./database/mysqlConfig');
// models
const Users = require('./models/Users');

const app = express();

app.use(bodyParser.json());

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
