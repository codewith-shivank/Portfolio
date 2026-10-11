/**
 * MONODRIFT® — site content.
 *
 * Transcribed from the reference build (https://monodrift.framer.website/) so the
 * structure here matches it section for section. Media is referenced from the
 * reference's own CDN; swap the URLs for local assets when the studio's own
 * photography is ready.
 */
import type {
  Award,
  ClientLogo,
  ContactChannel,
  ContactQuestion,
  ExpertiseItem,
  FaqItem,
  HowItWorksStep,
  NavLink,
  Note,
  Plan,
  PlanFeature,
  ProcessStep,
  ProcessTab,
  Project,
  SocialLink,
  StatMeta,
  StatMetric,
  Testimonial,
} from '../types';

const CDN = 'https://framerusercontent.com/images/';

/* ══════════════════════════════════════════════════════════════
   IDENTITY
   ══════════════════════════════════════════════════════════════ */
export const SITE = {
  brand: 'MONODRIFT',
  wordmark: 'MONODRIFT',
  descriptor: 'DIGITAL CREATIVE STUDIO',
  tagline: 'DIGITAL CREATIVE AGENCY',
  email: 'hello@monodrift.us',
  emailHref: 'mailto:hello@monodrift.us',
  phone: '(831) 555-0142',
  phoneHref: 'tel:+18315550142',
  addressLines: ['412 FRONT STREET, SUITE 3', 'SANTA CRUZ, CA 95060'],
  city: 'SANTA CRUZ, CA',
  hours: 'WEEKDAYS, NINE TO FIVE, PACIFIC.',
  kickoff: 'NOVEMBER 2026',
  replyTime: 'Within a working day',
  readBy: 'Rana Davis, Head of Operations',
};

