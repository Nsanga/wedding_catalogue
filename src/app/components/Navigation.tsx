import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  theme: 'light' | 'dark';
}

const Navigation = ({ currentPage, totalPages, onPrevious, onNext, theme }: NavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-40">
      <motion.button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${
          currentPage === 0
            ? theme === 'dark'
              ? 'bg-[#2a0a0a]/50 text-gray-500 cursor-not-allowed border border-[#800000]/30'
              : 'bg-gray-100/50 text-gray-400 cursor-not-allowed border border-gray-300'
            : 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white shadow-lg hover:shadow-xl'
        }`}
        whileHover={{ scale: currentPage === 0 ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">←</span>
        <span className="font-semibold">Précédent</span>
      </motion.button>

      {/* Page indicators */}
      <div className="flex items-center gap-2 bg-white/20 dark:bg-[#1a0a0a]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E2725B]/30">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentPage
                ? 'bg-gradient-to-r from-[#E2725B] to-[#800000]'
                : theme === 'dark'
                  ? 'bg-[#FFD1C4]/30'
                  : 'bg-[#800000]/30'
            }`}
            animate={{
              scale: i === currentPage ? 1.5 : 1,
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${
          currentPage === totalPages - 1
            ? theme === 'dark'
              ? 'bg-[#2a0a0a]/50 text-gray-500 cursor-not-allowed border border-[#800000]/30'
              : 'bg-gray-100/50 text-gray-400 cursor-not-allowed border border-gray-300'
            : 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white shadow-lg hover:shadow-xl'
        }`}
        whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-semibold">Suivant</span>
        <span className="text-xl">→</span>
      </motion.button>
    </div>
  );
};

export default Navigation;