import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import resumeFile from '../assets/resume/Ayyan-Amir-Resume.pdf';
import { NAV_LINKS } from '../data/portfolioData';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          className="text-xl font-bold tracking-tight transition-all hover:text-cyan-400"
          href="#home"
          onClick={closeMenu}
        >
          Ayyan Amir<span className="text-cyan-500">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-slate-400 transition-colors hover:text-cyan-400"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="text-slate-300 transition-colors hover:text-cyan-400 md:hidden"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="glass-header border-t border-slate-800/50 md:hidden">
          <ul className="flex flex-col gap-2 px-6 py-6">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 text-lg font-medium text-slate-300 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block py-2 text-lg font-medium text-slate-300 transition-colors hover:text-cyan-400"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
