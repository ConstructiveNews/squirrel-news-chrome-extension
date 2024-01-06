import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translationEn.json";
import translationDe from "./locales/de/translationDe.json";

const resources = {
  en: {
    translation: translationEn
  },
  de: {
    translation: translationDe
  }
};

// https://github.com/i18next/i18next-browser-languageDetector/issues/244
// https://www.i18next.com/overview/configuration-options
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    load: 'languageOnly',
    supportedLngs: ["en", "de"],
    interpolation: {
      escapeValue: false
    },
    fallbackLng: "en",
    detection: {
      convertDetectedLanguage: (lng) => lng.split('-')[0]
    }
  });


export default i18n;
