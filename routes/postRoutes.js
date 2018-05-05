const passport = require('passport');
const Sequelize = require('sequelize');

const requireLogin = require('../middlewares/requireLogin');
const sequelizeConnect = require('../database/mysqlConfig');
const Users = require('../models/Users');

module.exports = app => {
  app.post('/api/upload', requireLogin, async (req, res) => {
    console.log('thong tin:', req.body);
    console.log('nguoi dung:', req.user);
  });
};
