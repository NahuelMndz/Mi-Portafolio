import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import AboutMe from './Pages/AboutMe'
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Proyects from "./Pages/Proyects";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <div className='container-portafolio'>
        <Router>
      <Navbar/>
      <div className="container-main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/proyects" element={<Proyects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      </Router>
    </div>
    </>
  )
}

export default App
