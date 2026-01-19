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
}

const GiftsPage = ({ title, text, methods, note }: GiftsPageProps) => {
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

  const extractNumber = (details: string) => {
    const match = details.match(/\d[\d\s]+/);
    return match ? match[0].replace(/\s/g, '') : '';
  };

  const extractEmail = (details: string) => {
    const match = details.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return match ? match[0] : '';
  };

  return (
    <div className="py-10 px-4 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed mb-8">
          {text}
        </p>
      </motion.div>

      <div className="grid gap-4 mb-12">
        {methods.map((method, index) => {
          const number = extractNumber(method.details);
          const email = extractEmail(method.details);
          
          return (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${
                selected?.id === method.id
                  ? 'border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 shadow-xl'
                  : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg'
              }`}
              onClick={() => setSelected(method)}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {getMethodIcon(method.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {method.label}
                  </h3>
                  {selected?.id === method.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-3 mt-3"
                    >
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {method.details}
                      </p>
                      <div className="flex gap-2">
                        {number && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(number, method.id);
                            }}
                            className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2"
                          >
                            {copied === method.id ? '✓ Copié!' : '📋 Copier le numéro'}
                          </button>
                        )}
                        {email && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(email, method.id);
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                          >
                            {copied === method.id ? '✓ Copié!' : '📋 Copier l\'email'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: selected?.id === method.id ? 180 : 0 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800"
      >
        <p className="text-amber-800 dark:text-amber-300 text-lg italic">
          ❤️ {note}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm"
      >
        <p>Merci pour votre soutien et vos bénédictions 💝</p>
      </motion.div>
    </div>
  );
};

export default GiftsPage;