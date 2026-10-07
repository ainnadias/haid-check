import React, { useState } from 'react';
import { CAIRAN_DATA } from '../data/cairan';
import { Shield } from 'lucide-react';

export const CairanKewanitaanSection: React.FC = () => {
  const [selectedFluidId, setSelectedFluidId] = useState<string>('mani');

  const selectedFluid = CAIRAN_DATA.find((c) => c.id === selectedFluidId) || CAIRAN_DATA[0];

  return (
    <section id="cairan" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Thaharah & Higienitas
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Jenis Cairan Kewanitaan dalam Fiqih
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Sering kali semua cairan disebut awam sebagai "keputihan". Kitab <em>Al-Ibanah wal Ifadah</em> merinci perbedaan status mani, madzi, wadi, dan rutubatul farj.
          </p>
        </div>

        {/* Fluid Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {CAIRAN_DATA.map((fluid) => {
            const isSelected = selectedFluidId === fluid.id;
            return (
              <button
                key={fluid.id}
                onClick={() => setSelectedFluidId(fluid.id)}
                className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#C2185B] dark:border-[#F06292] bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-bold shadow-xs'
                    : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/70 dark:bg-white/5 text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/95'
                }`}
              >
                <div className="text-xs">{fluid.nama.split(' ')[0]}</div>
                <div className="text-[10px] opacity-80 font-serif mt-0.5">{fluid.istilahArab.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Fluid Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2D1B25]/10 dark:border-[#F06292]/20 pb-4">
            <div>
              <span className="text-xs font-serif text-[#C2185B] dark:text-[#F06292]">
                {selectedFluid.istilahArab}
              </span>
              <h3 className="text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                {selectedFluid.nama}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-xl border ${
                selectedFluid.statusNajis === 'Suci'
                  ? 'bg-[#E8F5EE] dark:bg-[#163324] border-[#1B7043]/40 text-[#1B7043] dark:text-[#48C78E]'
                  : selectedFluid.statusNajis === 'Najis'
                  ? 'bg-[#FCEEF6] dark:bg-[#4A1535] border-[#C2185B]/40 text-[#C2185B] dark:text-[#F06292]'
                  : 'bg-[#FDF3E7] dark:bg-[#3D2712] border-[#9A5812]/30 text-[#9A5812] dark:text-[#F3A847]'
              }`}>
                Status: {selectedFluid.statusNajis}
              </span>

              <span className="text-xs font-medium px-3 py-1 rounded-xl bg-white/80 dark:bg-white/10 text-[#2D1B25] dark:text-[#FDF0F8] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
                {selectedFluid.kewajibanBersuci}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Col */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider mb-1">
                  Pemicu / Sebab Keluarnya
                </h4>
                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {selectedFluid.pemicuKeluarnya}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider mb-1">
                  Ciri Fisik & Karakteristik
                </h4>
                <ul className="space-y-1 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8]">
                  {selectedFluid.ciriFisik.map((cf, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] dark:bg-[#F06292]" />
                      <span>{cf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider mb-1">
                  Aroma & Sensasi Tubuh
                </h4>
                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {selectedFluid.aromaDanSensasi}
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-xs">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                  Dampak pada Pakaian / Sprei:
                </span>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {selectedFluid.dampakPadaPakaian}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-xs">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                  Tinjauan Fiqih Al-Ibanah:
                </span>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {selectedFluid.penjelasanPdf}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomi Farj Fiqih Syafi'i Callout */}
        <div className="p-6 rounded-3xl bg-[#FCEEF6]/70 dark:bg-[#4A1535]/40 border border-[#C2185B]/25 dark:border-[#F06292]/30">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
            <h4 className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Kaidah Fiqih Anatomi Farj dalam Menentukan Kesucian
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <div className="font-bold text-[#C2185B] dark:text-[#F06292] mb-1">1. Farj Bagian Luar</div>
              Yang masih terjangkau oleh jari tangan saat cebok/istinja = <strong>SUCI</strong> dan <strong>TIDAK membatalkan wudhu</strong>.
            </div>

            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <div className="font-bold text-[#C2185B] dark:text-[#F06292] mb-1">2. Terjangkau Zakar Mujami'</div>
              Bagian liang yang masih tersentuh penis suami saat berhubungan badan = <strong>SUCI</strong>.
            </div>

            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <div className="font-bold text-[#C2185B] dark:text-[#F06292] mb-1">3. Bila Muncul Keraguan</div>
              Jika ragu dari bagian mana cairan keluar, hukumnya <strong>DIKEMBALIKAN KEPADA SUCI</strong> sebagai bentuk kemudahan (rukhsah).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
