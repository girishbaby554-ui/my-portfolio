import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layout,
  Medal,
  Presentation,
  Server,
  Trophy,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Girish Thummalapalli',
  shortName: 'Girish',
  initials: 'GT',
  title: 'Full Stack Developer',
  intro:
    "I'm Girish, a B.Tech Computer Science and Artificial Intelligence student passionate about programming, web development, artificial intelligence, and building innovative digital solutions.",
  photoUrl: `${import.meta.env.BASE_URL}profile.jpg`,
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  email: 'your.email@example.com',
  githubUrl: 'https://github.com/girishbaby554-ui',
  linkedinUrl: '',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const;

export const SECTION_IDS = ['home', ...navLinks.map((link) => link.id)];

export const aboutParagraphs = [
  'I am pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at Joy University. My studies combine core computing concepts with applied artificial intelligence, giving me a solid base for building software that is both useful and well engineered.',
  'Web development is where I enjoy spending the most time. I like turning ideas into interfaces people can use, and I am working to understand the full journey from the screen a user sees to the server and database behind it.',
];

export const interests = [
  'Programming',
  'Web Development',
  'Artificial Intelligence',
  'Problem Solving',
  'Emerging Technology',
];

export const educationEntries = [
  {
    institution: 'Joy University',
    degree: 'B.Tech, Computer Science and Engineering (AI)',
    period: '2026 - 2030',
    details: 'Building a foundation in programming, data structures, web development, and artificial intelligence.',
  },
  {
    institution: 'Rayalaseema High School',
    degree: 'School Education',
    period: '',
    details: 'Completed my school education, where my interest in technology and problem solving began.',
  },
];

export const learningGoals = [
  'Master full stack development, from responsive interfaces to secure backend services.',
  'Apply machine learning and AI concepts to practical, real-world web applications.',
  'Build and ship projects that solve real problems, and contribute to open source.',
  'Grow into a professional Full Stack Developer ready for industry roles.',
];

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'The languages I use to write logic and build software.',
    icon: Code2,
    skills: ['Python', 'C', 'Java'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating responsive, accessible interfaces for the web.',
    icon: Layout,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Designing the server logic and APIs behind applications.',
    icon: Server,
    skills: ['Node.js', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database Technologies',
    description: 'Storing, querying, and organizing application data.',
    icon: Database,
    skills: ['SQL', 'PostgreSQL'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Core concepts and tools for building intelligent systems.',
    icon: BrainCircuit,
    skills: ['Machine Learning Basics', 'Python for Data'],
  },
  {
    id: 'soft',
    title: 'Communication & Problem Solving',
    description: 'The skills I bring to every team and project.',
    icon: Users,
    skills: ['Problem Solving', 'Teamwork', 'Clear Communication'],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Academic Project Title',
    description:
      'Describe the problem this project solves, what you built, and what you learned while building it.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'project-2',
    title: 'Personal Project Title',
    description:
      'Share the goal of this project, the key features you implemented, and the tools you used to bring it to life.',
    technologies: ['Technology 1', 'Technology 2'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
  },
];

export type AchievementCategory =
  | 'Certification'
  | 'Workshop'
  | 'Competition'
  | 'Award'
  | 'Academic'
  | 'Participation';

export const achievementIcons: Record<AchievementCategory, LucideIcon> = {
  Certification: BadgeCheck,
  Workshop: Presentation,
  Competition: Trophy,
  Award: Award,
  Academic: GraduationCap,
  Participation: Medal,
};

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: AchievementCategory;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Certification Title',
    organization: 'Issuing organization',
    date: 'Year',
    category: 'Certification',
  },
  {
    id: 'ach-2',
    title: 'Technical Workshop Title',
    organization: 'Host organization',
    date: 'Year',
    category: 'Workshop',
  },
  {
    id: 'ach-3',
    title: 'Coding Competition Name',
    organization: 'Event organizer',
    date: 'Year',
    category: 'Competition',
  },
  {
    id: 'ach-4',
    title: 'Award Title',
    organization: 'Awarding body',
    date: 'Year',
    category: 'Award',
  },
  {
    id: 'ach-5',
    title: 'Academic Achievement',
    organization: 'Joy University',
    date: 'Year',
    category: 'Academic',
  },
  {
    id: 'ach-6',
    title: 'Participation Certificate',
    organization: 'Event organizer',
    date: 'Year',
    category: 'Participation',
  },
];
