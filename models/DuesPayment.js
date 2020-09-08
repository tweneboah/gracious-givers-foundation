const mongoose = require('mongoose');

const DuesPayment = new mongoose.Schema(
  {
    amount: {
      type: String,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Dues = mongoose.model('Dues', DuesPayment);
