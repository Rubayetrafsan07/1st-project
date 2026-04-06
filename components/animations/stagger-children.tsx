"use client"; // Browser component

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode; // The group of children to stagger
  staggerDelay?: number; 
}

export default function StaggerChildren({ children, staggerDelay = 0.1 }: StaggerChildrenProps) {
  
  
  const containerVariants = {
    hidden: {}, // Starting state for the group
    visible: {
      transition: {
        staggerChildren: staggerDelay, // Each child starts after this delay
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Each child starts invisible and down
    visible: { opacity: 1, y: 0 }, // Each child fades and slides up
  };
  
  return (
    <motion.div
      variants={containerVariants} // Applies the stagger timing to the group
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}