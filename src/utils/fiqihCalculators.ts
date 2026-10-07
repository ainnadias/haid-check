/**
 * Logika perhitungan hukum fiqih darah wanita mazhab Syafi'i
 * Bersumber dari Resume Special Class #12 bersama Ustadzah Jahidah Farhati, Lc.
 * Kitab rujukan: Al-Ibanah wal Ifadah & Fathul Qarib
 */

// 1. Kalkulator 24 Jam Akumulasi Haid
export interface DurationCheckResult {
  totalHours: number;
  isMinFulfilled: boolean;
  shortfallHours: number;
  statusText: string;
  penjelasan: string;
}

export function calculate24HoursHaid(dailyHours: number[]): DurationCheckResult {
  const totalHours = dailyHours.reduce((sum, h) => sum + (isNaN(h) ? 0 : h), 0);
  const isMinFulfilled = totalHours >= 24;
  const shortfallHours = Math.max(0, 24 - totalHours);

  if (isMinFulfilled) {
    return {
      totalHours,
      isMinFulfilled: true,
      shortfallHours: 0,
      statusText: 'Memenuhi Batas Minimal Haid',
      penjelasan: `Total akumulasi keluarnya darah mencapai ${totalHours} jam (≥ 24 jam). Darah dihukumi sebagai haid, asalkan seluruh rangkaian masih berada dalam rentang maksimal 15 hari.`
    };
  } else {
    return {
      totalHours,
      isMinFulfilled: false,
      shortfallHours,
      statusText: 'Belum Memenuhi Minimal Haid (Istihadhah)',
      penjelasan: `Total darah baru terkumpul ${totalHours} jam (kurang ${shortfallHours} jam dari syarat 24 jam). Jika darah sudah berhenti dan tidak berlanjut, seluruh darah dihukumi istihadhah (bukan haid), sehingga shalat yang ditinggalkan wajib diqadha.`
    };
  }
}

// 2. Evaluasi Naqa (Darah Berhenti di Tengah)
export interface DayState {
  day: number;
  hasBlood: boolean;
  hours: number;
}

export interface NaqaResult {
  totalBloodHours: number;
  totalSpanDays: number;
  bloodDaysCount: number;
  naqaDaysCount: number;
  syarat1Fulfilled: boolean; // total darah >= 24 jam
  syarat2Fulfilled: boolean; // total rentang <= 15 hari
  isNaqaHaid: boolean;
  summary: string;
  detail: string;
  dayClassifications: { day: number; status: 'haid' | 'naqa-haid' | 'naqa-suci' | 'istihadhah' }[];
}

