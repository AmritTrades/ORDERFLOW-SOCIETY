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
  metadataBase: new URL("https://orderflowsociety.com"),
  title: "Orderflow Society | Master the Order Flow Edge",
  description:
    "Professional futures trading mentorship for serious traders. Learn tape reading, auction market theory, and institutional orderflow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orderflow Society | Master the Order Flow Edge",
    description:
      "Professional futures trading mentorship for serious traders. Learn tape reading, auction market theory, and institutional orderflow.",
    url: "https://orderflowsociety.com",
    siteName: "Orderflow Society",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orderflow Society | Master the Order Flow Edge",
    description:
      "Professional futures trading mentorship for serious traders. Learn tape reading, auction market theory, and institutional orderflow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-black text-zinc-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
