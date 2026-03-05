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
  title: "ॐ Ravi Shastry | Astrologer",
  description:
    "ॐ Ravi Shastry, A skilled astrologer giving simple advice for career, love, and life.",
  icons: {
    icon: "/images/gallery/1.jpeg",
  },
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
