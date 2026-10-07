import React, { useState } from 'react';
import { HelpCircle, ChevronRight, ShowerHead } from 'lucide-react';

export const MandiBesarStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'rukun' | 'sunnah' | 'faq-mandi'>('rukun');

  const steps = [
    {
      num: 1,
      title: 'Rukun 1: Niat di Dalam Hati',
      subtitle: 'Saat air pertama kali mengenai tubuh',
      detail:
        'Niat dilakukan bersamaan dengan mengalirkan air pertama ke tubuh, bukan sebelum mandi ketika badan masih kering. Tempat niat adalah di dalam hati.',
      lafaz: 'نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ عَنِ الْحَيْضِ لِلَّهِ تَعَالَى',
      arti: '"Ya Allah, saya niat mandi besar untuk mengangkat hadas besar karena Allah Ta\'ala."'
    },
    {
      num: 2,
      title: 'Rukun 2: Mengalirkan Air ke Seluruh Tubuh',
      subtitle: 'Termasuk rambut dan seluruh lipatan kulit',
      detail:
        'Air mutlak harus dialirkan secara merata menetes ke seluruh permukaan kulit dan helai rambut hingga ke pangkal pori-pori.',
      perhatian: [
        'Rambut yang dikepang atau disanggul WAJIB DILEPAS agar air mencapai kulit kepala.',
        'Lipatan kulit (ketiak, pusar, belakang telinga, lipatan kemaluan) wajib terbasahi air.',
        'Sabun dan sampo BUKAN rukun mandi besar. Yang wajib adalah air mutlak mengalir.'
      ]
    }
  ];

  return (
    <section id="mandi-besar" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Panduan Praktis Bersuci
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Tata Cara Mandi Besar (Ghusl)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Berdasarkan rujukan kitab <em>Safinatun Naja</em> dan <em>Fathul Qarib</em>: rukun mandi hanya ada dua hal, ringkas dan tidak memberatkan.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 max-w-md mx-auto mb-8 p-1 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
          <button
            onClick={() => setActiveTab('rukun')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'rukun'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            2 Rukun Wajib
          </button>
          <button
            onClick={() => setActiveTab('sunnah')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'sunnah'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            6 Sunnah Mandi
          </button>
          <button
            onClick={() => setActiveTab('faq-mandi')}
            className={`flex-1 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'faq-mandi'
                ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold shadow-xs'
                : 'text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/70'
            }`}
          >
            Shower & Wudhu
          </button>
        </div>

        {/* Tab 1: 2 Rukun Mandi (Interactive Stepper) */}
        {activeTab === 'rukun' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="flex items-center justify-between border-b border-[#2D1B25]/10 dark:border-[#F06292]/20 pb-4">
              <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
                Langkah Wajib Kitab Safinatun Naja
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className={`px-3 py-1 text-xs rounded-xl font-medium transition-all cursor-pointer ${
                    currentStep === 1
                      ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-bold'
                      : 'border border-[#2D1B25]/20 dark:border-[#F06292]/25 text-[#2D1B25] dark:text-[#FDF0F8]'
                  }`}
                >
                  Langkah 1
                </button>
                <button
                  onClick={() => setCurrentStep(2)}
                  className={`px-3 py-1 text-xs rounded-xl font-medium transition-all cursor-pointer ${
                    currentStep === 2
                      ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-bold'
                      : 'border border-[#2D1B25]/20 dark:border-[#F06292]/25 text-[#2D1B25] dark:text-[#FDF0F8]'
                  }`}
                >
                  Langkah 2
                </button>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-sm font-bold text-[#C2185B] dark:text-[#F06292]">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    {steps[0].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {steps[0].detail}
                </p>

                <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-center">
                  <div className="text-lg sm:text-xl font-serif text-[#C2185B] dark:text-[#F06292] leading-relaxed">
                    {steps[0].lafaz}
                  </div>
                  <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] italic">
                    {steps[0].arti}
                  </p>
                </div>

                <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] p-3.5 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20">
                  <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Catatan Fiqih:</strong> Niat tidak harus berbahasa Arab. Cukup terbersit mantap di dalam hati saat air pertama menyiram tubuh. Tidak perlu merinci apakah mandi karena haid atau junub; cukup niat mengangkat hadas besar.
                </div>

                <div className="text-right">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    Lanjut ke Langkah 2 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-2xl bg-[#FCEEF6] dark:bg-[#4A1535] flex items-center justify-center text-sm font-bold text-[#C2185B] dark:text-[#F06292]">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    {steps[1].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                  {steps[1].detail}
                </p>

                <div className="p-4 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2">
                  <span className="text-xs font-bold text-[#C2185B] dark:text-[#F06292]">
                    Hal-hal yang Wajib Dipastikan:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">
                    {steps[1].perhatian?.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] dark:bg-[#F06292] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-left">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2 rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/25 text-xs font-medium text-[#2D1B25] dark:text-[#FDF0F8] cursor-pointer"
                  >
                    ← Kembali ke Langkah 1
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: 6 Sunnah Mandi (Fathul Qarib) */}
        {activeTab === 'sunnah' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto space-y-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Kitab Fathul Qarib al-Mujib
            </span>
            <h3 className="text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              6 Amalan Sunnah Saat Mandi Besar
            </h3>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8]">
              Jika dikerjakan bernilai pahala berlipat, namun bila ditinggalkan mandi tetap sah:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">1. Membasuh Tangan:</strong> Mencuci kedua telapak tangan sebanyak 3 kali sebelum masuk ke wadah air.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">2. Membersihkan Najis:</strong> Menghilangkan segala kotoran atau sisa darah yang menempel di badan.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">3. Berwudhu:</strong> Mengambil wudhu sempurna sebagaimana wudhu untuk shalat sebelum mulai mengguyur badan.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">4. Mengguyur 3 Kali:</strong> Menyiramkan air ke kepala dan seluruh badan masing-masing 3 kali.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">5. Dahulukan Sisi Kanan:</strong> Membasuh bagian tubuh sebelah kanan 3 kali, lalu sebelah kiri 3 kali.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/15 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
                <strong className="text-[#C2185B] dark:text-[#F06292]">6. Menggosok dengan Tangan (Dalk):</strong> Meratakan dan mengusap air dengan tangan ke seluruh lipatan tubuh.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Shower & Apakah Perlu Wudhu Lagi? */}
        {activeTab === 'faq-mandi' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8] flex items-center gap-2">
                <ShowerHead className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
                Bagaimana Cara Mandi Besar Menggunakan Shower? (FAQ Q19)
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                Mandi menggunakan shower modern hukumnya <strong>sangat sah</strong>. Urutan membasuh 3 kali sisi kanan dan kiri adalah sunnah gayung. Saat memakai shower, cukup niat saat air pertama mengenai badan, lalu gerakkan tubuh agar guyuran air mengenai kepala, badan kanan, badan kiri, dan seluruh lipatan kulit secara merata.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <h3 className="text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
                Apakah Setelah Mandi Besar Harus Wudhu Lagi?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-1">
                  <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                    Pendapat 1 (Mu'tamad Mazhab Syafi'i):
                  </span>
                  <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                    <strong>TIDAK PERLU WUDHU LAGI.</strong> Jika hadas besar terangkat, hadas kecil otomatis ikut terangkat. (Hadits Aisyah r.a. bahwa Rasulullah ﷺ shalat tanpa wudhu lagi setelah mandi).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-1">
                  <span className="font-bold text-[#C2185B] dark:text-[#F06292]">
                    Pendapat 2:
                  </span>
                  <p className="text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                    Tetap berwudhu di awal atau di akhir mandi agar anggota wudhu dibasahi minimal dua kali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
