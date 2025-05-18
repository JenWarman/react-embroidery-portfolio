import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AboutPage from "../About/AboutPage";
import PortfolioGallery from "../portfolio/PortfolioGallery";
import Contact from "../Contact";

function Navbar() {
  const [openTab, setOpenTab] = useState(null);
  const [closingTab, setClosingTab] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: "About", href: "/about-page", className: "nav-about" },
    { name: "Portfolio", href: "/portfolio-page", className: "nav-portfolio" },
    { name: "Contact", href: "/contact", className: "nav-contact" },
  ];

  const tabContent = {
    About: <AboutPage />,
    Portfolio: <PortfolioGallery />,
    Contact: <Contact />
  };

  const toggleTab = (tabName) => {
    if (openTab === tabName) {
      setClosingTab(tabName);
      setTimeout(() => {
        setOpenTab(null);
        setClosingTab(null);
      }, 400);
    } else {
      setOpenTab(tabName);
    }
  };

  useEffect(() => {
    setOpenTab(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="main-navigation">
        <div className="logo">
  {isMobile ? (
    <img
      src="/GingerCat.jpg"
      alt="Logo"
      className="logo-img"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    />
  ) : (
    <Link to="/">
      <img
        src="/GingerCat.jpg"
        alt="Logo"
        className="logo-img"
        onClick={() => {
          setOpenTab(null);
          navigate("/");
        }}
      />
    </Link>
  )}
</div>

        {!isMobile &&
          tabs.map((tab) => {
            const isOpen = openTab === tab.name;
            return (
              <div
                key={tab.name}
                className={`main-navigation_tab ${tab.className} ${
                  isOpen ? "open" : ""
                } ${closingTab === tab.name ? "closing" : ""}`}
                onClick={() => toggleTab(tab.name)}
              >
                <span>{tab.name}</span>
                {isOpen && (
                  <div className="tab-overlay">
                    <div
                      className="main-navigation_content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tabContent[tab.name]}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

      
        {isMobile && isMobileMenuOpen && (
          <div className="mobile-menu">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-item"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