export const NAV_LINKS: NavLink[] = [
  { num: '01', label: 'Work', href: '#work' },
  { num: '02', label: 'Expertise', href: '#expertise' },
  { num: '03', label: 'Results', href: '#results' },
  { num: '04', label: 'Process', href: '#process' },
  { num: '05', label: 'Client words', href: '#words' },
  { num: '06', label: 'Pricing', href: '#pricing' },
  { num: '07', label: 'FAQ', href: '#faq' },
  { num: '08', label: 'Notes', href: '#notes' },
  { num: '09', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'X (Twitter)', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
];

/* ══════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════ */
export const HERO = {
  eyebrow: 'DIGITAL CREATIVE STUDIO',
  headlineLines: [
    { text: 'WE BUILD', highlight: false },
    { text: 'WHAT', highlight: false },
    { text: 'PEOPLE', highlight: true },
    { text: 'REMEMBER', highlight: true },
    { text: 'AFTER THE', highlight: false },
    { text: 'TAB CLOSES.', highlight: false },
  ],
  subhead: 'Branding, web, campaigns and motion, made by one senior team from first call to launch.',
  cta: 'START A PROJECT',
  firstStep: 'FIRST STEP — A 30 MIN CALL',
  replyNote: 'Average reply 1 day',
  kickoffLabel: 'Next kickoff',
  kickoffSlots: [
    { month: 'SEP 2026', status: 'BOOKED', taken: true },
    { month: 'OCT 2026', status: 'BOOKED', taken: true },
  ],
  reserve: 'RESERVE',
  reserveNote: 'Pause or cancel anytime.',
  image: `${CDN}BkHz7mJGMMVlfTNcNn7lDxClIko.jpg?width=2000&height=1500`,
  imageAlt:
    'Black-and-white image of a person in dark clothing, wearing a cap and face covering, leaning forward with one arm extended.',
  imageCaption: 'MONODRIFT® — STUDIO REEL, FRAME 001',
};

/* ══════════════════════════════════════════════════════════════
   SELECTED WORK
   ══════════════════════════════════════════════════════════════ */
export const PROJECTS: Project[] = [
  {
    id: 'uno8',
    index: 1,
    total: 6,
    name: 'UNO8®',
    discipline: 'Digital flagship',
    description:
      'A DIGITAL FLAGSHIP BUILT FOR OUTERWEAR THAT WORKS AS HARD AS ITS WEARERS.',
    image: `${CDN}BkHz7mJGMMVlfTNcNn7lDxClIko.jpg?width=2000&height=1500`,
    imageAlt:
      'Black-and-white image of a person in dark clothing, wearing a cap and face covering, leaning forward with one arm extended.',
    href: '#work',
  },
  {
    id: 'skattr',
    index: 2,
    total: 6,
    name: 'SKATTR®',
    discipline: 'Campaign',
    description:
      'A CAMPAIGN AND DIGITAL LAUNCH SHOT WHERE SKATE CULTURE ACTUALLY LIVES.',
    image: `${CDN}nTb7kamE9BBQvv6OKPALwX4HuU.jpeg?width=2000&height=1500`,
    imageAlt:
      'Black-and-white street photo of a skateboarder standing on a palm-lined promenade with a skateboard and backpack.',
    href: '#work',
  },
  {
    id: 'mont-mercier',
    index: 3,
    total: 6,
    name: 'MONT MERCIER',
    discipline: 'Web & print shop',
    description:
      'A PORTFOLIO AND PRINT SHOP FOR A NATURE PHOTOGRAPHER WHO WORKS WHERE LIGHT BARELY REACHES.',
    image: `${CDN}gtdnvYcApj7t5OgQ35bqRDndYq4.jpg?width=1448&height=1086`,
    imageAlt: 'Black-and-white landscape photograph from the Mont Mercier portfolio.',
    href: '#work',
  },
  {
    id: 'casa-di-luce',
    index: 4,
    total: 6,
    name: 'CASA DI LUCE',
    discipline: 'Campaign',
    description: 'A CAMPAIGN SHAPED AROUND SOFTNESS, MOVEMENT, AND CONTROLLED LIGHT.',
    image: `${CDN}2Gj69rMEaEaOCiyvcBTpLKA7Xro.jpg?width=2000&height=1500`,
    imageAlt:
      'A young woman with dark hair, wearing orange sunglasses and a blue top, smiling broadly against a light blue background.',
    href: '#work',
  },
  {
    id: 'etoile-blanche',
    index: 5,
    total: 6,
    name: 'ÉTOILE BLANCHE',
    discipline: 'Digital flagship',
    description: 'A FLAGSHIP FOR A SKINCARE LINE BUILT AROUND TOUCH, NOT CLAIMS.',
    image: `${CDN}6r4wFHhihF8bXWQf92b6NSVkQ.jpg?width=2000&height=1500`,
    imageAlt:
      'Black-and-white portrait of a woman holding a small perfume bottle near her chest, wrapped in a draped white garment.',
    href: '#work',
  },
  {
    id: 'hawthorne',
    index: 6,
    total: 6,
    name: 'HAWTHORNE MOTORS®',
    discipline: 'Web',
    description:
      "A DIGITAL HOME FOR A BRITISH MARQUE'S RACING HERITAGE, BUILT TO SIT BESIDE THE CURRENT LINE-UP.",
    image: `${CDN}sRw0EU3OVEKNzj4FZrlWIDMGaM.jpg?width=2000&height=1500`,
    imageAlt:
      'Black-and-white sports car driving along a wet, winding road through a snowy forest.',
    href: '#work',
  },
];

export const WORK_INTRO = {
  index: '01',
  eyebrow: 'WHAT HAVE THEY SHIPPED?',
  heading: 'SIX OF THE LAST TWELVE. THE REST ON REQUEST.',
  intro:
    'Branding, web, campaigns and motion — every one of these was designed and built by the same hands that pitched it.',
  meta: [
    { label: 'Selected', value: '06 projects' },
    { label: 'Shipped since', value: '2021' },
  ] as StatMeta[],
  linkLabel: 'ALL PROJECTS',
};

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'logo-1', src: `${CDN}vhBTfRRvnPTX1m1ezVKqi4Qq8.svg`, label: 'Fieldnote' },
  { id: 'logo-2', src: `${CDN}ZF6iQwcgfEsxeASZszZ5FLB61s.svg`, label: 'Arcline' },
  { id: 'logo-3', src: `${CDN}nfh7UiCIOh3OnsNPbyFrXcAryw.svg`, label: 'Wendich' },
  { id: 'logo-4', src: `${CDN}tfdF2ctv06W5tonc9JW50BwFX5M.svg`, label: 'Northvale' },
  { id: 'logo-5', src: `${CDN}4tbSpTmfFpyA45TaPVxiNknhPeA.svg`, label: 'Norrsken' },
  { id: 'logo-6', src: `${CDN}PnpCJQYoW2b4jY0KIDldv8AERBk.svg`, label: 'Clearspace' },
];

export const CLIENTS_COPY = {
  heading: 'WHO HAVE THEY WORKED WITH?',
  note: 'Most of them found us through the last project we shipped.',
};

/* ══════════════════════════════════════════════════════════════
   SHOWREEL
   ══════════════════════════════════════════════════════════════ */
export const SHOWREEL = {
  label: 'SHOWREEL 2025 – 2026',
  caption: 'Are they any good? Judge for yourself.',
  meta: 'WATCH REEL, 54 seconds. No talking heads.',
  runtime: '54 seconds. No talking heads.',
  headline: 'WATCH REEL',
  close: 'Close showreel',
  poster: `${CDN}8tcBUMAv8qU00CkQwUfgdg2kg.jpg?width=1600&height=1035`,
  posterAlt:
    'Black-and-white image of a person wearing sunglasses and dark clothing, leaning backward at an angle against a plain grey background.',
};

/* ══════════════════════════════════════════════════════════════
   EXPERTISE (accordion)
   ══════════════════════════════════════════════════════════════ */
export const EXPERTISE_INTRO = {
  index: '02',
  eyebrow: 'WHAT DO THEY ACTUALLY DO?',
  heading: 'BRANDING, WEB, CAMPAIGNS, MOTION. RUN AS ONE PRACTICE, NOT FOUR VENDORS.',
  highlightFrom: 0,
  intro:
    'A brand arrives here as a conversation and leaves as something people use every day, and it never changes hands in between.',
  meta: [
    { label: 'Practice', value: 'Identity, web, campaigns, motion' },
    { label: 'Working method', value: 'The designer builds it' },
  ] as StatMeta[],
};

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: 'branding',
    number: '01',
    title: 'BRANDING',
    projects: '14 PROJECTS SINCE 2021',
    headline: 'A NAME IS ONLY AS GOOD AS THE SYSTEM BUILT AROUND IT.',
    body: 'Identity is the part clients live with longest. We build marks, type and rules that hold up once the launch is over and other people start using them.',
    shareLabel: "SHARE OF LAST YEAR'S WORK",
    share: 28,
    note: 'Every mark ships with the rules that keep it intact — not a PDF nobody opens.',
    image: `${CDN}Jw2Xb3kQkhLhLfj1vqulQ9vV1VM.jpg?width=1200&height=900`,
    imageAlt:
      'Abstract black-and-white close-up of a rippling digital surface made of fine dots and glowing lines.',
  },
  {
    id: 'web',
    number: '02',
    title: 'WEB',
    projects: '22 PROJECTS SINCE 2022',
    headline: 'DESIGNED AND BUILT IN FRAMER BY THE SAME HANDS.',
    body: 'The site is where most people will meet you, and they decide fast. We design it and build it in Framer ourselves, so what you approved is exactly what goes live.',
    shareLabel: "SHARE OF LAST YEAR'S WORK",
    share: 34,
    note: "The site that goes live is the site we designed — pixel for pixel, because we're the ones who built it.",
    image: `${CDN}G1d43KTSfAKyRQR7QNQSaLmyU.jpg?width=1200&height=900`,
    imageAlt:
      'Abstract monochrome composition of raised black rectangular blocks arranged in an interlocking geometric pattern.',
  },
  {
    id: 'product',
    number: '03',
    title: 'PRODUCT',
    projects: '6 PROJECTS SINCE 2023',
    headline: 'THE INTERFACE IS WHERE THE BRAND STOPS BEING A CLAIM.',
    body: 'Product work is where tone meets consequence. We design the flows people actually repeat, then stay close while they are built so the detail survives engineering.',
    shareLabel: "SHARE OF LAST YEAR'S WORK",
    share: 16,
    note: 'We design the states nobody screenshots — empty, loading, wrong.',
    image: `${CDN}R5nhH09kBY6DvV97lpBD0V3Oyk.jpg?width=1200&height=900`,
    imageAlt:
      'Abstract black-and-white geometric structure composed of interlocking metallic-looking rectangular forms suspended against a black background.',
  },
  {
    id: 'campaigns',
    number: '04',
    title: 'CAMPAIGNS',
    projects: '9 PROJECTS SINCE 2022',
    headline: 'ONE IDEA, CARRIED ALL THE WAY TO THE SMALLEST FORMAT.',
    body: 'A campaign is judged by its weakest placement. We work the idea down to the sizes nobody enjoys designing, so it still reads when it gets there.',
    shareLabel: "SHARE OF LAST YEAR'S WORK",
    share: 14,
    note: "If it only works as a hero image, it isn't finished yet.",
    image: `${CDN}G58uiCm7TTD4Tuswz0qDTaWQx4.jpg?width=1200&height=900`,
    imageAlt:
      'Black-and-white portrait of a person wearing a high-neck sweater, with their eyes covered by layered fabric and ribbons flowing around their head.',
  },
  {
    id: 'motion',
    number: '05',
    title: 'MOTION',
    projects: '5 PROJECTS SINCE 2023',
    headline: 'MOVEMENT SHOULD EXPLAIN SOMETHING, THEN GET OUT OF THE WAY.',
    body: 'Motion earns its place when it makes a change legible. We use it to show what moved and why, and we cut anything that only exists to look busy.',
    shareLabel: "SHARE OF LAST YEAR'S WORK",
    share: 8,
    note: 'The best transition is the one nobody mentions.',
    image: `${CDN}5o8vdcwXEDpZtlsd2vqX62f11Nc.jpg?width=1200&height=900`,
    imageAlt:
      'Black-and-white image of a masked person suspended in midair, surrounded by bright, splash-like energy or smoke, with arms outstretched and knees bent.',
  },
];

/* ══════════════════════════════════════════════════════════════
   RESULTS
   ══════════════════════════════════════════════════════════════ */
export const RESULTS_INTRO = {
  index: '03',
  eyebrow: 'HOW CONSISTENT ARE THEY?',
  heading: 'WHAT WE COUNT, NOT WHAT WE CLAIM.',
  intro: 'Numbers only mean something if the next one holds. Bring the project that needs to.',
  meta: [
    { label: 'Measured across', value: '78 projects' },
    { label: 'Counting since', value: '2022' },
  ] as StatMeta[],
};

