const passport = require('passport');
const Users = require('../models/Users');

module.exports = app => {
  app.post('/api/register', (req, res) => {
    console.log('body ne: ', req.body);
  });
};
