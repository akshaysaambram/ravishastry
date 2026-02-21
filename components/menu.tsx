"use client";

import { MobileMenu } from "@/components/menu.mobile";
import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  HomeIcon,
  ImagesIcon,
  InfoIcon,
  PhoneIcon,
  StarsIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const menuItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "#about", icon: InfoIcon },
  { name: "Services", href: "#services", icon: BriefcaseIcon },
  { name: "Reviews", href: "#reviews", icon: StarsIcon },
  {
    name: "Gallery",
    href: "/gallery",
    icon: ImagesIcon,
  },
  { name: "Contact", href: "#contact", icon: PhoneIcon },
];

export function Menu() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold">
              Ravi Shastry
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant={pathname === item.href ? "default" : "ghost"}
                    asChild
                  >
                    <Link
                      href={item.href as Route}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="size-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
}
