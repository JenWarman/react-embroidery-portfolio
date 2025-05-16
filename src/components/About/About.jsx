import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <div className="bg"></div>
      <div className="about-image">
        <img src="/profileimg.png" alt="" />
      </div>
      <div className="about-text">
        <Link to="/about-page" className="about-link">
          <h1 className="about-heading">About</h1>
        </Link>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur
          cum ullam adipisci odio facilis saepe enim. Officiis dicta voluptatem
          rem magni eveniet accusamus nesciunt.
        </p>
        <Link to="/about-page" className="about-link">
          <div className="btn">
            <span className="btn-text">Learn more</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default About;
