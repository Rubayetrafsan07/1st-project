"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  effect?: "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";
}

export function ScrollReveal({ children, delay = 0, className = "", effect = "fade-up" }: ScrollRevealProps) {
  const getInitial = () => {
    switch (effect) {
      case "fade": return { opacity: 0 };
      case "scale": return { opacity: 0, scale: 0.8 };
      case "slide-left": return { opacity: 0, x: -50 };
      case "slide-right": return { opacity: 0, x: 100 };
      case "fade-up": 
      default: return { opacity: 0, y: 20 };
    }
  };

  const getAnimate = () => {
    switch (effect) {
      case "fade": return { opacity: 1 };
      case "scale": return { opacity: 1, scale: 1 };
      case "slide-left": return { opacity: 1, x: 0 };
      case "slide-right": return { opacity: 1, x: 0 };
      case "fade-up": 
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
