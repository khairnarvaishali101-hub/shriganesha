"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import press from "@/content/press.json";

export default function Press() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const t = (en, mr) => (lang === "en" ? en : mr);

  const years = [...new Set(press.map((p) => p.year))].sort((a, b) => b - a);
  const allImages = press.map((p) => p.image); // lightbox navigates across everything, in file order

  return (
    <section className="px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h1 className="font-display text-3xl">{t("In the News", "प्रसिद्धी")}</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-gabhara/70 mt-3">
            {t("Tap a clipping to read it", "वाचण्यासाठी कात्रणावर टॅप करा")}
          </p>
        </div>

        {press.length === 0 && (
          <p className="font-sans text-center text-sindoor">{t("Coming soon.", "लवकरच.")}</p>
        )}

        {years.map((year) => (
          <div key={year} className="flex flex-col gap-3">
            <h2 className="font-display text-xl text-sindoor border-b border-gold/40 pb-1">
              {formatYear(year, lang)}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {press
                .filter((item) => item.year === year)
                .map((item) => (
                  <button
                    key={item.image}
                    onClick={() => setOpenIndex(allImages.indexOf(item.image))}
                    className="text-left border border-gold/50 rounded-xl overflow-hidden bg-white/40 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-zoom-in"
                  >
                    <div className="relative aspect-[4/3] bg-haldi">
                      <img
                        src={item.image}
                        alt={item.title[lang]}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-sans text-[9px] uppercase tracking-wider text-sindoor truncate">
                        {item.outlet.split(" · ")[0]}
                      </p>
                      <p className="font-sans text-[9px] text-gabhara/60">
                        {item.date ? formatYear(item.date, lang) : ""}
                      </p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        photos={allImages}
        index={openIndex}
        alt={t("Newspaper clipping", "वर्तमानपत्रातील कात्रण")}
        onClose={() => setOpenIndex(null)}
        onPrev={() => setOpenIndex((i) => Math.max(0, i - 1))}
        onNext={() => setOpenIndex((i) => Math.min(allImages.length - 1, i + 1))}
      />
    </section>
  );
}
