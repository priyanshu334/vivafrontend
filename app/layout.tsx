import type { Metadata } from "next";
import { IM_Fell_French_Canon } from "next/font/google";
import "./globals.css";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load IM FELL French Canon font
const fellFrenchCanon = IM_Fell_French_Canon({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fell-french-canon",
});

export const metadata: Metadata = {
  title: "Viva Boutique",
  description: "Welcome to Your Brand – modern design, quality service, and seamless experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fellFrenchCanon.variable}>
      <body className="antialiased bg-white text-gray-900 font-fell">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
