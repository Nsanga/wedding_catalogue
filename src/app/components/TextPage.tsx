import React from 'react';
import { motion } from 'framer-motion';

interface TextPageProps {
  title: string;
  text: string;
  theme: 'light' | 'dark';
}

const TextPage = ({ title, text, theme }: TextPageProps) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-10 w-full"
      >
        {/* Title with decorative elements */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full opacity-20"
            style={{ background: theme === 'dark' ? '#E2725B' : '#800000' }}
          />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full opacity-20"
            style={{ background: theme === 'dark' ? '#E2725B' : '#800000' }}
          />
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold relative z-10">
            <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        </div>

        {/* Text content with elegant border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`relative p-8 md:p-12 rounded-2xl backdrop-blur-sm border ${
            theme === 'dark'
              ? 'bg-[#1a0a0a]/60 border-[#E2725B]/20'
              : 'bg-white/60 border-[#E2725B]/30'
          } shadow-xl`}
        >
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2"
            style={{ borderColor: theme === 'dark' ? '#E2725B' : '#800000' }}
          />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2"
            style={{ borderColor: theme === 'dark' ? '#E2725B' : '#800000' }}
          />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2"
            style={{ borderColor: theme === 'dark' ? '#E2725B' : '#800000' }}
          />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2"
            style={{ borderColor: theme === 'dark' ? '#E2725B' : '#800000' }}
          />

          <p className={`text-lg md:text-xl leading-relaxed whitespace-pre-line ${
            theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'
          } font-serif`}>
            {text}
          </p>
        </motion.div>

        {/* Decorative elements with animation */}
        <motion.div
          className="flex justify-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['💕', '✨', '🌸', '💫'].map((emoji, i) => (
            <motion.div
              key={i}
              className="relative"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            >
              <div className="text-4xl">{emoji}</div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ background: theme === 'dark' ? '#E2725B' : '#800000' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className={`pt-8 mt-8 border-t ${theme === 'dark' ? 'border-[#E2725B]/30' : 'border-[#800000]/30'}`}
        >
          <p className={`text-2xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
            Avec tout notre amour
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              Ramélie
            </span>
            <span className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              &
            </span>
            <span className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              Rémy
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextPage;