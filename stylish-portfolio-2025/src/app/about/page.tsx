import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Serial entrepreneur, ultra-distance cyclist and ADHD advocate. Learn how Martin Cox built multiple businesses, competed in the world's toughest races, and turned neurodiversity into a superpower.",
  openGraph: { url: "https://themartincox.co.uk/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
