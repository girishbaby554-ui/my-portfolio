import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const content = (
    <>
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-white dark:group-hover:text-zinc-900">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{label}</span>
        <span className="mt-1 block truncate font-medium text-zinc-900 dark:text-zinc-50">{value || 'Not added yet'}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className="flex items-center gap-4 opacity-60">{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 rounded-xl p-2 -m-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
    >
      {content}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 bg-white py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title="Let's build something together"
              description="Whether you have an opportunity, a question about my work, or an idea to explore, I would love to hear from you."
            />
            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={Github} label="GitHub" value="github.com/girishbaby554-ui" href={profile.githubUrl} />
              <ContactRow icon={Linkedin} label="LinkedIn" value={profile.linkedinUrl} href={profile.linkedinUrl} />
            </div>
            <p className="mt-10 border-l-2 border-zinc-900 pl-5 text-base leading-normal text-zinc-700 dark:border-zinc-100 dark:text-zinc-300">
              Thank you for visiting my portfolio. I look forward to learning, collaborating, and growing with you.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
