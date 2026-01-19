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
      className={`fixed top-6 left-6 z-50 w-12 h-6 rounded-full p-1 flex items-center transition-all duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-amber-300 to-orange-400'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-lg"
        animate={{ x: theme === 'dark' ? 26 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <span className="text-xs">🌙</span>
        <span className="text-xs">☀️</span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;