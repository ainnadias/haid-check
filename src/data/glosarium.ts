import { TermDefinition } from '../types';

export const GLOSARIUM_DATA: TermDefinition[] = [
  {
    istilah: 'Haid',
    arab: 'حَيْض',
    transliterasi: 'Ḥaiḍ',
    definisiSingkat: 'Darah alami yang keluar dari pangkal rahim perempuan dalam keadaan sehat pada waktu tertentu.',
    penjelasanLengkap: 'Secara bahasa berarti mengalir. Bukan darah luka atau penyakit, dan terjadi setelah mencapai usia baligh minimal sekitar 9 tahun Hijriah. Minimal 24 jam akumulasi dan maksimal 15 hari 15 malam.',
    kategori: 'dasar'
  },
  {
    istilah: 'Istihadhah',
    arab: 'اِسْتِحَاضَة',
    transliterasi: 'Istiḥāḍah',
    definisiSingkat: 'Darah penyakit yang keluar di luar waktu haid dan nifas.',
    penjelasanLengkap: 'Keluarnya darah yang tidak memenuhi kriteria haid (misal: kurang dari 24 jam, melebihi 15 hari, keluar sebelum usia 9 tahun Hijriah, atau sebelum terpenuhi 15 hari masa suci). Sifatnya daimul hadas, tetap wajib shalat dan puasa.',
    kategori: 'istihadhah'
  },
  {
    istilah: 'Nifas',
    arab: 'نِفَاس',
    transliterasi: 'Nifās',
    definisiSingkat: 'Darah yang keluar setelah proses melahirkan (atau keguguran janin).',
    penjelasanLengkap: 'Darah yang keluar setelah keluarnya janin. Durasi maksimal nifas dalam mazhab Syafi\'i adalah 60 hari. Darah kontraksi sebelum bayi lahir bukan nifas melainkan istihadhah.',
    kategori: 'dasar'
  },
  {
    istilah: 'Naqa\'',
    arab: 'نَقَاء',
    transliterasi: 'Naqā\'',
    definisiSingkat: 'Masa jeda berhentinya darah di antara dua waktu keluarnya darah.',
    penjelasanLengkap: 'Darah berhenti di tengah-tengah rentang. Bisa dihukumi sebagai haid (jika total darah ≥ 24 jam dan seluruh rangkaian ≤ 15 hari) atau dihukumi sebagai masa suci jika melampaui 15 hari.',
    kategori: 'suci'
  },
  {
    istilah: 'Tamyiz',
    arab: 'تَمْيِيز',
    transliterasi: 'Tamyīz',
    definisiSingkat: 'Kemampuan membedakan karakteristik dan kekuatan darah.',
    penjelasanLengkap: 'Pembedaan darah berdasarkan warna (Hitam > Merah > Coklat > Kuning > Keruh), kekentalan (kental/bergumpal > agak kental > encer), dan bau (amis/anyir > tidak terlalu amis > tidak amis).',
    kategori: 'istihadhah'
  },
  {
    istilah: 'Mumayyizah',
    arab: 'مُمَيِّزَة',
    transliterasi: 'Mumayyizah',
    definisiSingkat: 'Perempuan yang mampu membedakan warna dan kekuatan darah serta memenuhi 4 syarat tamyiz.',
    penjelasanLengkap: 'Perempuan yang mengalami istihadhah namun darah kuatnya memenuhi syarat (≥ 24 jam, ≤ 15 hari, diawali darah kuat, dan darah lemah memenuhi ketentuan). Darah kuat dihukumi haid, darah lemah dihukumi istihadhah.',
    kategori: 'istihadhah'
  },
  {
    istilah: 'Ghairu Mumayyizah',
    arab: 'غَيْرُ مُمَيِّزَة',
    transliterasi: 'Ghairu Mumayyizah',
    definisiSingkat: 'Perempuan yang tidak dapat membedakan darah atau syarat tamyiznya tidak terpenuhi.',
    penjelasanLengkap: 'Misalnya warna darah seragam sepanjang waktu, atau darah kuat kurang dari 24 jam / lebih dari 15 hari, atau berpola selang-seling.',
    kategori: 'istihadhah'
  },
  {
    istilah: 'Mubtada\'ah',
    arab: 'مُبْتَدَأَة',
    transliterasi: 'Mubtada\'ah',
    definisiSingkat: 'Perempuan yang baru pertama kali mengalami haid dalam hidupnya.',
    penjelasanLengkap: 'Belum memiliki riwayat siklus/adat kebiasaan haid pada bulan-bulan sebelumnya.',
    kategori: 'dasar'
  },
  {
    istilah: 'Mu\'tadah',
    arab: 'مُعْتَادَة',
    transliterasi: 'Mu\'tādah',
    definisiSingkat: 'Perempuan yang sudah pernah mengalami haid sebelumnya dan memiliki pola/adat kebiasaan.',
    penjelasanLengkap: 'Telah memiliki kebiasaan berapa hari biasanya ia mengalami haid dan masa suci.',
    kategori: 'dasar'
  },
  {
    istilah: 'Baqiyatut Thur',
    arab: 'بَقِيَّةُ الطُّهْر',
    transliterasi: 'Baqiyyat al-Ṭuhr',
    definisiSingkat: 'Istihadhah penyempurna masa suci minimal 15 hari.',
    penjelasanLengkap: 'Jika darah baru keluar sebelum genap 15 hari masa suci dari haid sebelumnya, maka darah tersebut dihukumi istihadhah sampai kuota 15 hari masa suci terpenuhi.',
    kategori: 'suci'
  },
  {
    istilah: 'Daimul Hadas',
    arab: 'دَائِمُ الْحَدَث',
    transliterasi: 'Dā\'im al-Ḥadath',
    definisiSingkat: 'Kondisi seseorang yang hadasnya keluar terus-menerus secara berkesinambungan.',
    penjelasanLengkap: 'Seperti perempuan mustahadhah atau orang beser. Tetap wajib shalat dengan tata cara wudhu khusus (bersihkan, sumbat kapas, pakai pembalut baru, wudhu setelah masuk waktu shalat, dan 1 wudhu untuk 1 shalat fardhu).',
    kategori: 'istihadhah'
  },
  {
    istilah: 'Al-Qashshah Al-Baidha\'',
    arab: 'الْقَصَّةُ الْبَيْضَاء',
    transliterasi: 'Al-Qaṣṣah al-Bayḍā\'',
    definisiSingkat: 'Cairan putih pekat laksana kapur/putih susu yang keluar di akhir masa haid sebagai penanda suci.',
    penjelasanLengkap: 'Tanda suci bagi perempuan yang memang memiliki kebiasaan melihat cairan ini di akhir haidnya. Berbeda dengan keputihan abnormal karena tidak berbau busuk dan tidak gatal.',
    kategori: 'suci'
  },
  {
    istilah: 'Sufrah',
    arab: 'صُفْرَة',
    transliterasi: 'Ṣufrah',
    definisiSingkat: 'Cairan/darah yang berwarna kekuningan (cenderung coklat muda).',
    penjelasanLengkap: 'Tingkat kekuatan ke-4 dalam tangga warna darah haid. Selama keluar dalam rentang 15 hari dan bersambung dengan haid, tetap dihukumi sebagai darah haid.',
    kategori: 'dasar'
  },
  {
    istilah: 'Kudrah',
    arab: 'كُدْرَة',
    transliterasi: 'Kudrah',
    definisiSingkat: 'Cairan keruh atau flek kecokelatan kehitaman/kusam.',
    penjelasanLengkap: 'Tingkat kekuatan ke-5 (paling lemah). Dihukumi haid jika keluar dalam interval masa haid, namun tidak dianggap jika keluar setelah suci sempurna (hadits Ummu \'Athiyah).',
    kategori: 'dasar'
  },
  {
    istilah: 'Rutubatul Farj',
    arab: 'رُطُوبَةُ الْفَرْج',
    transliterasi: 'Ruṭūbat al-Farj',
    definisiSingkat: 'Cairan kewanitaan alami yang keluar tanpa sebab kelelahan atau rangsangan syahwat.',
    penjelasanLengkap: 'Dibedakan menjadi normal (fisiologis) dan abnormal (patologis). Jika normal dan keluar dari bagian luar / yang terjangkau istinja atau zakar mujami\' maka suci; jika dari rongga dalam tidak terjangkau maka najis; jika ragu dihukumi suci sebagai rukhsah kemudahan.',
    kategori: 'cairan'
  },
  {
    istilah: 'Madzi',
    arab: 'مَذْي',
    transliterasi: 'Mażī',
    definisiSingkat: 'Cairan putih keruh/bening dan encer yang keluar saat syahwat mulai terangsang.',
    penjelasanLengkap: 'Keluar saat foreplay, khayalan intim, atau rangsangan seksual awal. Hukumnya najis dan membatalkan wudhu, tetapi tidak mewajibkan mandi besar.',
    kategori: 'cairan'
  },
  {
    istilah: 'Wadi',
    arab: 'وَدْي',
    transliterasi: 'Wadī',
    definisiSingkat: 'Cairan putih, keruh, kental, dan bertekstur yang keluar setelah buang air kecil atau saat tubuh kelelahan/kedinginan.',
    penjelasanLengkap: 'Hukumnya najis dan membatalkan wudhu. Cukup dibasuh dan bersuci dengan wudhu, tidak wajib mandi besar.',
    kategori: 'cairan'
  },
  {
    istilah: 'Mani',
    arab: 'مَنِيّ',
    transliterasi: 'Manī',
    definisiSingkat: 'Cairan kental berwarna putih yang keluar saat puncak kenikmatan syahwat.',
    penjelasanLengkap: 'Memancar dengan dorongan nikmat, beraroma serbuk sari/adonan tepung, dan disusul rasa lemas. Hukum zatnya suci (tidak menajiskan sprei/pakaian), namun keluarnya mewajibkan mandi besar (hadas besar).',
    kategori: 'cairan'
  }
];
