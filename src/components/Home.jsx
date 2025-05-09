import About from "./About";
import Header from "./Header";

import '../css/styles.css';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    return (
       <div className="container">
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default Home;