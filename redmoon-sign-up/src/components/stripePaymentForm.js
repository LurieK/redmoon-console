import React from 'react';
import { useStripe, useElements, CardElement, AddressElement } from '@stripe/react-stripe-js';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // Save the token to localStorage for demonstration purposes
      localStorage.setItem('stripeToken', JSON.stringify(token));
      alert('Stripe token saved to localStorage!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;
