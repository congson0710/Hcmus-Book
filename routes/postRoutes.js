const passport = require('passport');
const Sequelize = require('sequelize');

const requireLogin = require('../middlewares/requireLogin');
const sequelizeConnect = require('../database/mysqlConfig');
const Posts = require('../models/Posts');
const Users = require('../models/Users');

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

  app.post('/api/post-detail', async (req, res) => {
    const { id } = req.body;

    const post = await Posts.findById(id);
    const user = await Users.findById(post.postBy);

    const result = {
      id: post.id,
      title: post.title,
      name: post.name,
      price: post.price,
      cond: post.cond,
      image: post.image,
      description: post.description,
      status: post.status,
      contact: user.phone,
    };

    res.send(result);
  });
};
