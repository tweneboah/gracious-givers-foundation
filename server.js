require('dotenv').config();
const express = require('express');
require('./config/mongodbConnect')(); //calling DB
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const duesPaymentRoutes = require('./routes/duesRoutes');
const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(
  session({
    secret: 'Nodejs',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('Nodejs'));

//Initialise passport

app.use(passport.initialize());
app.use(passport.session());
//custom imports
require('./config/passport-config')(passport);
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
