import { getAllSlugs, getParamsFromSlug } from "@/lib/tutoring-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TutoringContent from "../TutoringContent";

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { level, location } = getParamsFromSlug(slug);

  if (!level && !location) return {};

  const cityName = location?.name || "Nottingham";
  const levelName = level?.title || "Business";

  const title = `Top-Rated ${levelName} Tutoring in ${cityName} | Martin Cox`;
  const description =
    level?.description ||
    `Top-rated private business studies tutoring in ${cityName} and online. GCSE, A-Level, Degree, and Post-graduate levels. Specialised support for ADHD students.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { level, location } = getParamsFromSlug(slug);

  if (!level && !location) {
    notFound();
  }

  return <TutoringContent level={level} location={location} />;
}
