import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HenSer Innovations — Innovating for a Better Tomorrow",
  description: "HenSer Innovations — Innovating for a Better Tomorrow.",
  metadataBase: new URL("https://henser.co.za"),
  openGraph: {
    title: "HenSer Innovations — Innovating for a Better Tomorrow",
    description: "HenSer Innovations — Innovating for a Better Tomorrow.",
    url: "https://henser.co.za",
    siteName: "HenSer Innovations",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main" className="skip-to-content">Skip to content</a>
        <Navbar />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
