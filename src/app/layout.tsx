import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keshavhomeinteriors.com"),
  title: {
    default: "Keshav Home Interiors — Luxury Interior Design, Chennai",
    template: "%s — Keshav Home Interiors",
  },
  description:
    "Keshav Home Interiors crafts complete home interior experiences in Chennai — modular kitchens, bedrooms, wardrobes and full residential interiors, from concept to final reveal.",
  keywords: [
    "interior design Chennai",
    "modular kitchen Chennai",
    "home interiors Ambattur",
    "Keshav Home Interiors",
    "luxury interior designer Chennai",
  ],
  openGraph: {
    title: "Keshav Home Interiors — Luxury Interior Design, Chennai",
    description: site.tagline,
    url: "https://keshavhomeinteriors.com",
    siteName: "Keshav Home Interiors",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <SmoothScroll>
          <GrainOverlay />
          <Header />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
