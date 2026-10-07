import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  openGlossary: () => void;
  openCheatSheet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  openGlossary,
  openCheatSheet,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      // Section tracking
      const sections = [
        'hero', 'kewajiban', 'warna-darah', 'tanda-berhenti',
        'kalkulator-24jam', 'naqa-timeline', 'masa-suci',
        'istihadhah', 'larangan', 'cairan', 'qadha-shalat',
        'mandi-besar', 'mitos-fakta', 'tanya-jawab', 'kuis'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'kalkulator-24jam', label: 'Kalkulator 24 Jam' },
    { id: 'naqa-timeline', label: 'Timeline Naqa' },
    { id: 'masa-suci', label: 'Masa Suci' },
    { id: 'istihadhah', label: '7 Golongan' },
    { id: 'larangan', label: 'Larangan' },
    { id: 'cairan', label: 'Cairan' },
    { id: 'tanya-jawab', label: 'Tanya Jawab' },
    { id: 'kuis', label: 'Kuis' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-xl bg-[#FDF0F5]/80 dark:bg-[#1A0E17]/80 border-b border-[#C2185B]/12 dark:border-[#F06292]/18 shadow-[0_2px_24px_-4px_rgba(194,24,91,0.10)]">
        {/* Scroll Progress Bar — Rose Gradient */}
        <div
          className="h-0.5 transition-all duration-100 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #C2185B 0%, #E91E8C 60%, #F06292 100%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#hero"
            className="text-lg md:text-xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8] flex items-center gap-2 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2185B] dark:bg-[#F06292]" />
            Haid Check
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors hover:text-[#2D1B25] dark:hover:text-[#FDF0F8] ${
                  activeSection === link.id
                    ? 'font-bold text-[#C2185B] dark:text-[#F06292] underline decoration-2 underline-offset-8 decoration-[#C2185B] dark:decoration-[#F06292]'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={openGlossary}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Kamus Istilah Fiqih"
            >
              {/* <BookOpen className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" /> */}
              <span className="hidden sm:inline">Glosarium</span>
            </button>

            <button
              onClick={openCheatSheet}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Rangkuman Rumus Cepat"
            >
              {/* <FileText className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" /> */}
              <span className="hidden sm:inline">Rumus</span>
            </button>

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
              title={isDark ? 'Ganti ke Mode Terang (Linen Cream)' : 'Ganti ke Mode Gelap'}
              aria-label="Toggle tema mode terang / gelap"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F06292]" />
              ) : (
                <Moon className="w-4 h-4 text-[#5C3A4E]" />
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 text-[#2D1B25] dark:text-[#FDF0F8] cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-[#FDF0F5] dark:bg-[#1A0E17] px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-xs font-semibold rounded-lg ${
                    activeSection === link.id
                      ? 'bg-[#C2185B] text-white'
                      : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-[#2D1B25]/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openGlossary();
                }}
                className="py-2.5 px-2 text-xs font-semibold rounded-lg bg-white/70 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" /> Glosarium
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCheatSheet();
                }}
                className="py-2.5 px-2 text-xs font-semibold rounded-lg bg-white/70 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" /> Rumus
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="py-2.5 px-2 text-xs font-semibold rounded-lg bg-white/70 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#F06292]" /> Terang
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#5C3A4E]" /> Gelap
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
