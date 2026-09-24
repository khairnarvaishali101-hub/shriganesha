import PressTabs from "@/components/PressTabs";
 
export const metadata = {
  title: "In the News — Shri Ganesha",
  description: "Newspaper and TV coverage of our Ganpati decorations.",
};
 
export default function PressPage() {
  return (
    <main className="flex-1 bg-haldi text-gabhara">
      <PressTabs />
    </main>
  );
}