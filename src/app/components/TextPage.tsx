
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TextPageProps {
  title?: string;
  text: string;
  subtitle?: string;
  subdesc?: string;
  link?: string;
  buttonLabel?: string;
  limit?: string;
  image?: string;
  theme: 'light' | 'dark';
}

const TextPage = ({ title, text, subtitle, subdesc, buttonLabel, link, limit, image, theme }: TextPageProps) => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 md:space-y-10 w-full max-w-3xl"
      >
        {/* Text content with elegant border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`relative p-6 md:p-8 lg:p-12 rounded-2xl backdrop-blur-sm border ${theme === 'dark'
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

          {title && (
            <h2 className="font-wedding text-4xl md:text-6xl text-center script-gradient script-gradient-animated script-shadow mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent break-words">
                {title}
              </span>
            </h2>
          )}

          <p className={`text-lg md:text-xl leading-relaxed whitespace-pre-line ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'
            } font-serif mb-8`}>
            {text}
          </p>

          {/* RSVP Card inside the main card */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mt-8 pt-8 border-t ${theme === 'dark' ? 'border-[#E2725B]/20' : 'border-[#800000]/20'}`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-[#2a0a0a]' : 'bg-[#FFF5F0]'}`}>
                    <div className="relative">
                      {/* Effet de lueur */}
                      <motion.div
                        className="absolute inset-0 rounded-full blur-md opacity-70"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        style={{ background: theme === 'dark' ? '#E2725B' : '#800000' }}
                      />

                      {/* Cloche principale */}
                      <motion.div
                        animate={{
                          rotate: [0, -15, 15, -15, 0],
                          y: [0, -5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                        className="relative text-2xl"
                      >
                        🔔
                      </motion.div>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
                    {subtitle}
                  </h3>
                </div>

                <p className={`text-sm md:text-base font-semibold ${theme === 'dark' ? 'text-[#FFD1C4]/80' : 'text-[#800000]/80'} mb-4`}>
                  {subdesc}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${theme === 'dark'
                      ? 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white'
                      : 'bg-gradient-to-r from-[#FF7A5C] to-[#B84A4A] text-white'
                      } shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>{buttonLabel}</span>
                    <span className="text-lg">→</span>
                  </a>
                </motion.div>

                <div className="flex items-center gap-2 mt-3">
                  <span className={`text-xs ${theme === 'dark' ? 'text-[#FFD1C4]/60' : 'text-[#800000]/60'}`}>
                    ⏰ {limit}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
          {image && (
            <>
              {/* Bottom thumbnail */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <div
                  className={`relative w-20 h-20 rounded-full overflow-hidden border-4 shadow-xl ${theme === 'dark'
                    ? 'border-[#E2725B] bg-white'
                    : 'border-[#800000] bg-white'
                    }`}
                >
                  <Image
                    src={image} // ou une autre image miniature
                    alt="Souvenir"
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                  />
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Decorative elements with animation */}
        <motion.div
          className="flex justify-center gap-6 md:gap-8 mt-8 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['💕', '✨', '🌸', '💫'].map((emoji, i) => (
            <motion.div
              key={i}
              className="relative"
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
              <div className="text-3xl md:text-4xl">{emoji}</div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-20"
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
          className={`pt-6 md:pt-8 mt-6 md:mt-8 border-t ${theme === 'dark' ? 'border-[#E2725B]/30' : 'border-[#800000]/30'}`}
        >
          <p className={`text-xl md:text-2xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
            Avec tout notre amour
          </p>
          <div className="flex justify-center gap-3 md:gap-4 mt-3 md:mt-4 font-wedding">
            <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              Ramélie
            </span>
            <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              &
            </span>
            <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#FFD1C4]/70' : 'text-[#800000]/70'}`}>
              Rémy
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextPage;