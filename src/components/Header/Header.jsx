import { useState, useCallback } from 'react';

import { Menu, X } from 'lucide-react';

import { NAV_LINKS } from '../../data/portfolioData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/90 backdrop-blur-sm border-b border-slate-700">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-full">
        <a href="#home" className="text-xl font-bold text-slate-50 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2">
          Ayyan Amir
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-slate-50 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="main-nav"
          className={`absolute top-full left-0 right-0 md:static bg-slate-900 md:bg-transparent border-b md:border-0 border-slate-700 overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-4 md:py-0 md:px-0 font-medium text-slate-400 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded"
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
