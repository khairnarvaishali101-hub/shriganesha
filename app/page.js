"use client";

import Link from "next/link";
import ganpati2026 from "@/content/years/2026.json";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <main className="flex-1 flex flex-col bg-haldi text-gabhara">

      {/* HERO — the 2026 darshan */}
      <section className="bg-gabhara px-4 pt-6 pb-10 text-center">
        <h1 className="font-display text-marigold text-3xl sm:text-4xl mb-6">
          ॥ गणपती बाप्पा मोरया ॥
        </h1>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border-4 border-gold">
          <img
  src="/photos/2026/hero.jpg"
  alt="Ganpati decoration 2026"
  className="w-full h-auto"
  loading="eager"
  fetchPriority="high"
/>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 mt-6">
          <p className="font-sans text-haldi">
            {lang === "en"
              ? "Our family's Ganpati tradition, since 2010 — Dallas, Texas."
              : "आमच्या कुटुंबाची गणपती परंपरा, २०१० पासून — डॅलस, टेक्सास."}
          </p>
          <Link
            href="/2026"
            className="font-sans bg-marigold text-gabhara font-semibold px-8 py-3 rounded-full hover:bg-gold transition-colors"
          >
            {lang === "en"
              ? `${ganpati2026.year} — ${ganpati2026.theme.en}`
              : `${ganpati2026.year} — ${ganpati2026.theme.mr}`}
          </Link>
        </div>
      </section>

      {/* THE YEARS */}
      <section className="bg-gabhara text-haldi px-6 py-14 border-t border-gold/30">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-display text-3xl text-marigold">
            {lang === "en" ? "The years" : "वर्षानुवर्षे"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/2026" className="font-sans border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-gabhara transition-colors">
              2026
            </Link>
            <Link href="/2025" className="font-sans border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-gabhara transition-colors">
              2025
            </Link>
          </div>
          <p className="font-sans text-haldi/60 text-sm">
            {lang === "en" ? "More years coming soon — back to 2011." : "आणखी वर्षे लवकरच — २०११ पर्यंत."}
          </p>
        </div>
      </section>
    </main>
  );
}