import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Cover = {
  names: string;
  date: string;
  subtitle: string;
  quote: string;
  image: string;
}

interface Data {
  data: Cover;
}

const CoverPage = ({ data }: Data) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
        <Image
              src={data.image}
              alt="Couple Ramélie & Rémy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABqv/9k="
              quality={90}
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
          {data.names}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="uppercase tracking-[0.3em] text-sm mb-2 text-gray-600 dark:text-gray-400"
        >
          {data.subtitle}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-light mb-8 text-gray-700 dark:text-gray-300"
        >
          {data.date}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-serif text-xl italic max-w-lg mx-auto text-gray-600 dark:text-gray-400 px-4 py-6 border-t border-b border-gray-200/50 dark:border-gray-700/50"
        >
          &quot;{data.quote}&quot;
        </motion.p>
      </motion.div>

      {/* Animated floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl text-rose-400/20"
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{ 
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoverPage;