"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import certificates from "@/content/certificates.json";

export function CertificateGrid({ items, lang }) {
  const t = (en, mr) => (lang === "en" ? en : mr);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <a
          key={item.image}
          href={item.image}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-marigold/70 rounded-2xl overflow-hidden bg-white/50 hover:-translate-y-1 hover:shadow-lg transition-all cursor-zoom-in"
        >
          <div className="relative aspect-[4/3] bg-haldi">
            <img
              src={item.image}
              alt={item.title[lang]}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <span className="absolute top-2 right-2 text-[10px] font-sans bg-gabhara/80 text-haldi px-2 py-0.5 rounded-full">
              🔍 {t("View", "पहा")}
            </span>
          </div>
          <div className="p-3">
            <p className="font-sans text-[10px] uppercase tracking-widest text-sindoor">
              🏆 {formatYear(item.year, lang)}
            </p>
            <p className="font-display text-sm mt-1 leading-snug line-clamp-2">{item.title[lang]}</p>
            {item.by && <p className="font-sans text-xs text-gabhara/60 mt-1">{item.by}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Certificates() {
  const { lang } = useLanguage();
  const t = (en, mr) => (lang === "en" ? en : mr);
  const years = [...new Set(certificates.map((c) => c.year))].sort((a, b) => b - a);

  return (
    <section className="px-6 py-14">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-display text-3xl">{t("Awards & Recognition", "पुरस्कार आणि मान्यता")}</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-gabhara/70 mt-3">
            {t("Tap a certificate to view it full size", "पूर्ण आकारात पाहण्यासाठी प्रमाणपत्रावर टॅप करा")}
          </p>
        </div>

        {certificates.length === 0 && (
          <p className="font-sans text-center text-sindoor">{t("Coming soon.", "लवकरच.")}</p>
        )}

        {years.map((year) => (
          <div key={year} className="flex flex-col gap-4">
            <h2 className="font-display text-2xl text-sindoor border-b border-gold/40 pb-2">
              {formatYear(year, lang)}
            </h2>
            <CertificateGrid items={certificates.filter((c) => c.year === year)} lang={lang} />
          </div>
        ))}
      </div>
    </section>
  );
}