const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();
//custom imports
require('./services/passport-config');
require('./config/mongodbConnect')(); //IFFE
const keys = require('./config/keys');
const auth = require('./middlewares/auth');
const duesPaymentRoutes = require('./routes/duesRoutes');
const User = require('./models/User');
const userRoutes = require('./routes/usersRoutes');
//COOKIES
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys],
  })
);

//middlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
//Routes
app.use('/api', duesPaymentRoutes);
app.use('/api', userRoutes);
// Auth start
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/pay-dues');
  }
);
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}...😀`);
});
