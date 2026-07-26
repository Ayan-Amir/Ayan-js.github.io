import { ArrowUpRight, Award, Sparkles } from 'lucide-react';

import { CERTIFICATIONS } from '../data/portfolioData';

function Certifications({ certificationsRef }) {
  return (
    <section id="certifications" ref={certificationsRef} className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white light:text-slate-900 md:text-4xl">
            Certifications
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-cyan-500" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CERTIFICATIONS.map(cert => {
            const isAI = cert.issuer === 'Anthropic';
            const Wrapper = cert.link ? 'a' : 'div';
            const wrapperProps = cert.link
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={cert.id}
                {...wrapperProps}
                className={
                  isAI
                    ? 'cert-card glass group flex items-start gap-4 rounded-2xl p-6 ring-1 ring-indigo-500/30 transition-colors hover:border-indigo-500/30'
                    : 'cert-card glass group flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-cyan-500/30'
                }
              >
                <div
                  className={
                    isAI
                      ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white'
                      : 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400'
                  }
                >
                  {isAI ? <Sparkles size={20} /> : <Award size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-white light:text-slate-900">{cert.title}</h3>
                    {cert.link && (
                      <ArrowUpRight
                        size={18}
                        className="mt-0.5 shrink-0 text-slate-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
                      />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400 light:text-slate-600">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cert.skills.map(skill => (
                        <span
                          key={skill}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 light:bg-slate-100 light:text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
