import React from 'react';
import { ArrowUp, Github, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#C2185B]/15 dark:border-[#F06292]/15 backdrop-blur-sm bg-[#FDF0F5]/80 dark:bg-[#1A0E17]/80 py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Footer: Credits & Disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credits */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C2185B] dark:bg-[#F06292]" />
              <span className="font-bold text-sm sm:text-base text-[#2D1B25] dark:text-[#FDF0F8]">
                Fiqih Haid Interaktif
              </span>
            </div>
            <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Disusun berdasarkan <strong>Resume Special Class #12 – Series Fiqih Haid</strong>:<br />
              • Sesi 1: <em>"Agar Ibadah Tak Salah Langkah"</em><br />
              • Sesi 2: <em>"Putus Nyambungnya Darah Wanita"</em><br />
              Narasumber: <strong>Ustadzah Jahidah Farhati, Lc</strong><br />
              Penyusun: <strong>Akademi Muslim Indonesia</strong>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              <ShieldAlert className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              Disclaimer Fiqih & Medis
            </div>
            <p>
              Halaman ini adalah resume edukasi visual interaktif untuk mempermudah pemahaman kaidah berhitung mazhab Syafi'i. Aplikasi ini <strong>bukan pengganti fatwa</strong> atau konsultasi langsung dengan ahli fiqih dan dokter spesialis. Untuk kasus perdarahan abnormal dan riwayat penyakit pribadi, senantiasa utamakan konsultasi medis dan ustadzah terpercaya.
            </p>
          </div>
        </div>

        {/* Bottom Footer: Back to Top & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Fiqih Haid Interaktif. Mazhab Syafi'i.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/20 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
