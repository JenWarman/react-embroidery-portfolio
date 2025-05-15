function Contact() {
    return (
        <section className="contact" id="contact">
           <div className="contact-text">
            <h2 className="contact-heading">Contact Me</h2>
          </div> 
          <form action="submit" className="form">
            <label htmlFor="first-name" className="form-label" id="first-name">first name</label>
            <input type="text" placeholder="first name" className="form-input" id="first-name"/>
            <label htmlFor="last-name" className="form-label" id="last-name">last name</label>
            <input type="text" placeholder="last name" className="form-input" id="last-name"/>
            <label htmlFor="email" className="form-label" id="email">email address</label>
            <input type="email" placeholder="email" className="form-input" id="email"/>
            <label htmlFor="enquiry" className="form-textarea-label" id="enquiry">Your enquiry</label>
            <textarea name="enquiry" id="enquiry" rows="10" className="form-textarea" placeholder="how can I help you?"></textarea>
            <div className="form-btn">
              <span className="form-btn-text">submit</span>
            </div>
          </form>
        </section>
    )
}

export default Contact;