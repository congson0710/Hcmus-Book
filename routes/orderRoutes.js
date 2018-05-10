const requireLogin = require('../middlewares/requireLogin');
const orderHistory = require('../models/Order_History');
const orderDetail = require('../models/Order_Detail');
const Books = require('../models/Books');

module.exports = app => {
  app.post('/api/order-book', requireLogin, async (req, res) => {
    console.log(req.body);
    const { currentCart, currentUser, totalPayment, area } = req.body;
    const resultOrder = await orderHistory.create({
      date: Date.now(),
      createBy: currentUser.userID,
      totalPayment,
      area,
    });
    const listOrderBook = await Promise.all(
      currentCart.map(async book => {
        const result = await orderDetail.create({
          bookID: book.bookID,
          orderID: resultOrder.orderID,
          quantityOrder: book.quantityOrder,
        });
        return result;
      })
    );

    const updateListOrder = await Promise.all(
      currentCart.map(async book => {
        const result = await Books.decrement('bookQuantityLeft', {
          by: book.quantityOrder,
          where: { bookID: book.bookID },
        });
        return result;
      })
    );

    const createdOrder = {
      resultOrder,
      listOrderBook,
    };

    res.status(200).send(createdOrder);
  });
};
