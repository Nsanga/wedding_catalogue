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
}

const ProgramPage = ({ title, events }: ProgramPageProps) => {
  return (
    <div className="py-10 px-4 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Suivez chaque moment magique de notre journée spéciale
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
        
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start gap-6 mb-8 group"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20" />
            </div>

            {/* Event card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                    <span className="text-2xl">
                      {index === 0 ? '👰' : 
                       index === events.length - 1 ? '🎉' : 
                       '💒'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {event.place}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <p className="text-white font-semibold">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span>📍</span>
                <p className="text-sm italic">{event.place}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800"
      >
        <p className="text-purple-800 dark:text-purple-300 italic">
          ✨ Nous avons hâte de partager tous ces moments magiques avec vous !
        </p>
      </motion.div>
    </div>
  );
};

export default ProgramPage;