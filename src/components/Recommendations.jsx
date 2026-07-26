import { useState } from 'react';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import { RECOMMENDATIONS } from '../data/portfolioData';

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('');
}

function Recommendations({ recommendationsRef }) {
  const [index, setIndex] = useState(0);
  const total = RECOMMENDATIONS.length;
  const current = RECOMMENDATIONS[index];

  const goPrev = () => setIndex(i => (i - 1 + total) % total);
  const goNext = () => setIndex(i => (i + 1) % total);

  return (
    <section id="recommendations" ref={recommendationsRef} className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 light:text-slate-600">
            Recommendations
          </p>
        </div>

        <div className="recommendation-card glass flex flex-col rounded-3xl p-8 md:p-12">
          <Quote size={36} className="shrink-0 text-cyan-500/30" />

          <p className="mt-6 min-h-[360px] text-xl font-bold leading-snug text-white light:text-slate-900 sm:min-h-[220px] md:min-h-[200px] md:text-2xl">
            {current.quote}
          </p>

          <p className="mt-8 min-h-[40px] text-sm text-slate-500 light:text-slate-500">
            {current.date}, {current.context}
          </p>

          <a
            href={current.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 group w-fit"
          >
            {current.photo ? (
              <img
                src={current.photo}
                alt={current.name}
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-cyan-500/30"
              />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-sm font-bold text-slate-950">
                {getInitials(current.name)}
              </div>
            )}
            <div>
              <p className="text-base font-bold text-white transition-colors group-hover:text-cyan-400 light:text-slate-900">
                {current.name}
              </p>
              <p className="min-h-[40px] text-sm text-slate-400 light:text-slate-600">{current.role}</p>
            </div>
          </a>

          <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous recommendation"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 light:border-slate-300 light:text-slate-500"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next recommendation"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 light:border-slate-300 light:text-slate-500"
              >
                <ChevronRight size={18} />
              </button>
              <span className="ml-2 text-sm text-slate-500">
                {index + 1} / {total}
              </span>
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-600 light:text-slate-400">
              From LinkedIn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
