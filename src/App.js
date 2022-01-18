/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Quote from './Pages/Quote'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