export function evaluateNaqaTimeline(days: DayState[]): NaqaResult {
  const activeDays = days.filter(d => d.hasBlood || d.hours > 0);
  if (activeDays.length === 0) {
    return {
      totalBloodHours: 0,
      totalSpanDays: 0,
      bloodDaysCount: 0,
      naqaDaysCount: 0,
      syarat1Fulfilled: false,
      syarat2Fulfilled: true,
      isNaqaHaid: false,
      summary: 'Belum ada hari keluarnya darah yang dipilih.',
      detail: 'Silakan pilih hari dan jam keluarnya darah pada timeline.',
      dayClassifications: []
    };
  }

  const minDay = Math.min(...activeDays.map(d => d.day));
  const maxDay = Math.max(...activeDays.map(d => d.day));
  const totalSpanDays = maxDay - minDay + 1;

  let totalBloodHours = 0;
  let bloodDaysCount = 0;
  let naqaDaysCount = 0;

  for (let d = minDay; d <= maxDay; d++) {
    const dayObj = days.find(x => x.day === d);
    if (dayObj && (dayObj.hasBlood || dayObj.hours > 0)) {
      bloodDaysCount++;
      totalBloodHours += dayObj.hours > 0 ? dayObj.hours : 24; // default jika dicentang darah sehari penuh
    } else {
      naqaDaysCount++;
    }
  }

  const syarat1Fulfilled = totalBloodHours >= 24;
  const syarat2Fulfilled = totalSpanDays <= 15;
  const isNaqaHaid = syarat1Fulfilled && syarat2Fulfilled;

  const dayClassifications: { day: number; status: 'haid' | 'naqa-haid' | 'naqa-suci' | 'istihadhah' }[] = [];

  for (let d = 1; d <= 20; d++) {
    const isWithinSpan = d >= minDay && d <= maxDay;
    const dayObj = days.find(x => x.day === d);
    const hasDarah = dayObj ? (dayObj.hasBlood || dayObj.hours > 0) : false;

    if (!isWithinSpan) {
      dayClassifications.push({ day: d, status: 'naqa-suci' });
    } else if (hasDarah) {
      if (isNaqaHaid) {
        dayClassifications.push({ day: d, status: 'haid' });
      } else if (!syarat2Fulfilled) {
        // Rentang melebihi 15 hari
        dayClassifications.push({ day: d, status: d <= 15 ? 'haid' : 'istihadhah' });
      } else {
        // Kurang dari 24 jam
        dayClassifications.push({ day: d, status: 'istihadhah' });
      }
    } else {
      // Hari jeda (naqa)
      if (isNaqaHaid) {
        dayClassifications.push({ day: d, status: 'naqa-haid' });
      } else {
        dayClassifications.push({ day: d, status: 'naqa-suci' });
      }
    }
  }

  let summary = '';
  let detail = '';

  if (isNaqaHaid) {
    summary = 'Naqa Dihukumi Haid (Seluruh Masa Adalah Haid)';
    detail = `Total darah keluar ${totalBloodHours} jam (≥ 24 jam) dan seluruh rangkaian darah + jeda berlangsung ${totalSpanDays} hari (≤ 15 hari). Maka masa jeda (naqa) tetap dihukumi haid. Jika berpuasa di hari jeda tersebut, puasanya tidak sah.`;
  } else if (!syarat1Fulfilled) {
    summary = 'Semua Darah & Naqa Dihukumi Istihadhah / Suci';
    detail = `Total darah hanya terkumpul ${totalBloodHours} jam (kurang dari syarat 24 jam). Maka seluruh darah dihukumi istihadhah dan naqa dihukumi masa suci. Shalat yang ditinggalkan wajib diqadha.`;
  } else {
    // totalSpanDays > 15
    summary = 'Rentang Melebihi 15 Hari: Naqa Dihukumi Masa Suci';
    detail = `Total rangkaian dari hari pertama sampai hari terakhir adalah ${totalSpanDays} hari (> 15 hari batas maksimal). Maka masa jeda (naqa) tidak dapat dihukumi haid, melainkan dihukumi sebagai masa suci. Darah yang keluar kembali masuk pembahasan istihadhah penyempurna masa suci.`;
  }

  return {
    totalBloodHours,
    totalSpanDays,
    bloodDaysCount,
    naqaDaysCount,
    syarat1Fulfilled,
    syarat2Fulfilled,
    isNaqaHaid,
    summary,
    detail,
    dayClassifications
  };
}

// 3. Kalkulator Masa Suci Minimal 15 Hari & Istihadhah Penyempurna (Baqiyatut Thur)
export interface MasaSuciResult {
  darah1Days: number;
  suciDays: number;
  darah2Days: number;
  isSuciSempurna: boolean;
  kekuranganHari: number;
  istihadhahDays: number;
  haidBaruDays: number;
  penjelasan: string;
}

export function calculateMasaSuci(darah1Days: number, suciDays: number, darah2Days: number): MasaSuciResult {
  const isSuciSempurna = suciDays >= 15;
  const kekuranganHari = Math.max(0, 15 - suciDays);

  if (isSuciSempurna) {
    return {
      darah1Days,
      suciDays,
      darah2Days,
      isSuciSempurna: true,
      kekuranganHari: 0,
      istihadhahDays: 0,
      haidBaruDays: darah2Days,
      penjelasan: `Masa suci telah mencapai ${suciDays} hari (≥ 15 hari minimal). Maka seluruh darah kedua (${darah2Days} hari) dapat langsung dihukumi sebagai HAID BARU (selama memenuhi syarat haid minimal 24 jam).`
    };
  } else {
    const istihadhahDays = Math.min(kekuranganHari, darah2Days);
    const haidBaruDays = Math.max(0, darah2Days - kekuranganHari);

    return {
      darah1Days,
      suciDays,
      darah2Days,
      isSuciSempurna: false,
      kekuranganHari,
      istihadhahDays,
      haidBaruDays,
      penjelasan: `Masa suci baru berlangsung ${suciDays} hari, padahal minimal harus 15 hari (masih kurang ${kekuranganHari} hari). Maka ${istihadhahDays} hari pertama dari darah kedua dihukumi sebagai ISTIHADHAH PENYEMPURNA MASA SUCI (baqiyatut thur) dan wajib shalat. Setelah masa suci genap 15 hari, sisanya ${haidBaruDays > 0 ? haidBaruDays + ' hari berikutnya baru dapat dihukumi sebagai HAID BARU' : 'belum ada sisa untuk haid baru'}.`
    };
  }
}

// 4. Checker 4 Syarat Tamyiz
export interface TamyizCheckInput {
  durasiKuatHari: number;
  durasiKuatJam?: number;
  durasiLemahHari: number;
  warnaKuat: string;
  warnaLemah: string;
  urutanKuatDulu: boolean; // Syarat d: darah lemah tidak boleh mendahului atau berselang-seling
  adaDarahKuatKeduaLebih15Hari: boolean; // Syarat c: darah kuat kedua > 15 hari
}

