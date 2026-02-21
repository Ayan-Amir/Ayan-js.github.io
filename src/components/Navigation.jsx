import resumeFile from '../assets/resume/Ayyan-Amir-Resume.pdf';
import { NAV_LINKS } from '../data/portfolioData';

function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a className="text-xl font-bold tracking-tight transition-all hover:text-cyan-400" href="#home">
          Ayyan Amir<span className="text-cyan-500">.</span>
        </a>
        <nav>
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
      </div>
    </header>
  );
}

export default Navigation;
