const requireLogin = require('../middlewares/requireLogin');
const Posts = require('../models/Posts');

module.exports = app => {
  // post
  app.get('/api/admin-management', requireLogin, async (req, res) => {
    const result = await Posts.findAll({ where: { status: 'PENDING' } });
    res.send(result);
  });

  app.post('./api/admin-approve-post', requireLogin, async (req, res) => {
    const { id } = req.body;
    const result = await Posts.update({ status: 'APPROVE' }, { where: { id } });
    res.send(result);
  });
  // order
  //   app.get('/api/admin-management', requireLogin, async (req, res) => {
  //     const result = await Posts.findAll({ where: { status: 'PENDING' } });
  //     res.send(result);
  //   });

  //   app.post('./api/admin-approve-post', requireLogin, async (req, res) => {
  //     const { id } = req.body;
  //     const result = await Posts.update({ status: 'APPROVE' }, { where: { id } });
  //     res.send(result);
  //   });
};
