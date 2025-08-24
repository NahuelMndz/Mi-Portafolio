import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPerson, faRocket, faPhone,faCircleDown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <>
       <div className="container-nav">
        <div className='container-nav-first'>
          <img className='perfil-img' src='../Images/perfil.jpg' alt="perfil"/>
          <h2>Nombre Apellido</h2>
        </div>
        <ul className='container-nav-second'>
           <NavLink className={'navlink'} to='/'><FontAwesomeIcon icon={faHouse}/>Inicio</NavLink>
           <NavLink className={'navlink'} to='/aboutme'><FontAwesomeIcon icon={faPerson} />Sobre Mi</NavLink>
           <NavLink className={'navlink'} to='/proyects'><FontAwesomeIcon icon={faRocket} />Proyectos</NavLink>
           <NavLink className={'navlink'} to='/contact'><FontAwesomeIcon icon={faPhone} />Contacto</NavLink>

        </ul>
        <div className='container-nav-third'>
          <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href=""><FontAwesomeIcon icon={faGithub} /></a>
          <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href=""><FontAwesomeIcon icon={faCircleDown} /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar