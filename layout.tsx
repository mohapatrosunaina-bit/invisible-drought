import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { PROJECT_METADATA } from "@/lib/constants/research";

export const viewport: Viewport = {
  themeColor: "#0B100E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "THE INVISIBLE DROUGHT — Seasonal Rainfall–Vegetation Mismatches & Root-Zone Stress in Karnataka",
    template: "%s | The Invisible Drought",
  },
  description:
    "An exploratory satellite-based research study investigating whether seasonal rainfall–vegetation mismatches coincide with root-zone soil-moisture stress across 27 historical districts of Karnataka, India (2016–2024).",
  keywords: [
    "Drought",
    "Karnataka",
    "Soil Moisture",
    "SMAP",
    "MODIS",
    "CHIRPS",
    "Vegetation Anomaly",
    "GEE",
    "Generalized Estimating Equations",
    "Remote Sensing",
    "Environmental Research",
  ],
  authors: [{ name: "The Invisible Drought Research Initiative" }],
  creator: "The Invisible Drought Research Initiative",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://invisible-drought.vercel.app",
    title: "THE INVISIBLE DROUGHT — Karnataka Environmental Research",
    description:
      "Detecting Seasonal Rainfall–Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India: An Exploratory District-Season Analysis (2016–2024).",
    siteName: "The Invisible Drought",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE INVISIBLE DROUGHT — Karnataka Satellite Research",
    description:
      "When rainfall tells one story, vegetation and deeper soil moisture may tell another.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-drought-bg text-drought-text antialiased selection:bg-drought-borderLight selection:text-drought-text">
        <SkipLink />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
