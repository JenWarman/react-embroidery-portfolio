import About from "./About";
import Header from "./Header";

import '../css/styles.css';

function Home() {
    return (
       <div className="container">
        <Header/>
        <About/>
        </div>
    )
}

export default Home;