import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
        <div className="portfolio-text">
          <Link to="/portfolio-page" className="portfolio-link">
          <h1 className="portfolio-heading">portfolio</h1>
          </Link>
          <Link to="/portfolio-page" className="portfolio-link">see more...</Link>
        </div>
      </section>
    )
}

export default Portfolio;