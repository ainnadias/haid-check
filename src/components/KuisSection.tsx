import React, { useState } from 'react';
import { KUIS_DATA } from '../data/kuis';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, HelpCircle } from 'lucide-react';

export const KuisSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = KUIS_DATA[currentQuestionIndex];
  const userChoice = selectedAnswers[currentQuestionIndex];
  const hasAnswered = userChoice !== undefined;

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: index });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < KUIS_DATA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(selectedAnswers[currentQuestionIndex + 1] !== undefined);
    } else {
      setIsFinished(true);
      const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ans]) => {
        return ans === KUIS_DATA[parseInt(qIdx)].jawabanBenar ? acc + 1 : acc;
      }, 0);
      if (score >= Math.round(KUIS_DATA.length * 0.75)) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2D1B25', '#C2185B', '#FCEEF6', '#FDF0F5']
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const correctCount = Object.entries(selectedAnswers).reduce((acc, [qIdx, ans]) => {
    return ans === KUIS_DATA[parseInt(qIdx)].jawabanBenar ? acc + 1 : acc;
  }, 0);

  const scorePercentage = Math.round((correctCount / KUIS_DATA.length) * 100);

  return (
    <section id="kuis" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold text-[#C2185B] dark:text-[#F06292] tracking-wider uppercase mb-2">
            Evaluasi Pemahaman Fiqih
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D1B25] dark:text-[#FDF0F8]">
            Kuis Uji Pemahaman: Kasus Fiqih Haid
          </h2>
          <p className="mt-3 text-sm text-[#5C3A4E] dark:text-[#E8C5D8] max-w-xl mx-auto">
            16 soal berbasis kaidah dan kasus nyata dari materi kajian Ustadzah Jahidah Farhati, Lc.
          </p>
        </div>

        {!isFinished ? (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25">
            {/* Header: Progress Counter */}
            <div className="flex items-center justify-between border-b border-[#2D1B25]/10 dark:border-[#F06292]/20 pb-4 text-xs font-medium">
              <span className="text-[#C2185B] dark:text-[#F06292] font-semibold">
                Soal {currentQuestionIndex + 1} dari {KUIS_DATA.length}
              </span>
              <span className="font-mono text-[#2D1B25] dark:text-[#FDF0F8]">
                Dijawab: {Object.keys(selectedAnswers).length}/{KUIS_DATA.length}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-[#2D1B25] dark:text-[#FDF0F8] leading-snug">
              {question.pertanyaan}
            </h3>

            {/* Choices */}
            <div className="space-y-2.5">
              {question.pilihan.map((option, idx) => {
                const isSelected = userChoice === idx;
                const isCorrect = question.jawabanBenar === idx;

                let buttonStyle = 'border-[#2D1B25]/15 dark:border-[#F06292]/25 bg-white/80 dark:bg-white/5 hover:bg-white text-[#2D1B25] dark:text-[#FDF0F8]';

                if (hasAnswered) {
                  if (isCorrect) {
                    buttonStyle = 'border-[#1B7043] dark:border-[#48C78E] bg-[#E8F5EE] dark:bg-[#163324] text-[#1B7043] dark:text-[#48C78E] font-semibold ring-1 ring-[#1B7043]';
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = 'border-[#C2185B] dark:border-[#F06292] bg-[#FCEEF6] dark:bg-[#4A1535] text-[#C2185B] dark:text-[#F06292] font-medium';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${buttonStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{option}</span>
                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-[#1B7043] dark:text-[#48C78E] shrink-0 mt-0.5" />
                    )}
                    {hasAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292] shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Live Explanation Box */}
            {hasAnswered && showExplanation && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#2E1428] border border-[#2D1B25]/10 dark:border-[#F06292]/25 space-y-2 text-xs sm:text-sm">
                <div className="font-bold flex items-center gap-1.5 text-[#C2185B] dark:text-[#F06292]">
                  <HelpCircle className="w-4 h-4 text-[#C2185B] dark:text-[#F06292]" />
                  Pembahasan Fiqih:
                </div>
                <p className="text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
                  {question.penjelasan}
                </p>
                {question.referensiHalaman && (
                  <div className="text-[11px] text-[#5C3A4E] dark:text-[#E8C5D8] pt-1">
                    Sumber: Resume Dokumen {question.referensiHalaman}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#2D1B25]/10 dark:border-[#F06292]/20">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl border border-[#2D1B25]/15 dark:border-[#F06292]/25 text-xs text-[#2D1B25] dark:text-[#FDF0F8] disabled:opacity-30 cursor-pointer shadow-2xs"
              >
                ← Sebelumnya
              </button>

              <button
                disabled={!hasAnswered}
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {currentQuestionIndex === KUIS_DATA.length - 1 ? 'Lihat Hasil Akhir' : 'Lanjut'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Finished Quiz Result Screen */
          <div className="glass-panel p-8 rounded-3xl text-center max-w-lg mx-auto space-y-6 border border-[#2D1B25]/10 dark:border-[#F06292]/25 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#FCEEF6] dark:bg-[#4A1535] mx-auto flex items-center justify-center text-[#C2185B] dark:text-[#F06292]">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#5C3A4E] dark:text-[#E8C5D8] uppercase tracking-wider">
                Hasil Evaluasi Kuis
              </span>
              <h3 className="text-3xl font-bold text-[#2D1B25] dark:text-[#FDF0F8] mt-1 font-mono">
                {scorePercentage}%
              </h3>
              <p className="text-xs text-[#5C3A4E] dark:text-[#E8C5D8] mt-1">
                Kamu menjawab benar <strong>{correctCount}</strong> dari {KUIS_DATA.length} soal kasus fiqih.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#2D1B25]/10 dark:border-[#F06292]/20 text-xs text-[#2D1B25] dark:text-[#FDF0F8] leading-relaxed">
              {scorePercentage >= 80 ? (
                'Masya Allah! Pemahamanmu terhadap kaidah fiqih haid, naqa, masa suci, dan tamyiz mazhab Syafi\'i sudah sangat mendalam.'
              ) : scorePercentage >= 60 ? (
                'Alhamdulillah, pemahamanmu sudah cukup baik. Pelajari kembali bagian simulator 24 jam dan 7 golongan istihadhah untuk memperkuat ketelitian berhitung.'
              ) : (
                'Tetap semangat! Fiqih darah memang membutuhkan ketelitian berhitung. Jangan kapok belajar, gunakan simulator interaktif di atas untuk berlatih kembali.'
              )}
            </div>

            <button
              onClick={resetQuiz}
              className="px-6 py-3 rounded-2xl bg-[#2D1B25] text-[#FDF0F5] dark:bg-[#C2185B] dark:text-white text-xs font-semibold flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" /> Ulangi Kuis
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
