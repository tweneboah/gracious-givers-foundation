const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_URL_LOCAL, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB Connected....😎');
  } catch (error) {
    console.log(error.message);
    //exit process with failure
  }
};
module.exports = connectDB;
