import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orderflow Society — Master the Order Flow",
  description:
    "Futures and orderflow trading mentorship. Learn to read the tape, understand market microstructure, and trade with institutional edge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-[#09090B] text-zinc-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
