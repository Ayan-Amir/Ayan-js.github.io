import { Sparkles } from 'lucide-react';

import { SKILLS } from '../data/portfolioData';

function Skills({ skillsRef }) {
  return (
    <section id="technologies" ref={skillsRef} className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white light:text-slate-900 md:text-4xl">
            Expertise
          </h2>
          <div className="section-divider mt-4 h-1.5 w-20 rounded-full bg-cyan-500" />
          <p className="mt-4 max-w-2xl text-base text-slate-400 light:text-slate-600">
            A comprehensive toolkit of languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(group => {
            const isAI = group.category === 'AI & Automation';
            return (
              <div
                key={group.category}
                className={
                  isAI
                    ? 'skill-group glass relative overflow-hidden rounded-2xl p-6 ring-1 ring-cyan-500/30 md:col-span-2 lg:col-span-1'
                    : 'skill-group glass rounded-2xl p-6'
                }
              >
                {isAI && (
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-2xl" />
                )}
                <h3 className="mb-4 flex items-center gap-3 text-base font-bold text-white light:text-slate-900">
                  {isAI ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white">
                      <Sparkles size={12} />
                    </span>
                  ) : (
                    <span className="h-5 w-1 rounded-full bg-cyan-500" />
                  )}
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item =>
                    isAI ? (
                      <span
                        key={item}
                        className="skill-chip rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-300 light:text-cyan-700"
                      >
                        {item}
                      </span>
                    ) : (
                      <span
                        key={item}
                        className="skill-chip rounded-lg border border-slate-700/30 bg-slate-800/40 px-3 py-1.5 text-sm font-semibold text-slate-300 light:border-slate-200 light:bg-slate-100 light:text-slate-700"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
