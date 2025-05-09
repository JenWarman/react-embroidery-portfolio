import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutPage from './components/About/AboutPage'
import PortfolioPage from './components/portfolio/PortfolioPage'



function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/portfolio' element={<PortfolioPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
