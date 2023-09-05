
const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, save data, etc.
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Next</button>
      </form>
    );
  };
  export default ContactForm
  