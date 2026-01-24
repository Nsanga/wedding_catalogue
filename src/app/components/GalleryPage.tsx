'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Photo = {
  id: number;
  src: string;
  alt: string;
};

interface GalleryPageProps {
  title: string;
  subtitle: string;
  photos: Readonly<Photo[]>;
  theme: 'light' | 'dark';
}

const GalleryPage = ({ title, subtitle, photos, theme }: GalleryPageProps) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  /* 🔒 Bloquer le scroll arrière */
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-wedding text-4xl md:text-6xl text-center script-gradient script-gradient-animated script-shadow mb-6">
          <span className="bg-gradient-to-r from-[#E2725B] to-[#800000] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p
          className={`text-lg italic ${theme === 'dark' ? 'text-[#FFD1C4]' : 'text-[#5A0000]'
            }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(photo)}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            style={{
              background:
                theme === 'dark'
                  ? 'rgba(0,0,0,0.95)'
                  : 'rgba(255,255,255,0.95)',
            }}
          >
            {/* Conteneur CENTRÉ */}
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative flex items-center justify-center max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE CENTRÉE */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1600}
                height={1200}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                priority
              />

              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* Caption */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full text-sm">
                {selectedImage.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
