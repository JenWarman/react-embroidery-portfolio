import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/About/AboutPage";
import Navbar from "./components/Navigation/Navbar";
import PortfolioGallery from "./components/portfolio/PortfolioGallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio-page" element={<PortfolioGallery />}></Route>
        <Route path="/about-page" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
