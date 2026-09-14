"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/components/LanguageProvider";

export default function YearContent({ data }) {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="flex-1 bg-haldi text-gabhara px-6 py-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">

        <div className="text-center flex flex-col gap-4">
          <p className="font-sans text-sindoor">{data.year}</p>
          <h1 className="font-display text-4xl">{data.theme[lang]}</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="font-sans text-lg max-w-xl mx-auto">{data.story[lang]}</p>
        </div>

        {data.video && (
          <section>
            <h2 className="font-display text-2xl mb-3 text-sindoor">
              {lang === "en" ? "Video" : "व्हिडिओ"}
            </h2>
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${data.video}`}
                title={data.theme[lang]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </section>
        )}

        {data.photos.length > 0 && (
          <section>
            <h2 className="font-display text-2xl mb-3 text-sindoor">
              {lang === "en" ? "Moments" : "क्षणचित्रे"}
            </h2>
            <div className="grid grid-cols-2 gap-4 items-start">
              {data.photos.map((photo, i) => (
                <button
                  key={photo}
                  onClick={() => setOpenIndex(i)}
                  className="cursor-zoom-in"
                >
                  <Image
                    src={photo}
                    alt={data.theme[lang]}
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-xl hover:opacity-90 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

      </div>

      <Lightbox
        photos={data.photos}
        index={openIndex}
        alt={data.theme[lang]}
        onClose={() => setOpenIndex(null)}
        onPrev={() => setOpenIndex((i) => Math.max(0, i - 1))}
        onNext={() => setOpenIndex((i) => Math.min(data.photos.length - 1, i + 1))}
      />
    </main>
  );
}