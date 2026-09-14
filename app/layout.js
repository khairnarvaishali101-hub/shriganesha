import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BellEntrance from "@/components/BellEntrance";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Tiro_Devanagari_Marathi, Mukta } from "next/font/google";
import "./globals.css";

const tiro = Tiro_Devanagari_Marathi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Shri Ganesha",
  description: "A family archive of Ganpati decorations, year by year.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${tiro.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <LanguageProvider>
  <BellEntrance />
    <Header />
  {children}
  <Footer />
</LanguageProvider>
</body>
    </html>
  );
}