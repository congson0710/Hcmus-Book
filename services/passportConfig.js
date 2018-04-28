const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/Users');

passport.serializeUser((user, done) => {
  done(null, user.userID);
});

passport.deserializeUser((id, done) => {
  Users.findById({ where: { userID: id } }).then(currentUser => {
    done(null, currentUser);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'userAccount',
      passwordField: 'userPassword',
    },
    async (username, password, done) => {
      const currentUser = await Users.findOne({
        where: { userAccount: username, userPassword: password },
      });
      if (currentUser) {
        return done(null, currentUser);
      } else {
        return done(null, false, { message: 'Invalid username or password.' });
      }
    }
  )
);
