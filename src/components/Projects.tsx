import { Code2, Github, ExternalLink } from 'lucide-react';
import ActionLink from '@/components/ActionLink';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { projects, type Project } from '@/data/portfolio';

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 text-zinc-500 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-700 dark:text-zinc-300">
      <Code2 className="h-10 w-10" aria-hidden="true" />
      <span className="text-xs font-medium uppercase tracking-widest">Screenshot coming soon</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 bg-white py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Selected work"
            description="Academic and personal projects where I apply what I am learning in code."
          />
        </Reveal>

        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={index * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="aspect-[16/9] overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                    <ProjectThumbnail project={project} />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                    <p className="mt-3 flex-1 leading-normal text-zinc-600 dark:text-zinc-400">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <ActionLink
                        href={project.liveUrl}
                        label="Live Demo"
                        icon={ExternalLink}
                        className="flex-1 sm:flex-none"
                      />
                      <ActionLink
                        href={project.githubUrl}
                        label="GitHub"
                        icon={Github}
                        variant="outline"
                        className="flex-1 sm:flex-none"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
