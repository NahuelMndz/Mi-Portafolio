import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./local/en.json";
import es from "./local/es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: localStorage.getItem("lang") || "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

// Guarda el idioma cuando cambia
i18n.on("languageChanged", (lang) => {
  localStorage.setItem("lang", lang);
});

export default i18n;
