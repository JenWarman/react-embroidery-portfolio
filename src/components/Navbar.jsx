import { useState } from 'react';

import Home from './Home';
import About from './About/About';
import Portfolio from './portfolio/Portfolio';

function Navbar() {
  const [openTab, setOpenTab] = useState(null);

  const tabs = [
    { name: 'Home', href: '/', className: 'nav-home' },
    { name: 'About', href: '/about', className: 'nav-about' },
    { name: 'Portfolio', href: '/portfolio', className: 'nav-portfolio' },
    { name: 'Contact', href: '#', className: 'nav-contact' },
  ];

  const tabContent = {
    Home: <Home/>,
    About: <About/>,
    Portfolio: <Portfolio/>
  }
  return (
   <nav className="main-navigation">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className={`main-navigation_tab ${tab.className} ${openTab === tab.name ? 'open' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            if (tab.name === 'Home') return; 
            setOpenTab(openTab === tab.name ? null : tab.name);
          }}
        >
          <span>{tab.name}</span>
          {openTab === tab.name && (
            <div className="main-navigation_content">
              {tabContent[tab.name]}
            </div>
          )}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
