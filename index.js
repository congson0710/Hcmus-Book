const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

//
const sequelizeConnect = require('./database/mysqlConfig');
const keys = require('./config/key');

require('./services/passportConfig');

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// test connection
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
