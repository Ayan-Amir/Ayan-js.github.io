import { ABOUT, HERO } from '../data/portfolioData';

function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef} className="relative py-16 overflow-hidden">
      {/* Section specific glow */}
      <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white light:text-slate-900 md:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div id="about-content" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-40 blur-md" />
                <img
                  src={ABOUT.photo}
                  alt="Ayyan Amir"
                  className="relative h-20 w-20 rounded-full object-cover ring-2 ring-cyan-500/50"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white light:text-slate-900">{HERO.title}</p>
                <p className="text-sm text-slate-400 light:text-slate-600">{HERO.role}</p>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-300 light:text-slate-700 md:text-lg">
              <p className="font-medium text-white/90 light:text-slate-900">{ABOUT.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {ABOUT.highlights.map(item => (
                <div key={item.label} className="glass rounded-2xl p-5 text-center border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-500/70 mb-2">{item.label}</p>
                  <p className="text-lg font-black text-white light:text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2 ml-2">What I Do</h3>
            <div className="space-y-4">
              {ABOUT.services.map(service => (
                <div key={service.title} className="glass rounded-2xl p-6 border-white/5">
                  <h4 className="text-base font-bold text-white light:text-slate-900">{service.title}</h4>
                  <p className="mt-2 text-sm text-slate-400 light:text-slate-600 leading-relaxed">{service.desc}</p>
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
