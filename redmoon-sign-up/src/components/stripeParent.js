
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ContactForm from './contact-form';



function StripeParent(props) {
  return (
    <Elements stripe={stripePromise}>
      <ContactForm title={props.title} /> 
    </Elements>
  );
}

export default ParentComponent;
