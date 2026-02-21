import { SKILLS } from '../data/portfolioData';

function Skills({ skillsRef }) {
  return (
    <section id="technologies" ref={skillsRef} className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Expertise</h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-cyan-500" />
          <p className="mt-6 max-w-2xl text-xl text-slate-400">
            A comprehensive toolkit of languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(group => (
            <div
              key={group.category}
              className="skill-group glass group rounded-3xl p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/60"
            >
              <h3 className="mb-6 text-xl font-bold text-white flex items-center gap-3">
                <span className="h-6 w-1 bg-cyan-500 rounded-full transition-all group-hover:h-8" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-800/40 px-3 py-1.5 text-sm font-semibold text-slate-300 border border-slate-700/30 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
