import React from 'react';
import { CalendarCheck, Scale } from 'lucide-react';

export const PengertianUsiaSection: React.FC = () => {
  return (
    <section id="pengertian-usia" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Konsep Dasar Fiqih
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Definisi & Usia Perempuan Mengalami Haid
          </h2>
        </div>

        {/* 3 Hal Penting Definisi */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Definisi Syar'i
            </span>
            <p className="mt-2 text-base sm:text-lg text-[#2D1B25] dark:text-[#FDF0F8] font-medium leading-relaxed">
              "Darah alami yang keluar dari pangkal rahim perempuan dalam keadaan sehat, tanpa sebab tertentu (bukan karena luka/melahirkan), dan terjadi pada waktu-waktu tertentu."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
            <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <span className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">1. Darah Alami</span>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                Bukan karena penyakit luka fisik, melainkan siklus fitrah alami yang dialami perempuan baligh.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <span className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">2. Kondisi Tubuh Sehat</span>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                Keluarnya berkaitan dengan kerja biologis tubuh wanita yang sehat (bukan pembuluh darah pecah).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <span className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">3. Terjadi Berkala</span>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                Tidak keluar nonstop terus-menerus, melainkan terjadwal periodik diselingi masa suci.
              </p>
            </div>
          </div>
        </div>

        {/* Usia Minimal & Usia Maksimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Usia Minimal */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="w-10 h-10 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-[#C2185B] dark:text-[#F06292]">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Usia Minimal: 9 Tahun Hijriah Kurang 16 Hari
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Patokan usia dalam fiqih adalah <strong>kalender Hijriah (qamariyah)</strong>, bukan kalender Masehi. Dalam mazhab Syafi'i, toleransi usia minimal haid adalah genap 9 tahun Hijriah dikurangi maksimal 16 hari.
            </p>
            <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-xs">
              <p className="font-bold text-[#2D1B25] dark:text-[#FDF0F8]">Penerapan Kasus:</p>
              <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                Jika seorang anak perempuan berusia <strong>7 atau 8 tahun</strong> mengeluarkan darah dari kemaluannya, secara hukum fiqih darah tersebut <strong>TIDAK DIHUKUMI HAID</strong>, melainkan dihukumi sebagai <strong>istihadhah</strong>.
              </p>
            </div>
          </div>

          {/* Card Batas Usia Maksimal & Perbandingan Mazhab */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="w-10 h-10 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-[#C2185B] dark:text-[#F06292]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Batas Usia Maksimal: Perbandingan Mazhab
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Apakah perempuan lanjut usia (menopause) masih mungkin mengalami haid? Para ulama mazhab memiliki ketetapan hukum:
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#2D1B25]/5 dark:bg-white/5 font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                  <tr>
                    <th className="p-3">Mazhab</th>
                    <th className="p-3">Batas Maksimal</th>
                    <th className="p-3">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D1B25]/10 dark:divide-[#F06292]/15 text-[#2D1B25] dark:text-[#FDF0F8]">
                  <tr className="bg-[#FCEEF6]/60 dark:bg-[#4A1535]/40 font-medium">
                    <td className="p-3 font-bold text-[#C2185B] dark:text-[#F06292]">Syafi'i (Rujukan)</td>
                    <td className="p-3 font-bold">Tidak Ada Batas</td>
                    <td className="p-3 text-[#5C3A4E] dark:text-[#E8C5D8]">Selama darah keluar memenuhi syarat haid, tetap dihukumi haid.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Hanafi</td>
                    <td className="p-3 font-semibold">50 Tahun</td>
                    <td className="p-3 text-[#5C3A4E] dark:text-[#E8C5D8]">Darah setelah usia 50 tahun dihukumi istihadhah.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Maliki</td>
                    <td className="p-3 font-semibold">70 Tahun</td>
                    <td className="p-3 text-[#5C3A4E] dark:text-[#E8C5D8]">Batas maksimal usia perempuan mengalami haid.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
