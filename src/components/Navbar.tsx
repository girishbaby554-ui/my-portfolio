import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SECTION_IDS, navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS, 'home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-zinc-900 after:transition-transform after:duration-300 dark:after:bg-white ${
      activeId === id
        ? 'text-zinc-900 after:scale-x-100 dark:text-white'
        : 'text-zinc-600 after:scale-x-0 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90'
          : 'border-b border-transparent bg-white dark:bg-zinc-950 md:bg-transparent md:dark:bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg text-zinc-900 dark:text-zinc-50"
          aria-label={`${profile.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
            {profile.initials}
          </span>
          <span className="hidden font-semibold tracking-tight sm:inline">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={linkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950 md:hidden ${
          menuOpen ? 'max-h-96 border-b opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                activeId === link.id
                  ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
