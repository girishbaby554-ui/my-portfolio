import { CheckCircle2, GraduationCap, Target } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
  aboutParagraphs,
  educationEntries,
  interests,
  learningGoals,
} from '@/data/portfolio';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 bg-white py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About Me"
            title="Learning to build technology that matters"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 100}>
                <p className="leading-normal text-zinc-600 dark:text-zinc-400">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="pt-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Interests
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Education</h3>
                </div>
                <ol className="relative space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
                  {educationEntries.map((entry) => (
                    <li key={entry.institution} className="relative">
                      <span
                        className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-900 bg-white dark:border-zinc-100 dark:bg-zinc-950"
                        aria-hidden="true"
                      />
                      {entry.period && (
                        <p className="text-sm font-medium text-accent-700 dark:text-accent-300">{entry.period}</p>
                      )}
                      <h4 className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">{entry.institution}</h4>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{entry.degree}</p>
                      <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-400">{entry.details}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl bg-zinc-900 p-6 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Target className="h-5 w-5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">Learning Goals and Career Aspirations</h3>
                </div>
                <ul className="space-y-4">
                  {learningGoals.map((goal) => (
                    <li key={goal} className="flex gap-3 text-sm leading-normal">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-300 dark:text-accent-700" aria-hidden="true" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
