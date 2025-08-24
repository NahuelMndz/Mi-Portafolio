import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Proyects() {
  return (
    <>
    <div className='main-container-proyects'>
      <h1 className='h1-proyects'>Proyectos</h1>
      <div className='first-container-proyects'>
        <div className='container-proyects'>
          <div className='project-card'>
            <img className='img-project' src="../Images/project-image.jpg" alt="project" />
              <h3 className='h3-project'>Projecto 1</h3>
              <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum ab!</p>
              <div className='tech-project'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <span className='tech'>Javascript</span>
              </div>
              <div className='footer-project'>
                <button className='btn-code'><FontAwesomeIcon icon={faGithub}/> Código</button>
                <button className='btn-demo'><FontAwesomeIcon icon={faEye} /> Demo</button>
              </div>
          </div>
          <div className='project-card'>
            <img className='img-project' src="../Images/project-image.jpg" alt="project" />
              <h3 className='h3-project'>Projecto 2</h3>
              <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum ab!</p>
              <div className='tech-project'>
                <span className='tech'>React</span>
                <span className='tech'>Javascript</span>
                <span className='tech'>CSS</span>
              </div>
              <div className='footer-project'>
                <button className='btn-code'><FontAwesomeIcon icon={faGithub}/> Código</button>
                <button className='btn-demo'><FontAwesomeIcon icon={faEye} /> Demo</button>
              </div>
          </div>
        </div>
      </div>                     
    </div>
    </>
  )
}

export default Proyects