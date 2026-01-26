'use client';

import CoverPage from "@/app/components/CoverPage";
import GiftsPage from "@/app/components/GiftsPage";
import LanguageToggle from "@/app/components/LanguageToggle";
import PageWrapper from "@/app/components/PageWrapper";
import ProgramPage from "@/app/components/ProgramPage";
import TextPage from "@/app/components/TextPage";
import GalleryPage from "@/app/components/GalleryPage";
import ThemeToggle from "@/app/components/ThemeToggle";
import Navigation from "@/app/components/Navigation";
import { content } from "@/app/data/content";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Language = keyof typeof content;

export default function WeddingCatalogue() {
  const [lang, setLang] = useState<Language>("fr");
  const [page, setPage] = useState(0); 
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  const data = content[lang];

  const pages = [
    <CoverPage key="cover" data={data.cover} theme={theme} />,
    <TextPage key="welcome" text={data.welcome.text} image={data.welcome.image} theme={theme} />,
    <ProgramPage key="program" title={data.program.title} events={data.program.events} theme={theme} />,
    <GalleryPage key="gallery" title={data.gallery.title} subtitle={data.gallery.subtitle} photos={data.gallery.photos} theme={theme} />,
    <GiftsPage key="gifts"
      title={data.gifts.title}
      text={data.gifts.text}
      methods={data.gifts.methods}
      note={data.gifts.note}
      theme={theme}
    />,
    <TextPage key="thanks"
      title={data.thanks.title}
      text={data.thanks.text}
      subtitle={data.thanks.subtitle}
      subdesc={data.thanks.subdesc}
      buttonLabel={data.thanks.buttonLabel}
      link={data.thanks.link}
      limit={data.thanks.limit}
      theme={theme} />
  ];

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('wedding-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wedding-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPage(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setPage(prev => Math.min(pages.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pages.length]);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${theme === 'dark'
      ? 'bg-gradient-to-br from-[#1a0a0a] via-[#2a0a0a] to-[#1a0a0a] text-gray-100'
      : 'bg-gradient-to-br from-[#FFF9F7] via-[#FFF5F0] to-[#FFF0EB] text-gray-900'
      }`}>
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e2725b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />

        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${theme === 'dark'
              ? 'bg-gradient-to-r from-[#E2725B]/10 to-[#800000]/10'
              : 'bg-gradient-to-r from-[#E2725B]/20 to-[#FFD1C4]/20'
              }`}
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <LanguageToggle lang={lang} setLang={(newLang: string) => setLang(newLang as Language)} theme={theme} />

      <main className="min-h-screen flex flex-col items-center px-4 pt-14 pb-20 relative z-10">
        <PageWrapper pageKey={page + lang}>
          {pages[page]}
        </PageWrapper>
      </main>

      <div className="flex items-center justify-center">
        <Navigation
          currentPage={page}
          totalPages={pages.length}
          onPrevious={() => setPage(prev => Math.max(0, prev - 1))}
          onNext={() => setPage(prev => Math.min(pages.length - 1, prev + 1))}
          theme={theme}
        />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[#E2725B] to-[#800000]">
        <motion.div
          className="h-full bg-white/30 backdrop-blur-sm"
          initial={{ width: "0%" }}
          animate={{ width: `${((page + 1) / pages.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Page indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`px-4 py-2 rounded-full backdrop-blur-md border ${theme === 'dark'
            ? 'bg-[#1a0a0a]/70 border-[#E2725B]/30 text-[#FFD1C4]'
            : 'bg-white/70 border-[#E2725B]/30 text-[#800000]'
            } shadow-lg`}
        >
          <span className="font-semibold tracking-wider">
            {page + 1} / {pages.length}
          </span>
        </motion.div>
      </div>

      {/* Sound control for background music */}
      {/* <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-full backdrop-blur-md border ${theme === 'dark'
            ? 'bg-[#1a0a0a]/70 border-[#E2725B]/30 text-[#FFD1C4]'
            : 'bg-white/70 border-[#E2725B]/30 text-[#800000]'
            } shadow-lg`}
          title="Toggle background music"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </motion.button>
      </div> */}
    </div>
  );
}