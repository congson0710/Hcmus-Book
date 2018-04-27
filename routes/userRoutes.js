const passport = require('passport');
const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');
const Users = require('../models/Users');

module.exports = app => {
  app.post('/api/register', async (req, res) => {
    const { userName, userAccount, userPassword, address, gender } = req.body;
    console.log(req.body);
    Users.findOrCreate({
      where: { userAccount },
      defaults: { userName, userPassword, userAddress: address, gender },
    }).spread((user, created) => {
      created
        ? res.send({ user, message: 'Register Success!!!' })
        : res.status(401).send({ message: 'Register fail!!!' });
    });
  });
};
