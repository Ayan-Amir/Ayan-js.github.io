import { Calendar, Code, Coffee, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { CONTACT } from '../data/portfolioData';

const CONTACT_ICONS = { GitHub: Github, LinkedIn: Linkedin, 'Stack Overflow': Code };

function Contact({ contactRef }) {
  return (
    <section id="contact" ref={contactRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-5">
            {/* Left Column: Direct Contact */}
            <div className="lg:col-span-3 p-12 md:p-16 lg:border-r border-slate-800/50">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s build <br />
                <span className="text-gradient">something great.</span>
              </h2>
              <p className="mt-8 max-w-lg text-xl text-slate-400">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision. Reach out through any of these channels.
              </p>

              <div className="mt-12 space-y-8">
                <a href={`mailto:${CONTACT.email} `} className="contact-item group flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-base font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                    <p className="text-2xl font-medium text-white transition-colors group-hover:text-cyan-400">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')} `}
                  className="contact-item group flex items-center gap-6"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-base font-bold uppercase tracking-widest text-slate-500">Call Me</p>
                    <p className="text-2xl font-medium text-white transition-colors group-hover:text-indigo-400">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-16 pt-12 border-t border-slate-800/50">
                <p className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6">Social Profiles</p>
                <div className="flex gap-4">
                  {CONTACT.links.map(link => {
                    const Icon = CONTACT_ICONS[link.name] || Github;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
                        aria-label={link.name}
                      >
                        <Icon size={24} className="transition-transform group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="lg:col-span-2 relative flex items-center justify-center p-12 md:p-16 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
              <div className="relative text-center">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <Coffee size={40} className="text-cyan-400 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-white">Let&apos;s grab a coffee.</h3>
                <p className="mt-4 text-slate-400">
                  Prefer a quick face-to-face? <br />
                  Schedule a 15-minute call directly.
                </p>
                <a
                  href={CONTACT.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-5 font-black text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
                >
                  <Calendar size={20} />
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
