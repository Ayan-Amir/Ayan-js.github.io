import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  return (
    <button
      type="button"
      onClick={() => setIsLight(light => !light)}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 light:border-slate-300 light:text-slate-600 light:hover:border-cyan-500/50 light:hover:text-cyan-600"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

export default ThemeToggle;
