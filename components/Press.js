"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import press from "@/content/press.json";


export default function Press() {
  const { lang } = useLanguage();
  const t = (en, mr) => (lang === "en" ? en : mr);

  return (
    <section className="px-6 py-14">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h1 className="font-display text-3xl">{t("In the News", "प्रसिद्धी")}</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-gabhara/70 mt-3">
            {t("Tap a clipping to read it full size", "पूर्ण आकारात वाचण्यासाठी कात्रणावर टॅप करा")}
          </p>
        </div>

        {press.length === 0 && (
          <p className="font-sans text-center text-sindoor">{t("Coming soon.", "लवकरच.")}</p>
        )}

        <div className="flex flex-col gap-6">
          {press.map((item) => (
            <article key={item.image} className="border border-gold/50 rounded-2xl overflow-hidden bg-white/40">
              <a href={item.image} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
                <img src={item.image} alt={item.title[lang]} loading="lazy" className="w-full h-auto max-h-[75vh] object-cover object-top" />
              </a>
              <div className="p-4">
                <p className="font-sans text-xs uppercase tracking-widest text-sindoor">
                  {item.outlet} · {formatYear(item.year, lang)}
                  {item.date ? ` · ${formatYear(item.date, lang)}` : ""}
                </p>
                <p className="font-display text-lg mt-1">{item.title[lang]}</p>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
