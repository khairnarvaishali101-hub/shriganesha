"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import YearSelect from "@/components/YearSelect";
import { useLanguage } from "@/components/LanguageProvider";
import { formatYear } from "@/lib/marathiDigits";
import y2026 from "@/content/years/2026.json";
import y2025 from "@/content/years/2025.json";

// Add each new year's JSON import above and to this list (newest first).
const years = [y2026, y2025];

const YOUTUBE_CHANNEL = "https://www.youtube.com/@ShaktishaliS/playlists";

export default function Header() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [yearsOpen, setYearsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const t = (en, mr) => (lang === "en" ? en : mr);

  // external: true -> opens in a new tab (plain <a>), otherwise a Next.js Link
  const links = [
    { href: "/", en: "Home", mr: "मुख्यपृष्ठ" },
    { href: "/about", en: "About Us", mr: "आमच्याबद्दल" },
    { href: "/story", en: "Our Story", mr: "संकल्पना" },
    { href: "/press", en: "In the News", mr: "प्रसिद्धी" },
    { href: YOUTUBE_CHANNEL, en: "📺 TV Coverage", mr: "📺 टीव्ही", external: true },
    { href: "/contact", en: "Contact", mr: "संपर्क" },
  ];

  const pill =
    "font-sans border border-gold text-haldi px-4 py-1.5 rounded-full text-sm hover:bg-gold hover:text-gabhara transition-colors whitespace-nowrap";
  const row = "font-sans text-lg px-5 py-4 border-b border-gold/25 active:bg-sindoor/40";

  function NavItem({ l, className }) {
    if (l.external) {
      return (
        <a href={l.href} target="_blank" rel="noopener noreferrer" className={className}>
          {t(l.en, l.mr)}
        </a>
      );
    }
    return (
      <Link href={l.href} className={className}>
        {t(l.en, l.mr)}
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-gabhara text-haldi">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-marigold text-xl whitespace-nowrap">
          श्री गणेशा
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavItem key={l.href} l={l} className={pill} />
          ))}
          <YearSelect />
          <LanguageToggle />
        </nav>

        {/* Mobile / tablet: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label={t("Open menu", "मेनू उघडा")}
            aria-expanded={open}
            className="border border-gold text-haldi w-10 h-9 rounded-lg text-lg leading-none"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="md:hidden fixed inset-0 z-40 bg-black/50" />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-gabhara text-haldi flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gold/40">
          <span className="font-display text-marigold">{t("Menu", "मेनू")}</span>
          <button
            onClick={() => setOpen(false)}
            aria-label={t("Close menu", "मेनू बंद करा")}
            className="text-2xl leading-none px-2"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto">
          {links.map((l) => (
            <NavItem key={l.href} l={l} className={row} />
          ))}

          <button
            onClick={() => setYearsOpen((v) => !v)}
            aria-expanded={yearsOpen}
            className={`${row} flex items-center justify-between text-left`}
          >
            <span>{t("Years", "वर्षे")}</span>
            <span>{yearsOpen ? "▴" : "▾"}</span>
          </button>

          {yearsOpen && (
            <div className="bg-black/20">
              {years.map((y) => (
                <Link
                  key={y.year}
                  href={`/${y.year}`}
                  className="block font-sans px-9 py-3.5 border-b border-gold/15 text-base"
                >
                  {formatYear(y.year, lang)} · {y.theme[lang]}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className="mt-auto p-5">
          <Link
            href={`/${years[0].year}`}
            className="block text-center font-sans font-semibold bg-marigold text-gabhara px-6 py-3 rounded-full"
          >
            🔔 {t("This year's darshan", "यंदाचं दर्शन")}
          </Link>
        </div>
      </div>
    </header>
  );
}
