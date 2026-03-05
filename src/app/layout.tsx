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
  description: "AI-powered DMX lighting control for venues, churches, and theaters. Professional results from affordable, off-the-shelf hardware.",
  keywords: ["DMX lighting control", "AI lighting control", "DMX lighting software", "offline lighting controller", "Raspberry Pi lighting", "wireless DMX", "wired DMX"],
  authors: [{ name: "Aether DMX" }],
  openGraph: {
    title: "Aether DMX | AI-Powered Architectural Lighting Control",
    description: "AI-powered DMX lighting control for venues, churches, and theaters. Professional results from affordable, off-the-shelf hardware.",
    type: "website",
    locale: "en_US",
    siteName: "Aether DMX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether DMX | AI-Powered Architectural Lighting Control",
    description: "AI-powered DMX lighting control for venues, churches, and theaters. Professional results from affordable, off-the-shelf hardware.",
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
