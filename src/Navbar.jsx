import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPerson, faRocket, faPhone,faCircleDown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import img_perfil from '../Images/perfil.jpg';
import cv from './assets/Nahuel-Menendez-cv.pdf'

function Navbar() {
  return (
    <>
       <div className="container-nav">
        <div className='container-nav-first'>
          <img className='perfil-img' src={img_perfil} alt="perfil"/>
          <h2 className='h2-nav'><span className='span-h2-nav'>{'<'}</span>Nahuel Menendez<span className='span-h2-nav'>{'/>'}</span></h2>
        </div>
        <ul className='container-nav-second'>
           <NavLink className={'navlink'} to='/'><FontAwesomeIcon icon={faHouse}/>Inicio</NavLink>
           <NavLink className={'navlink'} to='/aboutme'><FontAwesomeIcon icon={faPerson} />Sobre Mi</NavLink>
           <NavLink className={'navlink'} to='/projects'><FontAwesomeIcon icon={faRocket} />Proyectos</NavLink>
           <NavLink className={'navlink'} to='/contact'><FontAwesomeIcon icon={faPhone} />Contacto</NavLink>
        </ul>
        <ul className='container-nav-second-movil'>
           <NavLink className={'navlink'} to='/'><FontAwesomeIcon icon={faHouse}/></NavLink>
           <NavLink className={'navlink'} to='/aboutme'><FontAwesomeIcon icon={faPerson} /></NavLink>
           <NavLink className={'navlink'} to='/projects'><FontAwesomeIcon icon={faRocket} /></NavLink>
           <NavLink className={'navlink'} to='/contact'><FontAwesomeIcon icon={faPhone} /></NavLink>
        </ul>
        <div className='container-nav-third'>
          <a href="https://github.com/NahuelMndz"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/nahuel-men%C3%A9ndez-84780a293/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href={cv} download='CV-nahuel-menendez.pdf'><FontAwesomeIcon icon={faCircleDown} /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar