// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../public/locales/en.json";
import translationAR from "../public/locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
    },
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
