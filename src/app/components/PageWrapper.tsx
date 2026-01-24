'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  pageKey: React.Key | null | undefined;
}

const PageWrapper = ({ children, pageKey }: PageWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -50, scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
        className="w-full max-w-4xl"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;