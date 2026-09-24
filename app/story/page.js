import { Noto_Sans_Devanagari } from "next/font/google";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Our Story — Ganpati Decoration 2026",
  description: "The idea behind our 2026 Ganpati decoration: तंत्रज्ञानाची उत्क्रांती · ज्ञान एक्सप्रेस",
};

/* ------------------------------------------------------------------
   CONTENT — replace the placeholder text. The JSX below never changes.
   ------------------------------------------------------------------ */
const content = {
  header: {
    title: "Ganpati Decoration 2026",
    subtitle: "तंत्रज्ञानाची उत्क्रांती · ज्ञान एक्सप्रेस",
  },
  idea: {
    headingMr: "आमची कल्पना",
    headingEn: "Our Idea",
    mr: "बाप्पांच्या सुवर्ण सिंहासनाभोवती फिरणारी आमची 'ज्ञान एक्सप्रेस' — ज्ञान, विवेक, तंत्रज्ञान आणि प्रगती या चार डब्यांसह — पाच युगांचा प्रवास घडवते.",
    en: "Our 'Dnyan Express' circles Bappa's golden throne with four coaches — Knowledge, Wisdom, Technology, Progress — carrying visitors through five ages of human invention.",
  },
  stations: [
    {
      number: "स्थानक १",
      titleMr: "पाषाणयुग — अग्नी आणि चाक",
      titleEn: "Station 1 · Stone Age — Fire & Wheel",
      mr: "गुहा, धबधबा, गुहेतील चित्रं आणि खरोखर पेटणारा अग्नी.",
      en: "A cave, a waterfall, cave paintings, and a fire that really burns.",
    },
    {
      number: "स्थानक २",
      titleMr: "औद्योगिक युग — वाफ आणि पोलाद",
      titleEn: "Station 2 · Industrial Age — Steam & Steel",
      mr: "वाफेची शक्ती, कारखाने, धुराडे आणि फिरणारे गिअर्स.",
      en: "Steam power, factories, chimneys, and turning gears.",
    },
    {
      number: "स्थानक ३",
      titleMr: "विजेचं युग",
      titleEn: "Station 3 · The Electric Age",
      mr: "जुना रेडिओ, कॅसेट प्लेअर आणि टीव्हीवर दूरदर्शनच्या काळाची आठवण — तेव्हा घरात एकच वाहिनी असायची.",
      en: "An old radio, a cassette player, and a TV remembering the Doordarshan days — when every home had a single channel.",
    },
    {
      number: "स्थानक ४",
      titleMr: "संगणक युग",
      titleEn: "Station 4 · The Computer Age",
      mr: "खरा जुना की-बोर्ड, माऊस, फ्लॉपी डिस्क आणि स्क्रीनवर जिवंत Windows 98.",
      en: "A real old keyboard, mouse, floppy disk, and Windows 98 alive on the screen.",
    },
    {
      number: "स्थानक ५",
      titleMr: "आजचं आधुनिक युग — क्लाउड, IoT आणि AI",
      titleEn: "Station 5 · Today — Cloud, IoT & AI",
      mr: "क्लाउड, आय ओ टी आणि ए आय — आणि भक्त जवळ येताच वाजणारी मोशन-सेन्सर स्मार्ट घंटा.",
      en: "Cloud, IoT and AI — and a motion-sensor smart bell that rings as devotees approach.",
    },
  ],
  environment: {
    headingMr: "पर्यावरण",
    headingEn: "Reduce · Reuse · Recreate",
    mr: "बाप्पांची मूर्ती शाडू मातीची आहे. तंत्रज्ञान वाढलं, तसा इलेक्ट्रॉनिक कचराही वाढला — म्हणून हा संपूर्ण देखावा पुनर्वापरातून साकारला आहे: जुने पुठ्ठ्याचे खोके, खरा जुना की-बोर्ड, फ्लॉपी डिस्क, माऊस, कापूस, एलईडी दिवे आणि घरातील ई-कचरा.",
    en: "Bappa's murti is shadu clay. As technology grew, so did e-waste — so the whole display is built from reuse: old cardboard boxes, a real old keyboard, floppy disks, a mouse, cotton, LED lights, and household e-waste.",
  },
  videoId: "q421CgFOzew",
  gallery: [
    { src: "/photos/2026/hero.jpg", alt: "The complete decoration" },
    { src: "/photos/2026/family-2026.jpg", alt: "Family with Bappa" },
    { src: "/photos/2026/family-framed.png", alt: "Family portrait, Dallas" },
    { src: "/photos/2026/hero-dallas.jpg", alt: "Decoration and Dallas skyline" },
  ],
  message: {
    headingMr: "संदेश",
    headingEn: "Our Message",
    mr: "जुन्या वस्तू फेकण्याआधी विचार करा; त्यांना नवं रूप देता येतं. ज्ञानाला विवेकाची दिशा मिळाली, तरच ती खरी प्रगती.",
    en: "Think before you throw old things away; they can be given new life. Knowledge becomes true progress only when guided by wisdom.",
  },
  footer: {
    line1: "॥ गणपती बाप्पा मोरया ॥",
    line2: "शिंपी कुटुंब · Shimpi Family · Dallas, Texas",
  },
};

