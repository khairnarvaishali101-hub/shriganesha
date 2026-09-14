"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

const years = [2026, 2025];

export default function YearSelect() {
  const router = useRouter();
  const { lang } = useLanguage();

  function handleChange(event) {
    const year = event.target.value;
    if (year) {
      router.push(`/${year}`);
    }
  }

  return (
    <select
      onChange={handleChange}
      defaultValue=""
      className="font-sans border border-gold text-gabhara bg-haldi px-4 py-2 rounded-full cursor-pointer"
    >
      <option value="" disabled>
        {lang === "en" ? "Select a year" : "वर्ष निवडा"}
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}