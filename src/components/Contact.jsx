function Contact() {
    return (
        <section className="contact" id="contact">
           <div className="contact-text">
            <h2 className="contact-heading">Contact Me</h2>
          </div> 
          <form action="" className="contact-form">
            <label htmlFor="first-name" className="contact-form-label">first name</label>
            <input type="text" placeholder="first name" className="contact-form-input"/>
            <label htmlFor="last-name" className="contact-form-label">last name</label>
            <input type="text" placeholder="last name" className="contact-form-input"/>
            <label htmlFor="email" className="contact-form-label">email address</label>
            <input type="email" placeholder="email" className="contact-form-input"/>
            <label htmlFor="enquiry" className="contact-form-textarea-label">Your enquiry</label>
            <textarea name="enquiry" id="enquiry" rows="10" className="contact-form-textarea" placeholder="how can I help you?"></textarea>
            <div className="contact-form-btn">
              <span className="contact-form-btn-text">submit</span>
            </div>
          </form>
        </section>
    )
}

export default Contact;