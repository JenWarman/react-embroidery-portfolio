function Contact() {
    return (
        <section className="contact" id="contact">
           <div className="contact-text">
            <h2 className="contact-heading">Contact Me</h2>
          </div> 
          <form action="submit" className="form">
            <label htmlFor="first-name" className="form-label">first name</label>
            <input type="text" placeholder="first name" className="form-input"/>
            <label htmlFor="last-name" className="form-label">last name</label>
            <input type="text" placeholder="last name" className="form-input"/>
            <label htmlFor="email" className="form-label">email address</label>
            <input type="email" placeholder="email" className="form-input"/>
            <label htmlFor="enquiry" className="form-textarea-label">Your enquiry</label>
            <textarea name="enquiry" id="enquiry" rows="10" className="form-textarea" placeholder="how can I help you?"></textarea>
            <div className="form-btn">
              <span className="form-btn-text">submit</span>
            </div>
          </form>
        </section>
    )
}

export default Contact;