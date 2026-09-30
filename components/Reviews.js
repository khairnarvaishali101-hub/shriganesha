"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import reviews from "@/content/reviews.json";

export default function Reviews() {
  const { lang } = useLanguage();
  const [i, setI] = useState(0);
  const t = (en, mr) => (lang === "en" ? en : mr);
  const n = reviews.length;

  const prev = () => setI((k) => (k - 1 + n) % n);
  const next = () => setI((k) => (k + 1) % n);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  if (n === 0) return null;
  const r = reviews[i];

  return (
    <section className="bg-gabhara text-haldi px-6 py-14 border-t border-gold/30">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center">
        <h2 className="font-display text-3xl text-marigold">
          {t("Valued Reviews", "मूल्यवान अभिप्राय")}
        </h2>

        <div className="relative">
          <button
            onClick={prev}
            aria-label={t("Previous", "मागे")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold text-haldi hover:bg-gold hover:text-gabhara transition-colors z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label={t("Next", "पुढे")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold text-haldi hover:bg-gold hover:text-gabhara transition-colors z-10"
          >
            ›
          </button>

          <blockquote
            key={i}
            className="mx-12 sm:mx-16 relative border border-gold/50 rounded-2xl px-6 py-8 bg-black/15"
          >
            <span className="absolute -top-4 left-5 font-display text-marigold text-5xl leading-none select-none">“</span>
            <p className="font-sans text-lg leading-relaxed">{r.text[lang]}</p>
            <footer className="font-sans text-sm text-marigold mt-5 tracking-wide">
              — {r.from ? r.from[lang] : t("A well-wisher", "एक हितचिंतक")}
              {r.year ? ` · ${formatYear(r.year, lang)}` : ""}
            </footer>
          </blockquote>
        </div>

        <div className="flex justify-center gap-2" aria-hidden="true">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${k === i ? "bg-marigold" : "bg-haldi/30"}`}
            />
          ))}
        </div>
        <p className="font-sans text-xs text-haldi/50">
          {formatYear(i + 1, lang)} / {formatYear(n, lang)}
        </p>
      </div>
    </section>
  );
}
