const express = require('express');
const duesRoutes = express.Router();
const Dues = require('../models/DuesPayment');
const auth = require('../middlewares/auth');

//Create Dues
duesRoutes.post('/', async (req, res) => {
  const dues = new Dues({
    amount: req.body.amount,
    description: req.body.description,
  });
  await dues.save();
  res.send(dues);
});

duesRoutes.get('/', async (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

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

module.exports = duesRoutes;
