"use client"; // Runs in the browser for animations

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode; // The content to animate
  direction?: "left" | "right"; // Choose left or right for slide direction
  delay?: number; // delay before starting
}

export default function SlideIn({ children, direction = "left", delay = 0 }: SlideInProps) {

  const xValue = direction === "left" ? -50 : 50; // If left, start 50 pixels to the left;else 50 pixels to the right
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }} // Start invisible and off to the side
      animate={{ opacity: 1, x: 0 }} // End visible and in place
      transition={{ duration: 0.6, delay }} 
    >
      {children}
    </motion.div>
  );
}