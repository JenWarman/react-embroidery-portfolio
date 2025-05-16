import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <div className="bg"></div>
      <div className="about_image">
        <img src="/profileimg.png" alt="" />
      </div>
      <div className="about_text">
        <Link to="/about-page" className="about_link-heading">
          <h1 className="about-heading">About</h1>
        </Link>
        <p className="about_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur
          cum ullam adipisci odio facilis saepe enim. Officiis dicta voluptatem
          rem magni eveniet accusamus nesciunt.
        </p>
        <div className="about_link-container">
        <Link to="/about-page" className="about_link-button">
          learn more
        </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
