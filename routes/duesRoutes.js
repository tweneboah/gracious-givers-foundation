const express = require('express');
const duesRoutes = express.Router();
const Dues = require('../models/Dues');
const auth = require('../middlewares/auth');

//Create Dues
duesRoutes.post('/dues', async (req, res) => {
  console.log('Req Body', req.body);

  const dues = new Dues({
    title: req.body.title,
    amount: req.body.amount,
    description: req.body.description,
    user: req.body.user,
  });
  await dues.save();
  res.send(dues);
});

// Delete
duesRoutes.delete('/:duesId', async (req, res) => {
  try {
    const deleted = await Dues.findByIdAndDelete(req.params.duesId);
    if (!req.params.duesId) {
      return res.status(404).send();
    } else {
      res.status(200).send(deleted);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
duesRoutes.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ['amount', 'description'];
  const isValidOperation = updates.every(update => {
    return allowUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update' });
  }

  try {
    const dues = await Dues.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!dues) {
      return res.status(404).send('No Dues found to update');
    } else {
      const updatedDues = await dues.save();
      res.send(updatedDues);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//Fetch all dues
duesRoutes.get('/dues', async (req, res) => {
  try {
    const dues = await Dues.find({}).populate('user').exec();
    res.send(dues);
  } catch (error) {
    res.status(501).send(error);
  }
});
module.exports = duesRoutes;
