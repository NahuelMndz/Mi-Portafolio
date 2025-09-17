import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function AboutMe() {
  return (
    <>
      <div className='main-container-aboutme'>
        <h1 className='h1-aboutme'>Sobre Mi</h1>
        <div className='first-container-aboutme'>
          <p className='p-aboutme'>Soy <span className='span-name'>Nahuel Menendez</span> de Santa fe, Argentina. Disfruto transformar ideas en experiencias digitales dinámicas, combinando código limpio con un diseño atractivo y funcional. Actualmente me especializo en React, JavaScript, HTML y CSS, y busco constantemente aprender nuevas tecnologías para seguir creciendo como desarrollador. Mi objetivo es aportar valor en cada proyecto creando soluciones creativas, intuitivas y eficientes.</p>
          <button className='button-aboutme'>Descargar CV</button>
        </div>
        <div className='container-arrow'>
           <NavLink className={'arrow-down'} to='/projects'><FontAwesomeIcon icon={faArrowDown}/></NavLink>
        </div>
      </div>
    </>
  )
}

export default AboutMe