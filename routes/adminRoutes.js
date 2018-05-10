const requireLogin = require('../middlewares/requireLogin');
const Posts = require('../models/Posts');
const Orders = require('../models/Order_History');
const Users = require('../models/Users');

module.exports = app => {
  // post
  app.get('/api/admin-management-post', requireLogin, async (req, res) => {
    const result = await Posts.findAll();
    res.send(result);
  });

  app.post('/api/admin/approve/post', requireLogin, async (req, res) => {
    const { id } = req.body;
    const result = await Posts.update({ status: 'APPROVE' }, { where: { id } });
    res.send(result);
  });
  // order
  app.get('/api/admin-management-order', requireLogin, async (req, res) => {
    const listOrder = await Orders.findAll();

    const result = await Promise.all(
      listOrder.map(async order => {
        const user = await Users.findAll({
          attributes: ['userName'],
          where: { userID: order.createBy },
        });
        order.dataValues.userName = user[0].userName;
        return order;
      })
    );

    res.status(200).send(result);
  });

  app.post('/api/admin/approve/order', requireLogin, async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    const result = await Orders.update(
      { status: 'APPROVE' },
      { where: { orderID: id } }
    );
    res.send(result);
  });
};
