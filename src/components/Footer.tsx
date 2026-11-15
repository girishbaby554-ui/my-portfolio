import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
