import React, { useState } from 'react';
import { Baby, AlertCircle, ArrowRight } from 'lucide-react';

export const NifasDanHamilSection: React.FC = () => {
  const [selectedNifasCase, setSelectedNifasCase] = useState<'sebelum60' | 'pas60'>('sebelum60');

  return (
    <section id="nifas-hamil" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Kasus Spesifik Fiqih Darah
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Nifas, Darah Saat Kehamilan & Darah Lewat 15 Hari
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Penjelasan tuntas hukum nifas maksimal 60 hari, status flek saat hamil, dan mengapa istihadhah tidak otomatis dimulai di hari ke-16.
          </p>
        </div>

        {/* 1. Nifas dan Masa Suci Setelahnya */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
                Bab Darah Pasca Melahirkan
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Masa Suci Antara Nifas dan Haid Baru (Maksimal 60 Hari)
              </h3>
            </div>
            <div className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-[#FCEEF6] dark:bg-[#4A1535] text-[#C2185B] dark:text-[#F06292] self-start sm:self-auto">
              Maksimal Nifas: 60 Hari
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed mb-6">
            Nifas adalah darah yang keluar setelah rahim kosong dari janin (melahirkan atau keguguran). Darah kontraksi sebelum bayi lahir <strong>bukan nifas melainkan istihadhah</strong>. Terdapat dua kondisi peralihan nifas ke haid baru:
          </p>

          {/* Toggle 2 Kondisi Nifas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setSelectedNifasCase('sebelum60')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedNifasCase === 'sebelum60'
                  ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                  : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
              }`}
            >
              <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                Kondisi 1: Nifas Berhenti SEBELUM 60 Hari
              </div>
              <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
                Misal nifas berhenti pada hari ke-20, 30, atau 35 hari.
              </div>
            </button>

            <button
              onClick={() => setSelectedNifasCase('pas60')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedNifasCase === 'pas60'
                  ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                  : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
              }`}
            >
              <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                Kondisi 2: Nifas MENCAPAI 60 Hari Penuh
              </div>
              <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
                Nifas berlangsung pas 60 hari lalu ada jeda sedikit.
              </div>
            </button>
          </div>

          {/* Dynamic Explanation for Selected Condition */}
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
            {selectedNifasCase === 'sebelum60' ? (
              <div className="space-y-3 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8]">
                <div className="flex items-center gap-2 font-bold text-[#C2185B] dark:text-[#F06292]">
                  <ArrowRight className="w-4 h-4" />
                  Wajib Mengalami Masa Suci 15 Hari Terlebih Dahulu
                </div>
                <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                  Dalam mazhab Syafi'i, jika nifas berhenti pada hari ke-35, perempuan tersebut <strong>harus mengalami masa suci minimal 15 hari</strong> sebelum darah berikutnya dapat dihukumi sebagai haid baru.
                </p>
                <div className="p-3 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] text-xs border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8]">
                  <strong>Contoh PDF:</strong> Jika nifas berhenti hari ke-35 lalu keesokan harinya darah keluar lagi, darah tersebut tidak langsung disebut haid, melainkan istihadhah penyempurna suci sampai genap 15 hari suci terlewati.
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8]">
                <div className="flex items-center gap-2 font-bold text-[#1B7043] dark:text-[#48C78E]">
                  <ArrowRight className="w-4 h-4" />
                  Langsung Dihukumi Haid Baru Tanpa Menunggu 15 Hari!
                </div>
                <p className="leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                  Jika masa nifas telah mencapai maksimal 60 hari, kemudian terdapat jeda (meskipun hanya sedikit, misal 1 hari), dan pada hari ke-61, 62, atau 63 keluar darah kembali:
                </p>
                <div className="p-3 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] text-xs border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8]">
                  <strong>Kaidah PDF:</strong> Dalam kondisi ini <strong>TIDAK PERLU menunggu masa suci 15 hari</strong>. Darah yang keluar setelah jeda tersebut langsung dapat dihukumi sebagai <strong>HAID BARU</strong>.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Darah Saat Hamil (Dua Pendapat) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292]">
              <Baby className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              Darah Saat Kehamilan
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Apakah Perempuan Hamil Bisa Haid?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Jika seorang ibu sedang hamil (janin masih di dalam rahim) tiba-tiba mengeluarkan darah dari vagina:
            </p>

            <div className="space-y-3 text-xs">
              {/* Pendapat 1 */}
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                  1. Pendapat Mu'tamad Mazhab Syafi'i (Klasik):
                </span>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                  Masih dimungkinkan haid apabila memenuhi syarat minimal akumulasi 24 jam (meskipun kasus ini sangat jarang terjadi).
                </p>
              </div>

              {/* Pendapat 2 */}
              <div className="p-3.5 rounded-2xl bg-[#FCEEF6]/70 dark:bg-[#4A1535]/40 border border-[#C2185B]/35 dark:border-[#F06292]/40 text-[#2D1B25] dark:text-[#FDF0F8]">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                  2. Pendapat Kedua (Hanafi, Medis Modern & Pendapat yang Dipakai):
                </span>
                <p className="mt-1 leading-relaxed text-[#5C3A4E] dark:text-[#E8C5D8]">
                  Dihukumi sebagai <strong>DARAH ISTIHADHAH</strong>, bukan darah haid. Perempuan hamil tetap <strong>wajib shalat dan tetap wajib berpuasa</strong>.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#2D1B25]/5 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
              <strong>Dalil Hadits:</strong> Perkataan Nabi ﷺ kepada Umar bin Khattab saat mentalak istri agar dilakukan ketika istri dalam keadaan <em>"suci atau hamil"</em>, menunjukkan bahwa masa hamil sejajar dengan masa suci.
            </div>
          </div>

          {/* 3. Darah Lewat 15 Hari: Tidak Otomatis Hari ke-16 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292]">
              <AlertCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
              Kaidah Krusial PDF
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Darah Lewat 15 Hari: Istihadhah Bukan Otomatis Hari ke-16
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Banyak muslimah salah paham mengira: <em>"Kalau darah tembus sampai hari ke-17, berarti hari 1–15 itu haid dan hari 16–17 itu istihadhah."</em>
            </p>
            <div className="p-4 rounded-2xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-medium leading-relaxed shadow-xs">
              <strong>Koreksi Fiqih Ustadzah Jahidah Farhati:</strong><br />
              "Jika darah bersambung terus-menerus tanpa henti dari hari pertama melewati hari ke-15, TIDAK BERARTI istihadhah pasti baru dimulai di hari ke-16. Bisa jadi berdasarkan kaidah tamyiz (kekuatan warna darah), darah istihadhah sebenarnya sudah dimulai sejak tanggal 9, 10, atau 11!"
            </div>
            <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Status darahnya harus dipecahkan menggunakan rumus <strong>7 Golongan Perempuan Istihadhah</strong> (membedakan darah kuat vs lemah, atau mengembalikan ke adat kebiasaan).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
