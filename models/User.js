const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual('dues', {
  ref: 'Dues',
  localField: '_id', //Where the local data are stored - ObjectId (id) thus the userId
  foreignField: 'user', //The field on the other model(Task)
});
module.exports = User = mongoose.model('User', UserSchema);
