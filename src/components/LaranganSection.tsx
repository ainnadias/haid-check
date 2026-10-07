import React, { useState } from 'react';
import { LARANGAN_DATA } from '../data/larangan';
import { Smartphone, Book, Church, ChevronDown, ChevronUp } from 'lucide-react';

export const LaranganSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hadas-besar' | 'khusus-haid'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('baca-quran');

  const filteredData = LARANGAN_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.kategori === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="larangan" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Hukum Ibadah & Adab
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Larangan Bagi Perempuan Haid & Nifas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Rujukan kitab <em>Fathul Qarib al-Mujib</em>: membedakan 5 larangan hadas besar secara umum dan 3 larangan khusus kondisi haid/nifas.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-1.5 p-1 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 max-w-md mx-auto mb-8 shadow-2xs">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            Semua (8)
          </button>
          <button
            onClick={() => setFilter('hadas-besar')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              filter === 'hadas-besar'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            5 Hadas Besar
          </button>
          <button
            onClick={() => setFilter('khusus-haid')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              filter === 'khusus-haid'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            3 Khusus Haid
          </button>
        </div>

        {/* Prohibitions Grid */}
        <div className="space-y-4">
          {filteredData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="glass-panel rounded-3xl border border-[#2D1B25]/10 dark:border-[#F06292]/25 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8]">
                        {item.kategori === 'hadas-besar' ? 'Umum Hadas Besar' : 'Khusus Haid & Nifas'}
                      </span>
                      <span aria-hidden="true" className="text-[#5C3A4E]/40">·</span>
                      <span className={`text-xs font-semibold ${
                        item.hukum === 'Haram Mutlak' ? 'text-[#C2185B] dark:text-[#F06292]' : 'text-[#9A5812] dark:text-[#F3A847]'
                      }`}>
                        {item.hukum}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                      {item.nama}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8]">
                      {item.ringkasan}
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Detailed Explanations */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-4">
                    <p className="text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
                      {item.penjelasanPdf}
                    </p>

                    {item.pengecualianAtauRincian && item.pengecualianAtauRincian.length > 0 && (
                      <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-xs">
                        <span className="font-semibold text-[#C2185B] dark:text-[#F06292]">
                          Rincian & Fatwa Pengecualian dari Resume Kajian:
                        </span>
                        <ul className="space-y-1.5 text-[#5C3A4E] dark:text-[#E8C5D8]">
                          {item.pengecualianAtauRincian.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] dark:bg-[#F06292] mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.rujukanKitab && (
                      <div className="text-[11px] text-[#5C3A4E] dark:text-[#E8C5D8]">
                        Rujukan: {item.rujukanKitab}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Callouts Penting */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-2xl glass-panel text-xs text-[#5C3A4E] dark:text-[#E8C5D8] space-y-1 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="flex items-center gap-1.5 font-bold text-[#C2185B] dark:text-[#F06292]">
              <Smartphone className="w-3.5 h-3.5" />
              Al-Qur'an di Smartphone
            </div>
            <p>HP tidak dihukumi seperti mushaf fisik, boleh disentuh dan digulir layarnya tanpa perlu alas kain.</p>
          </div>

          <div className="p-4 rounded-2xl glass-panel text-xs text-[#5C3A4E] dark:text-[#E8C5D8] space-y-1 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="flex items-center gap-1.5 font-bold text-[#C2185B] dark:text-[#F06292]">
              <Book className="w-3.5 h-3.5" />
              Niat Tilawah vs Belajar
            </div>
            <p>Hafalan, ziyadah, muraja'ah, tahsin, atau membaca doa/zikir (Ayat Kursi, Al-Mulk) diperbolehkan asal bukan niat qira'ah.</p>
          </div>

          <div className="p-4 rounded-2xl glass-panel text-xs text-[#5C3A4E] dark:text-[#E8C5D8] space-y-1 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="flex items-center gap-1.5 font-bold text-[#C2185B] dark:text-[#F06292]">
              <Church className="w-3.5 h-3.5" />
              Musala Non-Wakaf
            </div>
            <p>Ruang musala kantor atau sekolah yang bukan tanah wakaf masjid boleh ditempati oleh perempuan yang sedang haid.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
