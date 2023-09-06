
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ContactForm from './contact-form';

const stripePromise = loadStripe('pk_live_51Jopl3CrD5CMQwqmJZRW4JfF2dUdrZzqmxAz479JLYfnLdo0wITUOoUXubSV29T79kyXMPIyCWdcc9LBQM6olpry008acQTQqB');


function StripeParent(props) {
  return (
    <Elements stripe={stripePromise}>
      <ContactForm title={props.title} /> 
    </Elements>
  );
}

export default StripeParent;
