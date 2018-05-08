const Books = require('../models/Books');

module.exports = app => {
  app.post('/api/book-detail', async (req, res) => {
    const { id } = req.body;
    const result = await Books.findById(id);
    res.status(200).send(result);
  });
};
