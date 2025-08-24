import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home() {
  return (
    <>
    <div className='container-home'>
        <h2 className='subtitle-name'>Front-end developer</h2>
        <h1 className='title-name'>Hola! soy Nombre Apellido</h1>
        <div className='container-arrow'>
          <span className='arrow-down'><FontAwesomeIcon icon={faArrowDown} /></span>
        </div>
    </div>
    </>
  )
}

export default Home