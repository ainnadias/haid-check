import React, { useState, useMemo } from 'react';
import { FAQ_DATA } from '../data/faq';
import { Search, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const categories = [
    { id: 'all', label: 'Semua (28 Tanya Jawab)' },
    { id: 'shalat', label: 'Shalat & Qadha' },
    { id: 'mandi', label: 'Mandi Besar' },
    { id: 'tamyiz', label: 'Hitungan & Tamyiz' },
    { id: 'medis', label: 'Hormon & Medis' },
    { id: 'cairan', label: 'Keputihan & Flek' },
    { id: 'masjid', label: 'Masjid & HP' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.kategori === selectedCategory;
      const matchSearch =
        searchTerm === '' ||
        item.pertanyaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.jawaban.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.kataKunci.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="tanya-jawab" className="py-12 md:py-16 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Dokumentasi Sesi 1 & Sesi 2
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Tanya Jawab Lengkap Resume Kajian
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Seluruh 28 studi kasus dan pertanyaan jamaah yang dijawab langsung oleh <strong>Ustadzah Jahidah Farhati, Lc</strong>.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C3A4E]/60 dark:text-[#E8C5D8]/60" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari pertanyaan, kata kunci (misal: IUD, kantor, umrah, Yasin, shower)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-panel text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] placeholder:text-[#5C3A4E]/60 dark:placeholder:text-[#E8C5D8]/60 focus:outline-none focus:ring-2 focus:ring-[#C2185B]/50 border border-[#2D1B25]/10 dark:border-[#F06292]/25"
            />
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 justify-start sm:justify-center scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer shadow-2xs ${
                  selectedCategory === cat.id
                    ? 'text-white font-semibold shadow-md'
                    : 'bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] hover:bg-white'
                }`}
                style={selectedCategory === cat.id ? { background: 'linear-gradient(135deg, #C2185B 0%, #E91E8C 100%)' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 glass-panel rounded-3xl text-xs sm:text-sm text-[#5C3A4E] dark:text-[#E8C5D8] border border-[#2D1B25]/10">
              Tidak ditemukan pertanyaan yang cocok dengan kata kunci pencarian.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-panel rounded-3xl border border-[#2D1B25]/10 dark:border-[#F06292]/25 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#C2185B] dark:text-[#F06292]">
                          Sesi {faq.sesi} · Pertanyaan #{faq.nomor}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#2D1B25] dark:text-[#FDF0F8] leading-snug">
                        {faq.pertanyaan}
                      </h3>
                    </div>

                    <div className="p-2 rounded-xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-[#2D1B25] dark:text-[#FDF0F8] shrink-0 mt-0.5">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20 space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#C2185B] dark:text-[#F06292] flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#C2185B] dark:text-[#F06292]" />
                        Jawaban Ustadzah Jahidah Farhati, Lc:
                      </div>
                      <p className="text-xs sm:text-sm text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed whitespace-pre-line">
                        {faq.jawaban}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {faq.kataKunci.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8] bg-[#2D1B25]/5 dark:bg-white/10 px-2 py-0.5 rounded-md font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
