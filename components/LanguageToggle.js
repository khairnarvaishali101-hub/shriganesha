"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="border border-gold bg-gold text-gabhara font-sans px-4 py-1.5 rounded-full text-sm hover:bg-marigold transition-colors"
    >
      {lang === "en" ? "मराठी" : "English"}
    </button>
  );
}