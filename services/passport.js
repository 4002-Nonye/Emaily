// NOTE: Anytime we are trying to access our DB from mongoose, we must use an async function

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User'); // one argument means we are trying to fetch the collection

// We use serializeUser to uniquely identify a user and pass that unique ID as a token(cookie)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

// SETTING UP THE STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // when the user give us permission to access their profile, the user is thrown back to this URL with a code from google attached to the URL
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // There is an existing user with the ID, do not create a new account
        return done(null, existingUser); 
      }
      // There is no existing user with that ID, go ahead and create a new record
      const newUser = await new User({
        googleId: profile.id,
      }).save();

      await done(null, newUser);
    }
  )
);
