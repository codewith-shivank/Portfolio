export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Interactive / WebGL' | 'System';
  description: string;
  problemSolved: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  categoryCode: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g., 'Proficient', 'Experienced', 'Exploring'
    highlight?: boolean;
  }[];
}

export interface Principles {
  number: string;
  title: string;
  summary: string;
  details: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

