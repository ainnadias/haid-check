import React from 'react';
import { Heart, Compass } from 'lucide-react';

export const KewajibanSection: React.FC = () => {
  return (
    <section id="kewajiban" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Urgensi Belajar Fiqih Darah
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Kenapa Wajib Mempelajari Fiqih Darah Wanita?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Bukan sekadar ilmu biologis, melainkan fondasi utama agar ibadah shalat dan puasa seorang muslimah sah dan tidak salah langkah.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Fardhu 'Ain & Hubungan dengan Shalat */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="w-10 h-10 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-[#C2185B] dark:text-[#F06292]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Hukumnya Fardhu 'Ain (Kewajiban Individu)
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Mempelajari fiqih darah wanita adalah kewajiban pribadi bagi setiap muslimah yang sudah baligh. Hal ini karena darah wanita berkaitan langsung dengan pelaksanaan <strong>shalat lima waktu</strong>:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] dark:bg-[#F06292] mt-2 shrink-0" />
                <span>Jika mengira haid padahal istihadhah, seseorang akan meninggalkan shalat tanpa uzur yang sah (meninggalkan kewajiban fardhu).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] dark:bg-[#F06292] mt-2 shrink-0" />
                <span>Jika mengira istihadhah padahal masih haid, seseorang melakukan shalat saat sedang berhadas besar (ibadahnya tidak sah dan berdosa).</span>
              </li>
            </ul>
            <div className="p-3.5 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
              Rujukan utama pembahasan ini adalah kitab fiqih mazhab Syafi'i <em>Al-Ibanah wal Ifadah fi Ahkamil Haidh wan Nifas wal Istihadhah</em> karya Sayyid Abdurrahman bin Abdullah as-Segaf.
            </div>
          </div>

          {/* Card 2: Konteks Ayat & Pemuliaan Wanita */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="w-10 h-10 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-[#C2185B] dark:text-[#F06292]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Konteks Ayat: Islam Memuliakan Wanita
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Dalam riwayat shahih, sebab turunnya ayat tentang haid (QS. Al-Baqarah: 222) bermula dari tradisi masyarakat Yahudi di Madinah yang memperlakukan wanita haid seperti makhluk terbuang yang najis, mengucilkannya, dan melarang makan satu meja bersama.
            </p>
            <div className="p-4 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] border border-[#C2185B]/25 dark:border-[#F06292]/30 text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] space-y-2">
              <p className="font-bold text-[#C2185B] dark:text-[#F06292]">Jawaban Al-Qur'an & Rasulullah ﷺ:</p>
              <p className="leading-relaxed">
                Yang disebut kotoran <em>(adzā)</em> <strong>bukanlah sosok manusianya</strong>, melainkan tempat keluarnya darah. Suami tetap diperintahkan menemani, makan bersama, dan bermesraan dengan istri tanpa penetrasi.
              </p>
            </div>
            <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
              Hadits Sayyidah Aisyah r.a. menegaskan bahwa darah di luar haid adalah "darah penyakit" (irq/istihadhah) yang cukup dibersihkan untuk kemudian mandi dan kembali shalat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
