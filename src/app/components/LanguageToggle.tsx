
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: 'light' | 'dark';
}

const LanguageToggle = ({ lang, setLang, theme }: LanguageToggleProps) => {
  return (
    <motion.div 
      className="fixed top-6 right-6 flex gap-3 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {[
        { code: 'fr', flag: '🇫🇷', label: 'Français' },
        { code: 'en', flag: '🇬🇧', label: 'English' }
      ].map((l) => (
        <motion.button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
            lang === l.code 
              ? 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white shadow-lg' 
              : theme === 'dark'
                ? 'bg-[#1a0a0a]/70 backdrop-blur-sm text-[#FFD1C4] border border-[#E2725B]/30'
                : 'bg-white/70 backdrop-blur-sm text-[#800000] border border-[#E2725B]/30'
          } hover:scale-105`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-semibold tracking-wider">{l.code.toUpperCase()}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageToggle;