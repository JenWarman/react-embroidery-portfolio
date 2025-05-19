import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <section className="confirmation">
      <img
        src="/FoxTerrier.jpg"
        className="confirmation_img"
        alt="Hand embroidered brooch of a Fox Terrier being held in the palm of a hand."
      />
      <h1 className="confirmation_heading">Thank you!</h1>
      <p className="confirmation_text">
        I have received your message and will reply soon.
      </p>
      <p className="confirmation_text">
        In the meantime you can follow me over on{" "}
        <Link className="confirmation_link">Instagram</Link>.
      </p>
    </section>
  );
}

export default Confirmation;