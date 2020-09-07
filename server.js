const express = require('express');
const passport = require('passport');
const app = express();

//custom imports
require('./services/passport-config');
require('./config/mongodbConnect')();

// Auth start
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}...😀`);
});
