"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { lang } = useLanguage();
  const t = (en, mr) => (lang === "en" ? en : mr);

  return (
    <main className="flex-1 bg-haldi text-gabhara px-6 py-14">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-5 font-sans text-lg leading-relaxed">
        <h1 className="font-display text-3xl sm:text-4xl">
          {t("Our journey with Bappa", "बाप्पांसोबतचा आमचा प्रवास")}
        </h1>
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
        <p className="text-sindoor font-display text-xl">
          {t("This is the story of our decorations for Bappa. ❤️🙏", "हीच आमच्या बाप्पांच्या सजावटींची कहाणी. ❤️🙏")}
        </p>

                <p className="font-sans text-sm text-gabhara/70 mt-4">
          {t("— The Shimpi family", "— शिंपी कुटुंब")}
        </p>
      </div>
    </main>
  );
}
