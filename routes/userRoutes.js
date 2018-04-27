const passport = require('passport');
const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');
const Users = require('../models/Users');

module.exports = app => {
  app.post('/api/register', (req, res) => {
    const { userName, userAccount, userPassword, address, gender } = req.body;
    Users.findOrCreate({
      where: { userAccount },
      defaults: { userName, userPassword, userAddress: address, gender },
    }).spread((user, created) => {
      created ? res.send(user) : res.status(401).send('Register Fail!!!');
    });
  });

  app.post('/api/login', (req, res) => {
    console.log('req body:', req.body);
  });
};
