import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation = ({ currentPage, totalPages, onPrevious, onNext }: NavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-40">
      <motion.button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
          currentPage === 0
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">←</span>
        <span className="font-medium">Précédent</span>
      </motion.button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentPage
                ? 'w-8 bg-gradient-to-r from-rose-500 to-orange-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            animate={{
              scale: i === currentPage ? 1.2 : 1
            }}
          />
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
          currentPage === totalPages - 1
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-medium">Suivant</span>
        <span className="text-xl">→</span>
      </motion.button>
    </div>
  );
};

export default Navigation;