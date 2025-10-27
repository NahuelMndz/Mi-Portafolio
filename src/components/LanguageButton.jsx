import { useTranslation } from "react-i18next";
import imgLanguage from '/Images/traducir.png';

function LanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="changeLanguage"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <img
        src={imgLanguage}
        className="img-change"
        alt="language"
        width="32"
        height="32"
      />
    </button>
  );
}

export default LanguageButton;
