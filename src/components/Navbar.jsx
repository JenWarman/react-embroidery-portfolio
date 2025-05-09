import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/about" className="nav-list-link">
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/portfolio" className="nav-list-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-list-item">
          <a href="#contact" className="nav-list-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
