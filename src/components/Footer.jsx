function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p className="footer-text">Jen Warman</p>
        <p className="footer-text-embroidery">Embroidery</p>
      </div>
      <div className="footer-social-media">
        <ul className="footer-social-media-list">
          <li className="footer-social-media-item">
            <a
              href="https://www.instagram.com/jenwarmancreates/"
              className="footer-social-media-link"
              target="_blank"
            >
              <i
                className="fa-brands fa-square-instagram"
                aria-label="Instagram icon."></i>
            </a>
          </li>
          <li className="footer-social-media-item">
            <a
              href="https://www.linkedin.com/in/jen-warman-38198a172/"
              className="footer-social-media-link"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" 
              aria-label="LinkedIn Icon."></i>
            </a>
          </li>
          <li className="footer-social-media-item">
            <a
              href="mailto:info.catsandbones@gmail.com"
              className="footer-social-media-link"
              target="_blank"
            >
              <i className="fa-solid fa-square-envelope"
              aria-label="Email Icon."></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <p className="footer-contactinfo">&copy; Jen Warman Embroidery 2025</p>
        <p className="footer-contactinfo">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
