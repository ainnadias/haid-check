import React, { useState } from 'react';
import { calculate24HoursHaid } from '../utils/fiqihCalculators';
import { Clock, Plus, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';

export const Kalkulator24Jam: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number[]>([9, 8, 8]); // default Kasus 1 PDF (25 jam)

  const result = calculate24HoursHaid(dailyHours);
  const progressPercent = Math.min(100, (result.totalHours / 24) * 100);

  const handleHourChange = (index: number, val: string) => {
    const parsed = parseFloat(val);
    const updated = [...dailyHours];
    updated[index] = isNaN(parsed) ? 0 : Math.max(0, Math.min(24, parsed));
    setDailyHours(updated);
  };

  const addDay = () => {
    if (dailyHours.length < 15) {
      setDailyHours([...dailyHours, 4]);
    }
  };

  const removeDay = (index: number) => {
    if (dailyHours.length > 1) {
      const updated = dailyHours.filter((_, i) => i !== index);
      setDailyHours(updated);
    }
  };

  const setPreset25Hours = () => {
    setDailyHours([9, 8, 8]);
  };

  const setPreset9Hours = () => {
    setDailyHours([3, 3, 3]);
  };

  return (
    <section id="kalkulator-24jam" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Simulasi Interaktif Akumulasi
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Kalkulator 24 Jam Minimal Haid
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Batas minimal haid adalah 24 jam secara <em>total akumulasi</em>, bukan berarti harus mengalir nonstop 24 jam berturut-turut.
          </p>
        </div>

        {/* Preset Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mr-2">
            Contoh Kasus Resume PDF:
          </span>
          <button
            onClick={setPreset25Hours}
            className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
          >
            Contoh 1: 9 + 8 + 8 = 25 Jam (Haid Sah)
          </button>
          <button
            onClick={setPreset9Hours}
            className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
          >
            Contoh 2: 3 Hari × 3 Jam = 9 Jam (Istihadhah)
          </button>
        </div>

        {/* Calculator Main Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          {/* Progress Bar Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" />
                Progress Menuju Batas Minimal 24 Jam
              </span>
              <span className="text-sm font-bold font-mono text-[#2D1B25] dark:text-[#FDF0F8]">
                {result.totalHours} / 24 Jam
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-[#2D1B25]/10 dark:bg-white/10 overflow-hidden relative">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  result.isMinFulfilled ? 'bg-[#1B7043] dark:bg-[#48C78E]' : 'bg-[#C2185B] dark:bg-[#F06292]'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Daily Input Rows */}
          <div className="space-y-3 mb-6">
            <div className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider mb-2">
              Input Estimasi Durasi Darah Per Hari (Maksimal 24 Jam/hari)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
              {dailyHours.map((hours, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20"
                >
                  <span className="text-xs font-semibold text-[#2D1B25] dark:text-[#FDF0F8]">
                    Hari ke-{index + 1}
                  </span>

                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={24}
                      step={0.5}
                      value={hours}
                      onChange={(e) => handleHourChange(index, e.target.value)}
                      className="w-16 px-2.5 py-1 text-xs text-center font-mono font-medium rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8] focus:outline-none focus:ring-1 focus:ring-[#C2185B]"
                    />
                    <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Jam</span>

                    {dailyHours.length > 1 && (
                      <button
                        onClick={() => removeDay(index)}
                        className="p-1 text-[#5C3A4E]/60 hover:text-[#C2185B] dark:text-[#E8C5D8]/60 dark:hover:text-[#F06292] transition-colors cursor-pointer"
                        title="Hapus hari ini"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {dailyHours.length < 15 && (
              <button
                onClick={addDay}
                className="w-full py-2.5 rounded-2xl border border-dashed border-[#2D1B25]/25 dark:border-[#F06292]/35 text-xs font-medium text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/60 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Tambah Hari Pengamatan (Maks 15 Hari)
              </button>
            )}
          </div>

          {/* Result Card */}
          <div
            className={`p-5 rounded-2xl border transition-all ${
              result.isMinFulfilled
                ? 'bg-[#E8F5EE] dark:bg-[#163324] border-[#1B7043]/40 dark:border-[#48C78E]/40'
                : 'bg-[#FDF3E7] dark:bg-[#3D2712] border-[#9A5812]/30 dark:border-[#F3A847]/40'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {result.isMinFulfilled ? (
                <CheckCircle2 className="w-5 h-5 text-[#1B7043] dark:text-[#48C78E]" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-[#9A5812] dark:text-[#F3A847]" />
              )}
              <h3 className={`text-sm sm:text-base font-bold ${
                result.isMinFulfilled ? 'text-[#1B7043] dark:text-[#48C78E]' : 'text-[#9A5812] dark:text-[#F3A847]'
              }`}>
                {result.statusText}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed mb-3">
              {result.penjelasan}
            </p>

            {!result.isMinFulfilled && (
              <div className="text-xs p-3 rounded-xl bg-white/80 dark:bg-black/40 border border-[#9A5812]/20 dark:border-[#F3A847]/30 text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong>Catatan Fiqih:</strong> Karena belum mencapai 24 jam, seluruh hari tersebut dihukumi bukan haid. Perempuan tersebut tetap wajib shalat dan puasa. Shalat yang terlewat wajib diqadha.
              </div>
            )}
          </div>

          {/* Practical Advice Note from PDF */}
          <div className="mt-4 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed text-center">
            <strong>Tips dari Ustadzah Jahidah Farhati:</strong> Jika sulit menghitung menit demi menit, gunakan <em>waktu shalat</em> sebagai acuan (contoh: darah tampak dari waktu Zuhur hingga Asar = dicatat sekitar 5 jam).
          </div>
        </div>
      </div>
    </section>
  );
};
