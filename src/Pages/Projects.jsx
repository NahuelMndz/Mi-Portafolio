import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_project1 from '/Images/Proyecto1-.jpeg';
import img_project2 from '/Images/Proyecto2-.jpeg';

import React from 'react'

function Projects() {
  return (
    <>
    <div className='main-container-projects'>
      <h1 className='h1-projects'>Proyectos</h1>
      <div className='first-container-projects'>
        <div className='container-projects'>
          <div className='project-card'>
            <img className='img-project' src={img_project1} alt="project" />
              <h3 className='h3-project'>Fake Shop</h3>
              <p className='p-project'>Fake Shop es un Ecommerce ficticio, creado con React, Javascript y CSS.</p>
              <div className='tech-project'>
                <span className='tech'>React</span>
                <span className='tech'>CSS</span>
                <span className='tech'>Javascript</span>
              </div>
              <div className='footer-project'>
                <button className='btn-code'><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/NahuelMndz/FakeShop">Código</a></button>
                <button className='btn-demo'><FontAwesomeIcon icon={faEye} /> <a href="https://nahuelmndz.github.io/FakeShop/">Demo</a></button>
              </div>
          </div>
          <div className='project-card'>
            <img className='img-project' src={img_project2} alt="project" />
              <h3 className='h3-project'>TiempoSur</h3>
              <p className='p-project'>TiempoSur es una pagina que muestra el clima de las ciudades de America de Sur.</p>
              <div className='tech-project'>
                <span className='tech'>HTML</span>
                <span className='tech'>Javascript</span>
                <span className='tech'>CSS</span>
              </div>
              <div className='footer-project'>
                <button className='btn-code'><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/NahuelMndz/web-TiempoSur">Código</a></button>
                <button className='btn-demo'><FontAwesomeIcon icon={faEye} /><a href="https://nahuelmndz.github.io/web-TiempoSur/">Demo</a></button>
              </div>
          </div>
        </div>
      </div>                     
    </div>
    </>
  )
}

export default Projects