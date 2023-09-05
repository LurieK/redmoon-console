 function Teir (props){

    return (
        <section>
          <div className="product">
            <div className="description">
              <h3>{props.title}</h3>
              <h5>{props.price}</h5>
            </div>
          </div>
          <form action="/create-checkout-session" method="POST">
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
            <button id="checkout-and-portal-button" type="submit">
              Create Account
            </button>
          </form>
        </section>
      );
   


}

export default Teir