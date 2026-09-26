import Certificates from "@/components/Certificates";

export const metadata = {
  title: "Awards & Recognition — Shri Ganesha",
  description: "Certificates and awards for our Ganpati decorations.",
};

export default function AwardsPage() {
  return (
    <main className="flex-1 bg-haldi text-gabhara">
      <Certificates />
    </main>
  );
}