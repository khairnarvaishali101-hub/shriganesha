"use client";

import { useLanguage } from "@/components/LanguageProvider";

const contact = {
  email: "your@email.com",
  instagram: "https://instagram.com/yourhandle",
  youtube: "https://www.youtube.com/@yourchannel",
};

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <main className="flex-1 bg-haldi text-gabhara px-6 py-14">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
        <h1 className="font-display text-3xl">
          {lang === "en" ? "Get in touch" : "संपर्क"}
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        <p className="font-sans text-lg">
          {lang === "en"
            ? "Questions about the decorations, ideas for a theme, or just want to say Ganpati Bappa Morya? We'd love to hear from you."
            : "सजावटीबद्दल प्रश्न, थीमसाठी कल्पना, किंवा फक्त गणपती बाप्पा मोरया म्हणायचंय? आम्हाला नक्की लिहा."}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
          
            href={`mailto:${contact.email}`}
            className="font-sans bg-gabhara text-haldi px-6 py-3 rounded-full hover:bg-sindoor transition-colors"
          >
            {lang === "en" ? "Email us" : "ईमेल करा"}
          </a>
          
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans border border-gold px-6 py-3 rounded-full hover:bg-gold hover:text-haldi transition-colors"
          >
            Instagram
          </a>
          
            href={contact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans border border-gold px-6 py-3 rounded-full hover:bg-gold hover:text-haldi transition-colors"
          >
            YouTube
          </a>
        </div>

        <p className="font-sans text-sm text-sindoor mt-6">
          शिंपी कुटुंब · Shimpi Family · Dallas, Texas
        </p>
      </div>
    </main>
  );
}