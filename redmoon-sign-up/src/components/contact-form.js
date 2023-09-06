import React from 'react'
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePaymentForm from './stripePaymentForm';




const ContactForm = (props) => {
  const [formData, setFormData]= React.useState({
    company: '',
    first_name: '',
    last_name:'',
    email: '',
    phone: '',
    username: '',
    password: '',
    confPassword: '',
    newsletter: true,

  })

  const [passwordMatch, setPasswordMatch]=React.useState(null)

  console.log(passwordMatch)
  console.log(formData)
  console.log(props.title)


  function handleChange(event){
    const {type, name, checked, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
    
  }

  function passwordMatchCheck(){
    if(formData.password === formData.confPassword){
      setPasswordMatch(true)
    }else{
      setPasswordMatch(false)
    }
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('formData',JSON.stringify(formData))
    };
  
    return (
      <form className='contact-form' onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        type="text" 
        name="company" 
        placeholder="Company"
        value={formData.company} />

        <input 
        onChange={handleChange}
        type="text" 
        name="first_name" 
        placeholder="Name"
        value={formData.first_name} />

    <input 
        onChange={handleChange}
        type="text" 
        name="last_name" 
        placeholder="Name"
        value={formData.last_name} />

        <input 
        onChange={handleChange}
        type="email" 
        name="email" 
        placeholder="Email"
        value={formData.email} />

        <input 
        onChange={handleChange}
        type="text" 
        name="phone" 
        placeholder="Phone Number"
        value={formData.phone} />

        <input 
        onChange={handleChange}
        type="text" 
        name="username" 
        placeholder="User Name"
        value={formData.username} />

        <input 
        onChange={handleChange}
        type="password" 
        name="password" 
        placeholder="Password"
        value={formData.password} />

        <p>Password must be more then 8 characters and include at least 1 number and 1 symbole</p>
        <input 
        onChange={handleChange}
        onBlur={passwordMatchCheck}
        type="password" 
        name="confPassword" 
        placeholder="Confirm Password"
        value={formData.confPassword} />
        
        {passwordMatch ? <p>Passwords match!</p> 
        : passwordMatch === false ? <p>Passwords don't match! Please double check your password and try again.</p> 
        : null}

        <input 
        onChange={handleChange}
        type="checkbox" 
        name="newsletter" 
        id='newsletter'
        checked={formData.newsletter}/>

        <label htmlFor="newsletter">Keep me up to date with the latest news</label>
        <div className='submit-btn'>
          {props.title !== 'Basic' ?
          <button >
            Continue to Payment
          </button>
          :
          <button type="submit" onSubmit={handleSubmit}>
            Go to My Account
          </button>
          }
        </div>
      </form>
    );
  };
  export default ContactForm
  
   {/* <div className='check-out'> */}
        {/* {
        props.title !== 'Basic' && 
          <p>This is a paid teir</p>
        }
           <StripePaymentForm title={props.title}/> */}