module.exports = app => {
  app.post('/api/upload', async (req, res) => {
    console.log(req.files);
  });
};
