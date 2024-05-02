import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e) => {
    let opt = document.getElementsByTagName("Button");
    if (e.target.value === "fr") {
      i18n.changeLanguage("en");
      e.target.value = "en";
      opt[0].textContent = "ENG";
    } else {
      i18n.changeLanguage("fr"); //change the language
      e.target.value = "fr";
      opt[0].textContent = "FRA";
    }
  };

  return (
    <LanguageContext.Provider value={{ t, i18n, onClickLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
