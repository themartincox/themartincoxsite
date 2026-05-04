import type { Metadata } from "next";
import TutoringContent from "./TutoringContent";

export const metadata: Metadata = {
  title: "Business Studies Tutoring Nottingham",
  description:
    "Top-rated business studies tutor in Nottingham. GCSE, A-Level, Degree and post-graduate tutoring available in-person and online. Specialist support for ADHD learners.",
  keywords: [
    "business studies tutor Nottingham",
    "GCSE business tutor",
    "A-level business tutor",
    "degree business tutor",
    "MBA tutor Nottingham",
    "ADHD tutor",
    "business tutor online UK",
    "private business tutor East Midlands",
  ],
  openGraph: { url: "https://themartincox.co.uk/tutoring" },
};

export default function TutoringPage() {
  return <TutoringContent />;
}
