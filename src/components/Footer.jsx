import { div, footer } from 'framer-motion/client'
import React from 'react'
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();
  
  return (
    <div className='footer'>
        <p className='p-footer'>{t("footer")}</p>
    </div>
  )
}

export default Footer