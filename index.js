const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('./models/User');

require('./services/passport');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
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
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file, or main.css file

  app.use(express.static('client/build'));

  // Express will serve up our index.html if it does not recognize the route
  const path = require('path');
  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
