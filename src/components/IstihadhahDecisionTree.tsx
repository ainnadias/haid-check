import React, { useState } from 'react';
import { ISTIHADHAH_CATEGORIES } from '../data/istihadhahCases';
import { checkTamyizConditions } from '../utils/fiqihCalculators';
import { GitPullRequest, CheckCircle2, XCircle } from 'lucide-react';

export const IstihadhahDecisionTree: React.FC = () => {
  const [historyType, setHistoryType] = useState<'mubtadaah' | 'mutadah'>('mubtadaah');
  const [tamyizType, setTamyizType] = useState<'mumayyizah' | 'ghairu'>('mumayyizah');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('mubtadaah-mumayyizah');

  const [durasiKuat, setDurasiKuat] = useState<number>(10);
  const [durasiLemah, setDurasiLemah] = useState<number>(8);
  const [urutanKuatDulu, setUrutanKuatDulu] = useState<boolean>(true);
  const [adaKuatKeduaLebih15, setAdaKuatKeduaLebih15] = useState<boolean>(false);

  const tamyizCheck = checkTamyizConditions({
    durasiKuatHari: durasiKuat,
    durasiLemahHari: durasiLemah,
    warnaKuat: 'Hitam / Merah',
    warnaLemah: 'Cokelat / Keruh',
    urutanKuatDulu,
    adaDarahKuatKeduaLebih15Hari: adaKuatKeduaLebih15
  });

  const selectedCategory = ISTIHADHAH_CATEGORIES.find((c) => c.id === activeCategoryTab) || ISTIHADHAH_CATEGORIES[0];

  return (
    <section id="istihadhah" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Pohon Keputusan & Diagnosa Fiqih
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Istihadhah & 7 Golongan Darah Wanita
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Darah istihadhah bersifat <em>daimul hadas</em> (hadas mengalir terus). Muslimah tetap wajib shalat dan puasa. Gunakan pohon keputusan dan checker 4 syarat tamyiz di bawah ini.
          </p>
        </div>

        {/* Daimul Hadas Info Card */}
        <div className="glass-panel p-5 sm:p-6 rounded-3xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div>
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Sifat Darah Istihadhah: Daimul Hadas (دَائِمُ الْحَدَث)
            </span>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] mt-1 leading-relaxed">
              Hukum wanita istihadhah sama seperti orang yang suci: <strong>tetap wajib shalat, puasa, boleh tawaf, dan membaca Al-Qur'an</strong>.
            </p>
          </div>
          <div className="text-xs p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] shrink-0">
            <strong>Tata Cara Wudhu Khusus:</strong><br />
            Bersihkan kemaluan → Tutup kapas → Pakai pembalut baru → Wudhu setelah azan → 1 wudhu untuk 1 shalat fardhu.
          </div>
        </div>

        {/* 1. Checker 4 Syarat Tamyiz */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider">
                Interactive Tamyiz Checker
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                Uji 4 Syarat Tamyiz (Pembeda Darah Kuat vs Lemah)
              </h3>
            </div>
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-xl border self-start sm:self-auto ${
              tamyizCheck.isMumayyizah
                ? 'bg-[#E8F5EE] dark:bg-[#163324] border-[#1B7043]/40 text-[#1B7043] dark:text-[#48C78E]'
                : 'bg-[#FDF3E7] dark:bg-[#3D2712] border-[#9A5812]/30 text-[#9A5812] dark:text-[#F3A847]'
            }`}>
              {tamyizCheck.isMumayyizah ? 'Mumayyizah (Sah)' : 'Ghairu Mumayyizah'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                Lama Darah Kuat
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={0.5}
                  max={25}
                  value={durasiKuat}
                  onChange={(e) => setDurasiKuat(parseFloat(e.target.value) || 0)}
                  className="w-full px-2.5 py-1 text-xs font-mono rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8]"
                />
                <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Hari</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                Lama Darah Lemah
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={durasiLemah}
                  onChange={(e) => setDurasiLemah(parseFloat(e.target.value) || 0)}
                  className="w-full px-2.5 py-1 text-xs font-mono rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8]"
                />
                <span className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8]">Hari</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                Urutan Kemunculan
              </label>
              <select
                value={urutanKuatDulu ? 'true' : 'false'}
                onChange={(e) => setUrutanKuatDulu(e.target.value === 'true')}
                className="w-full px-2 py-1 text-xs rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8]"
              >
                <option value="true">Darah Kuat di Awal (Hitam → Cokelat)</option>
                <option value="false">Darah Lemah Mendahului / Berselang-seling</option>
              </select>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <label className="block text-xs font-medium text-[#5C3A4E] dark:text-[#E8C5D8] mb-1">
                Ada Kuat Ke-2 &gt; 15 Hari?
              </label>
              <select
                value={adaKuatKeduaLebih15 ? 'true' : 'false'}
                onChange={(e) => setAdaKuatKeduaLebih15(e.target.value === 'true')}
                className="w-full px-2 py-1 text-xs rounded-xl border border-[#2D1B25]/20 dark:border-[#F06292]/30 bg-white dark:bg-[#2E1428] text-[#2D1B25] dark:text-[#FDF0F8]"
              >
                <option value="false">Tidak Ada</option>
                <option value="true">Ya, Ada Darah Kuat ke-2 &gt; 15 Hari</option>
              </select>
            </div>
          </div>

          {/* 4 Checks List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl border border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 text-xs flex items-start gap-2">
              {tamyizCheck.syaratA.fulfilled ? (
                <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E] shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
              )}
              <div>
                <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Syarat a: Darah Kuat ≥ 24 Jam:</strong>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">{tamyizCheck.syaratA.message}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 text-xs flex items-start gap-2">
              {tamyizCheck.syaratB.fulfilled ? (
                <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E] shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
              )}
              <div>
                <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Syarat b: Darah Kuat ≤ 15 Hari:</strong>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">{tamyizCheck.syaratB.message}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 text-xs flex items-start gap-2">
              {tamyizCheck.syaratC.fulfilled ? (
                <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E] shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
              )}
              <div>
                <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Syarat c: Darah Lemah Memenuhi Ketentuan:</strong>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">{tamyizCheck.syaratC.message}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 text-xs flex items-start gap-2">
              {tamyizCheck.syaratD.fulfilled ? (
                <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E] shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
              )}
              <div>
                <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Syarat d: Diawali Darah Paling Kuat & Tidak Berselang-seling:</strong>
                <p className="text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">{tamyizCheck.syaratD.message}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/25 text-xs leading-relaxed text-[#2D1B25] dark:text-[#FDF0F8]">
            <strong className="text-[#C2185B] dark:text-[#F06292]">{tamyizCheck.kesimpulan}:</strong><br />
            {tamyizCheck.rekomendasi}
          </div>
        </div>

        {/* 2. Interactive Decision Wizard */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
          <div className="flex items-center gap-2 mb-4">
            <GitPullRequest className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Pohon Keputusan: Cari Golongan Istihadhahmu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Step 1 */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider">
                Langkah 1: Riwayat Mengalami Haid
              </span>
              <div className="space-y-2">
                <button
                  onClick={() => setHistoryType('mubtadaah')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    historyType === 'mubtadaah'
                      ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                  }`}
                >
                  <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    Al-Mubtada'ah (Baru Pertama Kali Haid)
                  </div>
                  <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">
                    Seorang anak/remaja yang baru pertama kali baligh dan darah langsung melebihi 15 hari.
                  </div>
                </button>

                <button
                  onClick={() => setHistoryType('mutadah')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    historyType === 'mutadah'
                      ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                  }`}
                >
                  <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    Al-Mu'tadah (Sudah Pernah Haid Sebelumnya)
                  </div>
                  <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">
                    Sudah pernah memiliki kebiasaan/adat haid pada bulan-bulan sebelumnya.
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider">
                Langkah 2: Kemampuan Tamyiz
              </span>
              <div className="space-y-2">
                <button
                  onClick={() => setTamyizType('mumayyizah')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    tamyizType === 'mumayyizah'
                      ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                  }`}
                >
                  <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    Al-Mumayyizah (Mampu Membedakan Darah)
                  </div>
                  <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">
                    Mencatat warna dan sifat darah, serta memenuhi 4 syarat tamyiz di atas.
                  </div>
                </button>

                <button
                  onClick={() => setTamyizType('ghairu')}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    tamyizType === 'ghairu'
                      ? 'border-[#C2185B] dark:border-[#F06292] bg-white/95 dark:bg-white/10 ring-2 ring-[#C2185B]/30 shadow-xs'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/60 dark:bg-white/5 hover:bg-white/80'
                  }`}
                >
                  <div className="text-xs font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                    Ghairu Mumayyizah (Tidak Mampu Membedakan)
                  </div>
                  <div className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-0.5">
                    Darah satu warna seragam, atau tidak memiliki catatan perubahan darah.
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Diagnosis Result */}
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/15 dark:border-[#F06292]/25">
            <span className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] uppercase tracking-wider">
              Hasil Klasifikasi:
            </span>
            <div className="mt-2 text-base sm:text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              {historyType === 'mubtadaah' && tamyizType === 'mumayyizah' && '1. Al-Mubtada\'ah Al-Mumayyizah'}
              {historyType === 'mubtadaah' && tamyizType === 'ghairu' && '2. Al-Mubtada\'ah Ghairu Mumayyizah'}
              {historyType === 'mutadah' && tamyizType === 'mumayyizah' && '3. Al-Mu\'tadah Al-Mumayyizah'}
              {historyType === 'mutadah' && tamyizType === 'ghairu' && '7. Al-Mu\'tadah Ghairu Mumayyizah'}
            </div>
            <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] mt-2 leading-relaxed">
              {historyType === 'mubtadaah' && tamyizType === 'mumayyizah' && (
                'Solusi: Darah kuat dihukumi HAID, darah lemah dihukumi ISTIHADHAH (contoh: 13 hari hitam haid, 7 hari coklat istihadhah).'
              )}
              {historyType === 'mubtadaah' && tamyizType === 'ghairu' && (
                'Solusi: Berdasarkan kitab Al-Ibanah, haidnya adalah 1 HARI 1 MALAM (24 jam pertama). Sisanya dihukumi ISTIHADHAH.'
              )}
              {historyType === 'mutadah' && tamyizType === 'mumayyizah' && (
                'Solusi: Tamyiz mengalahkan adat! Darah kuat dihukumi HAID meskipun melebihi kebiasaan lama (misal biasa 8 hari, tapi keluar 12 hari hitam, maka 12 hari hitam = haid).'
              )}
              {historyType === 'mutadah' && tamyizType === 'ghairu' && (
                'Solusi: Dikembalikan kepada ADAT BULAN SEBELUMNYA. Jika bulan lalu haid 8 hari, maka 8 hari pertama = HAID, sisanya ISTIHADHAH.'
              )}
            </p>
          </div>
        </div>

        {/* 3. Detail 7 Kartu Golongan Istihadhah (Tab Navigation) */}
        <div>
          <div className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] tracking-wider uppercase mb-4">
            Katalog Lengkap 7 Golongan & Kasus Nyata PDF
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {ISTIHADHAH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer shadow-2xs ${
                  activeCategoryTab === cat.id
                    ? 'bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white font-semibold'
                    : 'bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white/95'
                }`}
              >
                {cat.nama}
              </button>
            ))}
          </div>

          {/* Active Detail Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2D1B25]/10 dark:border-[#F06292]/20 pb-4">
              <div>
                <span className="text-xs font-serif text-[#C2185B] dark:text-[#F06292]">
                  {selectedCategory.arab}
                </span>
                <h3 className="text-xl font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                  {selectedCategory.nama}
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-xl bg-[#FCEEF6] dark:bg-[#4A1535] text-[#C2185B] dark:text-[#F06292] font-semibold self-start sm:self-auto">
                {selectedCategory.apakahTamyiz ? 'Berlaku Kaidah Tamyiz' : 'Kaidah Non-Tamyiz'}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] mb-1">
                Kaidah Hukum:
              </h4>
              <p className="text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] font-medium leading-relaxed">
                {selectedCategory.kaidahHukum}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] mb-1">
                Deskripsi Kondisi:
              </h4>
              <p className="text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed">
                {selectedCategory.deskripsi}
              </p>
            </div>

            {/* Skenario Kasus dari Dokumen PDF */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] mb-3">
                Contoh Kasus & Perhitungan Nyata dari Resume PDF:
              </h4>
              <div className="space-y-4">
                {selectedCategory.contohKasusPdf.map((kasus, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-2 text-xs"
                  >
                    <div className="font-bold text-[#2D1B25] dark:text-[#FDF0F8] text-sm">
                      {kasus.judul}
                    </div>
                    <p className="text-[#5C3A4E] dark:text-[#E8C5D8]">
                      <strong className="text-[#2D1B25] dark:text-[#FDF0F8]">Skenario:</strong> {kasus.skenario}
                    </p>
                    <div className="p-3 rounded-xl bg-[#FDF0F5] dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8]">
                      <strong>Hitungan & Solusi:</strong> {kasus.hitungDanSolusi}
                    </div>
                    <div className="text-[#5C3A4E] dark:text-[#E8C5D8]">
                      <strong>Konsekuensi Qadha Shalat:</strong> {kasus.qadhaShalat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
