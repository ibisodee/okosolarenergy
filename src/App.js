/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Quote from './Pages/Quote'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat'

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
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <MessengerCustomerChat pageId="100204572586631" appId=" " htmlRef="We are Live on Whatsapp" />
        <Footer />
      </Router>
  )
}

export default App
