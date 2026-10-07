import React, { useState } from 'react';
import { MITOS_FAKTA_DATA } from '../data/mitos';
import { RotateCw, CheckCircle2, XCircle } from 'lucide-react';

export const MitosFaktaSection: React.FC = () => {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((item) => item !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };

  return (
    <section id="mitos-fakta" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Koreksi Pemahaman Populer
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Mitos vs Fakta Seputar Haid
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A4E] dark:text-[#E8C5D8] max-w-2xl mx-auto">
            Banyak tradisi dan larangan turun-temurun yang sebenarnya tidak memiliki dasar fiqih. Klik kartu di bawah untuk membalik dan membaca fakta fiqihnya.
          </p>
        </div>

        {/* 8 Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MITOS_FAKTA_DATA.map((item) => {
            const isFlipped = flippedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="group h-72 cursor-pointer perspective-1000"
              >
                <div
                  className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-3d border shadow-2xs ${
                    isFlipped
                      ? 'border-[#C2185B]/40 dark:border-[#F06292]/40 rotate-y-180 bg-white dark:bg-[#2D1428]'
                      : 'border-[#2D1B25]/10 dark:border-[#F06292]/20 bg-white/80 dark:bg-white/5 hover:border-[#C2185B]/40 dark:hover:border-[#F06292]/40 hover:bg-white'
                  } p-5 flex flex-col justify-between`}
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side: MITOS */}
                  <div
                    className="flex flex-col justify-between h-full backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-[#FCEEF6] dark:bg-[#4A1535] text-[#C2185B] dark:text-[#F06292]">
                          Mitos #{item.id}
                        </span>
                        <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
                        "{item.mitos}"
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#C2185B] dark:text-[#F06292] pt-2 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20 font-medium">
                      <RotateCw className="w-3 h-3" /> Klik untuk lihat fakta
                    </div>
                  </div>

                  {/* Back Side: FAKTA */}
                  <div
                    className="absolute inset-0 p-5 flex flex-col justify-between h-full rounded-3xl overflow-y-auto"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#1B7043] dark:text-[#48C78E] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> FAKTA FIQIH
                        </span>
                      </div>
                      <p className="text-xs text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed mb-2">
                        {item.penjelasan}
                      </p>
                    </div>

                    {item.rujukan && (
                      <div className="text-[10px] text-[#5C3A4E] dark:text-[#E8C5D8] italic pt-1 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
                        {item.rujukan}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
