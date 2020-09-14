const mongoose = require('mongoose');

const DuesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
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

module.exports = Dues = mongoose.model('Dues', DuesSchema);
