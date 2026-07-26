import { FileText, Mail } from 'lucide-react';

import resumeFile from '../assets/resume/Ayyan-Amir-Resume.pdf';
import { HERO } from '../data/portfolioData';

function Hero({ heroRef }) {
  return (
    <section id="home" ref={heroRef} className="relative flex min-h-[70vh] items-center pt-24 pb-16 overflow-hidden">
      <div className="ai-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="hero-sub mb-4 text-base font-bold tracking-[0.2em] text-cyan-500 uppercase">{HERO.role}</p>
          <h1 className="hero-title text-4xl font-black tracking-tight text-white light:text-slate-900 md:text-6xl lg:text-7xl">
            {HERO.title}
          </h1>
          <p className="hero-role mt-6 text-lg font-semibold text-slate-200 light:text-slate-700 md:text-xl">
            Crafting <span className="text-gradient">{HERO.tagline}</span>
          </p>

          <p className="hero-desc mt-8 text-base leading-relaxed text-slate-400 light:text-slate-600 md:text-lg">
            {HERO.intro}
          </p>
          <div className="hero-cta mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="hero-cta-button inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Contact Me
              <Mail size={18} />
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-500/50 hover:bg-slate-800 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
            >
              Resume
              <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
