import React from 'react'

const ContactForm = () => {
  const [formData, setFormData]= React.useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confPassword: ''

  })

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, save data, etc.
    };
  
    return (
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <input type="text" name="company" placeholder="Company" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="user-name" placeholder="User Name" />
        <input type="text" name="password" placeholder="Password" />
        <p>Must be more then 8 characters and include at least 1 number and 1 symbole</p>
        <input type="text" name="confirm-password" placeholder="Confirm Password" />
        <input type="checkbox" name="newsletter" />
        <label htmlFor="newsletter">Keep me up to date with the latest news</label>
        <button type="submit">Continue to Payment</button>
      </form>
    );
  };
  export default ContactForm
  