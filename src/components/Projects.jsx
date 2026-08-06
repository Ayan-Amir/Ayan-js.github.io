import { ArrowUpRight, BarChart3, BookOpen, Building2, FileText, Home, MessageSquareText } from 'lucide-react';

import { PROJECTS } from '../data/portfolioData';

const PROJECT_ICONS = {
  MessageSquareText,
  BarChart3,
  BookOpen,
  Building2,
  FileText,
  Home,
};

function ProjectThumbnail({ project, Icon }) {
  if (project.image) {
    return (
      <div className="h-32 overflow-hidden bg-slate-950/60">
        <img
          src={project.image}
          alt={`${project.title} cover`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="relative h-32 overflow-hidden bg-slate-950/60 p-4 light:bg-slate-100">
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 light:bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 light:bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 light:bg-slate-300" />
      </div>
      <div className={`mt-3 h-2 w-2/5 rounded-full bg-gradient-to-r ${project.accent}`} />
      <div className="mt-2 h-1.5 w-4/5 rounded-full bg-slate-800 light:bg-slate-200" />
      <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-slate-800 light:bg-slate-200" />
      <Icon size={40} className={`absolute right-3 bottom-3 opacity-20 ${project.iconTint}`} />
    </div>
  );
}

function Projects({ projectsRef }) {
  return (
    <section id="projects" ref={projectsRef} className="relative py-16 overflow-hidden">
      {/* Section specific glow */}
      <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white light:text-slate-900 md:text-4xl">
            Featured Projects
          </h2>
          <div className="section-divider mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map(project => {
            const Icon = PROJECT_ICONS[project.icon] || FileText;
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={project.id}
                {...wrapperProps}
                className="project-card glass group flex flex-col overflow-hidden rounded-2xl border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <ProjectThumbnail project={project} Icon={Icon} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-1.5 flex items-start justify-between gap-4">
                    <h3 className="text-base font-bold text-white light:text-slate-900">{project.title}</h3>
                    {project.link ? (
                      <ArrowUpRight
                        size={16}
                        className="mt-0.5 shrink-0 text-slate-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
                      />
                    ) : (
                      <span className="mt-0.5 shrink-0 text-[10px] font-medium uppercase tracking-wide text-slate-600 light:text-slate-400">
                        Client project
                      </span>
                    )}
                  </div>
                  <p className="mb-2 text-xs font-medium tracking-wide text-indigo-400/80 uppercase">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map(tag =>
                      tag === 'AI' ? (
                        <span
                          key={tag}
                          className="project-tag rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 px-2.5 py-1 text-[11px] font-bold text-cyan-300 backdrop-blur-sm light:text-cyan-700"
                        >
                          {tag}
                        </span>
                      ) : (
                        <span
                          key={tag}
                          className="project-tag rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-sm light:bg-slate-100 light:text-slate-600"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
