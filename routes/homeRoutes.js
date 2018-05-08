const Posts = require('../models/Posts');
const Books = require('../models/Books');

module.exports = app => {
  app.get('/api/home/post', async (req, res) => {
    const result = await Posts.findAll({ where: { status: 'APPROVE' } });
    res.status(200).send(result);
  });

  app.get('/api/home/book', async (req, res) => {
    const result = await Books.findAll();
    res.status(200).send(result);
  });
};
