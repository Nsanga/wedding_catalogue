import React from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 left-6 z-50 w-14 h-8 rounded-full p-1 flex items-center transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#800000] to-[#5A0000]' 
          : 'bg-gradient-to-r from-[#E2725B] to-[#FF9671]'
      } shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ 
          x: theme === 'dark' ? 26 : 0,
          rotate: theme === 'dark' ? 180 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="text-sm">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <span className="text-xs">🌙</span>
        <span className="text-xs">☀️</span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;