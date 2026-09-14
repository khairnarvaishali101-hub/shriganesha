import Image from "next/image";

export default function Toran() {
  return (
    <Image
      src="/images/toran.png"
      alt=""
      width={1200}
      height={200}
      className="w-full max-w-2xl h-auto"
      priority
    />
  );
}