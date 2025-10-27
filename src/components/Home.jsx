import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();
  return (
    <>
    <div className='container-home'>
        <h2 className='subtitle-name'>{t("subtitle-name")}</h2>
        <h1 className='title-name'>{t("title-name")}</h1>
        <div className='container-arrow'>
          <a href="#aboutme"><FontAwesomeIcon className='colorred' icon={faArrowDown} /></a>
        </div>
    </div>
    </>
  )
}

export default Home