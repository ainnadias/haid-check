import React, { useState } from 'react';
import { WARNA_DARAH_DATA } from '../data/warnaDarah';
import { BloodColor } from '../types';
import { Info } from 'lucide-react';

export const WarnaDarahSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<BloodColor>('hitam');

  const activeDetail = WARNA_DARAH_DATA.find((c) => c.id === selectedColor) || WARNA_DARAH_DATA[0];

  return (
    <section id="warna-darah" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Tangga Kekuatan Darah
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Warna & Sifat Darah Haid
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Darah haid tidak selalu merah segar. Ulama mazhab Syafi'i mengklasifikasikan 5 spektrum warna berdasarkan urutan kekuatannya.
          </p>
        </div>

        {/* Interactive Visual Staircase */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-4">
            Klik salah satu warna untuk melihat tinjauan fiqih dan contoh kasusnya:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {WARNA_DARAH_DATA.map((item) => {
              const isSelected = selectedColor === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedColor(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-32 cursor-pointer ${
                    isSelected
                      ? 'border-[#C2185B] dark:border-[#F06292] bg-white dark:bg-white/15 shadow-sm ring-2 ring-[#C2185B]/30'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/70 dark:bg-white/5 hover:bg-white/95'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-5 h-5 rounded-full border border-black/20 shadow-xs shrink-0"
                      style={{ backgroundColor: item.hex }}
                    />
                    <span className="text-xs font-mono font-bold text-[#5C3A4E] dark:text-[#E8C5D8]">
                      #{item.levelKekuatan}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] font-serif">
                      {item.istilahArab.split(' ')[0]}
                    </div>
                    <div className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8] truncate">
                      {item.nama}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Color Info Box */}
          <div className="mt-6 p-6 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full border border-black/20"
                  style={{ backgroundColor: activeDetail.hex }}
                />
                <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                  {activeDetail.nama} ({activeDetail.istilahArab})
                </h3>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FCEEF6] dark:bg-[#4A1535] text-[#C2185B] dark:text-[#F06292] self-start sm:self-auto">
                Tingkat Kekuatan #{activeDetail.levelKekuatan}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed mb-4">
              {activeDetail.deskripsi}
            </p>

            <div className="p-3.5 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#2D1B25] dark:text-[#FDF0F8] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
              <div>
                <strong>Contoh Dokumen Resume:</strong> {activeDetail.contohPdf}
              </div>
            </div>
          </div>
        </div>

        {/* 2 Skenario Nyata dari PDF & Kaidah Emas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-3xl space-y-3 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Contoh Kasus 1 (10 Hari)
            </span>
            <h4 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              4 Hari Darah Hitam + 6 Hari Flek
            </h4>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Jika seseorang mengalami 4 hari darah hitam, kemudian disusul 6 hari flek kecokelatan/kusam:
            </p>
            <div className="p-3 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs font-semibold text-[#2D1B25] dark:text-[#FDF0F8]">
              Hukum: Seluruh 10 hari tersebut dihukumi sebagai HAID, karena masih berada dalam interval batas maksimal 15 hari.
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-3 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Contoh Kasus 2 (5 Hari)
            </span>
            <h4 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              3 Hari Darah Merah + 2 Hari Cokelat
            </h4>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Jika 3 hari pertama berwarna merah dan 2 hari berikutnya berubah warna menjadi cokelat:
            </p>
            <div className="p-3 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs font-semibold text-[#2D1B25] dark:text-[#FDF0F8]">
              Hukum: Seluruh 5 hari tersebut tetap dihukumi sebagai HAID. Perubahan warna tidak otomatis menggugurkan status haid.
            </div>
          </div>
        </div>

        {/* 3 Parameter Kekuatan Darah */}
        <div className="mt-6 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#C2185B] dark:text-[#F06292]">Warna:</span>
            <span className="text-[#2D1B25] dark:text-[#FDF0F8]">Hitam → Merah → Cokelat → Kuning → Keruh</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#C2185B] dark:text-[#F06292]">Kekentalan:</span>
            <span className="text-[#2D1B25] dark:text-[#FDF0F8]">Kental / Gumpal → Sedikit Kental → Encer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#C2185B] dark:text-[#F06292]">Aroma:</span>
            <span className="text-[#2D1B25] dark:text-[#FDF0F8]">Amis / Anyir Tajam → Tidak Terlalu Amis → Tidak Amis</span>
          </div>
        </div>
      </div>
    </section>
  );
};
