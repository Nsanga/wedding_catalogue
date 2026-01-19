import React from 'react';
import { motion } from 'framer-motion';

interface TextPageProps {
  title: string;
  text: string;
}

const TextPage = ({ title, text }: TextPageProps) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h2>
        
        <div className="relative">
          <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
          <div className="absolute -right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl leading-relaxed whitespace-pre-line bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          >
            {text}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['💕', '✨', '🌸', '💫'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextPage;