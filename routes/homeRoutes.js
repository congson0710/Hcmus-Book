const Posts = require('../models/Posts');

module.exports = app => {
  app.get('/api/home/post', async (req, res) => {
    const result = await Posts.findAll({ where: { status: 'APPROVE' } });
    res.status(200).send(result);
  });
};
