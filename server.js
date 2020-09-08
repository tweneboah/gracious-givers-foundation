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
app.use('/api/dues', duesPaymentRoutes);
// Auth start
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
//Home
app.get('/', (req, res) => {
  res.send(`<h1>Welcome Home</h1>`);
});
app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);

//Fetching user and it's dues paid
//Note this property was set as a virtual property on the user hen
app.get('/api/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  await user.populate('dues').execPopulate();
  console.log('User Dues', user.dues); //This will print out the dues paid by this user

  //Send the user and it's dues paid
  res.send({ userDues: user.dues, user: user });
});

//logout
app.get('/api/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}...😀`);
});
