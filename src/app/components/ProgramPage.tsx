import React from 'react';
import { motion } from 'framer-motion';

type Event = {
  time: string;
  title: string;
  place: string;
}

interface ProgramPageProps {
  title: string;
  events: Readonly<Event[]>;
  theme: 'light' | 'dark';
}

const ProgramPage = ({ title, events, theme }: ProgramPageProps) => {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className={`text-lg ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'} italic`}>
          Suivez chaque moment magique de notre journée spéciale
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E2725B] via-[#B84A4A] to-[#800000]" />
        
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative flex items-start gap-8 mb-10 group"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
                style={{ background: `linear-gradient(135deg, ${theme === 'dark' ? '#E2725B' : '#FF7A5C'}, ${theme === 'dark' ? '#800000' : '#B84A4A'})` }}
              >
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ background: theme === 'dark' ? '#E2725B' : '#FF7A5C' }}
              />
            </div>

            {/* Event card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className={`flex-1 rounded-2xl p-6 shadow-lg border backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-[#1a0a0a]/60 border-[#E2725B]/20'
                  : 'bg-white/70 border-[#E2725B]/30'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#2a0a0a]' : 'bg-[#FFF5F0]'
                  }`}>
                    <span className="text-2xl">
                      {index === 0 ? '👰' : 
                       index === events.length - 1 ? '🎉' : 
                       index === 1 ? '💍' : '💒'}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#800000]'}`}>
                      {event.title}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#B84A4A]'} mt-1`}>
                      {event.place}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-2 rounded-full shadow"
                  style={{ background: theme === 'dark' ? 'linear-gradient(to right, #E2725B, #800000)' : 'linear-gradient(to right, #FF7A5C, #B84A4A)' }}
                >
                  <p className="text-white font-bold">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <p className={`text-sm italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
                  {event.place}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`text-center mt-16 p-8 rounded-2xl border backdrop-blur-sm ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#1a0a0a] to-[#2a0a0a] border-[#E2725B]/30'
            : 'bg-gradient-to-r from-[#FFF5F0] to-[#FFE8E0] border-[#E2725B]/50'
        }`}
      >
        <p className={`text-2xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
          "Nous avons hâte de partager tous ces moments magiques avec vous !"
        </p>
        <motion.div
          className="flex justify-center gap-4 mt-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-3xl">💕</span>
          <span className="text-3xl">✨</span>
          <span className="text-3xl">🎉</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProgramPage;