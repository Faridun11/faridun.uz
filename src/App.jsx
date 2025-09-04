import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import About from "./page/About/About"
import Portfolio from "./page/Portfolio/Portfolio"
import Contact from "./page/Contact/Contact"
import SingleProject from './pages/SinglePage/SinglePage'
import ScrollToTop from './components/ScrollTop/ScrollTop'
import './App.css'

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/AboutMe' element={<About />} />
        <Route path='/MyPortfolio' element={<Portfolio />} />
        <Route path="/MyPortfolio/:id" element={<SingleProject />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
