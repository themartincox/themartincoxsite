import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creative Portfolio - Digital Excellence",
  description: "Crafting digital experiences that blend artistry with innovation. From concept to creation, transforming ideas into compelling visual narratives.",
  keywords: "creative director, digital design, portfolio, web design, branding, art direction",
  authors: [{ name: "Creative Portfolio" }],
  openGraph: {
    title: "Creative Portfolio - Digital Excellence",
    description: "Crafting digital experiences that blend artistry with innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          "selection:bg-accent/20 selection:text-accent-foreground"
        )}
      >
        <Navigation />
        <div className="relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
