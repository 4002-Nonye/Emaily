const passport = require('passport');
const data = require('./logoutSuccess');

// WHENEVER A USER TRIES TO ACCESS THE AUTH PAGE (LOGIN WITH GOOGLE), WE THROW THEM TO GOOGLE SO THEY CAN GIVE US ACCESS TO THEIR PROFILE
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/surveys')
  );
 
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
