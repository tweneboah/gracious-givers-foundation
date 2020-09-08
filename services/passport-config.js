const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Custom imports
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, cb) => {
  console.log(`Serialize`, user);
  cb(null, user.id);
});

//rettrieve the user from cookeis
passport.deserializeUser(async (userId, cb) => {
  const user = await User.findById(userId);
  cb(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (refresToken, accessToken, profile, cb) => {
      const userExist = await User.findOne({ googleId: profile.id });
      console.log(`Token ${profile}`);
      if (userExist) {
        console.log(`user exist ${userExist}`);
        cb(null, userExist);
      } else {
        const newUser = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
        });
        await newUser.save();

        console.log(`New User ${newUser}`);
      }
    }
  )
);
