const passport = require('passport');
const Sequelize = require('sequelize');

const requireLogin = require('../middlewares/requireLogin');
const sequelizeConnect = require('../database/mysqlConfig');
const Posts = require('../models/Posts');

module.exports = app => {
  app.post('/api/upload', requireLogin, async (req, res) => {
    const { title, name, price, cond, image, description } = req.body;
    const createdPost = await Posts.create({
      title,
      name,
      price,
      cond,
      image: image[0],
      description,
      postBy: req.user.userID,
    });

    res.send(createdPost);
  });
};
