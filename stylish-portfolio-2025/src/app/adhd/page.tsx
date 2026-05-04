import type { Metadata } from "next";
import AdhdContent from "./AdhdContent";

export const metadata: Metadata = {
  title: "ADHD & Entrepreneurship",
  description:
    "Martin Cox shares his experience of late ADHD diagnosis and how neurodiversity became his entrepreneurial advantage. Coaching, insights and support for ADHD entrepreneurs.",
  openGraph: { url: "https://themartincox.co.uk/adhd" },
};

export default function AdhdPage() {
  return <AdhdContent />;
}
