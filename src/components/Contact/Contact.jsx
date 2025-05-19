import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://formsubmit.co/info.catsandbones@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setShowModal(true);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_text">
          <h2 className="contact_heading">Contact Me</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="first-name" className="form_label">
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
          <label htmlFor="last-name" className="form_label">
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
          <label htmlFor="email" className="form_label">
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
          <label htmlFor="enquiry" className="form-textarea_label">
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
          <button className="form_btn-text" type="submit">
            submit
          </button>
        </form>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img
        src="/FoxTerrier.jpg"
        className="modal_img"
        alt="Hand embroidered brooch of a Fox Terrier being held in the palm of a hand."
      />
      <h1 className="modal_heading">Thank you!</h1>
      <p className="modal_text">
        I have received your message and will reply soon.
      </p>
      <p className="modal_text">
        In the meantime you can follow me over on{" "}
        <Link className="modal_link" to={"https://www.instagram.com/jenwarmancreates/"} target="_blank">Instagram</Link>.
      </p>
            <button className="modal_button" onClick={handleCloseModal}>close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
