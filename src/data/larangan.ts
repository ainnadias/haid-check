export interface LaranganItem {
  id: string;
  nama: string;
  kategori: 'hadas-besar' | 'khusus-haid';
  hukum: 'Haram Mutlak' | 'Rincian / Khilaf' | 'Boleh dengan Syarat';
  ringkasan: string;
  penjelasanPdf: string;
  pengecualianAtauRincian?: string[];
  rujukanKitab?: string;
}

export const LARANGAN_DATA: LaranganItem[] = [
  {
    id: 'shalat',
    nama: 'Shalat (Fardhu & Sunnah)',
    kategori: 'hadas-besar',
    hukum: 'Haram Mutlak',
    ringkasan: 'Dilarang mengerjakan semua bentuk shalat fardhu dan sunnah, serta sujud tilawah dan sujud syukur.',
    penjelasanPdf: 'Orang yang berhadas besar tidak diperbolehkan melakukan shalat. Larangan ini mencakup ibadah yang memiliki makna atau bentuk yang berkaitan dengan shalat. Meninggalkan shalat saat haid adalah bentuk ketaatan kepada Allah.',
    rujukanKitab: 'Fathul Qarib al-Mujib'
  },
  {
    id: 'baca-quran',
    nama: 'Membaca Al-Qur\'an',
    kategori: 'hadas-besar',
    hukum: 'Rincian / Khilaf',
    ringkasan: 'Haram jika diniatkan tilawah/qira\'ah. Boleh jika niat dzikir, perlindungan, belajar tahsin, atau muraja\'ah.',
    penjelasanPdf: 'Dalam mazhab Syafi\'i, perempuan haid dilarang membaca atau melantunkan Al-Qur\'an dengan niat tilawah (meskipun hanya 1 huruf atau 1 ayat, suara keras maupun pelan). Yang menjadi pembeda adalah niat saat membaca.',
    pengecualianAtauRincian: [
      'Boleh berniat dzikir/doa: Bismillah, Alhamdulillah, Rabbana atina fid-dunya..., Rabbana hablana min azwajina...',
      'Boleh berniat perlindungan: Surah Al-Mulk, Ayat Kursi, Mu\'awwidzatain.',
      'Boleh untuk kegiatan belajar: Belajar tahsin, muraja\'ah hafalan, dan menambah setoran (ziyadah) selama niatnya belajar bukan tilawah.',
      'Tilawah Ramadan yang terputus haid: Tidak boleh dilanjutkan dengan niat tilawah; gantilah dengan mendengarkan murattal atau zikir.'
    ],
    rujukanKitab: 'Fathul Qarib & Al-Ibanah'
  },
  {
    id: 'pegang-mushaf',
    nama: 'Memegang & Membawa Mushaf',
    kategori: 'hadas-besar',
    hukum: 'Rincian / Khilaf',
    ringkasan: 'Haram menyentuh mushaf fisik. HP/tablet dan buku tafsir dominan terjemah diperbolehkan.',
    penjelasanPdf: 'Dilarang memegang atau membawa mushaf Al-Qur\'an fisik, termasuk sampul yang masih melekat erat pada mushaf.',
    pengecualianAtauRincian: [
      'Al-Qur\'an di Smartphone: Boleh disentuh dan digulir langsung layarnya tanpa lapis kain, karena HP tidak dihukumi sebagai mushaf.',
      'Mushaf Terjemah / Tafsir: Boleh disentuh jika tulisan terjemah/tafsirnya lebih dominan daripada teks Arab Al-Qur\'annya.',
      'Sampul yang sudah lepas: Terjadi khilaf ulama. Ibnu Hajar al-Haitami membolehkan memegang sampul yang sudah lepas, sedangkan Imam ar-Ramli tetap melarangnya selama masih berfungsi sebagai sampul mushaf.'
    ],
    rujukanKitab: 'Fathul Qarib & Tuhfatul Muhtaj'
  },
  {
    id: 'tawaf',
    nama: 'Tawaf di Ka\'bah',
    kategori: 'hadas-besar',
    hukum: 'Haram Mutlak',
    ringkasan: 'Dilarang melakukan tawaf qudum, tawaf ifadhah, maupun tawaf wada\'.',
    penjelasanPdf: 'Tawaf mensyaratkan suci dari hadas besar dan hadas kecil sebagaimana halnya shalat, sehingga perempuan haid tidak sah tawafnya sampai suci dan mandi besar.',
    rujukanKitab: 'Fathul Qarib'
  },
  {
    id: 'berdiam-masjid',
    nama: 'Berdiam Diri di Masjid',
    kategori: 'hadas-besar',
    hukum: 'Rincian / Khilaf',
    ringkasan: 'Haram menetap/iktikaf walau sekejap. Boleh sekadar lewat/mengambil barang, atau berada di musala non-wakaf.',
    penjelasanPdf: 'Orang yang berhadas besar tidak diperbolehkan berdiam diri (al-muktsu) di masjid meskipun hanya sekejap (sebatas tuma\'ninah). Tidak sah iktikaf bagi perempuan haid.',
    pengecualianAtauRincian: [
      'Sekadar lewat / mengambil barang: Boleh (sebagaimana hadits Rasulullah ﷺ meminta Aisyah mengambil penutup kepala/khumrah di masjid, seraya bersabda "Haidmu bukan di tanganmu").',
      'Masjid vs Musala: Musala aula kantor/sekolah yang tidak diwakafkan secara khusus sebagai masjid syar\'i boleh ditempati oleh perempuan haid.',
      'Pendapat Imam Al-Muzani: Membolehkan masuk masjid menghadiri kajian ilmu yang sangat langka/terbatas dengan syarat aman tidak meneteskan darah dan darah tidak sedang deras.'
    ],
    rujukanKitab: 'Fathul Qarib & Mukhtashar Al-Muzani'
  },
  {
    id: 'puasa',
    nama: 'Berpuasa (Ramadhan & Sunnah)',
    kategori: 'khusus-haid',
    hukum: 'Haram Mutlak',
    ringkasan: 'Haram berpuasa dan wajib mengqadha hari yang ditinggalkan setelah suci.',
    penjelasanPdf: 'Perempuan haid dilarang berpuasa. Namun puasa wajib diqadha di kemudian hari. Mandi besar bukan syarat sah sahur/niat puasa; jika darah berhenti sebelum Subuh, langsung niat puasa dan sahur, mandinya bisa setelah Subuh.',
    rujukanKitab: 'Al-Ibanah wal Ifadah'
  },
  {
    id: 'jimak',
    nama: 'Berjimak (Penetrasi Suami-Istri)',
    kategori: 'khusus-haid',
    hukum: 'Rincian / Khilaf',
    ringkasan: 'Haram penetrasi vagina. Bercumbu di luar area keluarnya darah (dengan kain/sarung) diperbolehkan.',
    penjelasanPdf: 'Yang diharamkan adalah jimak berupa penetrasi ke dalam vagina (bahkan sentuhan labia bagian dalam). Islam tidak mengajarkan menjauhi seluruh tubuh istri seperti tradisi Yahudi.',
    pengecualianAtauRincian: [
      'Boleh bermesraan tanpa penetrasi: Berdasarkan hadits Aisyah r.a. bahwa Rasulullah ﷺ menyuruhnya mengenakan kain sarung, lalu beliau tetap bermesraan dengannya saat sedang haid (HR. Muslim).',
      'Setelah darah berhenti sebelum mandi: Istri WAJIB mandi besar terlebih dahulu sebelum boleh berjimak dengan suami.'
    ],
    rujukanKitab: 'Fathul Qarib & Shahih Muslim'
  },
  {
    id: 'talak',
    nama: 'Menceraikan Istri Saat Haid',
    kategori: 'khusus-haid',
    hukum: 'Haram Mutlak',
    ringkasan: 'Suami haram menjatuhkan talak bid\'i saat istri dalam keadaan haid.',
    penjelasanPdf: 'Menceraikan istri saat sedang haid dilarang dalam syariat Islam (talak bid\'i). Talak disyariatkan saat istri dalam keadaan suci yang belum dicampuri atau saat sedang hamil.',
    rujukanKitab: 'Hadits Riwayat Umar bin Khattab r.a.'
  }
];
