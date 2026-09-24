"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyNote() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem("privacyNoteSeen")) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem("privacyNoteSeen", "yes");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-gabhara text-haldi px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-gold/40">
      <p className="font-sans text-sm text-center">
        {lang === "en"
          ? "This site uses no tracking cookies or analytics — just photos, stories, and Bappa. 🙏"
          : "ही वेबसाइट कोणतेही ट्रॅकिंग कुकीज किंवा अॅनालिटिक्स वापरत नाही — फक्त फोटो, गोष्टी आणि बाप्पा. 🙏"}
      </p>
      <button
        onClick={dismiss}
        className="font-sans bg-gold text-gabhara px-4 py-1.5 rounded-full text-sm hover:bg-marigold transition-colors"
      >
        {lang === "en" ? "Got it" : "ठीक आहे"}
      </button>
    </div>
  );
}
