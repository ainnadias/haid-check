import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export const QadhaShalatSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'masuk-waktu' | 'suci-jamak'>('suci-jamak');
  const [waktuSuci, setWaktuSuci] = useState<'Subuh' | 'Zuhur' | 'Asar' | 'Magrib' | 'Isya'>('Asar');

  return (
    <section id="qadha-shalat" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Kewajiban Shalat Terkait Haid
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Qadha Shalat Bagi Perempuan Haid
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Pada dasarnya perempuan haid tidak diwajibkan mengqadha shalat harian. Namun ada <strong>dua kondisi khusus</strong> yang mewajibkan qadha shalat.
          </p>
        </div>

        {/* 2 Tabs Kondisi */}
        <div className="flex items-center justify-center gap-2 max-w-md mx-auto mb-8 p-1 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
          <button
            onClick={() => setSelectedScenario('suci-jamak')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              selectedScenario === 'suci-jamak'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            Kondisi B: Suci di Waktu Jamak
          </button>
          <button
            onClick={() => setSelectedScenario('masuk-waktu')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              selectedScenario === 'masuk-waktu'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            Kondisi A: Lalai Menunda Shalat
          </button>
        </div>

        {/* Interactive Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          {selectedScenario === 'suci-jamak' ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
                  Kaidah Shalat yang Bisa Dijamak (Zuhur–Asar & Magrib–Isya)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8] mt-1">
                  Suci Pada Waktu Shalat Kedua (Asar atau Isya)
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                  Dalam mazhab Syafi'i, uzur haid dipersamakan dengan musafir. Jika suci pada waktu shalat kedua yang berpasangan jamak, ia wajib mengerjakan shalat saat itu dan mengqadha shalat pasangannya sebelumnya.
                </p>
              </div>

              {/* Selector Waktu Suci */}
              <div>
                <label className="block text-xs font-bold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider mb-2">
                  Pilih Waktu Saat Kamu Menemukan Tanda Suci:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(['Subuh', 'Zuhur', 'Asar', 'Magrib', 'Isya'] as const).map((waktu) => (
                    <button
                      key={waktu}
                      onClick={() => setWaktuSuci(waktu)}
                      className={`py-3 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        waktuSuci === waktu
                          ? 'border-[#C2185B] dark:border-[#F06292] bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-bold shadow-xs'
                          : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/70 dark:bg-white/5 text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/95'
                      }`}
                    >
                      {waktu}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Result */}
              <div className="p-5 rounded-2xl bg-white/85 dark:bg-white/5 border border-[#2D1B25]/15 dark:border-[#F06292]/25">
                <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
                  Kewajiban Shalatmu:
                </span>

                {waktuSuci === 'Asar' && (
                  <div className="mt-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
                    <div className="text-base font-bold text-[#C2185B] dark:text-[#F06292]">
                      Wajib Shalat Asar + Mengqadha Shalat Zuhur!
                    </div>
                    <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                      Karena suci di waktu Asar (waktu shalat kedua yang bisa dijamak dengan Zuhur), maka setelah mandi besar, laksanakan shalat Asar dengan niat <em>ada'an</em>, kemudian shalat Zuhur dengan niat <em>qadha'an</em>.
                    </p>
                  </div>
                )}

                {waktuSuci === 'Isya' && (
                  <div className="mt-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
                    <div className="text-base font-bold text-[#C2185B] dark:text-[#F06292]">
                      Wajib Shalat Isya + Mengqadha Shalat Magrib!
                    </div>
                    <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                      Karena suci di waktu Isya (waktu kedua yang bisa dijamak dengan Magrib), maka setelah mandi besar, laksanakan shalat Isya dengan niat <em>ada'an</em>, kemudian shalat Magrib dengan niat <em>qadha'an</em>.
                    </p>
                  </div>
                )}

                {waktuSuci === 'Zuhur' && (
                  <div className="mt-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
                    <div className="text-base font-bold text-[#1B7043] dark:text-[#48C78E]">
                      Hanya Wajib Shalat Zuhur (Tidak Ada Qadha Subuh)
                    </div>
                    <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                      Subuh tidak berpasangan jamak dengan Zuhur, sehingga cukup melaksanakan shalat Zuhur saja secara normal.
                    </p>
                  </div>
                )}

                {waktuSuci === 'Magrib' && (
                  <div className="mt-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
                    <div className="text-base font-bold text-[#1B7043] dark:text-[#48C78E]">
                      Hanya Wajib Shalat Magrib (Tidak Ada Qadha Asar)
                    </div>
                    <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                      Asar tidak bisa dijamak ta'khir ke Magrib, sehingga yang wajib dikerjakan hanyalah shalat Magrib saja.
                    </p>
                  </div>
                )}

                {waktuSuci === 'Subuh' && (
                  <div className="mt-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
                    <div className="text-base font-bold text-[#1B7043] dark:text-[#48C78E]">
                      Hanya Wajib Shalat Subuh
                    </div>
                    <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                      Cukup mandi besar dan laksanakan shalat Subuh sebelum matahari terbit.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
                  Kaidah Kelalaian Saat Awal Masuk Waktu
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8] mt-1">
                  Masuk Waktu Shalat, Lalu Lalai Menunda Hingga Darah Keluar
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                  Jika waktu shalat fardhu sudah masuk dan waktu yang tersedia sebenarnya mencukupi untuk bersuci dan mengerjakan shalat, tetapi sengaja ditunda-tunda hingga darah haid keluar.
                </p>
              </div>

              {/* Contoh Kasus Nyata PDF */}
              <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-3 text-xs sm:text-sm">
                <div className="font-bold text-[#C2185B] dark:text-[#F06292]">
                  Contoh Kasus:
                </div>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  Waktu Zuhur masuk pukul <strong>11.40</strong>. Seseorang menunda-nunda shalat sampai pukul <strong>12.30</strong> (ada jeda 50 menit yang leluasa). Ketika baru hendak wudhu/shalat jam 12.30, ternyata darah haid keluar.
                </p>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-white/5 font-semibold text-[#C2185B] dark:text-[#F06292] border border-[#C2185B]/30">
                  HUKUM: Shalat Zuhur tersebut WAJIB DIQADHA setelah ia suci dan mandi besar!
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
                <strong>Bandingkan:</strong> Jika baru azan berkumandang, lalu seseorang langsung bergegas mengambil wudhu namun darah haid keluar dan waktu memang belum mencukupi untuk satu shalat yang ringkas, maka shalat tersebut <strong>TIDAK PERLU DIQADHA</strong>.
              </div>
            </div>
          )}
        </div>

        {/* Waktu Pelaksanaan Qadha Callout */}
        <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#5C3A4E] dark:text-[#E8C5D8] flex items-start gap-3">
          <Clock className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Kapan Shalat Qadha Harus Dikerjakan? (FAQ Q13):</strong> Shalat qadha tidak harus menunggu waktu shalat yang sama di hari esok. Begitu suci, seseorang bisa langsung melaksanakan shalat yang sedang berjalan lalu langsung mengqadha shalat yang terutang kapan saja tanpa ditunda.
          </div>
        </div>
      </div>
    </section>
  );
};
