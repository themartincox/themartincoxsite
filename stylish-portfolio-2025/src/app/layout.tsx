import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://themartincox.co.uk"),
  title: {
    default: "Martin Cox | Business Consultant, Tutor & Entrepreneur",
    template: "%s | Martin Cox",
  },
  description:
    "Serial entrepreneur, award-winning business tutor and marketing consultant based in Nottingham. 20+ years experience growing UK SMEs. GCSE to MBA tutoring available in-person and online.",
  keywords: [
    "Martin Cox",
    "business consultant Nottingham",
    "business tutor Nottingham",
    "marketing consultant UK",
    "ADHD entrepreneur",
    "SME growth strategy",
    "business studies tutor",
    "A-level business tutor",
    "GCSE business tutor",
  ],
  authors: [{ name: "Martin Cox", url: "https://themartincox.co.uk" }],
  creator: "Martin Cox",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://themartincox.co.uk",
    siteName: "Martin Cox",
    title: "Martin Cox | Business Consultant, Tutor & Entrepreneur",
    description:
      "Serial entrepreneur, award-winning business tutor and marketing consultant based in Nottingham. 20+ years experience growing UK SMEs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Cox | Business Consultant, Tutor & Entrepreneur",
    description:
      "Serial entrepreneur, award-winning business tutor and marketing consultant based in Nottingham.",
    creator: "@themartincox",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martin Cox",
  url: "https://themartincox.co.uk",
  sameAs: [
    "https://www.linkedin.com/in/martincox",
    "https://www.tiktok.com/@themartincox",
    "https://www.postino.cc",
  ],
  jobTitle: "Business Consultant & Tutor",
  worksFor: {
    "@type": "Organization",
    name: "Postino",
    url: "https://www.postino.cc",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressRegion: "Nottinghamshire",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Business Strategy",
    "Marketing Consultancy",
    "Business Studies Tutoring",
    "Entrepreneurship",
    "ADHD",
    "Ultra-endurance Cycling",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Martin Cox",
  url: "https://themartincox.co.uk",
  description:
    "Serial entrepreneur, award-winning business tutor and marketing consultant based in Nottingham",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          "selection:bg-accent/20 selection:text-accent-foreground",
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navigation />
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
