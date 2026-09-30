"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import Reviews from "@/components/Reviews";
import y2026 from "@/content/years/2026.json";
import y2025 from "@/content/years/2025.json";
import y2024 from "@/content/years/2024.json";

// Newest first. Add each new year: import it above and add it here.
const yearsData = [y2026, y2025, y2024];
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
            "Choose a year below to see its theme, photos and video — or open the menu ☰ for Years, News and Awards.",
            "थीम, फोटो आणि व्हिडिओ पाहण्यासाठी खाली एक वर्ष निवडा — किंवा मेनू ☰ मधून वर्षे, बातम्या आणि पुरस्कार पहा."
          )}
        </p>
      </section>

      {/* WELCOME — our journey with Bappa */}
      <section className="bg-gabhara text-haldi px-6 pb-14">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-4 font-sans leading-relaxed">
          <h2 className="font-display text-2xl sm:text-3xl text-marigold">
            {t("Our journey with Bappa", "बाप्पांसोबतचा आमचा प्रवास")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p>
            {t(
              "Since 2010, Ganpati Bappa has come home to a decoration shaped by our own hands and imagination. A new idea every year, everyday things given a creative second life, and a gentle message behind it all — year by year, this journey grew an identity of its own.",
              "२०१० पासून गणपती बाप्पा आमच्या घरी आमच्या हातांनी आणि कल्पनेतून साकारलेल्या सजावटीत विराजमान होतात. दरवर्षी नवी संकल्पना, घरातल्या वस्तूंचा सर्जनशील वापर आणि त्यामागे एक सुंदर संदेश — अशा या प्रवासाने वर्षागणिक एक वेगळीच ओळख निर्माण केली."
            )}
          </p>
          <p>
            {t(
              "This site is the home where we keep those memories — each year's theme, the photos and videos, the newspapers and media that took notice, the awards, and the wishes that came to us with so much affection… all in one place.",
              "ही वेबसाइट म्हणजे त्या प्रवासाच्या आठवणींचं जपलेलं घर — प्रत्येक वर्षाची थीम, फोटो, व्हिडिओ, वर्तमानपत्रं आणि माध्यमांमधील दखल, मिळालेले पुरस्कार आणि आपुलकीने मिळालेल्या शुभेच्छा… सगळं एका ठिकाणी."
            )}
          </p>
          <p>
            {t(
              "Our heartfelt wish is that the next generation sees how this journey began, how ideas took shape, and how our love for Bappa grew with every passing year.",
              "पुढच्या पिढीने हे पाहावं की हा प्रवास कसा सुरू झाला, कल्पना कशा आकार घेत गेल्या आणि त्यामागचं बाप्पांवरील प्रेम कसं वर्षागणिक वाढत गेलं — ही आमची मनापासूनची इच्छा."
            )}
          </p>
          <p>
            {t(
              "And that everyone who loves Bappa walks a few steps with us along this path of memories…",
              "आणि बाप्पांवर प्रेम करणाऱ्या प्रत्येकाने आमच्या या आठवणींच्या वाटेवरून आमच्यासोबत काही पावलं चालावं…"
            )}
          </p>
          <p className="text-marigold">
            {t(
              "This is the story of our decorations for Bappa. ❤️🙏",
              "हीच आमच्या बाप्पांच्या सजावटींची कहाणी. ❤️🙏"
            )}
          </p>
        </div>
      </section>

      {/* THE YEARS — swipe through the archive */}
      <section className="bg-gabhara text-haldi py-14 border-t border-gold/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center px-6">
            <h2 className="font-display text-3xl text-marigold">{t("The years", "वर्षानुवर्षे")}</h2>
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
