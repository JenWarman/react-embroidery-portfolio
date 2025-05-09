function About() {
    return (
        <section className="about" id="about">
        <div className="bg"></div>
        <div className="about-image">
          <img src="/profileimg.png" alt="" />
        </div>
        <div className="about-text">
          <h1 className="about-heading">About</h1>

          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            tenetur cum ullam adipisci odio facilis saepe enim. Officiis dicta
            voluptatem rem magni eveniet accusamus nesciunt.
          </p>
          <a href="" className="about-link">
            <div className="about-btn">
              <span className="about-btn-text">Learn more</span>
            </div>
          </a>
        </div>
      </section>
    )
}

export default About;