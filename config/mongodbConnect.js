const mongoose = require('mongoose');
const keys = require('./keys');

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB Connected....😎');
  } catch (error) {
    console.log(error.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
