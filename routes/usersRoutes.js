const express = require('express');
const auth = require('../middlewares/auth');
const User = require('../models/User');

const userRoutes = express.Router();

//Fetching user and it's dues paid
//Note this property was set as a virtual property on the user hen
userRoutes.get('/profile', auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  await user.populate('dues').execPopulate(); //This will print out the dues paid by this user
  //Send the user and it's dues paid
  res.send({ userDues: user.dues, user: user });
});

//Fetch all users
userRoutes.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(501).send(error);
  }
});

module.exports = userRoutes;
