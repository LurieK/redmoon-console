import logo from './logo.svg';
import './App.css';
import Teir from './components/teir'
// import Stripe from './Stripe';

function App() {
  return (
    <div>
      <Teir
      price = 'Free'
      title = 'Basic'/>
      <Teir
      price= '$20/month'
      title = 'Professional'/>
      <Teir
      price='$50/month'
      title = 'Company'/>
      
    </div>
  );
}

export default App;
