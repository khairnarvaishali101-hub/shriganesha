"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import Reviews from "@/components/Reviews";
import y2026 from "@/content/years/2026.json";
import y2025 from "@/content/years/2025.json";
import y2024 from "@/content/years/2024.json";
import y2023 from "@/content/years/2023.json";

// Newest first. Add each new year: import it above and add it here.
const yearsData = [y2026, y2025, y2024, y2023];
const latest = yearsData[0];


export default function Home() {
  const { lang } = useLanguage();
  const t = (en, mr) => (lang === "en" ? en : mr);

  return (
    <main className="flex-1 flex flex-col bg-haldi text-gabhara">

      {/* HERO — this year's darshan */}
      <section className="bg-gabhara px-4 pt-6 pb-10 text-center">
        <h1 className="font-display text-marigold text-3xl sm:text-4xl mb-6">
          ॥ गणपती बाप्पा मोरया ॥
        </h1>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border-4 border-gold">
          <img
            src={`/photos/${latest.year}/hero.jpg`}
            alt={latest.theme ? latest.theme[lang] : String(latest.year)}
            className="w-full h-auto"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <p className="font-sans text-haldi/80 text-sm mt-5 max-w-md mx-auto">
          {t(
            "Swipe through the years below — each card opens that year's theme, photos and video. The menu ☰ has our story, newspaper and awards.",
            "खालील वर्षांमधून स्वाइप करा — प्रत्येक कार्ड त्या वर्षाची थीम, फोटो आणि व्हिडिओ उघडतं. मेनू ☰ मध्ये आमची गोष्ट, वर्तमानपत्रं आणि पुरस्कार आहेत."
          )}
        </p>
      </section>

      {/* THE YEARS — swipe through the archive */}
      <section className="bg-gabhara text-haldi py-14 border-t border-gold/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center px-6">
            <h2 className="font-display text-3xl text-marigold">{t("Ganpati Bappa's decorations — through the years", "गणपती बाप्पांची सजावट — वर्षानुवर्षे")}</h2>
            <p className="font-sans text-haldi/60 text-sm mt-2">
              {t("Swipe to travel back through the years", "वर्षांमधून मागे जाण्यासाठी स्वाइप करा")}
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 mt-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {yearsData.map((y, idx) => (
              <Link
                key={y.year}
                href={`/${y.year}`}
                className={`snap-start shrink-0 w-44 rounded-2xl overflow-hidden bg-haldi text-gabhara border-2 transition-transform hover:-translate-y-1 ${
                  idx === 0 ? "border-marigold" : "border-gold/40"
                }`}
              >
                <div className="h-28 bg-gabhara/10">
                  {y.photos && y.photos[0] ? (
                    <img src={y.photos[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display text-3xl text-sindoor/60">
                      {formatYear(y.year, lang)}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-sans text-[11px] tracking-widest text-sindoor uppercase">
                    {formatYear(y.year, lang)}{idx === 0 ? ` · ${t("This year", "यंदा")}` : ""}
                  </p>
                  <p className="font-display text-base leading-snug mt-1 line-clamp-2">
                    {y.theme ? y.theme[lang] : t("Traditional decoration", "पारंपरिक सजावट")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  );
}
