import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    sesi: 1,
    nomor: 1,
    pertanyaan: 'Bagaimana jika haid berhenti ketika masih berada di tempat kerja atau sekolah sehingga tidak memungkinkan mandi besar? Bagaimana cara menyucikan diri dan bagaimana dengan shalat yang terlewat?',
    jawaban: 'Menurut pendapat mu\'tamad Imam Nawawi, ketika sudah yakin haid berhenti, mandi besar harus segera dilakukan. Namun bila kondisi fisik tidak memungkinkan (misalnya tidak ada kamar mandi yang layak atau aman di kantor/sekolah), mandi boleh ditunda sampai tiba di rumah. Catat waktu yakin berhentinya darah (misalnya saat Zuhur). Sesampainya di rumah saat Magrib, segera mandi besar, laksanakan shalat Magrib ada\'an, lalu langsung mengqadha shalat Zuhur dan Asar yang terlewat.',
    kategori: 'mandi',
    kataKunci: ['kantor', 'sekolah', 'tunda mandi', 'qadha shalat', 'zuhur asar']
  },
  {
    id: 2,
    sesi: 1,
    nomor: 2,
    pertanyaan: 'Jika darah haid keluar pada pukul 12.30 padahal waktu Zuhur masuk 11.40 dan belum shalat, apakah setelah suci nanti harus mengqadha shalat Zuhur?',
    jawaban: 'Ya, wajib diqadha. Pada dasarnya kewajiban shalat gugur saat haid. Namun jika waktu shalat telah masuk dan terdapat jeda waktu yang cukup untuk wudhu dan shalat (pukul 11.40 ke 12.30 adalah 50 menit), tetapi shalat ditunda-tunda karena kelalaian, maka shalat Zuhur tersebut menjadi utang yang wajib diqadha setelah suci. Berbeda jika baru azan berkumandang seseorang langsung berwudhu lalu darah keluar, maka tidak ada kewajiban qadha karena waktu yang tersedia belum mencukupi.',
    kategori: 'shalat',
    kataKunci: ['lalai', 'qadha zuhur', 'menunda shalat', 'waktu cukup']
  },
  {
    id: 3,
    sesi: 1,
    nomor: 3,
    pertanyaan: 'Jika sudah sempat keluar cairan putih agak bening, kemudian setelah itu keluar lagi flek cokelat, apakah flek tersebut sudah bukan haid?',
    jawaban: 'Perhatikan kebiasaan (adat) yang berulang minimal 3 kali. Jika pola ini baru terjadi pertama kali (keluar cairan putih, lalu sedikit flek cokelat sesaat kemudian bersih total), flek tersebut dapat diabaikan karena cairan putih sudah menjadi penanda suci. Namun jika setelah cairan putih ternyata flek cokelat terus keluar dalam jumlah cukup banyak dan masih dalam batas interval 15 hari, maka cairan tersebut tetap dihukumi haid. Jika sudah terlanjur mandi besar, maka mandinya wajib diulang setelah flek benar-benar tuntas.',
    kategori: 'cairan',
    kataKunci: ['cairan putih', 'flek cokelat', 'ulangi mandi', '15 hari']
  },
  {
    id: 4,
    sesi: 1,
    nomor: 4,
    pertanyaan: 'Bagaimana hukum mengonsumsi obat penunda haid ketika sedang menunaikan ibadah haji atau umrah?',
    jawaban: 'Pada dasarnya diperbolehkan dengan dua syarat mutlak: (1) Telah berkonsultasi dengan dokter spesialis untuk memastikan keamanan obat bagi tubuh, dan (2) Tidak digunakan terlalu sering atau terus-menerus setiap tahun karena dikhawatirkan mengganggu keseimbangan hormon tubuh. Materi ini merujuk fatwa Darul Ifta Mesir: jika penggunaan obat medis tersebut menimbulkan mudarat bagi fisik pemakainya, maka hukumnya berubah menjadi haram.',
    kategori: 'medis',
    kataKunci: ['obat penunda haid', 'umrah', 'haji', 'darul ifta mesir', 'dokter']
  },
  {
    id: 5,
    sesi: 1,
    nomor: 5,
    pertanyaan: 'Bagaimana jika seseorang sedang dalam pengobatan dokter dan mengalami perdarahan terus-menerus hingga 2 bulan? Kapan dihukumi haid dan kapan istihadhah?',
    jawaban: 'Kondisi ini masuk bab istihadhah. Langkah pertama: gunakan metode tamyiz bila masih bisa membedakan warna dan sifat darah (darah yang lebih kuat = haid, darah lebih lemah = istihadhah). Jika warna darah seragam atau tidak bisa dibedakan karakternya, kembalilah kepada kebiasaan/adat haid sebelum jatuh sakit. Misal sebelum sakit haidnya rutin 8 hari, maka 8 hari pertama dihukumi haid, sedangkan sisa perdarahan setelahnya adalah istihadhah. Ketentuan 8 hari haid ini berlaku berulang pada siklus bulan berikutnya.',
    kategori: 'tamyiz',
    kataKunci: ['perdarahan 2 bulan', 'pengobatan hormon', 'adat haid', 'tamyiz']
  },
  {
    id: 6,
    sesi: 1,
    nomor: 6,
    pertanyaan: 'Bolehkah menunda mandi wajib ketika suci di kantor saat Zuhur, lalu baru mandi di rumah saat Magrib? Apakah shalat Zuhur dan Asar harus diqadha?',
    jawaban: 'Boleh menunda mandi jika fasilitas di kantor memang tidak memadai untuk mandi besar secara sempurna. Namun waktu berhentinya darah wajib dicatat. Begitu sampai di rumah saat Magrib, segeralah mandi besar, laksanakan shalat Magrib terlebih dahulu dengan niat ada\'an, kemudian qadha shalat Zuhur dan Asar yang terlewat.',
    kategori: 'mandi',
    kataKunci: ['kantor', 'tunda mandi', 'qadha shalat', 'zuhur asar']
  },
  {
    id: 7,
    sesi: 1,
    nomor: 7,
    pertanyaan: 'Apakah perempuan haid boleh membaca Al-Qur\'an melalui aplikasi di smartphone (misal membaca Surah Yasin untuk keluarga yang sedang sekarat)?',
    jawaban: 'Memegang dan menyentuh layar smartphone yang menampilkan ayat Al-Qur\'an diperbolehkan tanpa alas kain, karena HP bukan mushaf fisik. Adapun melafalkan Surah Yasin, kuncinya ada pada niat: jika melafalkannya bukan dengan niat tilawah (melainkan berniat dzikir, doa kesembuhan, atau menemani keluarga), maka diperbolehkan. Namun bila ingin bersikap lebih berhati-hati (ihtiyath), cukup membaca terjemahannya atau memutar audio murottal.',
    kategori: 'masjid',
    kataKunci: ['quran di hp', 'surah yasin', 'niat zikir', 'mushaf']
  },
  {
    id: 8,
    sesi: 1,
    nomor: 8,
    pertanyaan: 'Bagaimana cara membedakan warna darah haid yang keruh dengan cairan putih sebagai tanda berhentinya haid?',
    jawaban: 'Bedakan dari dua segi: WARNA dan BAU. Cairan putih tanda suci berwarna putih susu atau putih tulang bersih, tidak bercampur semburat kuning atau cokelat, serta beraroma seperti keputihan normal atau adonan tepung tanpa bau amis darah. Sedangkan darah keruh (kudrah) masih memiliki residu semburat kecokelatan/kusam dan masih menyisakan aroma amis darah.',
    kategori: 'cairan',
    kataKunci: ['darah keruh', 'cairan putih', 'bau amis', 'tanda suci']
  },
  {
    id: 9,
    sesi: 1,
    nomor: 9,
    pertanyaan: 'Jika sedang haid, apakah boleh datang ke masjid untuk mendengarkan kajian umum?',
    jawaban: 'Menurut pendapat mu\'tamad mazhab Syafi\'i, orang berhadas besar dilarang berdiam diri di masjid. Namun terdapat pendapat dari Imam Al-Muzani (ulama besar mazhab Syafi\'i) yang membolehkan perempuan haid masuk masjid dengan syarat ketat: (1) Darah tidak sedang deras dan memakai pembalut rapat sehingga terjamin 100% tidak mengotori masjid, dan (2) Acara kajian bersifat istimewa/langka yang tidak bisa dihadiri di waktu suci. Jika diadakan di gedung aula serbaguna atau musala non-wakaf, hukumnya boleh mutlak.',
    kategori: 'masjid',
    kataKunci: ['masuk masjid', 'kajian', 'imam al-muzani', 'tidak mengotori']
  },
  {
    id: 10,
    sesi: 1,
    nomor: 10,
    pertanyaan: 'Mengapa dalam Islam perempuan haid tidak diperkenankan shalat? Apa hikmah syariatnya?',
    jawaban: 'Ibadah shalat dan puasa melibatkan gerakan fisik yang dapat membebani tubuh saat perempuan mengeluarkan darah. Namun alasan syar\'i yang hakiki adalah ketaatan kepada ketentuan Allah (ta\'abbudi). Ketaatan seorang hamba terwujud dalam dua hal: menjalankan perintah saat suci dan mematuhi larangan saat haid. Ketika perempuan haid tidak shalat demi menaati larangan Allah, ia justru berpahala atas ketaatannya tersebut.',
    kategori: 'shalat',
    kataKunci: ['hikmah', 'ketaatan', 'larangan shalat', 'taabbudi']
  },
  {
    id: 11,
    sesi: 1,
    nomor: 11,
    pertanyaan: 'Jika cairan yang keluar berwarna putih susu, apakah termasuk darah keruh atau tanda berhentinya haid?',
    jawaban: 'Cairan putih susu merupakan tanda suci (al-qashshah al-baidha\'). Pastikan baunya tidak amis darah dan warnanya putih merata tanpa semburat kuning atau cokelat.',
    kategori: 'cairan',
    kataKunci: ['putih susu', 'tanda suci', 'bukan keruh']
  },
  {
    id: 12,
    sesi: 1,
    nomor: 12,
    pertanyaan: 'Apakah harus menggunakan penghalang kain/sarung saat bermesraan ketika istri haid? Jika disentuh langsung pada bagian vagina tanpa penetrasi, apakah boleh?',
    jawaban: 'Jimak yang diharamkan secara tegas adalah penetrasi penis ke dalam liang vagina. Sentuhan di bagian luar diperbolehkan, namun jika sudah menyentuh lipatan labia bagian dalam meski belum penetrasi sempurna, ulama melarangnya demi mencegah terjadinya hubungan intim terlarang. Sangat dianjurkan mengikuti sunnah Rasulullah ﷺ yaitu mengenakan kain penutup/sarung di antara pusar dan lutut saat bermesraan.',
    kategori: 'mandi',
    kataKunci: ['sarung', 'bermesraan', 'penetrasi', 'labia', 'jimak']
  },
  {
    id: 13,
    sesi: 1,
    nomor: 13,
    pertanyaan: 'Apakah shalat qadha harus dilakukan pada waktu shalat yang sama (misal qadha Zuhur harus dikerjakan saat waktu Zuhur)?',
    jawaban: 'Tidak harus. Shalat qadha dapat dikerjakan kapan saja setelah suci. Contoh: seseorang memiliki utang shalat Zuhur dan baru sempat bersuci saat masuk waktu Asar. Ia boleh melaksanakan shalat Asar terlebih dahulu dengan niat ada\'an, kemudian langsung melaksanakan shalat Zuhur dengan niat qadha\'an tanpa perlu menunggu waktu Zuhur esok hari.',
    kategori: 'shalat',
    kataKunci: ['waktu qadha', 'shalat qadha', 'zuhur asar']
  },
  {
    id: 14,
    sesi: 1,
    nomor: 14,
    pertanyaan: 'Bagaimana jika seseorang mengalami bercak darah selama rentang 15 hari, tetapi total akumulasi durasinya kurang dari 24 jam?',
    jawaban: 'Darah tersebut TIDAK DIHUKUMI HAID, melainkan istihadhah (darah penyakit). Syarat sah haid dalam mazhab Syafi\'i adalah total waktu keluarnya darah minimal 24 jam. Jika total akumulasi kurang dari 24 jam, maka perempuan tersebut berstatus mustahadhah dan wajib mengqadha seluruh shalat yang sempat ditinggalkannya selama rentang hari tersebut.',
    kategori: 'tamyiz',
    kataKunci: ['kurang 24 jam', '15 hari', 'istihadhah', 'qadha seluruh shalat']
  },
  // Sesi 2
  {
    id: 15,
    sesi: 2,
    nomor: 1,
    pertanyaan: 'Haid berlangsung 36 hari (darah keluar campur istihadhah), lalu berhenti sejenak. Sebelum genap 15 hari suci, keluar darah lagi. Apakah darah tersebut haid baru atau istihadhah?',
    jawaban: 'Darah tersebut bisa dihukumi sebagai HAID BARU. Mengapa? Karena perempuan tersebut sebelumnya telah mengalami masa istihadhah yang panjang. Dalam fiqih, periode istihadhah berstatus suci secara hukum. Masa istihadhah tersebut sudah mencukupi dan menyempurnakan syarat minimal 15 hari masa suci, sehingga ketika darah keluar kembali setelah jeda, darah tersebut dapat menjadi haid baru tanpa harus menunggu jeda 15 hari lagi.',
    kategori: 'tamyiz',
    kataKunci: ['36 hari', 'istihadhah panjang', 'haid baru', 'masa suci genap']
  },
  {
    id: 16,
    sesi: 2,
    nomor: 2,
    pertanyaan: 'Saya mengalami keputihan di kantor dan celana terkena najis. Dokter tidak menyarankan memakai pantyliner karena memicu infeksi. Bagaimana cara bersuci sebelum shalat?',
    jawaban: 'Keputihan abnormal yang dihukumi najis wajib dibersihkan menggunakan AIR MUTLAK (tisu basah tidak sah menyucikan najis karena bukan air mutlak). Siapkan botol spray kecil berisi air bersih di tas untuk menyemprot dan membersihkan area yang terkena. Jika mengalami keputihan terus-menerus, ikuti tata cara daimul hadas: bersihkan kemaluan, basuh/lapisi dengan kain bersih, berwudhu setelah masuk waktu shalat, dan segera shalat tanpa menunda.',
    kategori: 'cairan',
    kataKunci: ['keputihan najis', 'tisu basah', 'spray air mutlak', 'daimul hadas']
  },
  {
    id: 17,
    sesi: 2,
    nomor: 3,
    pertanyaan: 'Jika dalam sebulan darah keluar dengan warna bervariasi, apakah setiap kali darah melewati 15 hari otomatis langsung dihukumi istihadhah? Jika darah berikutnya justru darah kuat?',
    jawaban: 'Kaidah penting: status darah sering kali baru bisa dipastikan setelah satu rangkaian siklus selesai teramati. Jika darah keluar BERSAMBUNG tanpa jeda sama sekali melewati 15 hari, gunakan metode 4 golongan istihadhah (tamyiz atau adat). Tetapi jika terdapat JEDA (darah berhenti beberapa hari lalu muncul lagi), gunakan metode PENYEMPURNA MASA SUCI (baqiyatut thur). Jadi istihadhah tidak otomatis dimulai pada hari ke-16; bisa jadi istihadhah sudah dimulai sejak hari ke-9 atau hari ke-11 tergantung kekuatannya.',
    kategori: 'tamyiz',
    kataKunci: ['darah bersambung', 'jeda', 'penyempurna masa suci', 'golongan istihadhah']
  },
  {
    id: 18,
    sesi: 2,
    nomor: 4,
    pertanyaan: 'Bagaimana cara menyucikan pakaian yang terkena darah haid jika bekas nodanya masih membekas setelah dicuci?',
    jawaban: 'Dalam thaharah ada 3 indikator najis: RASA, BAU, dan WARNA. Jika dua dari tiga indikator sudah hilang (rasa dan bau darah sudah hilang sepenuhnya setelah dicuci air mutlak dan sabun), maka pakaian tersebut dihukumi SUCI. Noda warna darah yang membandel dan sulit hilang termasuk kategori ma\'fu (dimaafkan) dan sah dipakai untuk shalat tanpa perlu digunting atau dibuang.',
    kategori: 'mandi',
    kataKunci: ['cuci darah', 'noda membandel', 'rasa bau warna', 'mafu']
  },
  {
    id: 19,
    sesi: 2,
    nomor: 5,
    pertanyaan: 'Bagaimana tata cara mandi besar menggunakan shower modern? Apakah harus membasuh 3 kali kepala, 3 kali kanan, dan 3 kali kiri seperti pakai gayung?',
    jawaban: 'Shower sangat sah dan praktis. Rukun mandi besar hanya dua: NIAT di dalam hati saat air pertama menyentuh tubuh, dan MERATAKAN AIR ke seluruh tubuh tanpa ada bagian yang terlewat. Membasuh 3 kali dan mendahulukan sisi kanan adalah SUNNAH. Saat menggunakan shower, cukup niat lalu posisikan tubuh agar guyuran air merata ke seluruh kepala, badan kanan, badan kiri, dan lipatan kulit.',
    kategori: 'mandi',
    kataKunci: ['mandi shower', 'gayung', 'rukun mandi', 'sunnah 3 kali']
  },
  {
    id: 20,
    sesi: 2,
    nomor: 6,
    pertanyaan: 'Apakah ada perubahan siklus haid saat fase premenopause (misal hari 1–3 darah deras, 4–5 berhenti, 6–9 flek, 10 berhenti, 12 darah lagi)? Kebiasaan lama 8 hari.',
    jawaban: 'Siklus premenopause memang sering berubah. Namun patokan hukum fiqih tetap sama: selama seluruh rangkaian keluarnya darah dan jeda masih berada di dalam interval 15 hari (hari ke-1 sampai hari ke-12), maka SELURUHNYA DIHUKUMI HAID. Kebiasaan lama 8 hari tidak dipakai selama darah belum melewati batas maksimal 15 hari. Adat kebiasaan baru digunakan jika darah melampaui 15 hari.',
    kategori: 'medis',
    kataKunci: ['premenopause', 'siklus berubah', 'naqa 12 hari', 'tetap haid']
  },
  {
    id: 21,
    sesi: 2,
    nomor: 7,
    pertanyaan: 'Pada rukun mandi besar air harus mengalir ke lipatan tubuh, apakah wajib digosok tangan atau cukup dialiri air?',
    jawaban: 'RUKUN WAJIB adalah air mutlak mengalir dan membasahi seluruh permukaan kulit serta helai rambut hingga ke dasar pori-pori. Mengusap atau menggosok dengan tangan (ad-dalk) hukumnya adalah SUNNAH dalam mazhab Syafi\'i. Namun mengusap dengan tangan sangat dianjurkan untuk memastikan air benar-benar sampai ke lekukan sempit seperti telinga, ketiak, pusar, dan lipatan kemaluan.',
    kategori: 'mandi',
    kataKunci: ['lipatan kulit', 'rukun mandi', 'gosok tangan', 'dalk sunnah']
  },
  {
    id: 22,
    sesi: 2,
    nomor: 8,
    pertanyaan: 'Darah hari 1–4, hari 5–6 berhenti, hari 7–9 keluar flek kecokelatan/kuning, hari 10 bersih total. Apakah haid dihitung sampai hari ke-9?',
    jawaban: 'Ya, seluruh rangkaian dari hari ke-1 sampai hari ke-9 dihukumi sebagai HAID. Alasannya: flek hari 7–9 masih berada di dalam interval 15 hari dan total akumulasi darah melebihi batas minimal 24 jam. Masa berhenti di hari 5–6 adalah naqa yang dihukumi haid.',
    kategori: 'tamyiz',
    kataKunci: ['hari 1-9', 'naqa haid', 'flek cokelat', 'total 24 jam']
  },
  {
    id: 23,
    sesi: 2,
    nomor: 9,
    pertanyaan: 'Setelah minum obat penunda haid umrah: haid 8 hari, suci 11 hari, keluar darah lagi 12 hari (4 hari pertama lemah, lalu darah jadi kuat). Apakah 4 hari pertama istihadhah?',
    jawaban: 'Ya, tepat! Metode pembedaan darah kuat dan lemah (tamyiz) HANYA berlaku bila darah keluar terus-menerus tanpa jeda. Pada kasus ini terdapat masa suci 11 hari di tengah. Karena ada jeda, wajib menyempurnakan masa suci minimal 15 hari terlebih dahulu. Kurangnya: 15 - 11 = 4 hari. Maka 4 hari pertama dari darah kedua dihukumi ISTIHADHAH PENYEMPURNA MASA SUCI (wajib shalat). Setelah genap 15 hari suci, sisa 8 hari berikutnya barulah dihukumi HAID BARU.',
    kategori: 'tamyiz',
    kataKunci: ['obat umrah', '11 hari suci', 'baqiyatut thur', 'kurang 4 hari']
  },
  {
    id: 24,
    sesi: 2,
    nomor: 10,
    pertanyaan: 'Haid tidak teratur karena gangguan hormon: darah 4 hari, suci 12 hari, darah 4 hari, suci 13 hari, darah 4 hari. Bagaimana menentukan haid dan istihadhah?',
    jawaban: 'Setiap kali ada jeda, perhatikan syarat minimal masa suci 15 hari. Saat darah keluar 4 hari disusul suci 12 hari (kurang 3 hari dari 15 hari), maka 3 hari pertama dari darah berikutnya berstatus istihadhah penyempurna suci, dan 1 hari sisanya haid baru. Demikian pula siklus berikutnya. Pola nyata yang terjadi dicatat teliti untuk dijadikan bahan observasi bagi dokter dan penentuan ibadah.',
    kategori: 'tamyiz',
    kataKunci: ['ketidakseimbangan hormon', 'siklus pendek', 'jeda suci', 'baqiyatut thur']
  },
  {
    id: 25,
    sesi: 2,
    nomor: 11,
    pertanyaan: 'Bagaimana membedakan keputihan abnormal kekuningan dengan flek darah haid sebelum masa haid datang?',
    jawaban: 'Perhatikan bau dan warna: flek darah haid tetap memiliki aroma anyir khas zat besi darah dan warnanya cenderung cokelat muda atau keruh gelap (sufrah/kudrah). Sedangkan keputihan abnormal beraroma asam atau busuk akibat infeksi jamur/bakteri, teksturnya bisa berbusa, dan disertai rasa gatal atau perih panas pada vagina.',
    kategori: 'cairan',
    kataKunci: ['keputihan vs haid', 'bau anyir', 'sufrah', 'gatal']
  },
  {
    id: 26,
    sesi: 2,
    nomor: 12,
    pertanyaan: 'Saat sakit, darah keluar tidak deras selama 12 hari. Hari ke-13 darah menjadi sangat deras bergumpal. Seseorang baru shalat hari ke-16 karena mengira istihadhah. Bagaimana hukumnya?',
    jawaban: 'Jika ini baru pertama kali terjadi, mandi di hari ke-15 dan shalat di hari ke-16 adalah ijtihad yang dapat dimaklumi berdasarkan informasi saat itu. Namun jika ditinjau secara tamyiz: darah lemah hari 1–12 (12 hari) dan darah kuat hari 13–20. Jika seluruh syarat tamyiz terpenuhi, maka darah kuat di hari 13–20 yang dihukumi haid, sedangkan hari 1–12 adalah istihadhah. Jika syarat tamyiz tidak lengkap, dikembalikan kepada kebiasaan sebelum sakit (misal adat 5 hari haid, sisanya istihadhah).',
    kategori: 'tamyiz',
    kataKunci: ['darah deras hari 13', 'tamyiz setelah lemah', 'adat sebelum sakit']
  },
  {
    id: 27,
    sesi: 2,
    nomor: 13,
    pertanyaan: 'Adat 6–7 hari. Tanggal 5 keluar flek malam setelah Isya, tanggal 6 flek, tanggal 7 darah deras s.d. tanggal 13. Berhenti tanggal 14–17 (4 hari). Darah lagi 18–20. Kapan harus qadha shalat?',
    jawaban: 'Tanggal 5 malam tetap dihukumi awal haid karena bersambung dalam satu siklus (shalat Isya yang terlanjur dikerjakan sah). Rangkaian tanggal 5–13 adalah darah (9 hari). Jeda tanggal 14–17 adalah 4 hari. Darah tanggal 18–20 (3 hari). Total rangkaian dari tanggal 5 ke 20 adalah 16 hari (> 15 hari). Maka jeda 4 hari dihukumi masa suci, dan darah tanggal 18–20 (3 hari) berstatus ISTIHADHAH penyempurna masa suci (baru terkumpul 4 + 3 = 7 hari suci, masih kurang 8 hari). Karena pada tanggal 18–20 ia tidak shalat, maka shalat 3 hari tersebut WAJIB DIQADHA mulai tanggal 21.',
    kategori: 'tamyiz',
    kataKunci: ['tanggal 5-20', 'lewat 15 hari', 'qadha 3 hari shalat', 'istihadhah']
  },
  {
    id: 28,
    sesi: 2,
    nomor: 14,
    pertanyaan: 'Bagaimana hukum berdiam diri di musala bagi perempuan haid? Apakah larangan di masjid berlaku sama di musala?',
    jawaban: 'Perempuan haid BOLEH berdiam diri di musala. Perbedaannya: MASJID adalah bangunan yang sejak awal diwakafkan secara khusus dan permanen untuk shalat berjamaah, sehingga berlaku hukum kesucian masjid. Sedangkan MUSALA (seperti ruang shalat di aula, kantor, ruko, atau mall) bukan tanah wakaf masjid, melainkan ruangan umum yang dialihfungsikan untuk tempat shalat. Oleh karena itu, larangan berdiam diri tidak berlaku di musala.',
    kategori: 'masjid',
    kataKunci: ['musala', 'masjid', 'tanah wakaf', 'aula kantor', 'boleh berdiam']
  }
];
