import React, { useState } from 'react';
import { Check, AlertCircle, HelpCircle } from 'lucide-react';

export const TandaBerhentiFlowchart: React.FC = () => {
  const [habitType, setHabitType] = useState<'putih' | 'kering'>('putih');
  const [cottonCheck, setCottonCheck] = useState<'bersih' | 'masih-ada'>('bersih');

  return (
    <section id="tanda-berhenti" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Panduan Interaktif Verifikasi Suci
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Flowchart Tanda Berhentinya Haid
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Apakah kamu sudah suci dan wajib mandi besar? Klik opsi di bawah sesuai dengan kebiasaan dan hasil pemeriksaan tubuhmu.
          </p>
        </div>

        {/* Interactive Flowchart Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          {/* Step 1: Kebiasaan Cairan Tubuh */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Kenali Kebiasaan Akhir Haidmu
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
              <button
                onClick={() => setHabitType('putih')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  habitType === 'putih'
                    ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                    : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                  Kondisi 1: Terbiasa Keluar Cairan Putih
                </div>
                <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  Sering melihat cairan putih bersih (al-qashshah al-baidha') di akhir siklus.
                </div>
              </button>

              <button
                onClick={() => setHabitType('kering')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  habitType === 'kering'
                    ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                    : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                  Kondisi 2: Tidak Pernah Keluar Cairan Putih
                </div>
                <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  Tanda sucinya adalah kering total (al-jufūf) pada tempat keluarnya darah.
                </div>
              </button>
            </div>
          </div>

          {/* Step 2: Pemeriksaan dengan Kapas Basah */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Pemeriksaan Bagian Dalam dengan Kapas (Posisi Jongkok)
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 ml-8 mb-4 text-xs text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
              <strong>Cara Cek yang Diajarkan di PDF:</strong> Pengecekan dilakukan pada <em>bagian dalam</em> tempat keluarnya darah, bukan sekadar melihat bagian luar pembalut. Gunakan kapas bersih yang sedikit dibasahi air dengan posisi jongkok pada setiap menjelang waktu shalat.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
              <button
                onClick={() => setCottonCheck('bersih')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  cottonCheck === 'bersih'
                    ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                    : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                  Kapas Keluar Bersih / Mengering
                </div>
                <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  Tidak ada darah, tidak ada flek cokelat, dan tidak ada warna kekuningan.
                </div>
              </button>

              <button
                onClick={() => setCottonCheck('masih-ada')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  cottonCheck === 'masih-ada'
                    ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                    : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] mb-1">
                  Kapas Masih Ada Noda / Flek
                </div>
                <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  Masih tampak semburat kecokelatan, kekuningan, atau cairan keruh.
                </div>
              </button>
            </div>
          </div>

          {/* Step 3: Hasil Keputusan Fiqih */}
          <div className="pl-8">
            <div className="p-6 rounded-2xl border border-[#2D1B25]/15 dark:border-[#F06292]/30 bg-white/90 dark:bg-white/5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] mb-2">
                <Check className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
                Keputusan Hukum Fiqih
              </div>

              {cottonCheck === 'masih-ada' ? (
                <div>
                  <h4 className="text-base font-bold text-[#C2185B] dark:text-[#F06292] mb-2">
                    STATUS: BELUM SUCI (Masih Masa Haid)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                    Jangan terburu-buru mandi besar! Selama masih terdapat warna cokelat atau flek yang bersambung dengan darah dan belum melampaui 15 hari, statusnya masih haid. Periksa kembali secara berkala pada waktu shalat berikutnya.
                  </p>
                </div>
              ) : habitType === 'putih' ? (
                <div>
                  <h4 className="text-base font-bold text-[#1B7043] dark:text-[#48C78E] mb-2">
                    STATUS: SUDAH SUCI (Wajib Segera Mandi Besar)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                    Karena kapas sudah bersih dan/atau telah keluar cairan putih laksana kapur, kamu telah suci. Berdasarkan pendapat mu'tamad Imam Nawawi, <strong>wajib segera mandi besar</strong> dan tidak boleh menunda shalat berikutnya.
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="text-base font-bold text-[#1B7043] dark:text-[#48C78E] mb-2">
                    STATUS: SUDAH SUCI DENGAN AL-JUFUF (Kering Total)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                    Bagi perempuan yang tidak biasa mengalami cairan putih, tanda sucinya adalah keringnya tempat keluar darah. Jangan menunggu cairan putih yang memang tidak biasa muncul. Segeralah bersuci dan mandi besar!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2 Rincian Penting: Flek Pasca Mandi & Khilaf Menunda Mandi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Flek Setelah Mandi */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <h4 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
              Bagaimana Jika Flek Keluar Setelah Mandi Besar?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Jika sebelumnya telah dilakukan pemeriksaan kapas dan liang vagina telah benar-benar kering, lalu setelah mandi besar keluar sedikit flek kecokelatan/kekuningan:
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FCEEF6]/70 dark:bg-[#4A1535]/40 border border-[#C2185B]/25 dark:border-[#F06292]/30 text-xs text-[#2D1B25] dark:text-[#FDF0F8] space-y-1">
              <p className="font-semibold text-[#C2185B] dark:text-[#F06292]">Riwayat Shahabiyah Ummu 'Athiyah r.a.:</p>
              <p className="italic">"Kami tidak menganggap cairan keruh dan kekuningan setelah bersuci sebagai bagian dari haid."</p>
              <p className="pt-1 text-[#5C3A4E] dark:text-[#E8C5D8]">
                Flek tersebut <strong>tidak perlu dihiraukan</strong> dan shalat tetap sah. Cukup dibasuh dan berwudhu bila hendak shalat.
              </p>
            </div>
            <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              <strong>Pengecualian:</strong> Ketentuan ini berbeda bagi perempuan yang memiliki kebiasaan darah berselang-seling (pola putus-nyambung naqa). Flek yang muncul tidak bisa langsung diabaikan.
            </p>
          </div>

          {/* Card Dua Pendapat Menunda Mandi */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <h4 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
              Bolehkah Menunda Mandi Setelah Haid Berhenti?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Terdapat dua pendapat resmi ulama mazhab Syafi'i (contoh: seseorang biasanya haid 10 hari, tetapi di hari ke-7 darah sudah bersih total):
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">1. Pendapat Imam Nawawi (Mu'tamad / Mayoritas Ulama):</span>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                  Jika tanda bersih sudah ditemukan, <strong>wajib segera mandi besar</strong> pada hari ke-7 tersebut tanpa menunggu hari ke-10, lalu melaksanakan shalat seperti biasa.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
                <span className="font-bold text-[#C2185B] dark:text-[#F06292]">2. Pendapat Imam Ar-Rafi'i:</span>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
                  Boleh menunda mandi sampai kebiasaan haidnya selesai (hari ke-10) untuk memastikan darah tidak keluar lagi. Namun jika ternyata darah tidak keluar lagi, <strong>seluruh shalat selama masa menunggu (hari 7–10) wajib diqadha</strong> karena masa bersih terhitung sejak hari ke-7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
