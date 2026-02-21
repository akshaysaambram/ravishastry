"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

const buttons = [
  {
    icon: <Phone className="size-5" />,
    label: "Call Us",
    href: "tel:9160169108",
    hoverColor: "hover:bg-black/90",
  },
  {
    icon: <Image src="/images/social/whatsapp.png" alt="WhatsApp" width={24} height={24} />,
    label: "WhatsApp",
    href: "https://wa.me/9160169108",
    hoverColor: "hover:bg-[#128C7E]",
  },
];

export function FloatingActions() {
  return (
    <div className="fixed right-0 bottom-12 z-50 flex flex-col gap-1 lg:bottom-48 lg:gap-2">
      {buttons.map((button) => (
        <motion.div
          key={button.label}
          initial={{ x: "100%" }}
          animate={{ x: "calc(100% - 56px)" }}
          whileHover={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className="flex items-center justify-end"
        >
          <Link
            href={button.href as Route}
            className={`flex items-center gap-2 rounded-l-full bg-black/80 ${button.hoverColor} py-2 pr-3 pl-4 text-white shadow-lg transition-colors`}
            target={button.href.startsWith("http") ? "_blank" : undefined}
            rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-white/10">
              {button.icon}
            </div>
            <span className="w-24 text-sm font-medium whitespace-nowrap">{button.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
