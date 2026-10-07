import React, { useState } from 'react';
import { calculateMasaSuci } from '../utils/fiqihCalculators';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const MasaSuciCalculator: React.FC = () => {
  const [darah1, setDarah1] = useState<number>(8);
  const [suciDays, setSuciDays] = useState<number>(12);
  const [darah2, setDarah2] = useState<number>(8);

  const result = calculateMasaSuci(darah1, suciDays, darah2);

  const setPreset1 = () => {
    setDarah1(8);
    setSuciDays(5);
    setDarah2(4);
  };

  const setPreset2 = () => {
    setDarah1(8);
    setSuciDays(12);
    setDarah2(8);
  };

  const setPreset3 = () => {
    setDarah1(10);
    setSuciDays(10);
    setDarah2(10);
  };

  return (
    <section id="masa-suci" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Penyempurna Masa Suci (Baqiyatut Thur)
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Kalkulator Masa Suci Minimal 15 Hari
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Masa suci pemisah minimal antara dua periode haid adalah 15 hari. Jika darah keluar sebelum 15 hari suci terpenuhi, darah tersebut menjadi <strong>istihadhah penyempurna masa suci</strong>.
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mr-2">
            Preset Kasus Resume Kajian:
          </span>
          <button
            onClick={setPreset2}
            className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
          >
            Kasus Tgl 9 s.d. 20 (Suci 12 Hari, Kurang 3 Hari)
          </button>
          <button
            onClick={setPreset3}
            className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
          >
            Kasus Pola 10 – 10 – 10 (Kurang 5 Hari)
          </button>
          <button
            onClick={setPreset1}
            className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
          >
            Kasus 5 + 4 = 9 Hari (Kurang 6 Hari)
          </button>
        </div>

        {/* Calculator Inputs */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                1. Durasi Haid Pertama
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={15}
                  value={darah1}
                  onChange={(e) => setDarah1(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-1.5 text-sm font-mono rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8] focus:outline-none focus:ring-1 focus:ring-[#C2185B]"
                />
                <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Hari</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                2. Masa Bersih / Suci
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={suciDays}
                  onChange={(e) => setSuciDays(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 text-sm font-mono rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8] focus:outline-none focus:ring-1 focus:ring-[#C2185B]"
                />
                <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Hari</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                3. Durasi Darah Kedua
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={darah2}
                  onChange={(e) => setDarah2(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-1.5 text-sm font-mono rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8] focus:outline-none focus:ring-1 focus:ring-[#C2185B]"
                />
                <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Hari</span>
              </div>
            </div>
          </div>

          {/* Graphical Breakdown */}
          <div className="mb-6 p-4 rounded-2xl bg-[#2D1B25]/5 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-3">
              Visualisasi Alur Pembagian Darah Kedua:
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs">
              <div className="px-3 py-2 rounded-xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-medium text-center w-full sm:w-auto shadow-2xs">
                Haid 1: {darah1} Hari
              </div>
              <ArrowRight className="w-4 h-4 text-[#5C3A4E]/50 dark:text-[#E8C5D8]/50 hidden sm:block" />

              <div className="px-3 py-2 rounded-xl border border-dashed border-[#2D1B25]/30 dark:border-white/20 text-[#2D1B25] dark:text-[#FDF0F8] text-center w-full sm:w-auto">
                Suci: {suciDays} Hari ({suciDays >= 15 ? 'Cukup 15 Hari' : `Kurang ${15 - suciDays} Hari`})
              </div>
              <ArrowRight className="w-4 h-4 text-[#5C3A4E]/50 dark:text-[#E8C5D8]/50 hidden sm:block" />

              <div className="flex gap-1.5 w-full sm:w-auto">
                {result.istihadhahDays > 0 && (
                  <div className="px-3 py-2 rounded-xl bg-[#C2185B] text-white font-medium text-center flex-1 shadow-2xs">
                    Istihadhah: {result.istihadhahDays} Hari
                  </div>
                )}
                {result.haidBaruDays > 0 && (
                  <div className="px-3 py-2 rounded-xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-medium text-center flex-1 shadow-2xs">
                    Haid Baru: {result.haidBaruDays} Hari
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Explanation Output */}
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/15 dark:border-[#F06292]/25">
            <div className={`flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider ${
              result.isSuciSempurna ? 'text-[#1B7043] dark:text-[#48C78E]' : 'text-[#9A5812] dark:text-[#F3A847]'
            }`}>
              {result.isSuciSempurna ? (
                <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E]" />
              ) : (
                <AlertCircle className="w-4 h-4 text-[#9A5812] dark:text-[#F3A847]" />
              )}
              Hasil Analisis Hukum Fiqih
            </div>

            <p className="text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed mb-3">
              {result.penjelasan}
            </p>

            <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] p-3 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Kewajiban Shalat:</strong> Pada hari-hari yang dihukumi sebagai <em>istihadhah penyempurna</em>, muslimah tetap wajib mandi/berwudhu khusus dan melaksanakan shalat lima waktu.
            </div>
          </div>

          {/* Key Rule: No Max Limit for Masa Suci */}
          <div className="mt-4 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] text-center">
            <strong>Catatan Fiqih Mazhab Syafi'i:</strong> Berbeda dengan durasi minimal (15 hari), <strong>tidak ada batas maksimal</strong> bagi masa suci antara dua haid. Seorang perempuan bisa suci selama sebulan, setahun, atau bertahun-tahun tanpa haid.
          </div>
        </div>
      </div>
    </section>
  );
};
