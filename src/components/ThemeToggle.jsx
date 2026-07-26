import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ label }) {
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
      className={
        label
          ? 'group flex items-center gap-3 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400 light:text-slate-600 light:hover:text-cyan-600'
          : 'flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 light:border-slate-300 light:text-slate-600 light:hover:border-cyan-500/50 light:hover:text-cyan-600'
      }
    >
      {label ? (
        <>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-colors group-hover:border-cyan-500/50 light:border-slate-300">
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </span>
          <span>{label}</span>
        </>
      ) : isLight ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>
  );
}

export default ThemeToggle;
