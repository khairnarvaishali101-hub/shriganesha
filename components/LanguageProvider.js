"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext("en");

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  function toggleLanguage() {
    setLang(lang === "en" ? "mr" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}