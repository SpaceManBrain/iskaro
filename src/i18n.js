import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import nb from "./locales/nb.json";
import sv from "./locales/sv.json";

const savedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("iskaro_language") : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sv: { translation: sv },
    nb: { translation: nb },
  },
  lng: savedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.resolvedLanguage || i18n.language || "en";
}

export default i18n;
