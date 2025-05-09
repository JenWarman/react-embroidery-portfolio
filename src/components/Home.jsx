import Portfolio from "./portfolio/Portfolio";
import Contact from "./Contact";
import About from "./About/About";
import Header from "./Header";

import '../css/styles.css';


function Home() {
    return (
       <div className="container">
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        </div>
    )
}

export default Home;