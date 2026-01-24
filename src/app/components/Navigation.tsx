'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  theme: 'light' | 'dark';
}

const Navigation = ({ currentPage, totalPages, onPrevious, onNext, theme }: NavigationProps) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  // Variants pour les animations
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.5 }
  };

  const pageIndicatorVariants = {
    inactive: { 
      scale: 1,
      backgroundColor: theme === 'dark' ? '#FFD1C430' : '#80000030'
    },
    active: { 
      scale: 1.5,
      backgroundColor: '#E2725B'
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-50 w-full max-w-6xl px-4">
      {/* Page indicators - Desktop */}
      <div className="hidden md:flex items-center justify-center gap-3">
        <AnimatePresence mode="wait">
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                // Optionnel: Ajouter une fonction pour naviguer directement
                if (i < currentPage) onPrevious();
                if (i > currentPage) onNext();
              }}
              className="flex flex-col items-center gap-1"
              initial="inactive"
              animate={i === currentPage ? "active" : "inactive"}
              whileHover="hover"
              variants={{
                active: { scale: 1.1 },
                inactive: { scale: 1 }
              }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-gradient-to-r from-[#E2725B] to-[#800000]'
                    : theme === 'dark'
                      ? 'bg-[#FFD1C4]/30'
                      : 'bg-[#800000]/30'
                }`}
                variants={pageIndicatorVariants}
              />
              <motion.span 
                className={`text-xs font-medium transition-all duration-300 ${
                  i === currentPage
                    ? 'text-[#800000] dark:text-[#E2725B]'
                    : theme === 'dark'
                      ? 'text-gray-400'
                      : 'text-gray-600'
                }`}
                animate={{
                  opacity: i === currentPage ? 1 : 0.7
                }}
              >
                {i + 1}
              </motion.span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile page indicator */}
      {/* <div className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#1a0a0a]/80 backdrop-blur-sm border border-[#E2725B]/20">
        <span className="text-sm font-medium text-[#800000] dark:text-[#E2725B]">
          {currentPage + 1} / {totalPages}
        </span>
      </div> */}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
        {/* Previous button */}
        <motion.button
          onClick={onPrevious}
          disabled={isFirstPage}
          className={`group relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 overflow-hidden ${
            isFirstPage
              ? theme === 'dark'
                ? 'bg-[#2a0a0a]/50 text-gray-500 cursor-not-allowed border border-[#800000]/30'
                : 'bg-gray-100/50 text-gray-400 cursor-not-allowed border border-gray-300'
              : 'text-white shadow-lg hover:shadow-xl'
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover={isFirstPage ? "disabled" : "hover"}
          whileTap="tap"
        >
          {/* Gradient background for active button */}
          {!isFirstPage && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E2725B] to-[#800000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          )}
          
          <span className="relative flex items-center gap-2 z-10">
            <motion.span 
              className="text-xl"
              animate={!isFirstPage ? {
                x: [0, -3, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            >
              ←
            </motion.span>
            <span className="font-semibold hidden sm:inline">Précédent</span>
            <span className="font-semibold sm:hidden">Préc.</span>
          </span>
          
          {/* Pulse effect on hover */}
          {!isFirstPage && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#E2725B]/50"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
          )}
        </motion.button>

        {/* Next button */}
        <motion.button
          onClick={onNext}
          disabled={isLastPage}
          className={`group relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 overflow-hidden ${
            isLastPage
              ? theme === 'dark'
                ? 'bg-[#2a0a0a]/50 text-gray-500 cursor-not-allowed border border-[#800000]/30'
                : 'bg-gray-100/50 text-gray-400 cursor-not-allowed border border-gray-300'
              : 'text-white shadow-lg hover:shadow-xl'
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover={isLastPage ? "disabled" : "hover"}
          whileTap="tap"
        >
          {/* Gradient background for active button */}
          {!isLastPage && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E2725B] to-[#800000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          )}
          
          <span className="relative flex items-center gap-2 z-10">
            <span className="font-semibold hidden sm:inline">Suivant</span>
            <span className="font-semibold sm:hidden">Suiv.</span>
            <motion.span 
              className="text-xl"
              animate={!isLastPage ? {
                x: [0, 3, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            >
              →
            </motion.span>
          </span>
          
          {/* Pulse effect on hover */}
          {!isLastPage && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#800000]/50"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Navigation;