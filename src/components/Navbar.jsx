import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import About from "./About/About";
import Portfolio from "./portfolio/Portfolio";

function Navbar() {
  const [openTab, setOpenTab] = useState(null);
  const [closingTab, setClosingTab] = useState(null);

  const toggleTab = (tabName) => {
    if (openTab === tabName) {
      // Start closing animation
      setClosingTab(tabName);

      setTimeout(() => {
        setOpenTab(null);
        setClosingTab(null);
      }, 400); // match CSS transition duration
    } else {
      setOpenTab(tabName);
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpenTab(null);
  }, [location]);

  const tabs = [
    { name: "About", href: "/about", className: "nav-about" },
    { name: "Portfolio", href: "/portfolio", className: "nav-portfolio" },
    { name: "Contact", href: "#", className: "nav-contact" },
  ];

  const tabContent = {
    About: <About />,
    Portfolio: <Portfolio />,
  };

  return (
    <nav className="main-navigation">
      <div
        className="logo"
        onClick={() => {
          setOpenTab(null);
          navigate("/");
        }}
      >
        <Link to="/">
          MYLOGO
          {/* <img src="/profileimg.png" alt="Logo" className="logo-img" /> */}
        </Link>
      </div>

      {tabs.map((tab) => {
        const isOpen = openTab === tab.name;

        return (
          <div
            key={tab.name}
            className={`main-navigation_tab ${tab.className} ${
              openTab === tab.name ? "open" : ""
            } ${closingTab === tab.name ? "closing" : ""}`}
            onClick={() => toggleTab(tab.name)}
            style={{ cursor: "pointer" }}
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
    </nav>
  );
}

export default Navbar;
