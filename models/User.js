const mongoose = require('mongoose');

const { Schema } = mongoose;

// Properties we want our users to have
const userSchema = new Schema({
  googleId: String
});

// To create a collection of users (Table of users)
mongoose.model('users', userSchema); // two arguments means we are trying to create a collection
