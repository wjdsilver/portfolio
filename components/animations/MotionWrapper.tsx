"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
  children: ReactNode;
};

export default function MotionWrapper({
  children,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}