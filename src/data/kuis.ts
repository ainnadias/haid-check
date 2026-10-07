import { QuizQuestion } from '../types';

export const KUIS_DATA: QuizQuestion[] = [
  {
    id: 1,
    pertanyaan: 'Berapakah batas minimal durasi akumulasi keluarnya darah agar sah dihukumi sebagai haid dalam mazhab Syafi\'i?',
    pilihan: [
      '12 jam akumulasi darah',
      '24 jam (sehari semalam) secara total akumulasi',
      '3 hari 3 malam berturut-turut',
      '7 hari kalender'
    ],
    jawabanBenar: 1,
    penjelasan: 'Durasi minimal haid dalam mazhab Syafi\'i adalah 24 jam secara total akumulasi keluarnya darah dalam satu rangkaian, bukan harus memancar nonstop selama 24 jam penuh.',
    referensiHalaman: 'Halaman 6–7'
  },
  {
    id: 2,
    pertanyaan: 'Patokan usia minimal seorang anak perempuan dapat dihukumi mengalami haid dalam mazhab Syafi\'i adalah...',
    pilihan: [
      '9 tahun Masehi tepat',
      '12 tahun Masehi',
      'Sekitar 9 tahun Hijriah (toleransi kurang 16 hari)',
      '10 tahun kalender Hijriah'
    ],
    jawabanBenar: 2,
    penjelasan: 'Patokan fiqih Syafi\'i adalah kalender Hijriah, yaitu sekitar 9 tahun Hijriah kurang maksimal 16 hari. Darah sebelum usia tersebut (misal usia 7 atau 8 tahun) dihukumi istihadhah.',
    referensiHalaman: 'Halaman 3'
  },
  {
    id: 3,
    pertanyaan: 'Manakah urutan tangga kekuatan warna darah haid dari yang paling kuat ke paling lemah menurut kaidah fiqih?',
    pilihan: [
      'Merah → Hitam → Cokelat → Keruh → Kuning',
      'Hitam → Merah → Cokelat → Kekuningan (Sufrah) → Keruh/Flek (Kudrah)',
      'Cokelat → Hitam → Merah → Flek → Kuning',
      'Hitam → Cokelat → Merah → Keruh → Kuning'
    ],
    jawabanBenar: 1,
    penjelasan: 'Tingkatan kekuatan warna darah: Hitam (paling kuat) → Merah → Cokelat → Kekuningan (Sufrah) → Keruh/Flek (Kudrah, paling lemah).',
    referensiHalaman: 'Halaman 4 & 54'
  },
  {
    id: 4,
    pertanyaan: 'Kasus: Darah keluar selama 3 hari berturut-turut, namun setiap hari hanya keluar selama 3 jam (total 9 jam). Apakah hukum darah tersebut?',
    pilihan: [
      'Haid 3 hari penuh karena terjadi dalam rentang 3 hari',
      'Haid 9 jam dan sisanya suci',
      'Istihadhah, karena total durasinya belum mencapai syarat minimal 24 jam',
      'Tergantung adat kebiasaan bulan lalu'
    ],
    jawabanBenar: 2,
    penjelasan: 'Karena akumulasi darah hanya terkumpul 9 jam (< 24 jam), darah tersebut dihukumi istihadhah. Shalat yang sempat ditinggalkan selama 3 hari tersebut wajib diqadha.',
    referensiHalaman: 'Halaman 7'
  },
  {
    id: 5,
    pertanyaan: 'Kasus Naqa: Tanggal 1–7 keluar darah, tanggal 8–12 darah berhenti (5 hari jeda), tanggal 13–15 darah keluar lagi, tanggal 16 bersih total. Apakah hukum masa jeda tanggal 8–12?',
    pilihan: [
      'Masa suci penuh dan wajib shalat',
      'Dihukumi sebagai haid karena seluruh rangkaiannya (15 hari) tidak melampaui batas maksimal haid',
      'Hari 8–10 haid, hari 11–12 suci',
      'Istihadhah penyempurna suci'
    ],
    jawabanBenar: 1,
    penjelasan: 'Karena total darah memenuhi minimal 24 jam dan seluruh rentang (tgl 1 s.d. 15 = 15 hari) tidak melebihi batas maksimal 15 hari, maka masa jeda (naqa) tetap dihukumi haid.',
    referensiHalaman: 'Halaman 9'
  },
  {
    id: 6,
    pertanyaan: 'Kasus: Tanggal 1–8 keluar darah (8 hari), tanggal 9–13 darah berhenti (5 hari), tanggal 14–18 keluar darah lagi (5 hari). Total rangkaian 18 hari. Bagaimanakah status masa jeda 5 hari tersebut?',
    pilihan: [
      'Tetap dihukumi haid',
      'Dihukumi masa suci, karena total rangkaian dari awal sampai akhir (18 hari) melampaui batas maksimal haid 15 hari',
      'Dihukumi istihadhah selama 5 hari',
      'Gugur kewajiban shalatnya'
    ],
    jawabanBenar: 1,
    penjelasan: 'Karena rangkaian melampaui batas maksimal 15 hari (8 + 5 + 5 = 18 hari), naqa di tengah TIDAK DAPAT dihukumi haid, melainkan dihukumi sebagai MASA SUCI.',
    referensiHalaman: 'Halaman 10–11'
  },
  {
    id: 7,
    pertanyaan: 'Berapakah durasi batas minimal masa suci pemisah antara dua masa haid dalam mazhab Syafi\'i?',
    pilihan: [
      '7 hari',
      '10 hari',
      '15 hari',
      '21 hari'
    ],
    jawabanBenar: 2,
    penjelasan: 'Minimal masa suci antara dua haid adalah 15 hari 15 malam. Jika darah baru muncul sebelum genap 15 hari suci, darah tersebut dihukumi istihadhah penyempurna masa suci.',
    referensiHalaman: 'Halaman 11–12'
  },
  {
    id: 8,
    pertanyaan: 'Kasus: Haid pertama 7 hari, lalu berhenti selama 12 hari. Setelah itu darah keluar lagi selama 9 hari. Bagaimanakah status 3 hari pertama dari darah kedua?',
    pilihan: [
      'Langsung dihukumi haid baru',
      'Istihadhah penyempurna masa suci (baqiyatut thur)',
      'Nifas yang tertunda',
      'Darah haid terpotong'
    ],
    jawabanBenar: 1,
    penjelasan: 'Masa suci baru berlangsung 12 hari (kurang 3 hari dari 15 hari). Maka 3 hari pertama dari darah kedua dihukumi istihadhah penyempurna masa suci. Setelah genap 15 hari suci, sisa 6 hari berikutnya baru sah menjadi haid baru.',
    referensiHalaman: 'Halaman 52'
  },
  {
    id: 9,
    pertanyaan: 'Berapakah durasi maksimal masa nifas dalam mazhab Syafi\'i?',
    pilihan: [
      '40 hari',
      '45 hari',
      '60 hari',
      'Tidak ada batas maksimal'
    ],
    jawabanBenar: 2,
    penjelasan: 'Dalam mazhab Syafi\'i, durasi maksimal nifas adalah 60 hari (kebiasaannya 40 hari). Darah pada hari ke-61 tanpa jeda dihukumi istihadhah.',
    referensiHalaman: 'Halaman 38 & 53'
  },
  {
    id: 10,
    pertanyaan: 'Seorang perempuan hamil mengeluarkan darah dari vagina saat janin masih di dalam rahim. Menurut pendapat yang dipakai dalam materi saat ini (mempertimbangkan medis & hadits thalaq), darah tersebut dihukumi...',
    pilihan: [
      'Darah nifas dini',
      'Darah istihadhah (tetap wajib shalat dan berpuasa)',
      'Darah haid mutlak tanpa syarat',
      'Darah wiladah'
    ],
    jawabanBenar: 1,
    penjelasan: 'Meskipun mazhab Syafi\'i klasik memiliki pendapat mu\'tamad membolehkan haid saat hamil bila ≥ 24 jam, fatwa yang dipegang materi saat ini sejalan dengan Hanafi, kedokteran medis, dan sabda Nabi kepada Ibnu Umar bahwa perempuan hamil berstatus istihadhah (tetap shalat & puasa).',
    referensiHalaman: 'Halaman 35–36'
  },
  {
    id: 11,
    pertanyaan: 'Manakah yang BUKAN merupakan salah satu dari 4 syarat tamyiz (pembedaan darah kuat & lemah)?',
    pilihan: [
      'Darah kuat tidak boleh kurang dari 24 jam',
      'Darah kuat tidak boleh melebihi 15 hari',
      'Darah yang lemah harus selalu keluar terlebih dahulu mendahului darah kuat',
      'Darah lemah tidak boleh berselang-seling dengan darah kuat (harus diawali darah paling kuat)'
    ],
    jawabanBenar: 2,
    penjelasan: 'Syarat tamyiz justru mewajibkan darah kuat KELUAR DI AWAL. Jika darah yang keluar di awal adalah darah lemah (misal Cokelat → Hitam), maka tamyiz gugur (ghairu mumayyizah).',
    referensiHalaman: 'Halaman 53–55'
  },
  {
    id: 12,
    pertanyaan: 'Kasus Mu\'tadah Mumayyizah: Memiliki kebiasaan haid 8 hari. Di bulan ini darah keluar 27 hari (12 hari hitam, 15 hari coklat). Berapakah hari yang dihukumi haid?',
    pilihan: [
      '8 hari sesuai kebiasaan lama',
      '12 hari darah hitam, karena kaidah tamyiz mengalahkan kebiasaan adat',
      '15 hari batas maksimal haid',
      '1 hari 1 malam saja'
    ],
    jawabanBenar: 1,
    penjelasan: 'Dalam fiqih istihadhah, tamyiz mengalahkan adat. Karena ia mampu membedakan darah secara tamyiz dan darah hitamnya memenuhi syarat (12 hari ≤ 15 hari), maka 12 hari hitam dihukumi haid.',
    referensiHalaman: 'Halaman 57–58'
  },
  {
    id: 13,
    pertanyaan: 'Apakah perempuan haid boleh melafalkan ayat Al-Qur\'an dalam mazhab Syafi\'i?',
    pilihan: [
      'Boleh secara mutlak baik niat tilawah maupun dzikir',
      'Haram secara mutlak walaupun untuk berdoa atau berzikir',
      'Haram jika berniat tilawah/qira\'ah, namun boleh jika berniat zikir, perlindungan, belajar tahsin, atau muraja\'ah',
      'Hanya boleh jika berbisik di dalam hati'
    ],
    jawabanBenar: 2,
    penjelasan: 'Pembedanya adalah NIAT: berniat tilawah diharamkan mutlak (meski 1 ayat/huruf), namun berniat doa, zikir (Bismillah, Ayat Kursi, doa bepergian), atau belajar tahsin/hafalan diperbolehkan.',
    referensiHalaman: 'Halaman 13–14'
  },
  {
    id: 14,
    pertanyaan: 'Bagaimanakah status cairan madzi dan mani dalam tinjauan najis serta kewajiban bersucinya?',
    pilihan: [
      'Mani najis dan wajib mandi; madzi suci dan cukup wudhu',
      'Mani suci dan wajib mandi besar; madzi najis dan membatalkan wudhu (cukup wudhu)',
      'Keduanya najis dan wajib mandi besar',
      'Keduanya suci dan tidak membatalkan wudhu'
    ],
    jawabanBenar: 1,
    penjelasan: 'Mani berstatus SUCI (tidak menajiskan sprei/baju) namun mewajibkan mandi besar. Madzi berstatus NAJIS dan membatalkan wudhu, tetapi tidak mewajibkan mandi besar.',
    referensiHalaman: 'Halaman 40–42'
  },
  {
    id: 15,
    pertanyaan: 'Apakah rukun (kewajiban mutlak) mandi besar menurut kitab Safinatun Naja dan Fathul Qarib?',
    pilihan: [
      'Keramas dengan sampo dan sabun',
      'Niat bersamaan dengan air pertama membasahi tubuh, serta meratakan air ke seluruh permukaan kulit dan helai rambut',
      'Membasuh 3 kali sisi kanan dan 3 kali sisi kiri',
      'Berwudhu sebelum mandi dan berwudhu setelah mandi'
    ],
    jawabanBenar: 1,
    penjelasan: 'Rukun mandi besar hanya ada dua: (1) Niat di dalam hati saat air pertama dialirkan ke tubuh, dan (2) Mengalirkan air mutlak ke seluruh tubuh tanpa terlewat. Sabun, sampo, dan urutan 3x adalah sunnah.',
    referensiHalaman: 'Halaman 46–47'
  },
  {
    id: 16,
    pertanyaan: 'Saat sahur Ramadhan jam 04.00 seseorang mendapati darah haidnya telah bersih total, sedangkan azan Subuh jam 04.30. Apakah yang harus didahulukan?',
    pilihan: [
      'Wajib mandi besar dahulu; jika tidak sempat sahur puasanya batal',
      'Dahulukan santap sahur dan berniat puasa, mandi besar bisa dilakukan setelah azan Subuh untuk shalat Subuh',
      'Puasanya tidak sah karena harus mandi sebelum fajar terbit',
      'Harus tayamum sebelum sahur'
    ],
    jawabanBenar: 1,
    penjelasan: 'Mandi besar BUKAN syarat sah puasa. Syarat sah puasa adalah tubuh telah suci dari darah haid sebelum waktu Subuh. Oleh karena itu, dahulukan sahur dan niat puasa, lalu mandi besar untuk shalat Subuh.',
    referensiHalaman: 'Halaman 50'
  }
];
