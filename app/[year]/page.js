import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import YearContent from "@/components/YearContent";

export default async function YearPage({ params }) {
  const { year } = await params;

  const filePath = path.join(process.cwd(), "content", "years", `${year}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const yearData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return <YearContent data={yearData} />;
}