"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { lang } = useLanguage();

  return (
    <main className="flex-1 bg-haldi text-gabhara px-6 py-14">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
        <h1 className="font-display text-3xl">
          {lang === "en" ? "Our tradition" : "आमची परंपरा"}
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        <p className="font-sans text-lg">
          {lang === "en"
            ? "Since 2010, our family has welcomed Bappa home every year with a new story — a theme imagined, built by hand, and celebrated together. From Maharashtra to Dallas, Texas, the tradition has traveled with us. Fifteen years of themes, and every one of them made with our own hands. This site is where we keep those stories, year by year."
            : "२०१० पासून, दरवर्षी आमचं कुटुंब बाप्पाचं स्वागत एका नव्या गोष्टीने करतं — एक थीम, जी आम्ही कल्पितो, स्वतःच्या हातांनी घडवतो आणि मिळून साजरी करतो. महाराष्ट्रापासून डॅलस, टेक्सासपर्यंत ही परंपरा आमच्यासोबत प्रवास करत आली आहे. पंधरा वर्षे, पंधरा सजावटी — प्रत्येक स्वतःच्या हातांनी घडवलेली. त्या सगळ्या गोष्टी इथे वर्षानुवर्षे जपून ठेवल्या आहेत."}
        </p>

        <div className="flex justify-center gap-8 sm:gap-14 mt-4">
          <div>
            <p className="font-display text-4xl text-sindoor">15+</p>
            <p className="font-sans text-sm">{lang === "en" ? "Years" : "वर्षे"}</p>
          </div>
          <div>
            <p className="font-display text-4xl text-sindoor">15+</p>
            <p className="font-sans text-sm">{lang === "en" ? "Themes" : "सजावटी"}</p>
          </div>
          <div>
            <p className="font-display text-4xl text-sindoor">1</p>
            <p className="font-sans text-sm">{lang === "en" ? "Family" : "कुटुंब"}</p>
          </div>
        </div>
      </div>
    </main>
  );
}