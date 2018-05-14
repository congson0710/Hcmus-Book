const passport = require('passport');
const Sequelize = require('sequelize');
const sequelizeConnect = require('../database/mysqlConfig');
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const orderDetail = require('../models/Order_Detail');
const orderHistory = require('../models/Order_History');
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

  app.get('/api/user-management', requireLogin, async (req, res) => {
    const { userID } = req.user;
    const resultPosts = await Posts.findAll({ where: { postBy: userID } });
    const resultOrders = await orderHistory.findAll({
      where: { createBy: userID },
    });

    const result = {
      posts: resultPosts,
      orders: resultOrders,
    };

    res.status(200).send(result);
  });

  app.post('/api/change-user-info', requireLogin, async (req, res) => {
    const { userName, userAddress, phone, gender } = req.body;
    const { userID } = req.user;
    const result = await Users.update(
      {
        userName,
        userAddress,
        gender,
        phone,
      },
      { where: { userID } }
    );

    res.status(200).send(result);
  });

  app.post('/api/change-user-password', requireLogin, async (req, res) => {
    const { newPassword } = req.body;
    const { userID } = req.user;

    const result = await Users.update(
      {
        userPassword: newPassword,
      },
      { where: { userID } }
    );

    res.status(200).send(result);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
