interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-700 dark:text-accent-300">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold leading-[1.2] text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-normal text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  );
}