export const STATS: StatMetric[] = [
  {
    id: 'productivity',
    number: '01',
    label: 'PRODUCTIVITY',
    digits: [7, 8],
    unit: 'PROJECTS',
    caption: 'Projects launched since 2022. Not slides in a deck.',
  },
  {
    id: 'retention',
    number: '02',
    label: 'RETENTION',
    digits: [9, 5],
    unit: '%',
    caption: 'Clients who came back for the next one.',
  },
  {
    id: 'responsiveness',
    number: '03',
    label: 'RESPONSIVENESS',
    digits: [1, 2],
    unit: 'hours',
    caption: 'Average reply time. Nights and weekends included.',
  },
  {
    id: 'reliability',
    number: '04',
    label: 'RELIABILITY',
    digits: [1, 0, 0],
    unit: '%',
    caption: 'Projects delivered at the quoted price. No HIDDEN FEES.',
  },
];

export const RESULTS_CTA = {
  kicker: 'Be the next on the list',
  heading: 'EVERY NUMBER HERE STARTED WITH A CALL.',
  cta: 'START PROJECT',
  note: 'FIRST STEP — A 30 MIN CALL',
};

export const AWARDS = {
  kicker: 'AWARDS & RECOGNITION',
  headline: 'Best Agency 2026',
  counter: [1, 3],
  counterLabel: 'AWARDS AND SHORTLISTS SINCE 2022',
  note: "Judged by industry experts. We don't pay to enter.",
  image: `${CDN}xJmjFKyIjh23420TUSFmbpRV78.jpg?width=400&height=600`,
  imageAlt: 'Design award trophy photographed for the studio press kit.',
  columns: ['YEAR', 'AWARD HOUSE', 'AWARD', 'TIMES'],
  rows: [
    { year: '2025', house: 'The Meridian Prize', award: 'Digital Experience of the Year', times: '3' },
    { year: '2025', house: 'Northlight Design Awards', award: 'Identity Systems, Gold', times: '2' },
    { year: '2024', house: 'Kilo Web Honors', award: 'Site of the Day', times: '4' },
    { year: '2024', house: 'The Halden Pencil', award: 'Brand Craft', times: '1' },
    { year: '2024', house: 'Framework Awards', award: 'Template of the Year', times: '1' },
    { year: '2023', house: 'Society of Type', award: 'Typographic Merit', times: '1' },
    { year: '2022', house: 'Cinder Motion Festival', award: 'Brand Film, Shortlist', times: '1' },
  ] as Award[],
  footer:
    'The full list, including the years we entered and came home with nothing, is available on request.',
  footerCta: 'REQUEST',
};

/* ══════════════════════════════════════════════════════════════
   MANIFESTO
   ══════════════════════════════════════════════════════════════ */
export const MANIFESTO = {
  kicker: 'THE THING IS',
  lines: [
    { text: "ATTENTION IS CHEAP. EVERYONE'S SPENDING THIS WEEK'S BUDGET ON IT.", highlight: false },
    { text: "A SCROLL-STOPPER CAN BE BOUGHT. BEING REMEMBERED CAN'T.", highlight: false },
    {
      text: "WE DON'T BUILD FOR THE SCROLL. WE BUILD WHAT YOU BRING UP AT DINNER.",
      highlight: true,
    },
  ],
  skip: 'Skip',
};

/* ══════════════════════════════════════════════════════════════
   PROCESS
   ══════════════════════════════════════════════════════════════ */
export const PROCESS_INTRO = {
  index: '04',
  eyebrow: 'WHAT HAPPENS AFTER WE SAY YES?',
  heading: 'THE IDEA THAT WINS IS THE ONE THAT SHIPS.',
  intro: "We don't separate the thinking from the making. Same people, first call to launch.",
  meta: [
    { label: 'Kickoff to launch', value: '1-3 weeks' },
    { label: 'Check-ins', value: 'Weekly' },
    { label: 'Revisions', value: 'Unlimited' },
  ] as StatMeta[],
};

