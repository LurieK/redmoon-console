 import React from 'react'
 import StripeParent from './stripeParent'
 
 function Teir (props){
    const [showContactFrom, setShowContactForm] = React.useState(false)
    
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
            {!showContactFrom ? 
            <button className="create-account-button"
            onClick={showForm}>
            Create Account
            </button>
            :<StripeParent
            title={props.title}/> }
          </div>
       </section> 
    
   );


}

export default Teir