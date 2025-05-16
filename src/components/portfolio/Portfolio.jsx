import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
        <div className="portfolio_text">
          <Link to="/portfolio-page" className="portfolio_link-heading">
          <h1 className="portfolio-heading">portfolio</h1>
          </Link>
          <div className="portfolio_link-container">
        <Link to="/portfolio-page" className="portfolio_link-button">
          see more
        </Link>
        </div>
        </div>
      </section>
    )
}

export default Portfolio;