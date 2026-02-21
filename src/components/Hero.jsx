import { FileText, Mail } from 'lucide-react';

import resumeFile from '../assets/resume/Ayyan-Amir-Resume.pdf';
import { HERO } from '../data/portfolioData';

function Hero({ heroRef }) {
  return (
    <main id="home" ref={heroRef} className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="hero-sub mb-6 text-xl font-bold tracking-[0.2em] text-cyan-500 uppercase">{HERO.role}</p>
          <h1 className="hero-title text-6xl font-black tracking-tight text-white md:text-8xl lg:text-9xl">
            {HERO.title}
          </h1>
          <p className="hero-role mt-8 text-2xl font-semibold text-slate-200 md:text-3xl">
            Crafting <span className="text-gradient">{HERO.tagline}</span>
          </p>
          <p className="hero-desc mt-8 text-xl leading-relaxed text-slate-400 md:text-2xl">{HERO.intro}</p>
          <div className="hero-cta mt-12 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="hero-cta-button inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Contact Me
              <Mail size={20} />
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 font-bold text-white transition-all hover:border-cyan-500/50 hover:bg-slate-800"
            >
              Resume
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
