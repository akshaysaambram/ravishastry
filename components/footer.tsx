"use client";

import { motion } from "motion/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  product: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "/gallery" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/your-page",
      icon: "/images/social/facebook.png",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/your-handle",
      icon: "/images/social/twitter.png",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/your-handle",
      icon: "/images/social/instagram.png",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/your-channel",
      icon: "/images/social/youtube.png",
    },
  ],
};

export function Footer() {
  return (
    <motion.footer
      className="border-t container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <span className="text-lg">ॐ Ravi Shastry</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making astrology insights more accessible with our horoscopes
              mentors and personalized guidance.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href as Route}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ravi Shastry | Astrologer. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.social.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href as Route}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
