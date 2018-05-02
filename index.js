const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');
//
const sequelizeConnect = require('./database/mysqlConfig');
const keys = require('./config/key');

require('./services/passportConfig');

const app = express();

app.use(bodyParser.json());
app.use(fileUpload());
app.use(
  cookieSession({
    keys: keys.cookieKey,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

sequelizeConnect
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

require('./routes/homeRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/postRoutes')(app);

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
