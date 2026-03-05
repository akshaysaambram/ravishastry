import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravishastry.com"),

  title: {
    default: "ॐ Ravi Shastry | Astrologer",
    template: "%s | Ravi Shastry Astrology",
  },

  description:
    "ॐ Ravi Shastry, A skilled astrologer giving simple advice for career, love, and life.",

  keywords: [
    "Ravi Shastry astrologer",
    "Vedic astrology",
    "horoscope reading",
    "career astrology",
    "love astrology",
    "kundli analysis",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/gallery/1.jpeg",
    shortcut: "/images/gallery/1.jpeg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ravishastry.vercel.app",
    title: "ॐ Ravi Shastry | Astrologer",
    description:
      "ॐ Ravi Shastry, A skilled astrologer giving simple advice for career, love, and life.",
    siteName: "Ravi Shastry Astrology",
    images: [
      {
        url: "/images/gallery/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ravi Shastry Astrologer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ॐ Ravi Shastry | Astrologer",
    description:
      "ॐ Ravi Shastry, A skilled astrologer giving simple advice for career, love, and life.",
    images: ["/images/gallery/1.jpeg"],
  },

  alternates: {
    canonical: "https://ravishastry.vercel.app",
  },

  category: "Astrology",
};

export default async function RootLayout({
  children,
}: Readonly<LayoutProps<"/">>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Menu />
          <div className="min-h-svh container mx-auto px-4 space-y-12">
            {children}
            <Footer />

            <FloatingActions />
          </div>
        </NextIntlClientProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
