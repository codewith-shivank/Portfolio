import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import MonoArrow from './ui/MonoArrow';
import MonoLink from './ui/MonoLink';
import { PROJECTS, WORK_INTRO } from '../data/monodrift';
import type { Project } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ project, order }: { project: Project; order: number }) {
  const [ready, setReady] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.8, delay: (order % 2) * 0.08, ease }}
      className={`group flex flex-col ${order % 2 === 1 ? 'lg:mt-24' : ''}`}
    >
      <a href={project.href} className="frame relative block aspect-[4/3] w-full">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onLoad={() => setReady(true)}
          className={`transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
        />

        <span className="kicker absolute left-4 top-4 bg-ink-deep/75 px-2.5 py-1.5 text-white backdrop-blur-sm">
          {String(project.index).padStart(2, '0')}
          <span className="text-dim">/{String(project.total).padStart(2, '0')}</span>
        </span>

        <span className="kicker absolute right-4 top-4 border border-white/25 bg-ink-deep/60 px-2.5 py-1.5 text-white backdrop-blur-sm">
          {project.discipline}
        </span>

        <span className="kicker absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 bg-accent px-3 py-2 text-accent-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <MonoArrow className="h-3 w-2" />
          VIEW PROJECT
        </span>
      </a>

      <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-5">
        <div>
          <h3 className="display display-md transition-colors duration-300 group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-muted sm:text-sm">
            {project.description}
          </p>
        </div>
        <span className="font-heading text-2xl font-bold tracking-[-0.04em] text-faint sm:text-3xl">
          {project.index}
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-ink border-t border-line-soft pt-16 sm:pt-24">
      <SectionIntro
        index={WORK_INTRO.index}
        eyebrow={WORK_INTRO.eyebrow}
        heading={
          <>
            <span className="hl">SIX OF THE LAST TWELVE.</span> THE REST ON REQUEST.
          </>
        }
        intro={WORK_INTRO.intro}
        meta={WORK_INTRO.meta}
        aside={
          <MonoLink href="#work" variant="outline" className="self-start">
            {WORK_INTRO.linkLabel}
          </MonoLink>
        }
      />

      <div className="shell pb-20 sm:pb-28">
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} order={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
