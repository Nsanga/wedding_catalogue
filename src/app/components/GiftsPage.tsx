'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type PaymentMethod = {
  id: 'mtn' | 'orange' | 'paypal' | 'wero';
  label: string;
  details: string;
}

interface GiftsPageProps {
  title: string;
  text: string;
  methods: Readonly<PaymentMethod[]>;
  note: string;
  theme: 'light' | 'dark';
}

const GiftsPage = ({ title, text, methods, note, theme }: GiftsPageProps) => {
  const [selected, setSelected] = useState<PaymentMethod | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, method: string) => {
    navigator.clipboard.writeText(text);
    setCopied(method);
    setTimeout(() => setCopied(null), 2000);
  };

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'mtn': return '📱';
      case 'orange': return '📱';
      case 'paypal': return '💳';
      default: return '💰';
    }
  };

  const getMethodColor = (id: string) => {
    switch (id) {
      case 'mtn': return theme === 'dark' ? '#FFD700' : '#FFC107';
      case 'orange': return theme === 'dark' ? '#FFA500' : '#FF9800';
      case 'paypal': return theme === 'dark' ? '#003087' : '#0070BA';
      default: return theme === 'dark' ? '#E2725B' : '#800000';
    }
  };

  const extractNumber = (details: string) => {
    const match = details.match(/\d[\d\s]+/);
    return match ? match[0].replace(/\s/g, '') : '';
  };

  const extractEmail = (details: string) => {
    const match = details.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return match ? match[0] : '';
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="font-wedding text-4xl md:text-6xl text-center script-gradient script-gradient-animated script-shadow mb-8">
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'} whitespace-pre-line mb-12 max-w-3xl mx-auto`}>
          {text}
        </p>
      </motion.div>

      <div className="grid gap-6 mb-16 max-w-2xl mx-auto">
        {methods.map((method, index) => {
          const number = extractNumber(method.details);
          const email = extractEmail(method.details);

          return (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.02,
                boxShadow: theme === 'dark'
                  ? '0 20px 40px rgba(226, 114, 91, 0.2)'
                  : '0 20px 40px rgba(226, 114, 91, 0.15)'
              }}
              className={`relative rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden group ${theme === 'dark'
                  ? selected?.id === method.id
                    ? 'bg-gradient-to-br from-[#1a0a0a] via-[#221010] to-[#1a0a0a] border-2 border-[#E2725B] shadow-2xl shadow-[#E2725B]/30'
                    : 'bg-gradient-to-br from-[#1a0a0a]/80 to-[#221010]/80 backdrop-blur-sm border border-[#E2725B]/20 hover:border-[#E2725B]/50 hover:bg-[#1a0a0a]'
                  : selected?.id === method.id
                    ? 'bg-gradient-to-br from-white via-[#FFF9F5] to-white border-2 border-[#E2725B] shadow-2xl shadow-[#E2725B]/20'
                    : 'bg-gradient-to-br from-white/80 to-[#FFF9F5]/80 backdrop-blur-sm border border-[#E2725B]/20 hover:border-[#E2725B]/50 hover:bg-white'
                }`}
              onClick={() => setSelected(selected?.id === method.id ? null : method)}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle at 50% 0%, rgba(226, 114, 91, 0.1), transparent 70%)'
                    : 'radial-gradient(circle at 50% 0%, rgba(226, 114, 91, 0.08), transparent 70%)'
                }}
              />

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-current to-transparent transform rotate-45 -translate-y-10 translate-x-10 opacity-5"
                  style={{ color: getMethodColor(method.id) }}
                />
              </div>

              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon container with better design */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-xl"
                      style={{
                        background: theme === 'dark'
                          ? `linear-gradient(135deg, ${getMethodColor(method.id)}20, ${getMethodColor(method.id)}10)`
                          : `linear-gradient(135deg, ${getMethodColor(method.id)}15, ${getMethodColor(method.id)}05)`,
                        border: `2px solid ${getMethodColor(method.id)}30`
                      }}
                    >
                      {/* Animated icon background */}
                      <div className="absolute inset-0 rounded-2xl animate-pulse opacity-10"
                        style={{ background: getMethodColor(method.id) }}
                      />

                      {/* Icon with shadow */}
                      <div className="relative z-10 text-4xl md:text-5xl drop-shadow-lg">
                        {getMethodIcon(method.id)}
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl blur-md opacity-20"
                        style={{ background: getMethodColor(method.id) }}
                      />
                    </div>

                    {/* Small decorative dot */}
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full"
                      style={{ background: getMethodColor(method.id) }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className={`text-2xl md:text-3xl font-bold mb-3 truncate ${theme === 'dark'
                            ? 'text-white'
                            : 'text-[#800000]'
                          }`}>
                          {method.label}
                        </h3>

                        {selected?.id === method.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                              marginTop: '1.5rem'
                            }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6 overflow-hidden"
                          >
                            {/* Details card */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className={`p-5 rounded-xl backdrop-blur-sm border ${theme === 'dark'
                                  ? 'bg-[#2a0a0a]/80 border-[#E2725B]/30'
                                  : 'bg-[#FFF9F5]/80 border-[#E2725B]/20'
                                }`}
                            >
                              <p className={`whitespace-pre-line leading-relaxed font-medium ${theme === 'dark'
                                  ? 'text-[#FFD1C4]'
                                  : 'text-[#5A0000]'
                                }`}>
                                {method.details}
                              </p>
                            </motion.div>

                            {/* Action buttons */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex flex-wrap gap-3"
                            >
                              {number && (
                                <motion.button
                                  whileHover={{ scale: 1.03, y: -2 }}
                                  whileTap={{ scale: 0.97 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(number, method.id);
                                  }}
                                  className={`px-5 py-3 rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg ${copied === method.id
                                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30'
                                      : 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white hover:shadow-xl hover:shadow-[#E2725B]/30'
                                    }`}
                                >
                                  <motion.span
                                    animate={{
                                      scale: copied === method.id ? [1, 1.2, 1] : 1,
                                      rotate: copied === method.id ? [0, 360, 0] : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl"
                                  >
                                    {copied === method.id ? '✓' : '📋'}
                                  </motion.span>
                                  <span className="whitespace-nowrap">
                                    {copied === method.id ? 'Copié !' : 'Copier le numéro'}
                                  </span>
                                </motion.button>
                              )}

                              {email && (
                                <motion.button
                                  whileHover={{ scale: 1.03, y: -2 }}
                                  whileTap={{ scale: 0.97 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(email, method.id);
                                  }}
                                  className={`px-5 py-3 rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg ${copied === method.id
                                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30'
                                      : 'bg-gradient-to-r from-[#0070BA] to-[#003087] text-white hover:shadow-xl hover:shadow-blue-500/30'
                                    }`}
                                >
                                  <motion.span
                                    animate={{
                                      scale: copied === method.id ? [1, 1.2, 1] : 1,
                                      rotate: copied === method.id ? [0, 360, 0] : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl"
                                  >
                                    {copied === method.id ? '✓' : '📧'}
                                  </motion.span>
                                  <span className="whitespace-nowrap">
                                    {copied === method.id ? 'Copié !' : 'Copier l\'email'}
                                  </span>
                                </motion.button>
                              )}

                              {/* Quick action indicator */}
                              {selected?.id === method.id && (
                                <div className="flex items-center gap-2 ml-auto">
                                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${theme === 'dark'
                                      ? 'bg-[#E2725B]/10 text-[#FFB4A2]'
                                      : 'bg-[#E2725B]/10 text-[#800000]'
                                    }`}>
                                    👆 Cliquez pour copier
                                  </span>
                                </div>
                              )}
                            </motion.div>
                          </motion.div>
                        )}
                      </div>

                      {/* Chevron indicator */}
                      <motion.div
                        animate={{
                          rotate: selected?.id === method.id ? 180 : 0,
                          scale: selected?.id === method.id ? 1.2 : 1
                        }}
                        className={`text-2xl md:text-3xl flex-shrink-0 ${theme === 'dark'
                            ? 'text-[#FFB4A2]'
                            : 'text-[#E2725B]'
                          }`}
                      >
                        ▼
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ color: getMethodColor(method.id) }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Thank you note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className={`text-center p-10 rounded-2xl max-w-2xl mx-auto shadow-xl ${theme === 'dark'
            ? 'bg-gradient-to-r from-[#1a0a0a] to-[#2a0a0a] border border-[#E2725B]/30'
            : 'bg-gradient-to-r from-[#FFF5F0] to-[#FFE8E0] border border-[#E2725B]/50'
          }`}
      >
        <div className="relative">
          <div className="absolute -top-8 -left-8 text-4xl">💝</div>
          <div className="absolute -top-8 -right-8 text-4xl">🎁</div>
          <p className={`text-xl md:text-3xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'} mb-6`}>
            {note}
          </p>
          <motion.div
            className="flex justify-center gap-6 mt-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-4xl">🙏</span>
            <span className="text-4xl">❤️</span>
            <span className="text-4xl">✨</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={`text-center mt-12 pt-8 border-t ${theme === 'dark' ? 'border-[#E2725B]/20' : 'border-[#E2725B]/30'}`}
      >
        <p className={`text-md ${theme === 'dark' ? 'text-[#FFD1C4]/80' : 'text-[#5A0000]/80'}`}>
          Merci pour votre générosité et vos bénédictions pour notre nouvelle vie ensemble 💕
        </p>
      </motion.div>
    </div>
  );
};

export default GiftsPage;