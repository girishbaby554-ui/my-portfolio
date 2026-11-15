import { ArrowRight, Download, Github } from 'lucide-react';
import { useState } from 'react';
import ActionLink from '@/components/ActionLink';
import { profile } from '@/data/portfolio';

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-zinc-100 dark:bg-zinc-900" aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200 shadow-2xl ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900">
            <span className="text-6xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200">{profile.initials}</span>
          </div>
        ) : (
          <img
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
      <div className="absolute -bottom-5 -left-4 right-4 rounded-2xl border border-zinc-200 bg-white/95 px-5 py-4 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95 sm:-left-8 sm:right-auto sm:w-72">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">B.Tech CSE (AI)</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Joy University, 2026 - 2030</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden scroll-mt-16 bg-white pb-20 pt-28 dark:bg-zinc-950 md:flex md:min-h-screen md:items-center"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-zinc-100 opacity-70 blur-3xl dark:bg-zinc-900"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 md:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up space-y-6 text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-success-500" aria-hidden="true" />
            Computer Science and AI Student
          </p>
          <div className="space-y-3">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </h1>
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400 sm:text-2xl">{profile.title}</p>
          </div>
          <p className="mx-auto max-w-xl text-base leading-normal text-zinc-600 dark:text-zinc-400 sm:text-lg md:mx-0">
            {profile.intro}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <ActionLink href="#projects" label="View My Projects" icon={ArrowRight} />
            <ActionLink href="#contact" label="Contact Me" variant="outline" />
          </div>
          <div className="flex flex-col items-center gap-4 pt-2 text-sm sm:flex-row sm:justify-center md:justify-start">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub Profile
            </a>
            <span className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:inline-block" aria-hidden="true" />
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fade-up pb-6 [animation-delay:150ms] md:pb-0">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
