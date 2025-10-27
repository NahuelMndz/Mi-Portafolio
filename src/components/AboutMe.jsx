import React from 'react'
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();
  
  return (
    <>
      <div className='container-aboutme' id='aboutme'>
        <div className='aboutme-left'>
          <h1 className='h1-aboutme'>{t("about")}</h1>
          <p className='p-aboutme'>{t("p-aboutme")}</p>
        </div>
        <div className='aboutme-right'>
          <div className='aboutme-image-perfil'>Foto de Perfil</div>
        </div>
      </div>
    </>
  )
}

export default AboutMe