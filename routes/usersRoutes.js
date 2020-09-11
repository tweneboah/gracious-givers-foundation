const express = require('express');
const auth = require('../middlewares/auth');

const userRoutes = express.Router();

//Fetching user and it's dues paid
//Note this property was set as a virtual property on the user hen
userRoutes.get('/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  await user.populate('dues').execPopulate();
  console.log('User Dues', user.dues); //This will print out the dues paid by this user
  //Send the user and it's dues paid
  res.send({ userDues: user.dues, user: user });
});

//logout
userRoutes.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = userRoutes;
