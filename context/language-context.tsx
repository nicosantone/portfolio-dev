"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

const LanguageContext = createContext({
  lang: "es" as Language,
  setLang: (lang: Language) => {},
});

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<Language>("es");

  // 🔥 cargar idioma guardado
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  // 🔥 guardar idioma cuando cambia
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);