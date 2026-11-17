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
  metadataBase: new URL("https://www.orderflowsociety.com"),
  title: "Orderflow Society | 1-on-1 Orderflow Trading Mentorship",
  description:
    "1-on-1 orderflow trading mentorship for ES and NQ futures traders. Learn footprint, delta, DOM and heatmap on ATAS with Amrit (@amrittrades). 10 private sessions, booked at your time.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orderflow Society | 1-on-1 Orderflow Trading Mentorship",
    description:
      "1-on-1 orderflow trading mentorship for ES and NQ futures traders. Learn footprint, delta, DOM and heatmap on ATAS with Amrit (@amrittrades). 10 private sessions, booked at your time.",
    url: "https://www.orderflowsociety.com",
    siteName: "Orderflow Society",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orderflow Society | 1-on-1 Orderflow Trading Mentorship",
    description:
      "1-on-1 orderflow trading mentorship for ES and NQ futures traders. Learn footprint, delta, DOM and heatmap on ATAS with Amrit (@amrittrades). 10 private sessions, booked at your time.",
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
