/**
 * Landing Page Edukasi Interaktif: Fiqih Haid (Mazhab Syafi'i)
 * Berdasarkan Resume Special Class #12 bersama Ustadzah Jahidah Farhati, Lc.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KewajibanSection } from './components/KewajibanSection';
import { PengertianUsiaSection } from './components/PengertianUsiaSection';
import { WarnaDarahSection } from './components/WarnaDarahSection';
import { TandaBerhentiFlowchart } from './components/TandaBerhentiFlowchart';
import { Kalkulator24Jam } from './components/Kalkulator24Jam';
import { NaqaTimelineSimulator } from './components/NaqaTimelineSimulator';
import { MasaSuciCalculator } from './components/MasaSuciCalculator';
import { NifasDanHamilSection } from './components/NifasDanHamilSection';
import { IstihadhahDecisionTree } from './components/IstihadhahDecisionTree';
import { LaranganSection } from './components/LaranganSection';
import { CairanKewanitaanSection } from './components/CairanKewanitaanSection';
import { QadhaShalatSection } from './components/QadhaShalatSection';
import { MandiBesarStepper } from './components/MandiBesarStepper';
import { MitosFaktaSection } from './components/MitosFaktaSection';
import { FaqAccordion } from './components/FaqAccordion';
import { KuisSection } from './components/KuisSection';
import { Footer } from './components/Footer';
import { GlossaryModal } from './components/GlossaryModal';
import { CheatSheetModal } from './components/CheatSheetModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fiqih-haid-theme');
      if (saved) return saved === 'dark';
      return false; // Default to Light Mode with comfortable warm ivory (#FDF0F5)
    }
    return false;
  });

  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('fiqih-haid-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('fiqih-haid-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FDF0F5] dark:bg-[#1A0E17] text-[#2D1B25] dark:text-[#FDF0F8] transition-colors duration-300 selection:bg-[#FCEEF6] selection:text-[#2D1B25]">
      {/* Top Navbar with Dark / Light Mode Toggle */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        openGlossary={() => setIsGlossaryOpen(true)}
        openCheatSheet={() => setIsCheatSheetOpen(true)}
      />

      {/* Main Educational Flow */}
      <main>
        {/* 1. Hero with 3 Key Numbers */}
        <Hero />

        {/* 2. Kenapa Wajib Belajar Fiqih Darah */}
        <KewajibanSection />

        {/* 3. Pengertian Haid + Usia Minimal & Batas Mazhab */}
        <PengertianUsiaSection />

        {/* 4. Warna Darah Haid & Tangga Kekuatan */}
        <WarnaDarahSection />

        {/* 5. Tanda Berhenti Haid (Interactive Flowchart) */}
        <TandaBerhentiFlowchart />

        {/* 6. Durasi Minimal & Kalkulator 24 Jam Akumulasi */}
        <Kalkulator24Jam />

        {/* 7. Naqa (Darah Berhenti di Tengah) Timeline Simulator */}
        <NaqaTimelineSimulator />

        {/* 8. Masa Suci Minimal 15 Hari & Istihadhah Penyempurna */}
        <MasaSuciCalculator />

        {/* 9, 10, 11. Nifas (60 Hari), Darah Hamil & Darah Lewat 15 Hari */}
        <NifasDanHamilSection />

        {/* 12. Istihadhah, 4 Syarat Tamyiz & Pohon Keputusan 7 Golongan */}
        <IstihadhahDecisionTree />

        {/* 13. Larangan Bagi Perempuan Haid & Nifas */}
        <LaranganSection />

        {/* 14. Jenis Cairan Kewanitaan (Mani, Madzi, Wadi, Rutubatul Farj) */}
        <CairanKewanitaanSection />

        {/* 15. Qadha Shalat (2 Kondisi Khusus) */}
        <QadhaShalatSection />

        {/* 16. Tata Cara Mandi Besar (Rukun & Sunnah) */}
        <MandiBesarStepper />

        {/* 17. 8 Mitos vs Fakta Seputar Haid */}
        <MitosFaktaSection />

        {/* 18. Tanya Jawab Lengkap (28 Pertanyaan dari Sesi 1 & 2) */}
        <FaqAccordion />

        {/* 19. Kuis Akhir Interaktif (16 Soal Kasus Fiqih) */}
        <KuisSection />
      </main>

      {/* 21. Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
