import type { Principles, Project, SkillCategory, Article } from '../types';

export const PERSONAL_DETAILS = {
  name: 'SHIVANK',
  fullName: 'Shivank',
  handle: '@codewith-shivank',
  title: 'CREATIVE DEVELOPER & FULL-STACK ENGINEER',
  subtitle: 'Building resilient full-stack systems and high-framerate interactive web experiences with editorial precision.',
  university: 'Technical Institute of Engineering & Technology',
  degree: 'B.Tech in Computer Science & Engineering',
  gradYear: '2024',
  status: 'AVAILABLE FOR SELECT CONTRACTS',
  availabilityDetails: 'Taking on design engineering & distributed full-stack projects for Q2/Q3 2026',
  bio: 'Specializing in the intersection of engineering rigor and cinematic digital craft. Over 4+ years architecting web applications, high-density dashboard telemetry, distributed messaging backends, and 60 FPS WebGL experiences. I treat interface fluidity, type hierarchy, and microsecond latency as first-class constraints.',
  location: 'GLOBAL / REMOTE (UTC+5:30)',
  email: 'codewithshivank@gmail.com',
  github: 'https://github.com/codewith-shivank',
  linkedin: 'https://linkedin.com/in/shivank-dev',
  twitter: 'https://x.com/codewithshivank',
  experienceYears: '4+ YEARS',
  codebaseCount: '80+ REPOS',
  timeZone: 'UTC+05:30 (IST)',
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'omnisync',
    title: 'OMNISYNC BROADCAST',
    subtitle: 'Distributed multi-tenant omnichannel broadcast & messaging platform',
    category: 'System',
    description: 'An enterprise-scale distributed messaging orchestration pipeline with Transactional Outbox, Redis Streams, BullMQ retries, dynamic adapter registry, and strict multi-tenant isolation.',
    problemSolved: 'Eliminated broadcast dual-write inconsistencies across WhatsApp, Telegram, Slack, and SMS by utilizing Canonical Message Format (CMF) with Saga compensating transactions.',
    tags: ['Node.js', 'TypeScript', 'Redis Streams', 'BullMQ', 'Socket.io', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/codewith-shivank/Portfolio',
    liveUrl: 'https://monodrift.framer.website/',
    featured: true,
    metrics: '120k msgs/sec · <12ms p99',
    stats: [
      { label: 'Throughput', value: '120,000 msg/s' },
      { label: 'P99 Latency', value: '11.8 ms' },
      { label: 'Reliability', value: '99.999%' },
      { label: 'Isolation', value: 'Tenant-Scoped' },
    ],
  },
  {
    id: 'aetheria-engine',
    title: 'AETHERIA CANVAS',
    subtitle: 'Procedural GPU shader playground & audio-reactive spatial WebGL runtime',
    category: 'Interactive / WebGL',
    description: 'A hardware-accelerated interactive canvas environment supporting audio FFT spectrum analysis, raymarched volumetric signed distance fields (SDF), and custom post-processing passes.',
    problemSolved: 'Engineered custom WebGL2 shader pipelines with zero memory allocations during render loops, sustaining a locked 60 FPS on high-DPI mobile devices.',
    tags: ['Three.js', 'WebGL2', 'GLSL', 'Web Audio API', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/codewith-shivank',
    liveUrl: 'https://monodrift.framer.website/',
    featured: true,
    metrics: 'Locked 60 FPS · 0ms GC pauses',
    stats: [
      { label: 'Framerate', value: '60 FPS stable' },
      { label: 'Draw Calls', value: '< 8 / frame' },
      { label: 'Audio Latency', value: '18 ms' },
      { label: 'Bundle Size', value: '42 kB gzip' },
    ],
  },
  {
    id: 'hyperscale-telemetry',
    title: 'HYPERSCALE CONSOLE',
    subtitle: 'High-density edge telemetry and real-time observability suite',
    category: 'Full-Stack',
    description: 'A technical operator command center rendering live streaming metrics, flamegraphs, distributed traces, and node health graphs via WebSocket multiplexing.',
    problemSolved: 'Replaced slow polling with binary delta WebSocket feeds, reducing dashboard bandwidth consumption by 84% while boosting update frequency to 60Hz.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'OpenTelemetry'],
    githubUrl: 'https://github.com/codewith-shivank',
    liveUrl: 'https://monodrift.framer.website/',
    featured: true,
    metrics: '50k events/sec · <15ms render cycle',
    stats: [
      { label: 'Live Ingestion', value: '50k evt/sec' },
      { label: 'UI Latency', value: '14.2 ms' },
      { label: 'Bandwidth Cut', value: '-84%' },
      { label: 'Memory Footprint', value: '18 MB' },
    ],
  },
  {
    id: 'monolith-design-system',
    title: 'MONOLITH DESIGN SYSTEM',
    subtitle: 'Headless component architecture & mathematical token compiler',
    category: 'Frontend',
    description: 'A battle-tested design system with accessible primitives, token generator for dark/light themes, keyboard navigation hooks, and zero-runtime CSS variables.',
    problemSolved: 'Standardized design language across 14 enterprise micro-frontends with 100% WCAG AAA contrast compliance and automatic semantic linting.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Storybook'],
    githubUrl: 'https://github.com/codewith-shivank',
    liveUrl: 'https://monodrift.framer.website/',
    featured: false,
    metrics: 'WCAG AAA · 14 Micro-frontends',
    stats: [
      { label: 'Test Coverage', value: '99.4%' },
      { label: 'Components', value: '48 primitives' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Tree-shakable', value: '100%' },
    ],
  },
  {
    id: 'neuropulse-ai',
    title: 'NEUROPULSE DSP',
    subtitle: 'Real-time client-side speech enhancement & streaming inference engine',
    category: 'System',
    description: 'In-browser neural noise reduction and transcription pipeline running quantized WebAssembly ONNX models directly on the client machine via WebGPU acceleration.',
    problemSolved: 'Achieved complete offline privacy and eliminated server compute fees for audio processing by offloading neural DSP to client hardware.',
    tags: ['WebGPU', 'Wasm', 'ONNX Runtime', 'Web Audio API', 'TypeScript'],
    githubUrl: 'https://github.com/codewith-shivank',
    liveUrl: 'https://monodrift.framer.website/',
    featured: false,
    metrics: '85ms inference · 100% local privacy',
    stats: [
      { label: 'Inference Time', value: '85 ms' },
      { label: 'Model Size', value: '12.4 MB' },
      { label: 'Privacy', value: 'Zero Cloud Calls' },
      { label: 'Noise Reduction', value: '-28 dB' },
    ],
  },
  {
    id: 'veloce-commerce',
    title: 'VELOCE COMMERCE',
    subtitle: 'Sub-second headless e-commerce store with optimistic mutations',
    category: 'Frontend',
    description: 'An ultra-fast headless storefront with instantaneous page transitions, optimistic cart sync, edge worker rendering, and automated image palette extractors.',
    problemSolved: 'Elevated mobile checkout completion rate by 34% by eliminating layout shifts and caching localized catalog fragments at Cloudflare edge workers.',
    tags: ['React 19', 'Next.js', 'Tailwind CSS', 'Stripe', 'Edge Workers', 'Lenis'],
    githubUrl: 'https://github.com/codewith-shivank',
    liveUrl: 'https://monodrift.framer.website/',
    featured: false,
    metrics: '99.8 Lighthouse · +34% checkout conversion',
    stats: [
      { label: 'Performance', value: '100 / 100' },
      { label: 'TTFB', value: '42 ms' },
      { label: 'Cart Latency', value: '0 ms (Optimistic)' },
      { label: 'Conversion Lift', value: '+34%' },
    ],
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Frontend & Interactive',
    categoryCode: 'FE-01',
    description: 'High-framerate rendering, design systems, and responsive editorial craft.',
    skills: [
      { name: 'React 19 & Next.js', level: 'Proficient', highlight: true },
      { name: 'TypeScript Strict', level: 'Proficient', highlight: true },
      { name: 'Tailwind CSS v4', level: 'Proficient', highlight: true },
      { name: 'Framer Motion & Lenis', level: 'Proficient', highlight: true },
      { name: 'Three.js & WebGL', level: 'Experienced', highlight: true },
      { name: 'Web Audio API & Canvas', level: 'Experienced' },
      { name: 'Component Architecture', level: 'Proficient' },
      { name: 'WCAG AAA Accessibility', level: 'Experienced' },
    ],
  },
  {
    title: 'Backend & Distributed Systems',
    categoryCode: 'BE-02',
    description: 'Event-driven architectures, transactional pipelines, and reliable APIs.',
    skills: [
      { name: 'Node.js & Express / Fastify', level: 'Proficient', highlight: true },
      { name: 'PostgreSQL & MongoDB', level: 'Proficient', highlight: true },
      { name: 'Redis Streams & BullMQ', level: 'Experienced', highlight: true },
      { name: 'WebSockets & Real-time (Socket.io)', level: 'Proficient', highlight: true },
      { name: 'REST & GraphQL APIs', level: 'Proficient' },
      { name: 'Transactional Outbox & Sagas', level: 'Experienced' },
      { name: 'Idempotency & Replay Protection', level: 'Experienced' },
      { name: 'Distributed Caching', level: 'Proficient' },
    ],
  },
  {
    title: 'Architecture & Tooling',
    categoryCode: 'DEV-03',
    description: 'DevOps workflows, performance telemetry, and modern build toolchains.',
    skills: [
      { name: 'Vite & Modern Bundlers', level: 'Proficient', highlight: true },
      { name: 'Docker & Containerization', level: 'Experienced', highlight: true },
      { name: 'Git & Trunk-based Delivery', level: 'Proficient' },
      { name: 'OpenTelemetry & Tracing', level: 'Experienced' },
      { name: 'CI/CD Automated Pipelines', level: 'Proficient' },
      { name: 'Linux & Cloud Environments', level: 'Proficient' },
      { name: 'Lighthouse & Web Vitals', level: 'Proficient', highlight: true },
      { name: 'Figma to Production Code', level: 'Proficient' },
    ],
  },
];

export const DEVELOPMENT_PRINCIPLES: Principles[] = [
  {
    number: '01',
    title: 'RESEARCH & ARCHITECTURE',
    summary: 'Clear boundaries, mathematical performance budgets, and deterministic contracts.',
    details: 'Before writing UI or controllers, I map out state machines, data flow models, and network boundaries. We establish tight performance budgets (<100kB JS, <50ms TTI) so the software remains fast forever.',
  },
  {
    number: '02',
    title: 'TACTILE MOTION & DESIGN',
    summary: 'Cinematic typography, high-density layouts, and zero-jank micro-interactions.',
    details: 'Interfaces should feel physical and immediate. We use spring physics, bespoke cubic-bezier easings, and strict monospace telemetry to provide unambiguous visual feedback for every human gesture.',
  },
  {
    number: '03',
    title: 'ENGINEERING & RESILIENCE',
    summary: 'Strict TypeScript, transactional integrity, and fault-tolerant pipelines.',
    details: 'Software lives in a chaotic world of dropped packets and server restarts. We build with idempotency, exponential backoff with jitter, dead letter handling, and strict TypeScript types.',
  },
  {
    number: '04',
    title: 'PRODUCTION & VERIFICATION',
    summary: 'Lighthouse 100 audits, automated validation, and continuous telemetry.',
    details: 'A feature is not finished when it runs on localhost. It is finished when telemetry proves it behaves reliably under high traffic, passes accessibility tests, and delights real human users.',
  },
];

export const NOTES_ARTICLES: Article[] = [
  {
    id: 'note-01',
    slug: 'zero-latency-optimistic-ui',
    title: 'THE GEOMETRY OF ZERO-LATENCY OPTIMISTIC UIS',
    excerpt: 'How to design deterministic client state that anticipates backend consensus without rolling back awkwardly.',
    date: 'MARCH 2026',
    readTime: '6 MIN READ',
    category: 'FRONTEND ARCHITECTURE',
    content: `When building high-density applications, waiting for roundtrip HTTP requests makes software feel sluggish and disconnected from human thought. Optimistic updates bridge this chasm by executing user intent locally before the server confirms it.

However, naive optimistic implementations suffer from rollback flicker and race conditions when multiple actions overlap. In this note, we examine the event-sourcing pattern applied to client state: maintaining an invariant baseline snapshot, an in-flight optimistic mutation queue, and a deterministic reconciler.

By treating state mutations as reversible vectors rather than mutable blobs, our UIs achieve true zero-latency responsiveness while preserving strict data integrity.`,
  },
  {
    id: 'note-02',
    slug: 'transactional-outbox-redis-streams',
    title: 'RESILIENT MESSAGE ORCHESTRATION WITH REDIS STREAMS',
    excerpt: 'Eliminating dual-write failures in distributed event architectures using the Transactional Outbox pattern.',
    date: 'JANUARY 2026',
    readTime: '8 MIN READ',
    category: 'DISTRIBUTED SYSTEMS',
    content: `Every distributed system faces the classic dual-write dilemma: updating a local database record while publishing an event to a message broker. If either step fails, the system enters an inconsistent, corrupted state.

The Transactional Outbox pattern solves this by writing the outgoing event into the primary database within the same atomic ACID transaction as the business operation. A background relay daemon then reliably tails the outbox table and streams records to Redis Streams or BullMQ.

With Redis Consumer Groups, automatic acknowledgment ack handling, and exponential backoff with jitter, message delivery becomes completely resilient to process crashes and temporary network partitions.`,
  },
  {
    id: 'note-03',
    slug: '60fps-webgl-shader-craft',
    title: 'COMPUTING KINETIC LIGHT: 60 FPS SHADERS ON MOBILE',
    excerpt: 'Techniques for writing branchless fragment shaders, minimizing GPU register pressure, and managing WebGL contexts.',
    date: 'NOVEMBER 2025',
    readTime: '5 MIN READ',
    category: 'CREATIVE TECH',
    content: `Rendering complex volumetric lights and interactive mathematical waveforms in mobile browsers requires extreme GPU discipline. Branching statements in fragment shaders cause warp divergence, destroying parallel performance.

By converting conditional logic into mathematical step functions, using signed distance fields (SDF), and keeping shader registers tight, we can render cinematic visuals with zero frame drops. Furthermore, binding our render loop to requestAnimationFrame with lerp stabilization ensures silk-smooth motion even on high-refresh 120Hz displays.`,
  },
];

export const AWARDS_LIST = [
  { award: 'Site of the Day', org: 'Awwwards', year: '2025', project: 'Monodrift Aesthetic' },
  { award: 'Best UI / Creative Dev', org: 'CSS Design Awards', year: '2025', project: 'Aetheria Canvas' },
  { award: 'Developer of the Year Nominee', org: 'Awwwards', year: '2024', project: 'OmniSync System' },
  { award: 'FWA of the Day', org: 'FWA', year: '2024', project: 'HyperScale Console' },
  { award: 'Special Kudos & Innovation', org: 'Mindsparkle Mag', year: '2024', project: 'Design Token Engine' },
];

export const STATS_METRICS = [
  {
    number: '78+',
    label: 'COMPLETED PROJECTS',
    description: 'Delivered web applications, interactive canvases, and distributed systems.',
  },
  {
    number: '24h',
    label: 'AVERAGE TURNAROUND',
    description: 'Rapid sprint velocity and immediate prototype delivery for active engagements.',
  },
  {
    number: '95%',
    label: 'CLIENT RETENTION',
    description: 'Long-term partners returning for follow-up builds and platform expansions.',
  },
  {
    number: '100%',
    label: 'ORGANIC REFERRALS',
    description: 'Direct engineer-to-engineer recommendations driven by craft and reliability.',
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: '"Shivank built our core distributed messaging pipeline with precision we rarely see. The architecture handled 100k+ events during our launch without a single drop. Clean, typed, and brilliantly documented."',
    name: 'Marcus Vance',
    title: 'CTO | SYNAPSE PROTOCOL',
    initials: 'MV',
  },
  {
    quote: '"Working with Shivank felt like having a principal engineer and a world-class motion designer combined into one. The UI is cinematic, 60fps locked, and developers on our team loved the code structure."',
    name: 'Elena Rostova',
    title: 'VP OF PRODUCT | NEXUS LABS',
    initials: 'ER',
  },
  {
    quote: '"He stayed close through the entire release — edge cases, error states, and microsecond performance tuning. It shipped on time and won Site of the Day on Awwwards."',
    name: 'Julian Chen',
    title: 'FOUNDER | AETHER DESIGN',
    initials: 'JC',
  },
  {
    quote: '"Feedback cycles dropped from days to hours. Shivank understands both high-level system design and pixel-perfect design token execution. Simply extraordinary work."',
    name: 'Sarah Lindqvist',
    title: 'DESIGN DIRECTOR | NORSKIN',
    initials: 'SL',
  },
];

export const COLOR_PALETTES = [
  { name: 'Volt Green (Default)', hex: '#52ff9d', darkHex: '#3dcc7d' },
  { name: 'Cyber Cyan', hex: '#00f0ff', darkHex: '#00c2cf' },
  { name: 'Acid Lime', hex: '#d4ff00', darkHex: '#a8cc00' },
  { name: 'Neon Violet', hex: '#b565ff', darkHex: '#9335eb' },
  { name: 'Blaze Orange', hex: '#ff6332', darkHex: '#d84414' },
  { name: 'Crimson Pulse', hex: '#ff3366', darkHex: '#cc1a49' },
  { name: 'Pure White', hex: '#ffffff', darkHex: '#e0e0e0' },
];
