import { PROJECTS } from '../data/portfolioData';

function Projects({ projectsRef }) {
  return (
    <section id="projects" ref={projectsRef} className="relative py-16 overflow-hidden">
      {/* Section specific glow */}
      <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">Featured Projects</h2>
          <div className="mt-6 h-2 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className="project-card glass relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/5 p-8"
            >
              <div className="relative z-10 mb-8 flex flex-col h-full">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="mb-4 text-sm font-medium tracking-wide text-indigo-400/80 uppercase">
                  {project.subtitle}
                </p>
                <p className="text-slate-300 leading-relaxed flex-grow">{project.description}</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
                  >
                    {tag}
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

export default Projects;
