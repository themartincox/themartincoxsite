import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio & Business Work",
  description:
    "Explore Martin Cox's portfolio of businesses, consultancy projects, and creative ventures — from Postino marketing agency to Glazing Supplies Direct and Milk Bottle Tops.",
  openGraph: { url: "https://themartincox.co.uk/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
