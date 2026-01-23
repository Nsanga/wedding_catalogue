import React, { useState } from 'react';
import { motion } from 'framer-motion';

type PaymentMethod = {
  id: 'mtn' | 'orange' | 'paypal';
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
      case 'orange': return '🍊';
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
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
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
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                theme === 'dark'
                  ? selected?.id === method.id
                    ? 'bg-gradient-to-br from-[#1a0a0a] to-[#2a0a0a] border-2 border-[#E2725B] shadow-xl shadow-[#E2725B]/20'
                    : 'bg-[#1a0a0a]/60 border border-[#E2725B]/30 hover:border-[#E2725B]/60'
                  : selected?.id === method.id
                    ? 'bg-gradient-to-br from-white to-[#FFF5F0] border-2 border-[#E2725B] shadow-xl shadow-[#E2725B]/30'
                    : 'bg-white/70 border border-[#E2725B]/30 hover:border-[#E2725B]'
              }`}
              onClick={() => setSelected(selected?.id === method.id ? null : method)}
            >
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                style={{ color: getMethodColor(method.id) }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-current transform rotate-45 -translate-y-8 translate-x-8 opacity-10" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${getMethodColor(method.id)}80, ${getMethodColor(method.id)}40)`,
                      color: getMethodColor(method.id)
                    }}
                  >
                    {getMethodIcon(method.id)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#800000]'}`}>
                      {method.label}
                    </h3>
                    {selected?.id === method.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6 mt-6"
                      >
                        <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-[#2a0a0a]' : 'bg-[#FFF5F0]'}`}>
                          <p className={`whitespace-pre-line ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'} font-medium`}>
                            {method.details}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {number && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(number, method.id);
                              }}
                              className={`px-5 py-3 rounded-full font-semibold flex items-center gap-3 transition-all ${
                                copied === method.id
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                                  : 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white hover:shadow-lg'
                              }`}
                            >
                              <span className="text-lg">
                                {copied === method.id ? '✓' : '📋'}
                              </span>
                              <span>
                                {copied === method.id ? 'Numéro copié !' : 'Copier le numéro'}
                              </span>
                            </motion.button>
                          )}
                          {email && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(email, method.id);
                              }}
                              className={`px-5 py-3 rounded-full font-semibold flex items-center gap-3 transition-all ${
                                copied === method.id
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                                  : 'bg-gradient-to-r from-[#0070BA] to-[#003087] text-white hover:shadow-lg'
                              }`}
                            >
                              <span className="text-lg">
                                {copied === method.id ? '✓' : '📧'}
                              </span>
                              <span>
                                {copied === method.id ? 'Email copié !' : 'Copier l\'email'}
                              </span>
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: selected?.id === method.id ? 180 : 0 }}
                    className={`text-2xl ${theme === 'dark' ? 'text-[#E2725B]' : 'text-[#800000]'}`}
                  >
                    ▼
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Thank you note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className={`text-center p-10 rounded-2xl max-w-2xl mx-auto shadow-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#1a0a0a] to-[#2a0a0a] border border-[#E2725B]/30'
            : 'bg-gradient-to-r from-[#FFF5F0] to-[#FFE8E0] border border-[#E2725B]/50'
        }`}
      >
        <div className="relative">
          <div className="absolute -top-8 -left-8 text-4xl">💝</div>
          <div className="absolute -top-8 -right-8 text-4xl">🎁</div>
          <p className={`text-2xl md:text-3xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'} mb-6`}>
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
        <p className={`text-lg ${theme === 'dark' ? 'text-[#FFD1C4]/80' : 'text-[#5A0000]/80'}`}>
          Merci pour votre générosité et vos bénédictions pour notre nouvelle vie ensemble 💕
        </p>
      </motion.div>
    </div>
  );
};

export default GiftsPage;