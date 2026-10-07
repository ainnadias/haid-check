import React, { useState } from 'react';
import { GLOSARIUM_DATA } from '../data/glosarium';
import { X, Search, BookOpen } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Semua Istilah' },
    { id: 'dasar', label: 'Konsep Dasar' },
    { id: 'istihadhah', label: 'Istihadhah & Tamyiz' },
    { id: 'suci', label: 'Masa Suci & Naqa' },
    { id: 'cairan', label: 'Cairan Farj' },
  ];

  const filteredTerms = GLOSARIUM_DATA.filter((item) => {
    const matchCat = activeCategory === 'all' || item.kategori === activeCategory;
    const matchSearch =
      searchTerm === '' ||
      item.istilah.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.transliterasi && item.transliterasi.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.definisiSingkat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.penjelasanLengkap.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg h-full glass-panel bg-[#FDF0F5]/90 dark:bg-[#1A0E17]/90 border-l border-[#C2185B]/20 dark:border-[#F06292]/25 shadow-[0_0_60px_-12px_rgba(194,24,91,0.25)] flex flex-col p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2D1B25]/10 dark:border-[#F06292]/15 pb-4 mb-4">
          <div className="flex items-center gap-2">
            {/* <BookOpen className="w-5 h-5 text-[#C2185B] dark:text-[#F06292]" /> */}
            <h3 className="text-base sm:text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
              Glosarium Istilah Fiqih
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            aria-label="Tutup Glosarium"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C3A4E]/60 dark:text-[#E8C5D8]/60" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari istilah fiqih (misal: Naqa, Tamyiz, Wadi)..."
            className="w-full pl-10 pr-3 py-2 text-xs rounded-xl glass-panel text-[#2D1B25] dark:text-[#FDF0F8] placeholder:text-[#5C3A4E]/60 focus:outline-none focus:ring-1 focus:ring-[#C2185B] border border-[#2D1B25]/10 dark:border-[#F06292]/20"
          />
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-white font-semibold shadow-sm'
                  : 'bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white'
              }`}
              style={activeCategory === cat.id ? { background: 'linear-gradient(135deg, #C2185B 0%, #E91E8C 100%)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Term List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredTerms.map((term, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/90 dark:bg-[#2D1428] border border-[#2D1B25]/10 dark:border-[#F06292]/15 space-y-1.5 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#2D1B25] dark:text-[#FDF0F8]">
                  {term.istilah}
                </span>
                {term.arab && (
                  <span className="text-base font-serif text-[#C2185B] dark:text-[#F06292]">
                    {term.arab}
                  </span>
                )}
              </div>

              {term.transliterasi && (
                <div className="text-xs italic text-[#5C3A4E] dark:text-[#E8C5D8]">
                  ({term.transliterasi})
                </div>
              )}

              <p className="text-xs font-semibold text-[#2D1B25] dark:text-[#FDF0F8]">
                {term.definisiSingkat}
              </p>

              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] leading-relaxed pt-1 border-t border-[#2D1B25]/10 dark:border-[#F06292]/15">
                {term.penjelasanLengkap}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
