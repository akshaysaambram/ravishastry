"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ShimmerButtonProps {
  text?: string;
  className?: string;
  duration?: number;
  onClick?: () => void;
}

export function ShimmerButton({
  text = "Book a Free Call",
  className,
  duration = 1.2,
  onClick,
}: Readonly<ShimmerButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative bg-primary px-8 py-3 rounded-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
    >
      <motion.span
        className="relative block bg-clip-text text-transparent bg-[linear-gradient(110deg,#000_0%,#000_40%,#fff_50%,#fff_60%,#fff_100%)] bg-size-[200%_100%] font-medium text-base tracking-tight"
        animate={{
          backgroundPosition: ["0% 0%", "-200% 0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
    </button>
  );
}
