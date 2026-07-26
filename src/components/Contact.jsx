import { Calendar, Code, Coffee, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { CONTACT } from '../data/portfolioData';

const CONTACT_ICONS = { GitHub: Github, LinkedIn: Linkedin, 'Stack Overflow': Code };

function Contact({ contactRef }) {
  return (
    <section id="contact" ref={contactRef} className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 backdrop-blur-2xl light:border-slate-200 light:bg-white">
          <div className="grid lg:grid-cols-5">
            {/* Left Column: Direct Contact */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:border-r border-slate-800/50 light:border-slate-200">
              <h2 className="text-2xl font-bold tracking-tight text-white light:text-slate-900 md:text-3xl lg:text-4xl">
                Let&apos;s build <br />
                <span className="text-gradient">something great.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base text-slate-400 light:text-slate-600">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision. Reach out through any of these channels.
              </p>

              <div className="mt-8 space-y-6">
                <a href={`mailto:${CONTACT.email}`} className="contact-item group flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 transition-colors group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                    <p className="text-lg font-medium text-white light:text-slate-900 transition-colors group-hover:text-cyan-400">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="contact-item group flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Call Me</p>
                    <p className="text-lg font-medium text-white light:text-slate-900 transition-colors group-hover:text-indigo-400">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/50 light:border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Social Profiles</p>
                <div className="flex gap-3">
                  {CONTACT.links.map(link => {
                    const Icon = CONTACT_ICONS[link.name] || Github;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 light:border-slate-200 light:bg-white"
                        aria-label={link.name}
                      >
                        <Icon size={20} className="transition-transform " />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="lg:col-span-2 relative flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl light:bg-slate-100 light:border-slate-200">
                  <Coffee size={30} className="text-cyan-400 " />
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">Let&apos;s grab a coffee.</h3>
                <p className="mt-3 text-sm text-slate-400 light:text-slate-600">
                  Prefer a quick face-to-face? <br />
                  Schedule a 15-minute call directly.
                </p>
                <a
                  href={CONTACT.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition-colors hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] light:border light:border-slate-200"
                >
                  <Calendar size={18} />
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
