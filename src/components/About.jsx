import { ABOUT } from '../data/portfolioData';

function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef} className="relative py-32 overflow-hidden">
      {/* Section specific glow */}
      <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">About Me</h2>
          <div className="mt-6 h-2 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div id="about-content" className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6 text-xl leading-relaxed text-slate-300 md:text-2xl">
              <p className="font-medium text-white/90">{ABOUT.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {ABOUT.highlights.map(item => (
                <div
                  key={item.label}
                  className="glass rounded-[2rem] p-8 text-center border-white/5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/40"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-500/70 mb-3">{item.label}</p>
                  <p className="text-2xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-white mb-2 ml-2">What I Do</h3>
            <div className="space-y-6">
              {ABOUT.services.map(service => (
                <div
                  key={service.title}
                  className="glass group rounded-3xl p-8 border-white/5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900/60"
                >
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-lg text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
