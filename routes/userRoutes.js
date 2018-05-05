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

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    console.log(req.user);
    req.user
      ? res.send(req.user)
      : res.send('Tài khoản hoặc mật khẩu không chính xác');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
