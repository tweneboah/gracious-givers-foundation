const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authRoutes = express.Router();

//Register user
authRoutes.post('/register', (req, res) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) throw err;
    if (user) res.send('User Exist');
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({ user: newUser });
    }
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(402).json({ msg: 'Invalid username/password' });
    else {
      req.logIn(user, err => {
        if (err) throw err;
        res.status(200).json({ user });
        console.log(req.user);
      });
    }
  })(req, res, next);
});

authRoutes.post('/logout', (req, res) => {
  req.logOut();
});

authRoutes.get('/currentUser', (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

module.exports = authRoutes;
