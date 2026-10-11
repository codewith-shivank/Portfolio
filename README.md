# Monodrift — digital creative studio

A React + TypeScript + Vite + Tailwind v4 rebuild of the **MONODRIFT®** reference template
([monodrift.framer.website](https://monodrift.framer.website/)). Every section of the reference
home page is reproduced with its own copy, imagery, ordering and interaction model — nothing was
invented, only re-implemented in real code.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Validate and build

```bash
npm run lint     # oxlint — 0 warnings, 0 errors
npm run build    # tsc -b && vite build
npm run preview
```

## Structure — same order as the reference

| # | Section | Component |
|---|---------|-----------|
| — | Fixed nav: wordmark `MONODRIFT>>`, colour-changer dot, menu box, section panel | `components/Navigation.tsx` |
| — | Hero: `WE BUILD WHAT PEOPLE REMEMBER AFTER THE TAB CLOSES.`, kickoff rail, full-bleed frame | `components/Hero.tsx` |
| 01 | Selected work — six numbered project cards (UNO8®, SKATTR®, MONT MERCIER, CASA DI LUCE, ÉTOILE BLANCHE, HAWTHORNE MOTORS®) | `components/Projects.tsx` |
| — | `WHO HAVE THEY WORKED WITH?` — client logo rail | `components/ClientLogos.tsx` |
| — | `SHOWREEL 2025 – 2026` — poster, overlay, `WATCH REEL` player | `components/ShowreelSection.tsx` |
| 02 | Expertise — five-row accordion (BRANDING · WEB · PRODUCT · CAMPAIGNS · MOTION) | `components/ExpertiseSection.tsx` |
| 03 | Results — four odometer counters, CTA band, awards table | `components/ResultsSection.tsx` |
| — | Manifesto — `— THE THING IS` statement block and `Skip ↓` cue | `components/ManifestoSection.tsx` |
| 04 | Process — deliverable toggle, `WEEK 1` timeline (LISTEN → SHIP), Agnes Miller card | `components/ProcessSection.tsx` |
| 05 | Client Words — two opposing testimonial rails | `components/TestimonialsSection.tsx` |
| 06 | Pricing — lane comparison, STANDARD/PRO plans, `HOW IT WORKS` | `components/PricingSection.tsx` |
| 07 | FAQ — Rana Davis card and the eight-question accordion | `components/FAQSection.tsx` |
| 08 | Notes — ten-note rail with cover previews | `components/NotesSection.tsx` |
| — | Contact — the six-question form and the four `IF YOU WOULD RATHER…` channels | `components/Contact.tsx` |
| — | Footer — wordmark, sitemap, studio, contact and `>> DIGITAL CREATIVE AGENCY` | `components/Footer.tsx` |

Content lives in `src/data/monodrift.ts`, shapes in `src/types/index.ts`, and the whole visual
language — tokens, hairlines, marquees, odometer reels, paper/ink sections — in `src/index.css`.

## Every interactive point, implemented

- **Menu box** → full-height numbered navigation panel (`Escape` closes, scroll locks).
- **Colour-changer dot** → presets, hex **and** RGB entry, reset, live re-skin of the whole page,
  persisted in `localStorage`; ink/paper text on the accent recalculates from luminance.
- **Project cards** → hover promotes the frame to full colour and reveals `VIEW PROJECT`.
- **Client logos / Client Words / Notes rails** → marquees with their own motion toggles.
- **Showreel** → opens the `WATCH REEL` player: play/pause (or `Space`), 54-second progress
  readout, `Escape` / *Close showreel* to dismiss.
- **Expertise + FAQ accordions** → one row open at a time, `aria-expanded` / `aria-controls`.
- **Odometer counters** → roll into place on scroll and re-roll when clicked.
- **Process toggle** → LANDING PAGE · FULL SITE · CAMPAIGN swap the outcome copy and closing notes.
- **Notes rail** → cover preview lightbox.
- **Contact** → option pills, answered-question tally, and a submit that hands the six answers to
  the mail client (no backend is wired in this build).
- Reduced-motion visitors get frozen rails, no custom cursor and no boot animation.

## Notes

- Imagery and client logos are hot-linked from the reference's CDN so the layout reads exactly like
  the original; replace the URLs in `src/data/monodrift.ts` with studio-owned files when ready.
- Fonts: Tektur (display), Figtree (body), Fragment Mono (labels) via Google Fonts.
- The Framer marketplace copy in the FAQ ("What's included with Monodrift template", licence tiers)
  is reproduced verbatim because it is the reference's own content.
