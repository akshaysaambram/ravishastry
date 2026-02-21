"use client";

import { menuItems } from "@/components/menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Cleanup on unmount to restore scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
    // Toggle body scroll
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  }

  function closeMenu() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="size-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="bg-background/80 fixed inset-0 z-40 backdrop-blur-xs md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="bg-background fixed inset-y-0 right-0 z-50 w-full max-w-xs p-6 shadow-lg md:hidden"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-lg font-bold"
                  onClick={closeMenu}
                >
                  Ravi Shastry
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="rounded-full"
                >
                  <X className="size-6" />
                </Button>
              </div>

              <ScrollArea className="mt-6 h-[calc(100vh-8rem)] pb-6">
                <div className="space-y-6">
                  <nav className="flex flex-col space-y-1">
                    {menuItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Button
                          key={item.name}
                          variant={isActive ? "default" : "ghost"}
                          className="justify-start"
                          asChild
                        >
                          <Link href={item.href as Route} onClick={closeMenu}>
                            <item.icon className="mr-2 size-5" />
                            {item.name}
                          </Link>
                        </Button>
                      );
                    })}
                  </nav>
                </div>
              </ScrollArea>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
