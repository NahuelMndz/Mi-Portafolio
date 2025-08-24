import { faComment, faEnvelope, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFileArrowDown, faLocationDot, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
  return (
    <>
    <div className='main-container-contact'>
      <h1 className='h1-contact'>Contacto</h1>
      <div className='first-container-contact'>
        <div className='left-container-contact'>
          <div className='contact-card'>
            <span className='icon-container-contact'><FontAwesomeIcon icon={faLocationDot} /></span>
            <div className='flex-container-contact'>
              <h2 className='h2-contact'>Ubicación</h2>
              <p className='p-contact'>Argentina, Santa Fe, Capital</p>
              </div>
          </div>
          <div className='contact-card'>
            <span className='icon-container-contact'><FontAwesomeIcon icon={faEnvelope} /></span>
            <div className='flex-container-contact'>
              <h2 className='h2-contact'>Email</h2>
              <p className='p-contact'>Mi_correo@gmail.com</p>
              </div>
          </div>
          <div className='contact-card'>
            <span className='icon-container-contact'><FontAwesomeIcon icon={faFileArrowDown} /></span>
            <div className='flex-container-contact'>
              <h2 className='h2-contact'>Mi curriculum</h2>
              <p className='p-contact'><a className='cv-link' href="#">Click aqui para <i className='download'>Descargar</i>!</a></p>
              </div>
          </div>
        </div>
        <div className='right-container-contact'>
          <form className='contact-form' action="" method='POST'>
            <div className='form-group'>
              <FontAwesomeIcon className='icon-form' icon={faUser} />
              <input type="text" id='name' placeholder='Nombre'/>
            </div>
              <div className='form-group'>
              <FontAwesomeIcon className='icon-form' icon={faEnvelope } />
              <input type="email" id='email' placeholder='Correo'/>
            </div>
              <div className='form-group'>
              <FontAwesomeIcon className='icon-form' icon={faTag} />
              <input type="text" id='name' placeholder='Asunto'/>
            </div>
              <div className='form-group-textarea'>
              <FontAwesomeIcon className='icon-form' icon={faComment} />
              <textarea name="message" id="message" rows='5' placeholder='Escribe tu mensaje aqui...'></textarea>
            </div>
            <button className='btn-form'>Enviar <FontAwesomeIcon icon={faPaperPlane} /></button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact