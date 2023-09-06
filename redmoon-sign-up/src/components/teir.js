 import React from 'react'
 import StripeParent from './stripeParent'
 import ContactForm from './contact-form'
 
 function Teir (props){
    const [showContactForm, setShowContactForm] = React.useState(false)
    console.log(showContactForm)
    function showForm(){
        setShowContactForm(prevContactForm=> !prevContactForm)
    }
    
    return (
    <section className="teir">
          <div className="product">
            <div className="product-description">
              <h3>{props.title}</h3>
              <h5>{props.price}</h5>
            </div>
          </div>
          <div className='show-form'>
            {!showContactForm ? 
            <button className="create-account-button"
            onClick={showForm}>
            Create Account
            </button>
            :<ContactForm
            title={props.title}/> }
          </div>
       </section> 
    
   );


}

export default Teir