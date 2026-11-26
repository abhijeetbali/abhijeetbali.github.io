
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullContent?: string;
  imageUrl?: string;
  link?: string; // External link
  metric?: string; // Headline number shown on the card cover, e.g. "+95%"
  metricLabel?: string; // What the metric measures, e.g. "product redemptions"
  role?: string; // Your role on the project
  date: string;
  client?: string;
  tags?: string[];
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  url: string;
  caption: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon?: string;
  project?: string; // project id (file name in src/projects) to link to
}

export interface Certification {
  name: string;
  issuer?: string;
  url?: string;
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  location: string;
  current?: { title: string; company: string };
  resume?: string;
  stats: Stat[];
  experienceLine?: string;
  useCases: UseCase[];
  certifications: Certification[];
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    lightning?: string;
    wandb?: string;
    huggingface?: string;
    steam?: string;
  };
  hero: {
    heading: string; // The main static text (e.g. "Architecting")
    aboutHeading: string; // Used on Home page about section
    rotatingTexts: string[];
    subheading: string;
  };
  about: {
    short: string; // Used on Home page (shortBio from markdown)
    long: string; // Markdown content for About page
  };
  tagline: string; // Blue text on About page
  profileImage: string; // Profile photo URL
  achievements: Achievement[]; // Slider images
  contact: {
    formspreeId: string;
    googleAnalyticsId?: string;
  };
}
