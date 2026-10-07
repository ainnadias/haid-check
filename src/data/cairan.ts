export interface FluidType {
  id: string;
  nama: string;
  istilahArab: string;
  pemicuKeluarnya: string;
  ciriFisik: string[];
  aromaDanSensasi: string;
  statusNajis: 'Suci' | 'Najis' | 'Tergantung Letak / Ragu = Suci';
  kewajibanBersuci: 'Wajib Mandi Besar' | 'Batal Wudhu (Cukup Berwudhu)' | 'Tidak Batal Wudhu' | 'Tergantung Kondisi';
  dampakPadaPakaian: string;
  penjelasanPdf: string;
}

export const CAIRAN_DATA: FluidType[] = [
  {
    id: 'mani',
    nama: 'Mani',
    istilahArab: 'المني (Al-Manī)',
    pemicuKeluarnya: 'Puncak syahwat / orgasme (hubungan suami istri, mimpi basah, atau rangsangan memuncak).',
    ciriFisik: ['Cairan putih kental', 'Keluar memancar / terdorong kuat', 'Menyebabkan rasa lemas setelahnya'],
    aromaDanSensasi: 'Disertai puncak kenikmatan, beraroma khas seperti adonan tepung gandum atau serbuk sari pohon kurma.',
    statusNajis: 'Suci',
    kewajibanBersuci: 'Wajib Mandi Besar',
    dampakPadaPakaian: 'Tidak menajiskan sprei, selimut, atau pakaian. Jika ingin dicuci, tujuannya untuk kebersihan dan estetika, bukan karena najis syar\'i.',
    penjelasanPdf: 'Hukum mani adalah suci, namun keluarnya menyebabkan hadas besar sehingga wajib mandi besar sebelum melaksanakan shalat.'
  },
  {
    id: 'madzi',
    nama: 'Madzi',
    istilahArab: 'المذي (Al-Mażī)',
    pemicuKeluarnya: 'Awal rangsangan syahwat (bercumbu/foreplay, berkhayal intim, membaca/melihat konten erotis).',
    ciriFisik: ['Cairan putih keruh dan encer', 'Sering kali jernih / bening', 'Berfungsi sebagai pelumas alami'],
    aromaDanSensasi: 'Keluar tanpa dorongan memancar kuat dan tidak disusul rasa lemas seperti halnya mani.',
    statusNajis: 'Najis',
    kewajibanBersuci: 'Batal Wudhu (Cukup Berwudhu)',
    dampakPadaPakaian: 'Pakaian atau sprei yang terkena madzi menjadi najis, harus dicuci atau diganti bagian yang terkena sebelum dipakai shalat.',
    penjelasanPdf: 'Madzi najis dan membatalkan wudhu, tetapi tidak mewajibkan mandi besar. Cukup dibasuh kemaluan dan bagian pakaian yang terkena, lalu berwudhu.'
  },
  {
    id: 'wadi',
    nama: 'Wadi',
    istilahArab: 'الودي (Al-Wadī)',
    pemicuKeluarnya: 'Setelah buang air kecil (kencing), saat kelelahan fisik berat (bekerja/mengurus anak), atau kedinginan.',
    ciriFisik: ['Cairan putih keruh', 'Kental dan padat bertekstur', 'Sering disebut awam sebagai keputihan'],
    aromaDanSensasi: 'Tidak berkaitan dengan nafsu/syahwat sama sekali.',
    statusNajis: 'Najis',
    kewajibanBersuci: 'Batal Wudhu (Cukup Berwudhu)',
    dampakPadaPakaian: 'Najis jika mengenai celana dalam. Sebaiknya gunakan pantyliner yang bisa diganti sebelum shalat agar praktis.',
    penjelasanPdf: 'Hukum wadi adalah najis dan membatalkan wudhu. Anak-anak yang baru baligh perlu diajarkan membedakan wadi dari cairan lainnya.'
  },
  {
    id: 'rutubatul-farj-normal',
    nama: 'Rutubatul Farj (Normal / Fisiologis)',
    istilahArab: 'رطوبة الفرج الطبيعية',
    pemicuKeluarnya: 'Keluar secara alami dari organ reproduksi wanita tanpa pemicu lelah ataupun syahwat.',
    ciriFisik: ['Bening atau keputih-putihan jernih', 'Tidak berbau tajam', 'Tidak menimbulkan gatal atau perih'],
    aromaDanSensasi: 'Tidak berbau tidak sedap, aroma biasa seperti tepung bersih atau tidak berbau.',
    statusNajis: 'Tergantung Letak / Ragu = Suci',
    kewajibanBersuci: 'Tergantung Kondisi',
    dampakPadaPakaian: 'Bila suci, tidak menajiskan pakaian dan tidak membatalkan wudhu.',
    penjelasanPdf: 'Kitab Al-Ibanah merinci: jika keluar dari bagian luar yang terjangkau tangan saat cebok/istinja = SUCI & TIDAK batal wudhu. Jika dari dalam yang terjangkau zakar mujami\' = SUCI. Jika dari rongga lebih dalam tak terjangkau zakar mujami\' = NAJIS. Bila RAGU dari mana asalnya = DIHUKUMI SUCI (kemudahan syariat).'
  },
  {
    id: 'rutubatul-farj-abnormal',
    nama: 'Rutubatul Farj (Abnormal / Patologis)',
    istilahArab: 'رطوبة الفرج المرضية',
    pemicuKeluarnya: 'Infeksi medis (jamur kandida, bakteri vaginosis, trikomoniasis, atau peradangan).',
    ciriFisik: ['Warna putih pekat, kuning, kehijauan, atau kecokelatan', 'Tekstur encer, sangat kental, atau berbusa', 'Disertai keluhan gatal hebat, perih, rasa panas, atau nyeri'],
    aromaDanSensasi: 'Berbau amis tajam, asam busuk, atau bau tidak sedap yang bahkan tercium menembus pakaian.',
    statusNajis: 'Najis',
    kewajibanBersuci: 'Batal Wudhu (Cukup Berwudhu)',
    dampakPadaPakaian: 'Wajib dicuci dengan air mutlak (tisu basah tidak sah menyucikan najis karena bukan air mutlak).',
    penjelasanPdf: 'Dihukumi NAJIS dan membatalkan wudhu. Jika keluar terus-menerus, tata cara wudhunya mengikuti hukum daimul hadas (istihadhah): bersihkan, pakai pantyliner baru tiap waktu, wudhu setelah masuk waktu shalat.'
  }
];
