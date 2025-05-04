const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.token.id, // token sent from client
    });

    // console.log(req.body)
    req.user.credits += 5;
    req.user.style = 'paid with card';
    const user = await req.user.save();

    res.send(user);
  });
};
