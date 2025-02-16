const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

require('./models/User');

require('./services/passport');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    // how long our cookie should exist
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// telling passport to use cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require('./routes/authRoutes')
// authRoutes(app)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);






