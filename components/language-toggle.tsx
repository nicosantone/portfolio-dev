"use client";

import { useLanguage } from "@/context/language-context";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="fixed top-5 right-5 z-50 px-3 py-1 text-sm border rounded-lg bg-white/10 hover:bg-white/20 transition"
    >
      {lang === "es" ? "ENG" : "ESP"}
    </button>
  );
};

export default LanguageToggle;