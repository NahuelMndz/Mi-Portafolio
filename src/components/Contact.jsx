import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cv from '../assets/Nahuel-Menendez-cv.pdf'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm'


function Contact() {
    const { t } = useTranslation();
  
  return (
    <>
    <div className='container-contact'>
      <h1 className='h1-title'>{t("h1-contact")}</h1>
      <div className='first-container-contact'>
        <div className='container-socials'>
          <h3 className='h3-social'>{t("h3-networks")}</h3>
          <a style={{border: "1px solid #2563eb66", background: "#2563eb66"}} className='button-social' target="_blank" href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
          <a style={{border: "1px solid #dc262666", background: "#dc262666"}} className='button-social' ><FontAwesomeIcon icon={faEnvelope} /> nahuelcolonn12@gmail.com</a>
          <a style={{border: "1px solid #66728366", background: "#1f293766"}} className='button-social' target="_blank" href="https://github.com/NahuelMndz+"><FontAwesomeIcon icon={faGithub} /> Github</a>
          <a style={{border: "1px solid #e9ad2d66", background: "#e9ad2d66"}} className='button-social' href={cv} download={'CV-nahuel-menendez.pdf'} ><FontAwesomeIcon icon={faFileArrowDown} /> Mi CV</a>
        </div>
        <ContactForm/>
      </div>
    </div>
    </>
  )
}

export default Contact