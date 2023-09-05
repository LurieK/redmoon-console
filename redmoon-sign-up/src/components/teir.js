 import React from 'react'
 import ContactForm from './contact-form'
 
 function Teir (props){
    const [showContactFrom, setShowContactForm] = React.useState(false)
    
    function showForm(){
        setShowContactForm(prevContactForm=> !prevContactForm)
    }
    
    return (
    <section>
       
        
          <div className="product">
            <div className="description">
              <h3>{props.title}</h3>
              <h5>{props.price}</h5>
            </div>
          </div>
            <button className="create-account button"
            onClick={showForm}>
              Create Account
            </button>
            {showContactFrom ? <ContactForm/> : ''}
       </section> 
    
   );


}

export default Teir