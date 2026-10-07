import React from 'react';
import { X, Printer, Bookmark } from 'lucide-react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 bg-[#FDF0F5] dark:bg-[#1A0E17] border border-[#2D1B25]/15 dark:border-[#F06292]/30 shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2D1B25]/10 dark:border-[#F06292]/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <img
              src="./logo_haid-check.png"
              alt="Logo Haid Check"
              className="w-9 h-9 object-contain shrink-0 drop-shadow-xs dark:hidden"
            />
            <img
              src="./logo-white_haid-check.png"
              alt="Logo Haid Check"
              className="w-9 h-9 object-contain shrink-0 drop-shadow-xs hidden dark:block"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Cheat Sheet: Rumus Inti Fiqih Haid Mazhab Syafi'i
              </h3>
              <p className="text-[11px] text-[#5C3A4E] dark:text-[#E8C5D8]">
                Resume Special Class #12 bersama Ustadzah Jahidah Farhati, Lc.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              aria-label="Tutup Rumus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cheat Sheet Content */}
        <div className="space-y-6 text-xs text-[#2D1B25] dark:text-[#FDF0F8]">
          {/* Section 1: 4 Batas Angka Pokok */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] mb-2">
              1. 4 Batas Angka Pokok Fiqih
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Minimal Haid</span>
                <div className="text-lg font-bold font-mono">24 Jam</div>
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Akumulasi total</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Maksimal Haid</span>
                <div className="text-lg font-bold font-mono">15 Hari</div>
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">15 hari 15 malam</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Minimal Suci</span>
                <div className="text-lg font-bold font-mono">15 Hari</div>
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Pemisah dua haid</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 shadow-2xs">
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Maksimal Nifas</span>
                <div className="text-lg font-bold font-mono">60 Hari</div>
                <span className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">Kebiasaan 40 hari</span>
              </div>
            </div>
          </div>

          {/* Section 2: Tangga Kekuatan Darah & 4 Syarat Tamyiz */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 shadow-2xs">
              <h4 className="font-bold text-[#C2185B] dark:text-[#F06292]">
                2. Tangga Kekuatan Darah
              </h4>
              <p className="text-[11px] leading-relaxed">
                <strong>Hitam</strong> → <strong>Merah</strong> → <strong>Cokelat</strong> → <strong>Kekuningan (Sufrah)</strong> → <strong>Keruh (Kudrah)</strong>
              </p>
              <p className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8]">
                Ditentukan pula oleh kekentalan (gumpal &gt; encer) dan aroma (amis &gt; tidak amis).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#C2185B] dark:text-[#F06292]">
                3. 4 Syarat Tamyiz Istihadhah
              </h4>
              <ul className="text-[11px] space-y-1 text-[#5C3A4E] dark:text-[#E8C5D8]">
                <li>• Darah kuat ≥ 24 jam (sehari semalam)</li>
                <li>• Darah kuat ≤ 15 hari</li>
                <li>• Darah lemah ≥ 15 hari bila diikuti kuat ke-2 &gt; 15 hari</li>
                <li>• Diawali darah paling kuat & tidak selang-seling</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Rumus Naqa & Baqiyatut Thur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-1 shadow-2xs">
              <h4 className="font-bold text-[#C2185B] dark:text-[#F06292]">
                4. Rumus Naqa (Jeda di Tengah)
              </h4>
              <p className="text-[11px] leading-relaxed">
                Darah → Berhenti → Darah dihukumi <strong>HAID</strong> jika:
              </p>
              <p className="text-[11px] font-medium text-[#2D1B25] dark:text-[#FDF0F8]">
                (1) Total darah ≥ 24 jam, DAN<br />
                (2) Seluruh rangkaian darah + jeda ≤ 15 hari.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-1 shadow-2xs">
              <h4 className="font-bold text-[#C2185B] dark:text-[#F06292]">
                5. Istihadhah Penyempurna Suci
              </h4>
              <p className="text-[11px] leading-relaxed">
                Jika jeda suci baru berlangsung X hari (&lt; 15 hari) lalu darah keluar lagi:
              </p>
              <p className="text-[11px] font-medium text-[#2D1B25] dark:text-[#FDF0F8]">
                Kekurangan (15 - X) hari dari darah kedua dihukumi <strong>istihadhah</strong> (wajib shalat). Sisanya baru <strong>haid baru</strong>.
              </p>
            </div>
          </div>

          {/* Section 4: Rukun Mandi & 2 Kondisi Qadha */}
          <div className="p-4 rounded-2xl bg-[#2D1B25]/5 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-[11px] shadow-2xs">
            <div className="font-bold text-[#C2185B] dark:text-[#F06292]">
              6. Intisari Ibadah Praktis:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <strong>Rukun Mandi (Safinatun Naja):</strong>
                <ol className="list-decimal pl-4 mt-0.5 space-y-0.5 text-[#5C3A4E] dark:text-[#E8C5D8]">
                  <li>Niat bersamaan air pertama membasahi tubuh.</li>
                  <li>Meratakan air ke seluruh kulit dan rambut (sanggul/kepang harus dilepas).</li>
                </ol>
              </div>
              <div>
                <strong>2 Kondisi Wajib Qadha Shalat:</strong>
                <ol className="list-decimal pl-4 mt-0.5 space-y-0.5 text-[#5C3A4E] dark:text-[#E8C5D8]">
                  <li>Lalai menunda shalat padahal waktu cukup, lalu darah haid keluar.</li>
                  <li>Suci di waktu shalat kedua yang bisa dijamak (Asar → qadha Zuhur; Isya → qadha Magrib).</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
