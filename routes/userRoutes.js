const passport = require('passport');
const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const Orders = require('../models/Order_Detail');
const requireLogin = require('../middlewares/requireLogin');

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
    req.user
      ? res.send(req.user)
      : res.send('Tài khoản hoặc mật khẩu không chính xác');
  });

  app.get('/api/post-management', requireLogin, async (req, res) => {
    const { userID } = req.user;
    const result = await Posts.findAll({ where: { postBy: userID } });
    res.send(result);
  });

  app.get('/api/order-management', requireLogin, async (req, res) => {
    const { userID } = req.user;
    const result = await Orders.findAll({ where: { postBy: userID } });
    res.send(result);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
