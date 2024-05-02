import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import French from "./data/translation/French.json";
import English from "./data/translation/English.json";

const resources = {
  fr: {
    translation: French,
  },
  en: {
    translation: English,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "fr", //default language
});

export default i18next;
