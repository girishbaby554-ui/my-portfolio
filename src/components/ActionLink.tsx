import type { LucideIcon } from 'lucide-react';

interface ActionLinkProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: 'solid' | 'outline';
  download?: boolean;
  className?: string;
}

const variantClasses = {
  solid:
    'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200',
  outline:
    'border border-zinc-300 text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-300 dark:hover:bg-zinc-900',
};

export default function ActionLink({
  href,
  label,
  icon: Icon,
  variant = 'solid',
  download,
  className = '',
}: ActionLinkProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Link not added yet"
        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {label}
      </span>
    );
  }

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      download={download || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={base}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {label}
    </a>
  );
}
