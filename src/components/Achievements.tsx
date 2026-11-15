import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { achievementIcons, achievements } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="scroll-mt-16 bg-zinc-50 py-24 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="achievements-heading"
            eyebrow="Achievements"
            title="Certifications, workshops, and milestones"
            description="Recognition and learning milestones from my academic journey."
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.category];
            return (
              <li key={achievement.id}>
                <Reveal delay={index * 80} className="h-full">
                  <article className="flex h-full items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700 dark:bg-zinc-800 dark:text-accent-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        {achievement.category}
                      </p>
                      <h3 className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">{achievement.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{achievement.organization}</p>
                      <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-500">{achievement.date}</p>
                    </div>
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
