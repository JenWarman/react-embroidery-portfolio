import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutPage from './components/About/AboutPage'
import Navbar from './components/Navbar'
import PortfolioGallery from './components/portfolio/PortfolioGallery'



function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/portfolio' element={<PortfolioGallery/>}></Route>
     </Routes>
    </>
  )
}

export default App
