import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import imgLanguage from '/Images/traducir.png';
import LanguageButton from './LanguageButton';

function Navbar() {
  return (
    <>
      <div className="container-nav">
        <div className='container-nav-social'>
          <a className='social' target="_blank" href="https://github.com/NahuelMndz"><FontAwesomeIcon icon={faGithub} /></a>
          <a className='social' target="_blank" href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
          <LanguageButton/>
      </div>
    </>
  )
}

export default Navbar