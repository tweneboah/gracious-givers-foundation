const User = require('../models/User');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local');
const passport = require('passport');

module.exports = () => {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
};

// This takes the user and add cookie to it
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

//Taking the user from the cookie
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    cb(err, user);
  });
});
