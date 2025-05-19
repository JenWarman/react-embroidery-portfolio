function Contact() {

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_text">
          <h2 className="contact_heading">Contact Me</h2>
        </div>
        <form className="form" action="https://formsubmit.co/info.catsandbones@gmail.com" method="POST">
          <label htmlFor="first-name" className="form_label" id="first-name">
            first name
          </label>
          <input
            required
            type="text"
            placeholder="first name"
            className="form_input"
            id="first-name"
            name="first-name"
          />
          <label htmlFor="last-name" className="form_label" id="last-name">
            last name
          </label>
          <input
            required
            type="text"
            placeholder="last name"
            className="form_input"
            id="last-name"
            name="last-name"
          />
          <label htmlFor="email" className="form_label" id="email">
            email address
          </label>
          <input
            required
            type="email"
            placeholder="email"
            className="form_input"
            id="email"
            name="email"
          />
          <label htmlFor="enquiry" className="form-textarea_label" id="enquiry">
            Your enquiry
          </label>
          <textarea
            required
            name="enquiry"
            id="enquiry"
            rows="10"
            className="form_textarea"
            placeholder="how can I help you?"
          ></textarea>
          <button className="form_btn-text">submit</button>
          <input type="hidden" name="_next" value="https://jen-warman-embroidery.netlify.app/confirmation"></input>
        </form>
      </section>
    </>
  );
}

export default Contact;