function Card({ children, className = "" }) {
  return (
    <section className={`bg-[#6E1A26] border border-[#C9972E]/60 rounded-2xl p-5 sm:p-6 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeading({ mr, en }) {
  return (
    <div className="mb-4">
      <h2 className={`${devanagari.className} text-white text-2xl font-semibold leading-snug`}>{mr}</h2>
      <p className="font-serif text-[#E8C24A] text-sm tracking-wide mt-1">{en}</p>
    </div>
  );
}

function Marathi({ children }) {
  return <p className={`${devanagari.className} text-white text-base leading-8`}>{children}</p>;
}

function English({ children }) {
  return (
    <p className="font-serif text-[#E8C24A]/90 text-sm leading-7 mt-3 border-t border-[#C9972E]/30 pt-3">
      {children}
    </p>
  );
}

export default function StoryPage() {
  return (
    <main className="flex-1 bg-[#4A0F1A] px-4 py-10">
      <div className="max-w-[640px] mx-auto flex flex-col gap-6">

        <header className="text-center flex flex-col gap-2 mb-2">
          <h1 className="font-serif text-[#C9972E] text-3xl sm:text-4xl font-semibold leading-tight">
            {content.header.title}
          </h1>
          <p className={`${devanagari.className} text-white text-lg leading-relaxed`}>
            {content.header.subtitle}
          </p>
          <div className="w-16 h-[3px] bg-[#C9972E] mx-auto rounded-full mt-2" />
        </header>

        <Card>
          <SectionHeading mr={content.idea.headingMr} en={content.idea.headingEn} />
          <Marathi>{content.idea.mr}</Marathi>
          <English>{content.idea.en}</English>
        </Card>

        {content.stations.map((station) => (
          <Card key={station.number}>
            <p className={`${devanagari.className} text-[#E8C24A] text-sm tracking-widest mb-1`}>
              {station.number}
            </p>
            <SectionHeading mr={station.titleMr} en={station.titleEn} />
            <Marathi>{station.mr}</Marathi>
            <English>{station.en}</English>
          </Card>
        ))}

        <Card className="border-l-4 border-l-[#4CAF50]">
          <SectionHeading mr={content.environment.headingMr} en={content.environment.headingEn} />
          <Marathi>{content.environment.mr}</Marathi>
          <English>{content.environment.en}</English>
        </Card>

        <Card>
          <SectionHeading mr="व्हिडिओ" en="Watch the decoration" />
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#C9972E]/40">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${content.videoId}`}
              title={content.header.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </Card>

        <Card>
          <SectionHeading mr="क्षणचित्रे" en="Gallery" />
          <div className="grid grid-cols-2 gap-3">
            {content.gallery.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-[#C9972E]/40"
              />
            ))}
          </div>
        </Card>

        <Card className="border-2 border-[#E8C24A] bg-[#4A0F1A] relative">
          <span className="absolute -top-4 left-5 font-serif text-[#E8C24A] text-5xl leading-none select-none">“</span>
          <SectionHeading mr={content.message.headingMr} en={content.message.headingEn} />
          <Marathi>{content.message.mr}</Marathi>
          <English>{content.message.en}</English>
        </Card>

        <footer className="text-center mt-4 flex flex-col gap-2">
          <p className={`${devanagari.className} text-[#E8C24A] text-xl`}>{content.footer.line1}</p>
          <p className={`${devanagari.className} text-white/80 text-sm`}>{content.footer.line2}</p>
        </footer>

      </div>
    </main>
  );
}
