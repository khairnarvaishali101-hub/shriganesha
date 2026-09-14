"use client";

import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import YearSelect from "@/components/YearSelect";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { lang } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-gabhara text-haldi">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-marigold text-xl whitespace-nowrap">
          श्री गणेशा
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden sm:block font-sans border border-gold text-haldi px-4 py-1.5 rounded-full text-sm hover:bg-gold hover:text-gabhara transition-colors"
          >
            {lang === "en" ? "Home" : "मुख्यपृष्ठ"}
          </Link>

                    <Link
            href="/about"
            className="font-sans border border-gold text-haldi px-4 py-1.5 rounded-full text-sm hover:bg-gold hover:text-gabhara transition-colors"
          >
            {lang === "en" ? "About" : "आमच्याबद्दल"}
          </Link>
          <YearSelect />
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}