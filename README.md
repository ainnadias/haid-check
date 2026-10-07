# Fiqih Haid Interaktif: Panduan Edukasi Fiqih Darah Wanita

Landing page edukasi interaktif dan kalkulator fiqih darah wanita (haid, istihadhah, nifas) menurut mazhab Syafi'i, disarikan secara utuh dari **Resume Special Class #12 – Series Fiqih Haid: "Yang Paling Sering Disalahpahami"** bersama **Ustadzah Jahidah Farhati, Lc** (Akademi Muslim Indonesia).

---

## 📖 Rujukan & Sumber Kajian

- **Narasumber:** Ustadzah Jahidah Farhati, Lc
- **Kitab Rujukan Utama:**
  - *Al-Ibanah wal Ifadah fi Ahkamil Haidh wan Nifas wal Istihadhah* (Sayyid Abdurrahman bin Abdullah as-Segaf)
  - *Fathul Qarib al-Mujib fi Syarh Alfazh at-Taqrib* (Ibnu Qasim al-Ghazi)
  - *Safinatun Naja* (Syekh Salim bin Sumair al-Hadhrami)
  - *Nihayatuz Zain* (Syekh Nawawi Al-Bantani)

---

## ✨ Fitur-Fitur Interaktif

1. **Ringkasan 3 Angka Kunci:** 24 Jam (minimal haid akumulasi), 15 Hari (maksimal haid), 15 Hari (minimal masa suci).
2. **Kalkulator 24 Jam Akumulasi:** Input jam keluar darah harian dengan progress bar visual dan preset kasus nyata PDF (9+8+8=25 jam vs 3×3=9 jam istihadhah).
3. **Timeline Simulator Naqa (Hari 1–20):** Toggle visual status darah dan jeda hari demi hari, kalkulasi otomatis syarat 1 (darah ≥ 24 jam) dan syarat 2 (rentang ≤ 15 hari), dilengkapi 5 preset kasus PDF (termasuk kasus naqa dihukumi haid vs kasus naqa 18 hari dihukumi masa suci).
4. **Kalkulator Masa Suci Minimal 15 Hari:** Evaluasi jeda antara dua darah dan perhitungan otomatis *istihadhah penyempurna masa suci (baqiyatut thur)*.
5. **Interactive Flowchart Berhenti Haid:** Panduan menentukan suci untuk 2 tipe perempuan (terbiasa cairan putih *al-qashshah al-baidha'* vs tidak terbiasa / *al-jufuf*), cara cek kapas posisi jongkok, flek pasca mandi (riwayat Ummu 'Athiyah), dan 2 pendapat menunda mandi (Imam Nawawi vs Imam Ar-Rafi'i).
6. **Tangga 5 Warna Darah:** Hitam → Merah → Cokelat → Kekuningan (*Sufrah*) → Keruh/Flek (*Kudrah*).
7. **Pohon Keputusan & 7 Golongan Istihadhah:** Wizard diagnosa interaktif (Mubtada'ah vs Mu'tadah, Mumayyizah vs Ghairu Mumayyizah), checker 4 syarat tamyiz, khilaf fatwa Imam Ramli vs Ibnu Hajar, serta konsekuensi qadha shalat.
8. **Checklist Larangan Hadas:** 5 larangan hadas besar + 3 larangan khusus haid/nifas beserta rincian hukum smartphone, buku terjemah, sampul lepas, dan musala non-wakaf.
9. **Katalog 5 Cairan Kewanitaan:** Tabel komparatif Mani, Madzi, Wadi, Rutubatul Farj Normal & Abnormal (hukum suci/najis, mandi vs wudhu, pakaian, dan batas zakar mujami').
10. **Mini Kalkulator Qadha Shalat:** 2 kondisi wajib qadha shalat (lalai menunda saat masuk waktu & suci di waktu shalat kedua jamak: Asar/Isya).
11. **Stepper Mandi Besar:** 2 rukun wajib (*Safinatun Naja*), 6 amalan sunnah (*Fathul Qarib*), panduan shower modern, dan status wudhu setelah mandi.
12. **8 Flip Cards Mitos vs Fakta:** Keramas, potong kuku/rambut, mengumpulkan rambut rontok, wudhu ibadah saat haid, menunda mandi, jimak sebelum mandi, sahur sebelum mandi besar, dan pemeriksaan pembalut.
13. **Accordion 28 Tanya Jawab Lengkap:** Seluruh 14 Q&A Sesi 1 + 14 Q&A Sesi 2 dilengkapi pencarian dan filter kategori.
14. **Kuis Evaluasi 16 Soal Kasus:** Soal pilihan ganda, pembahasan detail per soal, skor akhir, dan efek perayaan confetti.
15. **Drawer Glosarium Fiqih:** Istilah Arab, transliterasi, dan definisi bahasa awam.
16. **Cheat Sheet Rumus Cepat:** Lembar rangkuman rumus siap cetak (*print-friendly*).
17. **Dark / Light Theme:** Palet warna *Deep Espresso*, *Petal Reverie*, dan *Ivory Hearth*.

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan Node.js (versi 18+) telah terpasang di komputermu:

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# Aplikasi akan berjalan di http://localhost:3000
```

Untuk melakukan build production:

```bash
npm run build
```

---

## 🌐 Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi dengan workflow otomatis GitHub Actions di `.github/workflows/deploy.yml` dan pengaturan base URL di `vite.config.ts`.

### Langkah-langkah:
1. Buat repository baru di akun GitHub milikmu.
2. Push seluruh kode ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: Fiqih Haid Interaktif landing page"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
3. Di halaman repository GitHub:
   - Buka menu **Settings** → **Pages**
   - Di bagian **Build and deployment** → **Source**, pilih **GitHub Actions**
4. Workflow akan otomatis berjalan dan websitemu akan ter-deploy di alamat:
   `https://USERNAME.github.io/NAMA-REPO/`

*Catatan:* Pengaturan `base: './'` di `vite.config.ts` membuat aplikasi langsung dapat dibuka di subpath repo mana pun tanpa perlu mengubah nama repo secara manual. File `public/404.html` juga telah disediakan agar tidak terjadi error 404 saat pengguna me-refresh halaman.

---

## 📝 Cara Mengedit Konten

Semua data tersimpan rapi dan modular di folder `src/data/`:
- `src/data/glosarium.ts` : Menambah atau mengubah istilah Arab dan glosarium
- `src/data/faq.ts` : 28 tanya jawab sesi 1 & 2 beserta kata kunci pencarian
- `src/data/mitos.ts` : 8 mitos dan fakta seputar haid
- `src/data/larangan.ts` : Rincian larangan hadas besar dan khusus haid
- `src/data/cairan.ts` : Tinjauan mani, madzi, wadi, dan rutubatul farj
- `src/data/kuis.ts` : Soal-soal kuis evaluasi dan pembahasannya
- `src/data/warnaDarah.ts` : Tangga kekuatan 5 warna darah
- `src/data/istihadhahCases.ts` : Rincian 7 golongan istihadhah dan skenario kasus berhitung

Fungsi murni kalkulator berada di `src/utils/fiqihCalculators.ts`.
