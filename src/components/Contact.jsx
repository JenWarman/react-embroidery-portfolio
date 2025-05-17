import Footer from "./Footer";

function Contact() {
    return (
      <>
        <section className="contact" id="contact">
           <div className="contact_text">
            <h2 className="contact_heading">Contact Me</h2>
          </div> 
          <form action="submit" className="form">
            <label htmlFor="first-name" className="form_label" id="first-name">first name</label>
            <input type="text" placeholder="first name" className="form_input" id="first-name"/>
            <label htmlFor="last-name" className="form_label" id="last-name">last name</label>
            <input type="text" placeholder="last name" className="form_input" id="last-name"/>
            <label htmlFor="email" className="form_label" id="email">email address</label>
            <input type="email" placeholder="email" className="form_input" id="email"/>
            <label htmlFor="enquiry" className="form-textarea_label" id="enquiry">Your enquiry</label>
            <textarea name="enquiry" id="enquiry" rows="10" className="form_textarea" placeholder="how can I help you?"></textarea>
              <button className="form_btn-text">submit</button>
          </form>
        </section>
         <Footer/>
         </>
    )
}

export default Contact;