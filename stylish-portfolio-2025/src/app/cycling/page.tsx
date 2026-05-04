import type { Metadata } from "next";
import CyclingContent from "./CyclingContent";

export const metadata: Metadata = {
  title: "Ultra-Endurance Cycling",
  description:
    "Martin Cox's ultra-distance cycling journey — from the Trans America Bike Race to Race Across America. Discover how endurance sport shaped a business philosophy.",
  openGraph: { url: "https://themartincox.co.uk/cycling" },
};

export default function CyclingPage() {
  return <CyclingContent />;
}
