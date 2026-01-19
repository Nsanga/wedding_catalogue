import React from 'react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageToggle = ({ lang, setLang }: LanguageToggleProps) => {
  return (
    <motion.div 
      className="fixed top-6 right-6 flex gap-2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {[
        { code: 'fr', flag: '🇫🇷', label: 'Français' },
        { code: 'en', flag: '🇬🇧', label: 'English' }
      ].map((l) => (
        <motion.button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
            lang === l.code 
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg' 
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 dark:bg-gray-800/80 dark:text-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <span className="text-lg">{l.flag}</span> */}
          <span className="font-medium">{l.code.toUpperCase()}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageToggle;