import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on entrepreneurship, ADHD, ultra-distance cycling, and business growth from Martin Cox. Real experiences, practical lessons, and honest reflections.",
  openGraph: { url: "https://themartincox.co.uk/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
