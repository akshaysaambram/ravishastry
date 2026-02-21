import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi Shastry | Astrologer",
  description:
    "Ravi Shastry, A skilled astrologer giving simple advice for career, love, and life.",
};

export default function RootLayout({ children }: Readonly<LayoutProps<"/">>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-svh">
          <Menu />
          {children}
          <Footer />

          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