export const PROCESS_TABS: ProcessTab[] = [
  {
    id: 'landing',
    label: 'LANDING PAGE',
    headline: 'ONE PAGE, ONE WEEK',
    outcome: 'A single page that carries the whole argument, live by Friday.',
    closing: ['NO MEETINGS AFTER THE FIRST', 'TYPICAL RUN, FIVE WORKING DAYS'],
  },
  {
    id: 'full-site',
    label: 'FULL SITE',
    headline: 'FULL SITE, TWO TO THREE WEEKS',
    outcome: 'Every page, laid out the way the studio actually works — then built in the same hands.',
    closing: ['WEEKLY CHECK-INS, NOT DAILY', 'TYPICAL RUN, TEN TO FIFTEEN DAYS'],
  },
  {
    id: 'campaign',
    label: 'CAMPAIGN',
    headline: 'ONE IDEA, EVERY FORMAT',
    outcome: 'The launch idea worked down to the smallest placement before it ships.',
    closing: ['SHOT, BUILT AND SHIPPED TOGETHER', 'TYPICAL RUN, THREE WEEKS'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'LISTEN',
    body: 'One call, in the morning. That is the meeting.',
    meta: 'KICKOFF, DAY 1',
  },
  {
    number: '02',
    title: 'DECIDE',
    body: 'A one-page brief before the day ends.',
    meta: 'BRIEF, END OF DAY 1',
  },
  {
    number: '03',
    title: 'MAKE',
    body: 'Design in the open. First look next morning.',
    meta: 'FIRST LOOK, DAY 2',
  },
  {
    number: '04',
    title: 'BUILD',
    body: 'Built in Framer by the same hands.',
    meta: 'STAGING, DAY 4',
  },
  {
    number: '05',
    title: 'SHIP',
    body: 'Live by Friday, fixes over coffee.',
    meta: 'LIVE, DAY 5 →',
  },
];

export const PROCESS_CONTACT = {
  kicker: 'Questions about the schedule?',
  headline: 'Ask the person who runs it.',
  image: `${CDN}ZOfi30RpwvNxsjPvlRt3cVTKkg.png?width=928&height=1232`,
  imageAlt: 'Smiling woman in a white linen shirt against a grey studio background.',
  name: 'Agnes Miller',
  role: 'CLIENT SERVICES',
  cta: 'GET STARTED',
  note: 'FIRST STEP — A 30 MIN CALL',
  weekLabel: 'WEEK 1',
  tabQuestion: 'WHAT ARE WE MAKING?',
};

/* ══════════════════════════════════════════════════════════════
   CLIENT WORDS
   ══════════════════════════════════════════════════════════════ */
export const TESTIMONIALS_INTRO = {
  index: '05',
  eyebrow: 'SAYS WHO?',
  heading: 'Client Words',
  intro: 'Thirteen brands, one studio, and the sentences they would repeat on a call.',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'emilia-park',
    quote:
      'They treated our brand like it was their own — and it shows in every screen. Six months in, we still haven\u2019t found a page that feels off-system or an asset we had to fix ourselves.',
    name: 'Emilia Park',
    role: 'HEAD OF BRAND | FIELDNOTE',
    image: `${CDN}aJVmvCKCD4ZktC6oduyECf7b5Uo.jpg?width=600&height=800`,
  },
  {
    id: 'jonas-reeve',
    quote:
      'The site went live exactly as designed. No drift, no surprises, no excuses. What we approved in the review call is, pixel for pixel, what our customers are looking at right now.',
    name: 'Jonas Reeve',
    role: 'CO-FOUNDER | ARCLINE',
    image: `${CDN}S6jkcxSTKtWuSYMShNwV8C4mdQ.jpg?width=600&height=800`,
  },
  {
    id: 'elodie-dubois',
    quote:
      'One team carried the idea from the first sketch to the smallest format. The campaign still reads clearly on a 300-pixel banner, which is where every other agency quietly gave up.',
    name: '\u00c9lodie Dubois',
    role: 'CEO | WENDICH',
    image: `${CDN}M8ywiY4yp3sUG20opUDgVKOkFU.jpg?width=600&height=800`,
  },
  {
    id: 'pauline-ben',
    quote:
      'Motion that explains instead of decorates. Rare, and worth it. Every transition on the product tells you what just moved and why — and they cut everything that was only there to look busy.',
    name: 'Pauline & Ben',
    role: 'FOUNDERS | PAULINE & BEN',
    image: `${CDN}YWmmQWvTMpt40YkN7ePSUcwu5Y.jpg?width=450&height=600`,
  },
  {
    id: 'haruto',
    quote:
      'Our story finally reads the same in every language and format. We ship campaigns in three markets, and for the first time the Swedish, German and English versions feel like one brand.',
    name: 'Haruto Takahashi',
    role: 'CEO | HARUTO GROUP',
    image: `${CDN}mNm2UXvAHVugqnnbvBQwGtIiaCQ.jpg?width=600&height=800`,
  },
  {
    id: 'aiko-tanaka',
    quote:
      'They stayed close through engineering, so the detail actually shipped. The empty states, the loading screens, the error copy — the parts nobody screenshots are the parts our users thanked us for.',
    name: 'Aiko Tanaka',
    role: 'VP PRODUCTS | NORTHVALE',
    image: `${CDN}6nbgrTSAcNdXH0isSfhYaluQ6o.jpg?width=600&height=800`,
  },
  {
    id: 'mika-olafson',
    quote:
      'Pausing the subscription between pushes saved us a full hire. We run two heavy sprints a year, switch off in between, and the quality picks up exactly where it left off.',
    name: 'Mika Olafson',
    role: 'COO | BRIGHTLINE',
    image: `${CDN}lzyQTJr3BZycg9Xm6RMf6gooIqs.jpg?width=600&height=800`,
  },
  {
    id: 'ania-kowalska',
    quote:
      "The rebrand paid for itself in inbound within a quarter. We didn't change our pricing, our product or our media spend — we changed how we looked and sounded, and the pipeline followed.",
    name: 'Ania Kowalska',
    role: 'MARKETING MANAGER | BRANDT WERKE',
    image: `${CDN}ayAGK0Rdd0EKnLwySrsyej5KSvk.jpg?width=600&height=800`,
  },
  {
    id: 'amelie-moreau',
    quote:
      "The identity survived our own team using it for a year — interns, resellers, rushed decks and all. That's the real test, and it's the first system we've had that passed it.",
    name: 'Am\u00e9lie Moreau',
    role: 'VP MARKETING | CLEARSPACE',
    image: `${CDN}QjUtyMtfVOKshuCWpI6J2SaU8Q.jpg?width=600&height=800`,
  },
  {
    id: 'erik-sandberg',
    quote:
      'Handover was clean enough that our own devs asked who built it. Named layers, sensible components, documented decisions — we extended the site in-house without a single support call.',
    name: 'Erik Sandberg',
    role: 'MARKETING DIRECTOR | NORRSKEN\u00ae',
    image: `${CDN}sUlTXggT6m5MY7uLHAltc9sPxa8.jpg?width=600&height=800`,
  },
  {
    id: 'samuel-benelli',
    quote:
      'Feedback rounds got shorter because the first version was already close. We went from five revision cycles with our last agency to two, and the second one was mostly us saying yes.',
    name: 'Samuel Benelli',
    role: 'BRAND MANAGER | KILNWORKS',
    image: `${CDN}HdATuF7nAW40SNK4p2HSmBFhWM.jpg?width=450&height=600`,
  },
  {
    id: 'stuart-brown',
    quote:
      'Requests came back faster than we could write new ones. At some point our bottleneck stopped being the studio and became our own ability to decide what to ask for next.',
    name: 'Stuart Brown',
    role: 'MARKETING LEAD | COASTAL',
  },
  {
    id: 'lena-vogel',
    quote:
      "The identity survived our own team using it for a year — interns, resellers, rushed decks and all. That's the real test, and it's the first system we've had that passed it.",
    name: 'Lena Vogel',
    role: 'EXECUTIVE CREATIVE DIRECTOR | STUDIO MARL',
    image: `${CDN}i871bYqL5RNgck7cJiLc3O1LzE.jpg?width=600&height=800`,
  },
];