export interface TamyizCheckResult {
  isMumayyizah: boolean;
  syaratA: { fulfilled: boolean; message: string }; // kuat >= 24 jam
  syaratB: { fulfilled: boolean; message: string }; // kuat <= 15 hari
  syaratC: { fulfilled: boolean; message: string }; // lemah >= 15 hari jika bersambung kuat kedua > 15 hari
  syaratD: { fulfilled: boolean; message: string }; // diawali darah terkuat & tidak berselang-seling
  kesimpulan: string;
  rekomendasi: string;
}

export function checkTamyizConditions(input: TamyizCheckInput): TamyizCheckResult {
  const totalKuatHours = (input.durasiKuatHari * 24) + (input.durasiKuatJam || 0);

  // Syarat a: Darah kuat >= 24 jam
  const syaratA_pass = totalKuatHours >= 24;
  const syaratA_msg = syaratA_pass
    ? `Darah kuat (${input.warnaKuat}) berlangsung ${input.durasiKuatHari} hari (${totalKuatHours} jam) ≥ 24 jam.`
    : `Darah kuat (${input.warnaKuat}) kurang dari 24 jam (hanya ${totalKuatHours} jam).`;

  // Syarat b: Darah kuat <= 15 hari
  const syaratB_pass = input.durasiKuatHari <= 15;
  const syaratB_msg = syaratB_pass
    ? `Darah kuat (${input.durasiKuatHari} hari) tidak melampaui batas maksimal 15 hari.`
    : `Darah kuat berlangsung ${input.durasiKuatHari} hari (> 15 hari), melampaui batas maksimal haid.`;

  // Syarat c: Darah lemah tidak kurang dari 15 hari dalam kondisi tertentu (bersambung darah kuat kedua > 15 hari)
  let syaratC_pass = true;
  let syaratC_msg = 'Darah lemah memenuhi syarat.';
  if (input.adaDarahKuatKeduaLebih15Hari) {
    if (input.durasiLemahHari < 15) {
      syaratC_pass = false;
      syaratC_msg = `Karena bersambung dengan darah kuat kedua yang > 15 hari, darah lemah (${input.durasiLemahHari} hari) harus minimal 15 hari.`;
    } else {
      syaratC_msg = `Darah lemah (${input.durasiLemahHari} hari) memenuhi minimal 15 hari saat bersambung dengan darah kuat kedua > 15 hari.`;
    }
  } else {
    syaratC_msg = 'Darah kuat kedua ≤ 15 hari (atau tidak ada), sehingga durasi darah lemah tidak disyaratkan harus 15 hari.';
  }

  // Syarat d: Darah lemah tidak boleh mendahului atau berselang-seling
  const syaratD_pass = input.urutanKuatDulu;
  const syaratD_msg = syaratD_pass
    ? 'Darah diawali oleh darah yang paling kuat dan tidak berselang-seling.'
    : 'Darah diawali oleh darah yang lebih lemah atau berpola selang-seling (contoh: Coklat → Hitam). Tamyiz gugur!';

  const isMumayyizah = syaratA_pass && syaratB_pass && syaratC_pass && syaratD_pass;

  let kesimpulan = '';
  let rekomendasi = '';

  if (isMumayyizah) {
    kesimpulan = 'MEMENUHI SYARAT TAMYIZ (Mumayyizah)';
    rekomendasi = `Darah kuat (${input.warnaKuat}, ${input.durasiKuatHari} hari) dihukumi sebagai HAID. Darah lemah (${input.warnaLemah}, ${input.durasiLemahHari} hari) dihukumi sebagai ISTIHADHAH (wajib mandi besar dan shalat).`;
  } else {
    kesimpulan = 'TIDAK MEMENUHI SYARAT TAMYIZ (Ghairu Mumayyizah)';
    rekomendasi = `Karena syarat tamyiz tidak lengkap, perempuan ini masuk kategori ghairu mumayyizah. Jika baru pertama kali haid (mubtada'ah), haidnya dihukumi 1 hari 1 malam (24 jam). Jika sudah pernah haid sebelumnya (mu'tadah), dikembalikan kepada kebiasaan/adat haid pada bulan sebelumnya.`;
  }

  return {
    isMumayyizah,
    syaratA: { fulfilled: syaratA_pass, message: syaratA_msg },
    syaratB: { fulfilled: syaratB_pass, message: syaratB_msg },
    syaratC: { fulfilled: syaratC_pass, message: syaratC_msg },
    syaratD: { fulfilled: syaratD_pass, message: syaratD_msg },
    kesimpulan,
    rekomendasi
  };
}
