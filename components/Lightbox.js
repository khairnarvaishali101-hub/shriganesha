"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ photos, index, alt, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  if (index === null) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-gabhara/95 flex items-center justify-center p-4 cursor-pointer"
    >
      <Image
        src={photos[index]}
        alt={alt}
        width={1600}
        height={1200}
        className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-haldi text-3xl font-sans"
      >
        ✕
      </button>

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-haldi text-4xl font-sans bg-gabhara/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gold hover:text-gabhara transition-colors"
        >
          ‹
        </button>
      )}

      {index < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-haldi text-4xl font-sans bg-gabhara/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gold hover:text-gabhara transition-colors"
        >
          ›
        </button>
      )}

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-haldi/70 text-sm">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}