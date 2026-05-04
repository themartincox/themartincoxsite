import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Martin Cox for business consultancy, marketing strategy, or business studies tutoring. Based in Nottingham, available UK-wide and online.",
  openGraph: { url: "https://themartincox.co.uk/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
