import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aether DMX | AI-Powered Architectural Lighting Control",
  description: "An AI-powered lighting OS that replaces $15k controllers with smarter, modular, offline-capable brains. Architectural DMX control for churches, theaters, and venues.",
  keywords: ["architectural DMX control", "AI lighting control", "DMX lighting OS", "offline lighting controller", "ESP32 DMX", "Raspberry Pi lighting"],
  authors: [{ name: "Aether DMX" }],
  openGraph: {
    title: "Aether DMX | AI-Powered Architectural Lighting Control",
    description: "An AI-powered lighting OS that replaces $15k controllers with smarter, modular, offline-capable brains.",
    type: "website",
    locale: "en_US",
    siteName: "Aether DMX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether DMX | AI-Powered Architectural Lighting Control",
    description: "An AI-powered lighting OS that replaces $15k controllers with smarter, modular, offline-capable brains.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0a0a0c] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
