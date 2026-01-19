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
    <CoverPage key="cover" data={data.cover} />,
    <TextPage key="welcome" title={data.welcome.title} text={data.welcome.text} />,
    <ProgramPage key="program" title={data.program.title} events={data.program.events} />,
    <GalleryPage key="gallery" title={data.gallery.title} subtitle={data.gallery.subtitle} photos={data.gallery.photos} />,
    <GiftsPage key="gifts"
      title={data.gifts.title}
      text={data.gifts.text}
      methods={data.gifts.methods}
      note={data.gifts.note}
    />,
    <TextPage key="thanks" title={data.thanks.title} text={data.thanks.text} />
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
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-gray-100'
        : 'bg-gradient-to-br from-rose-50 via-orange-50/30 to-amber-50 text-gray-900'
      }`}>
      {/* Background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${theme === 'dark'
                ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
                : 'bg-gradient-to-r from-rose-300/20 to-orange-300/20'
              }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <LanguageToggle lang={lang} setLang={(newLang: string) => setLang(newLang as Language)} />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <PageWrapper pageKey={page + lang}>
          {pages[page]}
        </PageWrapper>
      </main>

      <Navigation
        currentPage={page}
        totalPages={pages.length}
        onPrevious={() => setPage(prev => Math.max(0, prev - 1))}
        onNext={() => setPage(prev => Math.min(pages.length - 1, prev + 1))}
      />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${((page + 1) / pages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Page indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className={`px-4 py-2 rounded-full backdrop-blur-sm ${theme === 'dark'
            ? 'bg-gray-800/50 text-gray-300'
            : 'bg-white/50 text-gray-700'
          }`}>
          <span className="font-medium">
            {page + 1} / {pages.length}
          </span>
        </div>
      </div>
    </div>
  );
}