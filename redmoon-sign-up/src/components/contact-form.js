import React from 'react'

const ContactForm = (props) => {
  const [formData, setFormData]= React.useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confPassword: '',
    newsletter: true,

  })

  const [passwordMatch, setPasswordMatch]=React.useState(null)


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
      // Handle form submission, save data, etc.
    };
  
    return (
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        type="text" 
        name="company" 
        placeholder="Company"
        value={formData.company} />

        <input 
        onChange={handleChange}
        type="text" 
        name="name" 
        placeholder="Name"
        value={formData.name} />

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
        
        <button type="submit" onClick={handleSubmit}>
          {props.title === 'Basic' ? "Go to My Account" : 'Continue to Payment'}</button>
      </form>
    );
  };
  export default ContactForm
  