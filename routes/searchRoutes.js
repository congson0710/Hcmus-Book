const _ = require('lodash');

const Books = require('../models/Books');
const Posts = require('../models/Posts');

module.exports = app => {
  app.get('/api/search', async (req, res) => {
    const {
      search
    } = req.query;
    const re = new RegExp(_.escapeRegExp(search), 'i');

    const listBook = await Books.findAll().map(book => {
      return {
        ...book.dataValues,
      };
    }).filter(book => {
      if (re.test(book.bookName)) {
        return book
      }
    })

    const listPost = await Posts.findAll().map(post => {
      post.dataValues.bookName = post.dataValues.name;
      delete post.dataValues.name;
      return {
        ...post.dataValues,
      };
    }).filter(post => {
      if (re.test(post.bookName)) {
        return post
      }
    })

    const result = {
      listBook,
      listPost
    }

    res.status(200).send(result)
  });
};