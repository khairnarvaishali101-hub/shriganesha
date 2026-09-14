"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function BellEntrance() {
  const [visible, setVisible] = useState(false);
  const [ringing, setRinging] = useState(false);
  const audioRef = useRef(null);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!sessionStorage.getItem("bellRung")) {
      setVisible(true);
    }
  }, []);

  function ringBell() {
    setRinging(true);
    audioRef.current?.play();
    sessionStorage.setItem("bellRung", "yes");
    setTimeout(() => setVisible(false), 2400);
  }

  function skip() {
    sessionStorage.setItem("bellRung", "yes");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none bg-gabhara">

      <div
        className={`absolute inset-y-0 left-0 w-[51%] ${
          ringing ? "curtain-open-left" : ""
        } bg-[repeating-linear-gradient(90deg,#4a1010_0px,#3E0D0D_30px,#4a1010_60px)]`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-[51%] ${
          ringing ? "curtain-open-right" : ""
        } bg-[repeating-linear-gradient(90deg,#4a1010_0px,#3E0D0D_30px,#4a1010_60px)]`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-between overflow-hidden transition-opacity duration-700 ${
          ringing ? "opacity-0 pointer-events-none" : "opacity-100"
        } pointer-events-auto`}
      >
        <audio ref={audioRef} src="/sounds/bell.mp3" preload="auto" />

        {/* TOP: toran */}
        <Image
          src="/images/toran.png"
          alt=""
          width={1200}
          height={200}
          className="w-full max-w-md sm:max-w-xl h-auto max-h-[12vh] object-contain object-top"
          priority
        />

        {/* MIDDLE: shloka, Ganesha, bell, instruction */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 relative">
          <div className="absolute inset-0 m-auto w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-marigold/20 blur-3xl" />

          <p className="font-display text-marigold text-lg sm:text-xl tracking-wide relative">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <img
            src="/images/ganesha-v2.png"
            alt=""
            className="w-auto h-auto max-h-[12vh] opacity-90 relative"
          />

          <button
            onClick={ringBell}
            aria-label={lang === "en" ? "Ring the bell to enter" : "प्रवेश करण्यासाठी घंटा वाजवा"}
            className="relative focus:outline-none"
          >
            <div className={ringing ? "bell-swing" : "hover:scale-105 transition-transform"}>
              <Image
                src="/images/bell.png"
                alt=""
                width={600}
                height={846}
                className="w-auto h-auto max-h-[32vh]"
                priority
              />
            </div>
          </button>

          <p className="font-display text-haldi text-xl sm:text-2xl text-center px-6 relative">
            घंटा वाजवून प्रवेश करा
          </p>
          <p className="font-sans text-haldi/60 text-sm text-center px-6 relative">
            Ring the bell to enter
          </p>
        </div>

        {/* BOTTOM: diyas + skip */}
        <div className="w-full flex justify-between items-end px-4 sm:px-6 pb-3 sm:pb-4">
          <Image
            src="/images/diya.png"
            alt=""
            width={1369}
            height={1058}
            className="w-auto h-auto max-h-[9vh] diya-flicker"
          />
          <button onClick={skip} className="font-sans text-haldi/60 text-sm underline">
            वगळा / Skip
          </button>
          <Image
            src="/images/diya.png"
            alt=""
            width={1369}
            height={1058}
            className="w-auto h-auto max-h-[9vh] diya-flicker-alt scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
