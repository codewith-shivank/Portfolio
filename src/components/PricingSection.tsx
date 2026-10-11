import { motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import MonoLink from './ui/MonoLink';
import MonoArrow from './ui/MonoArrow';
import {
  HOW_IT_WORKS,
  PRICING_FEATURES,
  PRICING_INTRO,
  PRICING_LINK,
  PRICING_NOTES,
  PRICING_PLANS,
} from '../data/monodrift';
import type { Plan } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col justify-between gap-10 p-7 sm:p-10 ${
        plan.highlight ? 'bg-ink text-white' : 'bg-page'
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="display display-sm">{plan.name}</h3>
          {plan.badge ? (
            <span className="mono-label bg-accent px-3 py-1.5 text-accent-ink">{plan.badge}</span>
          ) : (
            <span className="mono-label text-dim">SINGLE LANE</span>
          )}
        </div>

        <div className="flex items-end gap-3">
          <span className="display display-lg">{plan.price}</span>
          <span className="mono-label pb-2 text-muted">{plan.period}</span>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted">{plan.blurb}</p>
      </div>

      <MonoLink href="#contact" variant={plan.highlight ? 'solid' : 'outline'}>
        {plan.cta}
      </MonoLink>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="section-paper pt-16 sm:pt-24">
      <SectionIntro
        index={PRICING_INTRO.index}
        eyebrow={PRICING_INTRO.eyebrow}
        heading={
          <>
            ONE FLAT FEE. <span className="hl">NO SCOPE CREEP.</span> NO INVOICES.
          </>
        }
        intro={PRICING_INTRO.intro}
        meta={PRICING_INTRO.meta}
      />

      <div className="shell flex flex-col gap-10 pb-20 sm:pb-28">
        {/* Lane comparison */}
        <div className="overflow-x-auto scrollbar-none">
          <div className="min-w-[620px]">
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] gap-6 border-b border-line pb-4">
              <span className="kicker text-dim">WHAT'S IN THE LANE</span>
              <span className="kicker text-dim">STANDARD</span>
              <span className="kicker text-accent">PRO</span>
            </div>

            {PRICING_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="row-invert grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] items-center gap-6 border-b border-line px-1 py-4"
              >
                <span className="font-heading text-sm font-bold uppercase tracking-[-0.01em] sm:text-base">
                  {feature.label}
                </span>
                <span className="text-sm text-muted">{feature.standard}</span>
                <span className="text-sm font-medium">{feature.pro}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="mono-label flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {PRICING_NOTES.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
          <a
            href={PRICING_LINK.href}
            className="group inline-flex items-center gap-3 self-start border border-line px-4 py-3 transition-colors hover:border-accent hover:text-accent"
          >
            <MonoArrow className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="mono-label">{PRICING_LINK.label}</span>
          </a>
        </div>

        {/* Plans */}
        <div className="grid gap-px bg-line lg:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* How it works */}
        <div className="mt-8 grid gap-8 border-t border-line pt-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h3 className="display display-md">{HOW_IT_WORKS.heading}</h3>
            <p className="mono-label mt-3 text-muted">{HOW_IT_WORKS.sub}</p>
          </div>

          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.06, ease }}
                className="border-t border-line pt-5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="kicker text-dim">{step.number}</span>
                  <h4 className="display display-sm">{step.title}</h4>
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
