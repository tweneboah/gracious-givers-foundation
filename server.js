const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/gracious-givers', {
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
connectDB();

//custom imports
require('./config/passport-config')();
const keys = require('./config/keys');
const duesPaymentRoutes = require('./routes/duesRoutes');
const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
//COOKIES

//middlewares
//Middleware
app.use(express.json());
app.use(
  session({
    secret: 'Node js',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('Node js'));

//Initialise passport
app.use(passport.initialize());

//Routes
app.use('/api', authRoutes);
app.use('/api', duesPaymentRoutes);
app.use('/api', userRoutes);

//Server statitic asset in production

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}...😀`);
});
