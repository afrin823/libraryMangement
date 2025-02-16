import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import home from "./languageManageByPage/home.json";
import rules from "./languageManageByPage/rules.json";
import scholarship from "./languageManageByPage/scholarship.json";
import about from "./languageManageByPage/about.json";
import contact from "./languageManageByPage/contact.json";
import register from "./languageManageByPage/register.json";
import login from "./languageManageByPage/login.json";
import books from "./languageManageByPage/books.json";
import notice from "./languageManageByPage/notice.json";
import gallery from "./languageManageByPage/gallery.json";

const resources = {
  en: {
    home: home.en,
    rules: rules.en,
    scholarship: scholarship.en,
    about: about.en,
    contact: contact.en,
    register: register.en,
    login: login.en,
    books: books.en,
    notice: notice.en,
    gallery: gallery.en,
  },
  bn: {
    home: home.bn,
    rules: rules.bn,
    scholarship: scholarship.bn,
    about: about.bn,
    contact: contact.bn,
    register: register.bn,
    login: login.bn,
    books: books.bn,
    notice: notice.bn,
    gallery: gallery.bn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
