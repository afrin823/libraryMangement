import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageControl = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "bn" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <span
      onClick={toggleLanguage}
      className="font-medium bg-secondary m-0 text-natural p-1 cursor-pointer hover:bg-primary"
    >
      {currentLanguage === "en" ? "বাংলা" : "Eng"}
    </span>
  );
};

export default LanguageControl;
