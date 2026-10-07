import React from 'react';
import { Clock, Calendar, ArrowRight, ShieldCheck, BookMarked } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Liquid Glass Ambient Blobs — Pink */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none -z-10 animate-float" style={{ background: 'radial-gradient(ellipse, rgba(255,182,210,0.45) 0%, rgba(233,30,140,0.10) 60%, transparent 80%)' }} />
      <div className="absolute top-32 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse, rgba(250,230,240,0.70) 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse, rgba(194,24,91,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Metadata Header */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-4">
          <span>Kajian Mazhab Syafi'i</span>
          <span aria-hidden="true">·</span>
          <span>Kitab Al-Ibanah wal Ifadah</span>
          <span aria-hidden="true">·</span>
          <span>Fathul Qarib</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8] mb-6 leading-tight" style={{ textWrap: 'balance' }}>
          Fiqih Haid: Yang Paling Sering Disalahpahami
        </h1>

        {/* Subtitle & Narator */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5C3A4E] dark:text-[#E8C5D8] mb-8 leading-relaxed">
          Panduan visual interaktif memahami putus-nyambungnya darah haid, batas 24 jam, naqa, masa suci, dan tamyiz istihadhah.
        </p>

        {/* Credit Badge Card */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel text-xs md:text-sm text-[#2D1B25] dark:text-[#FDF0F8] mb-10 shadow-2xs border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <BookMarked className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
          <span>
            Narasumber: <strong>Ustadzah Jahidah Farhati, Lc</strong> (Resume Special Class #12 Akademi Muslim Indonesia)
          </span>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#kalkulator-24jam"
            className="px-6 py-3.5 text-sm font-semibold rounded-2xl text-white shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #C2185B 0%, #E91E8C 60%, #F06292 100%)', boxShadow: '0 4px 20px -4px rgba(194, 24, 91, 0.45)' }}
          >
            Mulai Belajar & Hitung
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#istihadhah"
            className="px-6 py-3.5 text-sm font-medium rounded-2xl border border-[#C2185B]/25 dark:border-[#F06292]/30 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:bg-[#FCEEF6] dark:hover:bg-white/10 text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer hover:scale-[1.02]"
          >
            Pohon Keputusan 7 Istihadhah
          </a>
        </div>

        {/* 3 Angka Kunci Showcase */}
        <div className="pt-4 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
          <h2 className="text-xs font-semibold tracking-wider text-[#C2185B] dark:text-[#F06292] mb-6 uppercase">
            3 Angka Kunci Kaidah Fiqih Haid Mazhab Syafi'i
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Metric 1 */}
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-[#C2185B]/40 hover:shadow-[0_8px_32px_-4px_rgba(194,24,91,0.22)] transition-all duration-300 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8]">Minimal Haid</span>
                <Clock className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              </div>
              <div className="text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8] mb-1 font-mono">
                24 Jam
              </div>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                Total waktu keluarnya darah terakumulasi minimal 24 jam (sehari semalam), bukan harus keluar terus-menerus nonstop.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-[#C2185B]/40 hover:shadow-[0_8px_32px_-4px_rgba(194,24,91,0.22)] transition-all duration-300 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8]">Maksimal Haid</span>
                <Calendar className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              </div>
              <div className="text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8] mb-1 font-mono">
                15 Hari
              </div>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                Durasi maksimal haid adalah 15 hari 15 malam. Darah yang melewati batas 15 hari masuk dalam hukum istihadhah.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-[#C2185B]/40 hover:shadow-[0_8px_32px_-4px_rgba(194,24,91,0.22)] transition-all duration-300 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8]">Minimal Masa Suci</span>
                <ShieldCheck className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              </div>
              <div className="text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8] mb-1 font-mono">
                15 Hari
              </div>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                Jarak suci pemisah minimal antara dua periode haid adalah 15 hari 15 malam. Masa suci tidak memiliki batas maksimal.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] max-w-3xl mx-auto shadow-2xs">
          <strong>Perhatian:</strong> Halaman ini merupakan media edukasi visual resume kajian untuk memudahkan pemahaman kaidah fiqih, bukan pengganti fatwa langsung atau konsultasi medis/syariat pribadi.
        </div>
      </div>
    </section>
  );
};