/* ══════════════════════════════════════════════════════════════
   PRICING
   ══════════════════════════════════════════════════════════════ */
export const PRICING_INTRO = {
  index: '06',
  eyebrow: 'WHAT DOES IT COST?',
  heading: 'ONE FLAT FEE. NO SCOPE CREEP. NO INVOICES.',
  intro: 'Subscribe, send requests, get work back. Pause when the queue is empty. Cancel when you are done.',
  meta: [
    { label: 'Billing', value: 'Monthly, flat' },
    { label: 'Commitment', value: 'None. Pause anytime' },
  ] as StatMeta[],
};

export const PRICING_FEATURES: PlanFeature[] = [
  { label: 'Active requests', standard: 'One at a time', pro: 'Two at a time' },
  { label: 'Average turnaround', standard: '48 hours', pro: '24 hours' },
  { label: 'Branding, web, campaigns', standard: 'Included', pro: 'Included' },
  { label: 'Motion', standard: 'On request', pro: 'Included' },
  { label: 'Development', standard: 'Included', pro: 'Included' },
  { label: 'Weekly call with the lead', standard: 'Included', pro: 'Included' },
  { label: 'Revisions', standard: 'Unlimited', pro: 'Unlimited' },
  { label: 'Pause or cancel', standard: 'Anytime', pro: 'Included' },
];

export const PRICING_PLANS: Plan[] = [
  {
    id: 'standard',
    name: 'STANDARD',
    price: '$4,995',
    period: '/ MONTH',
    blurb: 'One lane, one senior team, every request handled in turn.',
    cta: 'START BASIC',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'PRO',
    badge: 'MOST BOOKED',
    price: '$7,995',
    period: '/ MONTH',
    blurb: 'Two lanes in parallel, same team, twice the throughput.',
    cta: 'START PRO',
    highlight: true,
  },
];

export const PRICING_NOTES = ['Prices in USD. Billed monthly.', 'One subscription per brand.'];

export const PRICING_LINK = { label: 'HAVE A QUESTION?', href: '#faq' };

export const HOW_IT_WORKS = {
  heading: 'HOW IT WORKS',
  sub: 'Four steps. Nothing to sign',
  steps: [
    { number: '01', title: 'SUBSCRIBE', body: 'Pick a lane and start the clock, no contract attached.' },
    { number: '02', title: 'REQUEST', body: 'Drop briefs on the board whenever they come to you.' },
    { number: '03', title: 'RECEIVE', body: 'Finished work lands in days, revised until it holds.' },
    { number: '04', title: 'REPEAT', body: 'Keep the queue moving, or pause it when it runs dry.' },
  ] as HowItWorksStep[],
};

/* ══════════════════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════════════════ */
export const FAQ_INTRO = {
  index: '07',
  eyebrow: 'ANYTHING ELSE?',
  heading: 'NOTHING HERE SHOULD SURPRISE YOU.',
  intro:
    'Cost, timeline, who does the work — these come up in nearly every first call. Read them here first, so the call itself can start on your project.',
  person: {
    image: `${CDN}rZljhoxkfedwGm8muPKhzUgCSw.jpg?width=160&height=200`,
    imageAlt: 'Rana Davis, Head of Operations, photographed for the studio site.',
    name: 'RANA DAVIS',
    role: 'SENIOR PROJECT MANAGER',
  },
  cta: 'GET IN TOUCH',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'included',
    question: "WHAT'S INCLUDED WITH MONODRIFT TEMPLATE?",
    answer:
      'The Framer remix contains Home Page, Projects, Blog, About, and Contact. Add your content, subscribe to a Framer plan, and publish.',
  },
  {
    id: 'try',
    question: 'CAN I TRY BEFORE BUYING?',
    answer:
      "Paid Framer templates don't come with a demo version, however the new built-in color changer in the navigation lets you try the template with your own brand colors.",
  },
  {
    id: 'code',
    question: 'DO I NEED TO WRITE CODE?',
    answer:
      'No. The template is built natively in Framer; a few code components handle specific effects and need no coding just easy customization.',
  },
  {
    id: 'own-content',
    question: 'CAN I USE MY OWN CONTENT AND IMAGES?',
    answer:
      "Yes. Swap every image, headline, and CMS entry — the structure is built to hold your studio's work.",
  },
  {
    id: 'responsive',
    question: 'DOES IT WORK ON MOBILE AND TABLET?',
    answer:
      'Every page ships with its own Desktop, Tablet, and Phone layout, optimized for all breakpoints — not a scaled-down copy of the desktop design.',
  },
  {
    id: 'license',
    question: 'WHAT LICENSE DO I GET?',
    answer:
      'Three tiers: Standard covers a single-project license to publish one live site. Extended Pro adds multi-domain use, a full Figma replica of the template, and priority support directly from the creator. All-Access includes every template from Tamas, plus 50% off any future release.',
  },
  {
    id: 'updates',
    question: 'DO FUTURE UPDATES COME WITH THE TEMPLATE?',
    answer: 'Yes. Updates to Monodrift are free for life.',
  },
  {
    id: 'guide',
    question: 'IS THERE A QUICK START GUIDE?',
    answer:
      'Yes. The template comes with detailed instructions covering how to edit every section and page.',
  },
];

/* ══════════════════════════════════════════════════════════════
   NOTES
   ══════════════════════════════════════════════════════════════ */
export const NOTES_INTRO = {
  index: '08',
  eyebrow: 'WHAT ARE THEY THINKING ABOUT?',
  heading: 'NOTES',
  intro:
    'Process, tools, and the industry notes, written down when it is fresh enough to be useful.',
  cta: 'READ ALL NOTES',
};

export const NOTES: Note[] = [
  {
    id: 'handoff',
    title: 'The Handoff Is the Product',
    slug: 'the-handoff-is-the-product',
    image: `${CDN}g5L78LCaIayhLyALKNPni8ijwA.jpg?width=960&height=1200`,
  },
  {
    id: 'scope',
    title: 'Scope Is a Design Material',
    slug: 'scope-is-a-design-material',
    image: `${CDN}V6cLkM14b0xr54fJsYmUiaqt3k.jpeg?width=1205&height=1600`,
  },
  {
    id: 'accessibility',
    title: 'Accessibility Is a Constraint, Not a Retrofit',
    slug: 'accessibility-is-a-constraint-not-a-retrofit',
    image: `${CDN}AwoUYzyakia05uL3HBI0n4eUS0c.jpg?width=1600&height=1280`,
  },
  {
    id: 'design-system',
    title: 'What a Design System Owes the People Using It',
    slug: 'what-a-design-system-owes-its-users',
    image: `${CDN}HXleWu7ObQgBD4LOnmrRHDMSQRQ.jpg?width=1024&height=1024`,
  },
  {
    id: 'homepage-hero',
    title: 'The Case Against the Homepage Hero',
    slug: 'the-case-against-the-homepage-hero',
    image: `${CDN}1AUQXmgPtRicLVgSrcV4FXkdqk.jpg?width=1312&height=1600`,
  },
  {
    id: 'typography',
    title: 'Typography Is a Load-Bearing Decision',
    slug: 'typography-is-a-load-bearing-decision',
    image: `${CDN}dwkAgTvPwV8UGOC6qkWEanmeyQ.jpg?width=1200&height=900`,
  },
  {
    id: 'campaigns-age',
    title: 'Campaigns Age Faster Than Brands',
    slug: 'campaigns-age-faster-than-brands',
    image: `${CDN}7x6jbKJpQE7Q1qlL22V69P95htc.jpg?width=900&height=1200`,
  },
  {
    id: 'speed',
    title: 'Speed Is an Aesthetic',
    slug: 'speed-is-an-aesthetic',
    image: `${CDN}d6VmjhfKNxy5t7EZNqvcmdoTlV4.jpg?width=800&height=1200`,
  },
  {
    id: 'generative',
    title: 'Generative Tools Have Not Changed the Hard Part',
    slug: 'generative-tools-have-not-changed-the-hard-part',
    image: `${CDN}t0L9vX7JQwKQS1eG8j7KKhubRQ.jpg?width=1200&height=900`,
  },
  {
    id: 'motion',
    title: 'Motion Should Explain, Not Perform',
    slug: 'motion-should-explain-not-perform',
    image: `${CDN}0ppwVl3nBee6FMGp6VCLwL8I.jpg?width=1188&height=1188`,
  },
];

