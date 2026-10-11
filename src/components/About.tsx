import { motion } from 'framer-motion';
import { PERSONAL_DETAILS } from '../data/portfolioData';

const SPEC_ENTRIES = [
  { label: 'OPERATOR', value: PERSONAL_DETAILS.fullName },
  { label: 'ROLE', value: PERSONAL_DETAILS.title },
  { label: 'LOCATION', value: PERSONAL_DETAILS.location },
  { label: 'EDUCATION', value: `${PERSONAL_DETAILS.degree} (${PERSONAL_DETAILS.gradYear})` },
  { label: 'EXPERIENCE', value: PERSONAL_DETAILS.experienceYears },
  { label: 'CURRENT FOCUS', value: 'Distributed Outbox Pipelines, 60 FPS Canvas & Editorial Design Systems' },
  { label: 'TIMEZONE', value: PERSONAL_DETAILS.timeZone },
  { label: 'STATUS', value: PERSONAL_DETAILS.status },
  { label: 'EMAIL', value: PERSONAL_DETAILS.email, link: `mailto:${PERSONAL_DETAILS.email}` },
  { label: 'GITHUB', value: 'github.com/codewith-shivank', link: PERSONAL_DETAILS.github },
];

export default function About() {
  return (
    <section id="about" className="section-light py-24 sm:py-32 bg-[#f7f6f3] text-[#0e0e0e]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Left Column Bracket Label */}
          <div>
            <div className="sticky top-28">
              <span className="font-['Fragment_Mono'] text-xs uppercase tracking-widest text-[#6d6d6d] block mb-2">
                [ 02 / PROFILE ]
              </span>
              <div
                className="h-[2px] w-16 mb-6"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <div className="font-['Fragment_Mono'] text-[11px] text-[#888] space-y-1">
                <div>IDENTITY: SHIVANK</div>
                <div>DISCIPLINE: CODE × UX</div>
                <div>ORIGIN: INDIA / REMOTE</div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]"
            >
              [ PHILOSOPHY &amp; SYSTEM SPECIFICATION ]
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.92] text-[#0e0e0e]"
            >
              A LITTLE ABOUT
              <br />
              <span
                className="px-2 text-[#0e0e0e] inline-block"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                THE ENGINEER BEHIND
              </span>
              <br />
              THE WORK.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-16"
            >
              <div className="space-y-5 font-['Figtree'] text-base sm:text-lg leading-relaxed text-[#444]">
                <p>
                  {PERSONAL_DETAILS.bio}
                </p>
                <p>
                  I don&apos;t treat aesthetics and reliability as opposing forces. An application with gorgeous motion that stutters or drops network packets is broken. Likewise, a backend with sub-millisecond p99 latency paired with a cluttered, slow dashboard fails the user.
                </p>
                <p className="font-medium text-[#111]">
                  My work centers on building cohesive, deterministic software—from the lowest Redis Stream consumer group up to the sub-pixel CSS bezier curve.
                </p>
              </div>

              {/* Terminal Diagnostic Card */}
              <div className="border border-[#d9d8d3] bg-[#0e0e0e] p-5 text-white font-['Fragment_Mono'] text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#222] mb-4 text-[10px] text-[#888]">
                    <span>SYS_SPEC // SHIVANK_DEV</span>
                    <span style={{ color: 'var(--color-accent)' }}>ONLINE</span>
                  </div>
                  <div className="space-y-2 text-[#aaa] text-[11px]">
                    <p><span className="text-[#555]">&gt;</span> STACK: TypeScript strict, Node.js, React 19</p>
                    <p><span className="text-[#555]">&gt;</span> RENDERING: Hardware WebGL, GLSL, Motion</p>
                    <p><span className="text-[#555]">&gt;</span> PIPELINE: Redis Streams, Outbox Saga, BullMQ</p>
                    <p><span className="text-[#555]">&gt;</span> AUDIT: Lighthouse 100/100, WCAG AAA</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#222] flex items-center justify-between text-[10px] text-[#777]">
                  <span>CODEBASE: 80+ REPOSITORIES</span>
                  <a
                    href={PERSONAL_DETAILS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white underline"
                  >
                    GITHUB PROFILE &rarr;
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Detailed Spec Sheet */}
            <div className="border-t border-[#d9d8d3]">
              <div className="py-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-widest text-[#777]">
                [ COMPLETE TECHNICAL DOSSIER ]
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#d9d8d3]">
                {SPEC_ENTRIES.map((entry) => (
                  <div key={entry.label} className="border-b border-[#d9d8d3] py-4 sm:pr-8">
                    <dt className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]">
                      {entry.label}
                    </dt>
                    <dd className="mt-1 font-['Tektur'] text-sm sm:text-base font-semibold uppercase text-[#111]">
                      {entry.link ? (
                        <a href={entry.link} className="hover:underline flex items-center gap-1">
                          <span>{entry.value}</span>
                          <span className="text-xs">&rarr;</span>
                        </a>
                      ) : (
                        entry.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
