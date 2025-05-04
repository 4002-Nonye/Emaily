import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../actions';
import { useDispatch } from 'react-redux';

function StripeBilling() {
  const dispatch = useDispatch();
  const amount = 10000

  return (
    <StripeCheckout
      name='Emaily'
      description='$5 for 5 credits'
      amount={500} // 5 dollars.... 1 dollar = 100cents
      token={(token) => {
        console.log(token);
        dispatch(handleToken(token));
      }}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn'>Add credits </button>
    </StripeCheckout>
  );
}

export default StripeBilling;
