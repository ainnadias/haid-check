import React, { useState } from 'react';
import { evaluateNaqaTimeline, DayState } from '../utils/fiqihCalculators';
import { CheckCircle2, HelpCircle, RefreshCw } from 'lucide-react';

export const NaqaTimelineSimulator: React.FC = () => {
  const initialDays: DayState[] = Array.from({ length: 20 }, (_, i) => {
    const day = i + 1;
    if (day <= 3) return { day, hasBlood: true, hours: 5 };
    if (day === 4 || day === 5) return { day, hasBlood: false, hours: 0 };
    if (day === 6 || day === 7) return { day, hasBlood: true, hours: 5 };
    return { day, hasBlood: false, hours: 0 };
  });

  const [days, setDays] = useState<DayState[]>(initialDays);

  const result = evaluateNaqaTimeline(days);

  const toggleDayBlood = (dayNum: number) => {
    setDays(
      days.map((d) => {
        if (d.day === dayNum) {
          const newHasBlood = !d.hasBlood;
          return {
            ...d,
            hasBlood: newHasBlood,
            hours: newHasBlood ? (d.hours > 0 ? d.hours : 8) : 0,
          };
        }
        return d;
      })
    );
  };

  const updateHours = (dayNum: number, hours: number) => {
    setDays(
      days.map((d) => {
        if (d.day === dayNum) {
          const h = Math.max(0, Math.min(24, hours));
          return {
            ...d,
            hours: h,
            hasBlood: h > 0,
          };
        }
        return d;
      })
    );
  };

  const loadPreset1 = () => {
    setDays(
      Array.from({ length: 20 }, (_, i) => {
        const d = i + 1;
        if (d <= 3) return { day: d, hasBlood: true, hours: 5 };
        if (d >= 6 && d <= 7) return { day: d, hasBlood: true, hours: 5 };
        return { day: d, hasBlood: false, hours: 0 };
      })
    );
  };

  const loadPreset2 = () => {
    setDays(
      Array.from({ length: 20 }, (_, i) => {
        const d = i + 1;
        if (d <= 7) return { day: d, hasBlood: true, hours: 8 };
        if (d >= 13 && d <= 15) return { day: d, hasBlood: true, hours: 8 };
        return { day: d, hasBlood: false, hours: 0 };
      })
    );
  };

  const loadPreset3 = () => {
    setDays(
      Array.from({ length: 20 }, (_, i) => {
        const d = i + 1;
        if (d <= 3) return { day: d, hasBlood: true, hours: 8 };
        if (d >= 8 && d <= 12) return { day: d, hasBlood: true, hours: 8 };
        return { day: d, hasBlood: false, hours: 0 };
      })
    );
  };

  const loadPreset4 = () => {
    setDays(
      Array.from({ length: 20 }, (_, i) => {
        const d = i + 1;
        if (d <= 8) return { day: d, hasBlood: true, hours: 8 };
        if (d >= 14 && d <= 18) return { day: d, hasBlood: true, hours: 8 };
        return { day: d, hasBlood: false, hours: 0 };
      })
    );
  };

  const resetAll = () => {
    setDays(Array.from({ length: 20 }, (_, i) => ({ day: i + 1, hasBlood: false, hours: 0 })));
  };

  return (
    <section id="naqa-timeline" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Simulasi Putus-Nyambungnya Darah
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Naqa: Darah Berhenti di Tengah Siklus
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Darah haid keluar, lalu berhenti beberapa hari, kemudian keluar lagi. Kapan jeda tersebut dihukumi haid, dan kapan dihukumi masa suci?
          </p>
        </div>

        {/* 2 Syarat Utama Naqa Dihukumi Haid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="glass-panel p-5 rounded-2xl flex items-start gap-3 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className={`p-2 rounded-xl mt-0.5 ${
              result.syarat1Fulfilled
                ? 'bg-[#E8F5EE] dark:bg-[#163324] text-[#1B7043] dark:text-[#48C78E]'
                : 'bg-[#2D1B25]/10 dark:bg-white/10 text-[#5C3A4E] dark:text-[#E8C5D8]'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Syarat 1: Total Darah Minimal 24 Jam
              </h3>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                Total waktu keluarnya darah terputus-putus harus mencapai akumulasi minimal 24 jam.
              </p>
              <div className="mt-2 text-xs font-mono font-semibold text-[#C2185B] dark:text-[#F06292]">
                Terkumpul: {result.totalBloodHours} Jam {result.syarat1Fulfilled ? '(Memenuhi ✓)' : '(Belum ✗)'}
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-start gap-3 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className={`p-2 rounded-xl mt-0.5 ${
              result.syarat2Fulfilled
                ? 'bg-[#E8F5EE] dark:bg-[#163324] text-[#1B7043] dark:text-[#48C78E]'
                : 'bg-[#2D1B25]/10 dark:bg-white/10 text-[#5C3A4E] dark:text-[#E8C5D8]'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Syarat 2: Seluruh Rangkaian ≤ 15 Hari
              </h3>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                Dari hari pertama darah keluar hingga hari terakhir darah keluar tidak boleh melampaui 15 hari.
              </p>
              <div className="mt-2 text-xs font-mono font-semibold text-[#C2185B] dark:text-[#F06292]">
                Rentang: {result.totalSpanDays} Hari {result.syarat2Fulfilled ? '(Memenuhi ≤ 15 Hari ✓)' : '(Melampaui 15 Hari ✗)'}
              </div>
            </div>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider mb-2">
            Pilih Contoh Kasus Nyata dari Resume Kajian:
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={loadPreset1}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
            >
              Kasus 1: 15 Jam + 10 Jam (Rentang 7 Hari)
            </button>
            <button
              onClick={loadPreset2}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
            >
              Kasus 2: Tgl 1–7 & 13–15 (Rentang 15 Hari)
            </button>
            <button
              onClick={loadPreset3}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
            >
              Kasus 3: 3 Hari Darah, 4 Hari Jeda, 5 Hari Darah
            </button>
            <button
              onClick={loadPreset4}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/80 dark:bg-white/5 hover:bg-[#FCEEF6] dark:hover:bg-[#4A1535] text-[#2D1B25] dark:text-[#FDF0F8] transition-all cursor-pointer shadow-2xs"
            >
              Kasus 4: Total 18 Hari (Melebihi 15 Hari)
            </button>
            <button
              onClick={resetAll}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 text-[#5C3A4E] dark:text-[#E8C5D8] hover:bg-white/80 dark:hover:bg-white/5 transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>

        {/* Interactive Timeline Grid (Days 1 - 20) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-4">
            Klik nomor hari untuk mengaktifkan / menonaktifkan keluarnya darah (bisa atur jam):
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6">
            {days.map((d) => {
              const classification = result.dayClassifications.find((c) => c.day === d.day)?.status;
              let bgStyle = 'bg-white/80 dark:bg-white/5 border-[#2D1B25]/15 dark:border-[#F06292]/20 text-[#5C3A4E] dark:text-[#E8C5D8]';

              if (d.hasBlood) {
                if (classification === 'haid') {
                  bgStyle = 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-bold border-[#2D1B25] dark:border-[#C2185B] shadow-xs';
                } else {
                  bgStyle = 'bg-[#C2185B] text-white border-[#C2185B] font-bold shadow-xs';
                }
              } else if (classification === 'naqa-haid') {
                bgStyle = 'bg-[#FCEEF6] dark:bg-[#4A1535] border-[#C2185B]/40 dark:border-[#F06292]/40 text-[#C2185B] dark:text-[#F06292] font-semibold';
              } else if (classification === 'naqa-suci') {
                bgStyle = 'bg-white/60 dark:bg-white/5 border-dashed border-[#2D1B25]/30 dark:border-white/20 text-[#5C3A4E] dark:text-[#E8C5D8]';
              }

              return (
                <div key={d.day} className="flex flex-col items-center">
                  <button
                    onClick={() => toggleDayBlood(d.day)}
                    className={`w-full py-2.5 rounded-xl border text-xs text-center transition-all flex flex-col items-center justify-center cursor-pointer ${bgStyle}`}
                  >
                    <span>H-{d.day}</span>
                    <span className="text-[10px] font-mono opacity-90">{d.hasBlood ? `${d.hours}j` : 'jeda'}</span>
                  </button>

                  {d.hasBlood && (
                    <input
                      type="number"
                      min={1}
                      max={24}
                      value={d.hours}
                      onChange={(e) => updateHours(d.day, parseInt(e.target.value) || 0)}
                      className="w-12 mt-1 px-1 text-[10px] text-center font-mono rounded border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8]"
                      title="Jam darah hari ini"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] pt-4 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#2D1B25] dark:bg-[#C2185B]" />
              <span>Darah Haid</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FCEEF6] dark:bg-[#4A1535] border border-[#C2185B] dark:border-[#F06292]" />
              <span>Naqa Dihukumi Haid</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#C2185B]" />
              <span>Darah Istihadhah</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border border-dashed border-[#2D1B25]/40 dark:border-white/30" />
              <span>Masa Suci</span>
            </div>
          </div>
        </div>

        {/* Evaluation Summary Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292]">
            Kesimpulan Hukum Simulasi
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8] mb-3">
            {result.summary}
          </h3>
          <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed mb-4">
            {result.detail}
          </p>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
            <strong>Konsekuensi Ibadah:</strong>{' '}
            {result.isNaqaHaid ? (
              <span>
                Karena masa jeda (naqa) tetap dihukumi haid, maka jika seseorang melakukan puasa pada hari jeda tersebut, <strong>puasanya tidak sah</strong> (harus diqadha). Untuk shalat, tidak ada kewajiban mengqadha shalat yang ditinggalkan selama masa haid.
              </span>
            ) : (
              <span>
                Karena masa jeda dihukumi masa suci, hari-hari jeda tersebut wajib diisi shalat. Jika shalat ditinggalkan karena mengira masih haid, <strong>wajib diqadha</strong>.
              </span>
            )}
          </div>
        </div>

        {/* Perbedaan Fundamental: Naqa vs Masa Suci */}
        <div className="p-6 rounded-3xl bg-[#FCEEF6]/60 dark:bg-[#4A1535]/40 border border-[#C2185B]/25 dark:border-[#F06292]/30">
          <h4 className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8] mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
            Ingat: Naqa dan Masa Suci Itu Berbeda!
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8]">
              <strong className="text-[#C2185B] dark:text-[#F06292]">Naqa:</strong> Masa berhenti darah di <em>tengah-tengah</em> satu rangkaian darah (bisa berstatus haid jika total rangkaian ≤ 15 hari dan darah ≥ 24 jam).
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8]">
              <strong className="text-[#C2185B] dark:text-[#F06292]">Masa Suci:</strong> Jarak pemisah antara satu periode haid yang telah usai dengan periode haid berikutnya (minimal mutlak 15 hari 15 malam).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
