import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "Martin Cox | Business Consultant, Tutor & Entrepreneur",
  },
  description:
    "Serial entrepreneur, award-winning business tutor and marketing consultant based in Nottingham. 20+ years experience growing UK SMEs. GCSE to MBA tutoring available in-person and online.",
  openGraph: { url: "https://themartincox.co.uk" },
};

export default function HomePage() {
  return <HomeContent />;
}
