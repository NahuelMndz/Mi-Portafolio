import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
      const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bsfbj7t",      // 👈 reemplazá con tu Service ID
        "template_5968o4n",     // 👈 reemplazá con tu Template ID
        form.current,
        "5J5fWJIa_hlCK6vpm"       // 👈 reemplazá con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Error al enviar el mensaje, intenta de nuevo.");
        }
      );

  };

  return (
    <form class="container-socials" action="#" method="POST" ref={form} onSubmit={sendEmail}>
      <h3 className='h3-social'>{t("h3-sendme")}</h3>
      <div class="form-group">
        <input type="text" id="name" name="name" placeholder={t("form-name")} required />
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" placeholder={t("form-email")} required />
      </div>
      <div class="form-group">
        <textarea id="message" name="message" rows="5" placeholder={t("formTextarea")} required></textarea>
      </div>
      <button type="submit" class="submit-btn">{t("btnForm")}</button>
    </form>
  );
};

export default ContactForm;
