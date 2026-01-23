import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Photo = {
  id: number;
  src: string;
  alt: string;
}

interface GalleryPageProps {
  title: string;
  subtitle: string;
  photos: Readonly<Photo[]>;
  theme: 'light' | 'dark';
}

const GalleryPage = ({ title, subtitle, photos, theme }: GalleryPageProps) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  return (
    <div className="py-10 px-4">
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
        <p className={`text-lg ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'} italic mb-12`}>
          {subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: Math.random() * 4 - 2,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedImage(photo)}
            className={`cursor-pointer relative overflow-hidden rounded-2xl shadow-2xl ${
              theme === 'dark' ? 'border border-[#E2725B]/20' : 'border border-[#E2725B]/30'
            }`}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 10px 30px rgba(226, 114, 91, 0.2)'
                : '0 10px 30px rgba(226, 114, 91, 0.3)'
            }}
          >
            {/* Polaroid effect */}
            <div className={`aspect-square overflow-hidden ${theme === 'dark' ? 'bg-[#1a0a0a]' : 'bg-white'}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 p-4"
              />
            </div>
            
            {/* Photo info */}
            <div className={`p-4 ${theme === 'dark' ? 'bg-[#1a0a0a]' : 'bg-white'}`}>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
                {photo.alt}
              </p>
            </div>

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-[#E2725B]' : 'bg-white'
                }`}>
                  <span className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-[#800000]'}`}>
                    👁️
                  </span>
                </div>
                <p className="text-white font-medium">Voir en grand</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            style={{ background: theme === 'dark' ? 'rgba(10, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              className="relative max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className={`absolute -top-4 -right-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#E2725B] to-[#800000] text-white'
                    : 'bg-white text-[#800000] border border-[#E2725B]'
                } hover:scale-110 transition-transform`}
              >
                <span className="text-2xl">✕</span>
              </button>
              <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md ${
                theme === 'dark' 
                  ? 'bg-[#1a0a0a]/80 text-[#FFD1C4]' 
                  : 'bg-white/80 text-[#800000]'
              }`}>
                <p className="font-medium">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`text-center mt-16 p-8 rounded-2xl max-w-2xl mx-auto ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#1a0a0a] to-[#2a0a0a] border border-[#E2725B]/20'
            : 'bg-gradient-to-r from-[#FFF5F0] to-[#FFE8E0] border border-[#E2725B]/30'
        }`}
      >
        <p className={`text-xl font-serif italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#800000]'}`}>
          "Chaque photo raconte une histoire, chaque sourire est un souvenir précieux"
        </p>
        <div className="flex justify-center items-center gap-8 mt-6">
          <div className="text-center">
            <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#E2725B]' : 'text-[#800000]'}`}>
              {photos.length}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'}`}>
              Moments
            </p>
          </div>
          <div className={`w-1 h-8 ${theme === 'dark' ? 'bg-[#E2725B]/30' : 'bg-[#800000]/30'}`} />
          <div className="text-center">
            <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#E2725B]' : 'text-[#800000]'}`}>
              ∞
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'}`}>
              Souvenirs
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryPage;