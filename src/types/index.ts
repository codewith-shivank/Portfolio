/**
 * Structural type definitions mirroring the MONODRIFT® reference template:
 * Home page → Projects, Clients, Showreel, Expertise, Results, Manifesto,
 * Process, Client Words, Pricing, FAQ, Notes, Contact and Footer.
 */

export interface NavLink {
  num: string;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: number;
  total: number;
  name: string;
  discipline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ClientLogo {
  id: string;
  src: string;
  label: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  projects: string;
  headline: string;
  body: string;
  shareLabel: string;
  share: number;
  note: string;
  image: string;
  imageAlt: string;
}

export interface StatMetric {
  id: string;
  number: string;
  label: string;
  digits: number[];
  unit: string;
  caption: string;
}

export interface StatMeta {
  label: string;
  value: string;
}

export interface Award {
  year: string;
  house: string;
  award: string;
  times: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  blurb: string;
  cta: string;
  highlight: boolean;
}

export interface PlanFeature {
  label: string;
  standard: string;
  pro: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  body: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
  meta: string;
}

export interface ProcessTab {
  id: string;
  label: string;
  headline: string;
  outcome: string;
  closing: [string, string];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Note {
  id: string;
  title: string;
  slug: string;
  image: string;
}

export interface ContactQuestion {
  id: string;
  number: string;
  title: string;
  hint: string;
  kind: 'options' | 'text' | 'email' | 'textarea';
  placeholder?: string;
  options?: string[];
}

export interface ContactChannel {
  id: string;
  eyebrow: string;
  value: string;
  href?: string;
  lines: string[];
  note: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
