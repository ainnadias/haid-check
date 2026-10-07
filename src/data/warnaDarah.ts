import { BloodColorDetail } from '../types';

export const WARNA_DARAH_DATA: BloodColorDetail[] = [
  {
    id: 'hitam',
    nama: 'Hitam',
    istilahArab: 'الأسود (Al-Aswad)',
    hex: '#2B1713',
    levelKekuatan: 1,
    deskripsi: 'Warna darah yang paling kuat kedudukannya dalam tamyiz. Biasanya bertekstur kental atau bergumpal dan beraroma anyir/amis tajam.',
    contohPdf: '4 hari darah hitam disusul 6 hari flek (total 10 hari). Karena seluruh rangkaian ≤ 15 hari, maka seluruh 10 hari tersebut dihukumi haid.'
  },
  {
    id: 'merah',
    nama: 'Merah',
    istilahArab: 'الأحمر (Al-Aḥmar)',
    hex: '#8B1E1E',
    levelKekuatan: 2,
    deskripsi: 'Tingkat kekuatan kedua setelah hitam. Merupakan warna darah haid yang paling umum dan segar.',
    contohPdf: '3 hari pertama darah merah, disusul 2 hari darah coklat (total 5 hari). Seluruh 5 hari tetap dihukumi sebagai haid.'
  },
  {
    id: 'coklat',
    nama: 'Cokelat',
    istilahArab: 'الأشقر / البني (Al-Bunni)',
    hex: '#6D4C41',
    levelKekuatan: 3,
    deskripsi: 'Tingkat kekuatan sedang/lemah. Sering muncul di permulaan siklus atau menjelang akhir masa haid.',
    contohPdf: 'Mengalami flek cokelat di hari ke-4 sampai ke-7 setelah darah merah di awal tetap dihukumi haid selama masih berada dalam batas 15 hari.'
  },
  {
    id: 'kuning',
    nama: 'Kekuningan (Sufrah)',
    istilahArab: 'الصفرة (Al-Ṣufrah)',
    hex: '#B8860B',
    levelKekuatan: 4,
    deskripsi: 'Cairan seperti nanah bercampur air atau cokelat muda. Dalam mazhab Syafi\'i, jika keluar bersambung dengan haid dan masih dalam interval 15 hari, dihukumi haid.',
    contohPdf: '6 hari darah merah, 4 hari darah kuning, 7 hari darah coklat (kasus istihadhah 17 hari) — di sini kuning adalah darah yang lebih lemah daripada merah namun lebih kuat daripada coklat.'
  },
  {
    id: 'keruh',
    nama: 'Keruh / Flek (Kudrah)',
    istilahArab: 'الكدرة (Al-Kudrah)',
    hex: '#795548',
    levelKekuatan: 5,
    deskripsi: 'Cairan kusam kelabu atau keruh kecokelatan kotor. Tingkat kekuatan terendah dalam tangga warna darah haid.',
    contohPdf: 'Flek keruh yang muncul bersambung dalam rangkaian hari haid dihukumi haid. Namun jika keluar setelah bersuci sempurna, tidak dianggap (riwayat Ummu \'Athiyah).'
  }
];

export const TANGGA_KEKUATAN = [
  { level: 'Level 1 (Paling Kuat)', warna: 'Hitam', sifat: 'Sangat kental / bergumpal, bau amis tajam' },
  { level: 'Level 2 (Kuat)', warna: 'Merah', sifat: 'Cukup kental, bau anyir khas darah' },
  { level: 'Level 3 (Sedang)', warna: 'Cokelat', sifat: 'Sedikit kental, warna pekat' },
  { level: 'Level 4 (Lemah)', warna: 'Kekuningan (Sufrah)', sifat: 'Encer, cokelat muda kekuningan' },
  { level: 'Level 5 (Paling Lemah)', warna: 'Keruh / Flek (Kudrah)', sifat: 'Kusam keruh, tidak terlalu amis' },
];
