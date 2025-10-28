import { faCss3Alt, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_project1 from '/Images/Proyecto1-.jpeg';
import img_project2 from '/Images/Proyecto2-.jpeg';
import CSS from '/Images/CSS3.svg';
import html from '/Images/HTML5.svg';
import git from '/Images/Git.svg';
import react from '/Images/React.svg';
import tailwind from '/Images/Tailwind.svg';
import vsCode from '/Images/VS.svg';
import javascript from '/Images/JavaScript.svg';
import { useTranslation } from 'react-i18next';
import React from 'react'
import js from '@eslint/js';

function Projects() {
    const { t } = useTranslation();
  
  return (
    <>
    <div className='container-projects'>
      <h1 className='h1-title'>{t("h1-tech")}</h1>
        <div className='first-container-projects'>
          <div className='card-tech'><img src={react} alt="tech" /></div>
          <div className='card-tech'><img src={javascript} alt="tech" /></div>
          <div className='card-tech'><img src={CSS} alt="tech" /></div>
          <div className='card-tech'><img src={html} alt="tech" /></div>
          <div className='card-tech'><img src={tailwind} alt="tech" /></div>
          <div className='card-tech'><img src={git} alt="tech" /></div>
          <div className='card-tech'><img src={vsCode} alt="tech" /></div>
        </div>
      <h1 className='h1-title'>{t("h1-project")}</h1>
      <div className='second-container-projects'>
        <div className='project-card'>
          <div className='container-img-project'>
            <img src={img_project1} alt="project" />
          </div>
          <div className='container-info-project'>
            <h3 className='h3-project'>Fake Shop</h3>
            <p className='p-project'>{t("description-project1")}</p>
            <div className='container-tech-project'>
              <span className='tech'><img src={react} alt="react" /></span>
              <span className='tech'><img src={CSS} alt="css" /></span>
              <span className='tech'><img src={javascript} alt="js" /></span>
            </div>
            <div className='container-buttons-project'>
              <button style={{background: "#e4587b"}} className='btn-card'><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/NahuelMndz/FakeShop">{t("btncode")}</a></button>
              <button style={{background: "#3ab98f"}} className='btn-card'><FontAwesomeIcon icon={faEye} /> <a href="https://nahuelmndz.github.io/FakeShop/">Demo</a></button>
            </div>
          </div>
          </div>
                  <div className='project-card'>
          <div className='container-img-project'>
            <img src={img_project2} alt="project" />
          </div>
          <div className='container-info-project'>
            <h3 className='h3-project'>TiempoSur</h3>
            <p className='p-project'>{t("description-project2")}</p>
            <div className='container-tech-project'>
              <span className='tech'><img src={html} alt="react" /></span>
              <span className='tech'><img src={CSS} alt="css" /></span>
              <span className='tech'><img src={javascript} alt="js" /></span>
            </div>
            <div className='container-buttons-project'>
              <button style={{background: "#e4587b"}} className='btn-card'><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/NahuelMndz/web-TiempoSur">{t("btncode")}</a></button>
              <button style={{background: "#3ab98f"}} className='btn-card'><FontAwesomeIcon icon={faEye} /> <a href="https://nahuelmndz.github.io/web-TiempoSur/">Demo</a></button>
            </div>
          </div>
          </div>
      </div>
  </div>
    </>
  )
}

export default Projects