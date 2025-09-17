import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='container-home'>
        <h2 className='subtitle-name'>Front-end developer</h2>
        <h1 className='title-name'>Hola! soy Nahuel Menendez</h1>
        <div className='container-arrow'>
          <NavLink className={'arrow-down'} to='/aboutme'><FontAwesomeIcon icon={faArrowDown}/></NavLink>
        </div>
    </div>
    </>
  )
}

export default Home