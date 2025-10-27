import './App.css'
import AboutMe from './components/AboutMe'
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className='container-portafolio'>
      <Navbar/>
      <main>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <AnimatedBackground />
        <Footer/>
      </main>
    </div>
    </>
  )
}

export default App
