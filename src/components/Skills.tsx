import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 bg-zinc-50 py-24 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="What I work with"
            description="A snapshot of the languages, tools, and strengths I bring to my projects."
          />
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <li key={group.id}>
                <Reveal delay={index * 80} className="h-full">
                  <article className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white transition-transform duration-300 group-hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
                    <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-400">{group.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
