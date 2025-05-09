import About from "./About";
import Header from "./Header";

import '../css/styles.css';
import Portfolio from "./Portfolio";

function Home() {
    return (
       <div className="container">
        <Header/>
        <About/>
        <Portfolio/>
        </div>
    )
}

export default Home;