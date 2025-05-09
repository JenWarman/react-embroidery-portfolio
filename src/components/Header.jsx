import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/about" className="nav-list-link">About</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/contact" className="nav-list-link">Portfolio</Link>
            </li>
            <li className="nav-list-item">
              <a href="#contact" className="nav-list-link">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;