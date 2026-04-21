'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const MotionList = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={CONTAINER}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {children}
  </motion.div>
);

export const MotionItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={ITEM}
    className={className}
  >
    {children}
  </motion.div>
);