/* ══════════════════════════════════════════════════════════════
   CONTACT
   ══════════════════════════════════════════════════════════════ */
export const CONTACT_INTRO = {
  eyebrow: 'WHAT HAPPENS AFTER I HIT SEND?',
  location: 'SANTA CRUZ, CA — PACIFIC TIME',
  heading: 'YOU GET A PERSON, NOT A TICKET NUMBER.',
  intro:
    'One of us reads it the day it arrives. If it is a fit, you get a thirty-minute slot. If it is not, you get a straight answer and the name of someone who might be.',
  meta: [
    { label: 'Reply time', value: SITE.replyTime },
    { label: 'Next kickoff', value: SITE.kickoff },
    { label: 'Read by', value: SITE.readBy },
  ] as StatMeta[],
  formLabel: 'SIX QUESTIONS, ABOUT TWO MINUTES',
  submit: 'SUBMIT',
  legal:
    'IT GOES TO A PERSON, AND THE PERSON REPLIES WITHIN A WORKING DAY.',
  legalFine:
    'By sending this you accept our Terms and Privacy Policy. Nothing here puts you on a list.',
  sentNote: 'SENT. RANA HAS IT. YOU WILL HEAR BACK WITHIN A WORKING DAY.',
};

export const CONTACT_QUESTIONS: ContactQuestion[] = [
  {
    id: 'making',
    number: '01',
    title: 'WHAT ARE WE MAKING?',
    hint: 'Pick the closest. We will argue about the rest on the call.',
    kind: 'options',
    options: ['A LANDING PAGE', 'A FULL SITE', 'A CAMPAIGN', 'A BRAND', 'NOT SURE YET'],
  },
  {
    id: 'lane',
    number: '02',
    title: 'WHICH LANE?',
    hint: 'Lanes are on the pricing page. One project is also fine.',
    kind: 'options',
    options: ['BASIC', 'PRO', 'JUST THIS ONE PROJECT'],
  },
  {
    id: 'start',
    number: '03',
    title: 'WHEN SHOULD IT START?',
    hint: 'ASAP means the next open kickoff. A date means we plan around it.',
    kind: 'options',
    options: ['ASAP', 'WITHIN A MONTH', 'LATER THIS YEAR', 'JUST EXPLORING'],
  },
  {
    id: 'name',
    number: '04',
    title: 'YOUR NAME',
    hint: 'Type it the way you like to be addressed.',
    kind: 'text',
    placeholder: 'Your name',
  },
  {
    id: 'email',
    number: '05',
    title: 'YOUR EMAIL',
    hint: 'The only thing on this page we actually need.',
    kind: 'email',
    placeholder: 'Your email',
  },
  {
    id: 'problem',
    number: '06',
    title: "WHAT'S THE PROBLEM?",
    hint: 'No brief template. Say it like you would on a call.',
    kind: 'textarea',
    placeholder: 'What you are trying to fix',
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    eyebrow: 'IF YOU WOULD RATHER CALL',
    value: SITE.email.toUpperCase(),
    href: SITE.emailHref,
    lines: [],
    note: 'SAME INBOX, SAME PERSON.',
  },
  {
    id: 'visit',
    eyebrow: 'IF YOU WOULD RATHER VISIT',
    value: SITE.city,
    lines: SITE.addressLines,
    note: 'COFFEE IS DECENT. ASK FOR RANA.',
  },
  {
    id: 'phone',
    eyebrow: 'IF YOU WOULD RATHER CALL',
    value: SITE.phone,
    href: SITE.phoneHref,
    lines: [],
    note: SITE.hours,
  },
  {
    id: 'watch',
    eyebrow: 'IF YOU WOULD RATHER WATCH',
    value: 'SOCIAL',
    lines: [],
    note: 'SAME WORK, POSTED WHEN IT SHIPS.',
  },
];

/* ══════════════════════════════════════════════════════════════
   ACCENT COLOUR CHANGER
   ══════════════════════════════════════════════════════════════ */
export const ACCENT_PRESETS = [
  { name: 'Monodrift Green', hex: '#52ff9d' },
  { name: 'Signal Lime', hex: '#d8ff3d' },
  { name: 'Static Cyan', hex: '#4de3ff' },
  { name: 'Studio Blue', hex: '#6a8cff' },
  { name: 'Hot Coral', hex: '#ff6a4d' },
  { name: 'Warning Red', hex: '#ff4d6a' },
  { name: 'Sun Yellow', hex: '#ffd23d' },
  { name: 'Paper White', hex: '#ffffff' },
];

export const DEFAULT_ACCENT = '#52ff9d';
