const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authRoutes = express.Router();

//Register user
authRoutes.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) throw err;
    if (user) return; //Return some alert
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.redirect('/login');
      //res.status(200).json({ user: newUser, success: true });
    }
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send({ msg: 'Invalid username/password', success: false });
    else {
      req.logIn(user, err => {
        if (err) throw err;
        res.status(200).json({ user: user, success: true });
      });
    }
  })(req, res, next);
});

authRoutes.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ msg: 'You have logout successfully' });
});

authRoutes.get('/current-user', (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = authRoutes;
