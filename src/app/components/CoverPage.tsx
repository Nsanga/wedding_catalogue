'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Cover = {
  names: string;
  subtitle: string;
  quote: string;
  image: string;
}

interface Data {
  data: Cover;
  theme: 'light' | 'dark';
}

const CoverPage = ({ data, theme }: Data) => {
  const [first, , second] = data.names.split(' ');
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${theme === 'dark' ? '#E2725B40' : '#E2725B20'} 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${theme === 'dark' ? '#80000040' : '#80000020'} 0%, transparent 70%)` }}
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-10 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
          <div className="relative w-full h-full">
            <Image
              src={data.image}
              alt="Couple"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-110"
              priority={true}
              onError={(e) => {
                // Fallback en cas d'erreur de chargement
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                // Vous pouvez ajouter une image de fallback ici
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          {/* Ornamental border */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-full pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10 max-w-2xl"
      >
        <h1 className="font-wedding text-4xl md:text-6xl text-center script-gradient script-gradient-animated script-shadow">
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent block">{first}</span>
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent block">&</span>
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent block">{second}</span>
        </h1>


        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-[#E2725B] to-[#800000] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="uppercase tracking-[0.4em] text-sm mb-4 font-semibold"
          style={{ color: theme === 'dark' ? '#FFD1C4' : '#800000' }}
        >
          {data.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-serif text-xl md:text-2xl italic max-w-lg mx-auto px-6 py-8 relative"
          style={{ color: theme === 'dark' ? '#E2725B' : '#800000' }}
        >
          <span className="absolute -left-4 top-0 text-3xl">&quot;</span>
          {data.quote}
          <span className="absolute -right-4 bottom-0 text-3xl">&quot;</span>
        </motion.p>
      </motion.div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{ color: theme === 'dark' ? '#E2725B40' : '#E2725B30' }}
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{
              y: [0, -150, -300],
              x: [0, Math.random() * 60 - 30, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '✨' : '🌸'}
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium" style={{ color: theme === 'dark' ? '#FFD1C4' : '#800000' }}>
            Défilez
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: theme === 'dark' ? '#E2725B' : '#800000' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: theme === 'dark' ? '#E2725B' : '#800000' }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;