module.exports = app => {
  app.get('/api/search', (req, res) => {
    console.log(req.query);
  });
};
