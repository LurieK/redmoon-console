import logo from './logo.svg';
import './App.css';
import Teir from './components/teir'

// import Stripe from './Stripe';

function App() {
  return (

    <div className='product-list'>
      <Teir
      price = 'Free'
      title = 'Basic'/>
      <Teir
      price= '$20/month'
      title = 'Premium'/>
      <Teir
      price='$50/month'
      title = 'Business'/>
      
    </div>
   
  );
}

export default App;
