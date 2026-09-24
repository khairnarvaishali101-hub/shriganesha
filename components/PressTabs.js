"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import press from "@/content/press.json";

function Meta({ item, lang }) {
  return (
    <p className="font-sans text-xs uppercase tracking-widest text-sindoor">
      {item.outlet} · {formatYear(item.year, lang)}
      {item.date ? ` · ${formatYear(item.date, lang)}` : ""}
    </p>
  );
}

export default function PressTabs() {
  const { lang } = useLanguage();
  const [tab, setTab] = useState("newspaper");

  const newspaper = press.newspaper || [];
  const tv = press.tv || [];
  if (newspaper.length === 0 && tv.length === 0) return null;

  const t = (en, mr) => (lang === "en" ? en : mr);
  const tabClass = (name) =>
    `font-sans px-5 py-2 rounded-full border transition-colors ${
      tab === name
        ? "bg-gabhara text-haldi border-gabhara"
        : "border-gold text-gabhara hover:bg-gold hover:text-haldi"
    }`;

  return (
    <section className="px-6 py-14">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h2 className="font-display text-3xl">{t("In the News", "प्रसिद्धी")}</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={() => setTab("newspaper")} className={tabClass("newspaper")}>
            📰 {t("Newspaper", "वर्तमानपत्र")}
          </button>
          <button onClick={() => setTab("tv")} className={tabClass("tv")}>
            📺 {t("TV News", "टीव्ही")}
          </button>
        </div>

        {tab === "newspaper" && (
          <div className="flex flex-col gap-6">
            {newspaper.length === 0 && (
              <p className="font-sans text-center text-sindoor">{t("Coming soon.", "लवकरच.")}</p>
            )}
            {newspaper.map((item) => (
              <article key={item.image} className="border border-gold/50 rounded-2xl overflow-hidden bg-white/40">
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
                  <img src={item.image} alt={item.title[lang]} loading="lazy" className="w-full h-auto" />
                </a>
                <div className="p-4">
                  <Meta item={item} lang={lang} />
                  <p className="font-display text-lg mt-1">{item.title[lang]}</p>
                  <p className="font-sans text-xs text-gabhara/60 mt-2">
                    {t("Tap the clipping to read it full size", "पूर्ण आकारात वाचण्यासाठी कात्रणावर टॅप करा")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "tv" && (
          <div className="flex flex-col gap-6">
            {tv.length === 0 && (
              <p className="font-sans text-center text-sindoor">{t("Coming soon.", "लवकरच.")}</p>
            )}
            {tv.map((item) => (
              <article key={item.videoId} className="border border-gold/50 rounded-2xl overflow-hidden bg-white/40">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
                    title={item.title[lang]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <Meta item={item} lang={lang} />
                  <p className="font-display text-lg mt-1">{item.title[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
