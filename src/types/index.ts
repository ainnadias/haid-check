export type BloodColor = 'hitam' | 'merah' | 'coklat' | 'kuning' | 'keruh';

export interface BloodColorDetail {
  id: BloodColor;
  nama: string;
  istilahArab: string;
  hex: string;
  levelKekuatan: number; // 1 (terkuat) - 5 (terlemah)
  deskripsi: string;
  contohPdf: string;
}

export interface TermDefinition {
  istilah: string;
  arab?: string;
  transliterasi?: string;
  definisiSingkat: string;
  penjelasanLengkap: string;
  kategori: 'dasar' | 'istihadhah' | 'suci' | 'cairan';
}

export interface FaqItem {
  id: number;
  sesi: 1 | 2;
  nomor: number;
  pertanyaan: string;
  jawaban: string;
  kategori: 'shalat' | 'mandi' | 'puasa' | 'medis' | 'alat-kontrasepsi' | 'cairan' | 'tamyiz' | 'masjid';
  kataKunci: string[];
}

export interface MythItem {
  id: number;
  mitos: string;
  fakta: string;
  penjelasan: string;
  rujukan?: string;
}

export interface QuizQuestion {
  id: number;
  pertanyaan: string;
  pilihan: string[];
  jawabanBenar: number; // index 0-3
  penjelasan: string;
  referensiHalaman?: string;
}

export interface IstihadhahCategory {
  id: string;
  nama: string;
  arab: string;
  definisi: string;
  solusi: string;
  contohKasus: string;
  konsekuensiShalat: string;
}
