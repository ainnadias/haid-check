export interface IstihadhahCategoryDetail {
  id: string;
  nama: string;
  arab: string;
  tipe: 'mubtadaah' | 'mutadah' | 'khusus';
  apakahTamyiz: boolean;
  deskripsi: string;
  kaidahHukum: string;
  contohKasusPdf: {
    judul: string;
    skenario: string;
    hitungDanSolusi: string;
    qadhaShalat: string;
  }[];
}

export const ISTIHADHAH_CATEGORIES: IstihadhahCategoryDetail[] = [
  {
    id: 'mubtadaah-mumayyizah',
    nama: '1. Al-Mubtada\'ah Al-Mumayyizah',
    arab: 'المبتدأة المميزة',
    tipe: 'mubtadaah',
    apakahTamyiz: true,
    deskripsi: 'Perempuan yang baru PERTAMA KALI mengalami haid dalam hidupnya, darahnya langsung melebihi 15 hari, namun ia MAMPU MEMBEDAKAN kekuatan/warna darahnya serta memenuhi 4 syarat tamyiz.',
    kaidahHukum: 'Darah kuat (qawi) dihukumi sebagai HAID. Darah lemah (dha\'if) dihukumi sebagai ISTIHADHAH.',
    contohKasusPdf: [
      {
        judul: 'Kasus 1: Anak Kelas 5 Haid 20 Hari (Hitam & Coklat)',
        skenario: 'Pertama kali haid, darah keluar 20 hari berturut-turut. Rincian: 13 hari darah hitam, lalu 7 hari darah cokelat.',
        hitungDanSolusi: 'Karena mampu membedakan warna dan darah hitam (kuat) memenuhi syarat (13 hari ≤ 15 hari dan ≥ 24 jam), maka: 13 hari darah hitam = HAID, 7 hari darah cokelat = ISTIHADHAH.',
        qadhaShalat: 'Pada hari ke-14 wajib langsung mandi besar dan mulai shalat.'
      },
      {
        judul: 'Kasus 2: 3 Warna Darah Total 20 Hari (8 Hitam + 7 Merah + 5 Coklat)',
        skenario: 'Darah 20 hari: 8 hari hitam, 7 hari merah, 5 hari cokelat.',
        hitungDanSolusi: 'Jumlahkan darah hitam dan merah: 8 + 7 = 15 hari. Karena total darah kuat tersebut pas 15 hari (tidak melebihi batas maksimal haid), maka keduanya dihukumi haid. Hasil: 15 hari pertama (8 hitam + 7 merah) = HAID, 5 hari cokelat = ISTIHADHAH.',
        qadhaShalat: 'Mandi besar di hari ke-16, shalat hari 16–20 sah sebagai istihadhah.'
      },
      {
        judul: 'Kasus 3: 10 Hitam + 7 Merah + 3 Coklat',
        skenario: 'Darah 20 hari: 10 hari hitam, 7 hari merah, 3 hari cokelat.',
        hitungDanSolusi: 'Jumlahkan darah hitam dan merah: 10 + 7 = 17 hari (> 15 hari batas maksimal). Maka darah merah TIDAK DAPAT mengikuti darah hitam sebagai haid. Hasil: 10 hari hitam saja = HAID, sisanya (7 merah + 3 coklat = 10 hari) = ISTIHADHAH.',
        qadhaShalat: 'Wajib qadha shalat yang ditinggalkan pada hari ke-11 sampai ke-15.'
      }
    ]
  },
  {
    id: 'mubtadaah-ghairu-mumayyizah',
    nama: '2. Al-Mubtada\'ah Ghairu Mumayyizah',
    arab: 'المبتدأة غير المميزة',
    tipe: 'mubtadaah',
    apakahTamyiz: false,
    deskripsi: 'Perempuan yang baru PERTAMA KALI haid, darahnya keluar melebihi 15 hari, dan TIDAK MAMPU membedakan warna darah (darah satu warna homogen terus-menerus) atau TIDAK MEMENUHI 4 syarat tamyiz.',
    kaidahHukum: 'Dalam kitab Al-Ibanah wal Ifadah: Darah yang dihukumi haid adalah 1 HARI 1 MALAM (24 jam). Sisanya seluruhnya dihukumi istihadhah.',
    contohKasusPdf: [
      {
        judul: 'Kasus: Darah Keluar 20 Hari Satu Warna',
        skenario: 'Remaja perempuan baru pertama kali haid, darah merah keluar terus selama 20 hari tanpa ada perubahan warna atau tidak dicatat karakternya.',
        hitungDanSolusi: 'Karena belum memiliki adat dan tidak ada tamyiz, maka: Hari ke-1 (24 jam pertama) = HAID. Hari ke-2 sampai hari ke-20 (19 hari) = ISTIHADHAH.',
        qadhaShalat: 'Wajib mengqadha shalat hari ke-2 sampai hari ke-15 yang sempat ditinggalkan karena mengira sedang haid.'
      }
    ]
  },
  {
    id: 'mutadah-mumayyizah',
    nama: '3. Al-Mu\'tadah Al-Mumayyizah',
    arab: 'المعتادة المميزة',
    tipe: 'mutadah',
    apakahTamyiz: true,
    deskripsi: 'Perempuan yang SUDAH PERNAH haid sebelumnya (punya kebiasaan/adat), lalu mengalami istihadhah dan MAMPU membedakan warna darah secara tamyiz.',
    kaidahHukum: 'TAMYIZ MENGALAHKAN ADAT. Darah kuat dihukumi haid meskipun durasinya melebihi kebiasaan bulan sebelumnya. Darah lemah dihukumi istihadhah.',
    contohKasusPdf: [
      {
        judul: 'Kasus: Adat 8 Hari, Darah Keluar 27 Hari',
        skenario: 'Biasanya haid 8 hari. Di bulan tertentu darah keluar 27 hari: 12 hari hitam, lalu 15 hari cokelat.',
        hitungDanSolusi: 'Meskipun adatnya 8 hari, karena ia dapat membedakan darah secara tamyiz, maka hukum mengikuti tamyiz: 12 hari hitam = HAID (masih ≤ 15 hari). 15 hari cokelat = ISTIHADHAH.',
        qadhaShalat: 'Mandi besar pada hari ke-13 dan mulai shalat.'
      }
    ]
  },
  {
    id: 'kuat-diikuti-lemah',
    nama: '4. Darah Kuat Diikuti Darah Lemah (≤ 15 Hari)',
    arab: 'الدم القوي يتبعه الضعيف',
    tipe: 'khusus',
    apakahTamyiz: true,
    deskripsi: 'Pola darah berurutan dari darah kuat lalu beralih ke darah lemah. Rumus fiqih: Kuat + Lemah dapat digabung menjadi haid selama total keduanya ≤ 15 hari.',
    kaidahHukum: 'Darah kuat + darah lemah pertama = HAID (selama ≤ 15 hari). Darah yang melebihi 15 hari atau darah yang lebih lemah berikutnya = ISTIHADHAH.',
    contohKasusPdf: [
      {
        judul: 'Kasus: 8 Hari Hitam + 5 Hari Merah + 5 Hari Coklat (Total 18 Hari)',
        skenario: 'Hitam (kuat) 8 hari, Merah (lemah) 5 hari, Coklat (lebih lemah) 5 hari. Total = 18 hari.',
        hitungDanSolusi: 'Hitung darah kuat + lemah: 8 + 5 = 13 hari (tidak lebih dari 15 hari). Maka: 8 hari hitam + 5 hari merah = 13 hari HAID. Sisanya 5 hari cokelat = ISTIHADHAH.',
        qadhaShalat: 'Istihadhah dimulai hari ke-14. Jika ia baru mandi di hari ke-15 karena mengira masih haid, maka shalat hari ke-14 wajib diqadha!'
      }
    ]
  },
  {
    id: 'tiga-tingkat-kekuatan',
    nama: '5. Darah Kuat → Lebih Lemah → Lemah (Khilaf Ramli vs Ibnu Hajar)',
    arab: 'قوي ثم أضعف ثم ضعيف',
    tipe: 'khusus',
    apakahTamyiz: true,
    deskripsi: 'Darah turun bertingkat: Kuat → Lebih Lemah → Lemah. Terjadi perbedaan fatwa antara dua rujukan agung mazhab Syafi\'i: Imam Ramli dan Ibnu Hajar al-Haitami.',
    kaidahHukum: '• Imam Ramli: Hanya darah paling kuat yang dihukumi haid.\n• Ibnu Hajar al-Haitami: Darah kuat + darah lebih lemah digabung menjadi haid (selama ≤ 15 hari). Kedua pendapat boleh diamalkan.',
    contohKasusPdf: [
      {
        judul: 'Kasus: 6 Hari Merah + 4 Hari Kuning + 7 Hari Coklat (Total 17 Hari)',
        skenario: 'Urutan: Merah (kuat) 6 hari, Kuning (lebih lemah) 4 hari, Coklat (paling lemah) 7 hari.',
        hitungDanSolusi: '• Menurut Imam Ramli: 6 hari merah = HAID. 11 hari (4 kuning + 7 coklat) = ISTIHADHAH (mulai hari ke-7).\n• Menurut Ibnu Hajar: 6 merah + 4 kuning = 10 hari HAID (karena ≤ 15 hari). 7 hari coklat = ISTIHADHAH (mulai hari ke-11).',
        qadhaShalat: 'Seseorang boleh memilih pendapat yang paling ringan untuk diamalkan sesuai kondisinya.'
      }
    ]
  },
  {
    id: 'didahului-darah-lemah',
    nama: '6. Darah Kuat yang Didahului Darah Lemah',
    arab: 'الدم الضعيف يسبق القوي',
    tipe: 'khusus',
    apakahTamyiz: true,
    deskripsi: 'Urutan terbalik: Darah Lemah keluar di awal → lalu Darah Kuat di tengah → lalu Darah Lemah lagi di akhir.',
    kaidahHukum: 'Jika darah lemah mendahului, maka yang dihukumi haid HANYA DARAH KUAT di tengah. Darah lemah di awal dan di akhir adalah istihadhah.',
    contohKasusPdf: [
      {
        judul: 'Kasus: 5 Hari Coklat + 7 Hari Merah + 5 Hari Coklat (Total 17 Hari)',
        skenario: 'Hari 1–5 coklat (lemah), Hari 6–12 merah (kuat), Hari 13–17 coklat (lemah). Total 17 hari.',
        hitungDanSolusi: 'Yang dihukumi haid HANYA 7 hari merah (hari 6–12). Tanggal 1–5 = ISTIHADHAH. Tanggal 13–17 = ISTIHADHAH.',
        qadhaShalat: 'Total 7 HARI SHALAT HARUS DIQADHA: Hari 1 sampai 5 (karena di awal ia sangka haid padahal istihadhah), serta hari 13 dan 14 (karena baru mandi hari 15).'
      }
    ]
  },
  {
    id: 'mutadah-ghairu-mumayyizah',
    nama: '7. Al-Mu\'tadah Ghairu Mumayyizah',
    arab: 'المعتادة غير المميزة',
    tipe: 'mutadah',
    apakahTamyiz: false,
    deskripsi: 'Perempuan yang SUDAH PERNAH haid sebelumnya, namun saat istihadhah ia TIDAK TAHU atau TIDAK BISA membedakan warna darahnya.',
    kaidahHukum: 'DIKEMBALIKAN KE ADAT BULAN SEBELUMNYA. Durasi haid disamakan dengan adat haid pada 1 bulan terakhir sebelum istihadhah terjadi. Sisanya istihadhah.',
    contohKasusPdf: [
      {
        judul: 'Kasus: Adat Bulan Juni 8 Hari, Bulan Juli Keluar Darah 20 Hari',
        skenario: 'Biasanya haid bervariasi (7, 8, atau 9 hari). Bulan Juni haidnya 8 hari. Pada bulan Juli tiba-tiba keluar 20 hari tanpa bisa dibedakan warnanya.',
        hitungDanSolusi: 'Haidnya disamakan dengan adat bulan sebelumnya (Juni): 8 hari pertama = HAID. Sisanya (20 - 8 = 12 hari) = ISTIHADHAH.',
        qadhaShalat: 'Wajib mengqadha shalat hari ke-9 sampai hari ke-15 yang sempat ditinggalkan.'
      }
    ]
  }
];
