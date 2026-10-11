import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

const CATEGORIES = ['All', 'System', 'Full-Stack', 'Interactive / WebGL', 'Frontend'] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#0e0e0e] py-24 sm:py-32 border-b border-[#222]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <span className="font-['Fragment_Mono'] text-xs uppercase tracking-widest text-[#777] block mb-2">
              [ 01 / SELECTED WORK ]
            </span>
            <div
              className="h-[2px] w-16 mb-4"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div className="font-['Fragment_Mono'] text-[11px] text-[#555]">
              CMS COLLECTION: 06 ENTRIES
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
              <div>
                <p className="mb-3 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#666]">
                  [ PRODUCTION ARCHITECTURE &amp; INTERACTIVE EXPERIENCES ]
                </p>
                <h2 className="font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.92] text-white">
                  SELECTED
                  <br />
                  <span
                    className="px-2 text-[#0e0e0e] inline-block"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    SYSTEMS &amp; BUILDS.
                  </span>
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-1.5 font-['Fragment_Mono'] text-xs uppercase tracking-wider transition-all border"
                    style={{
                      borderColor: activeCategory === cat ? 'var(--color-accent)' : '#262626',
                      backgroundColor: activeCategory === cat ? '#1a1a1a' : '#111',
                      color: activeCategory === cat ? 'var(--color-accent)' : '#888',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group border border-[#222] bg-[#121212] hover:border-[#444] transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Header / Screen Placeholder with Geometry */}
                <div className="relative aspect-[16/10] bg-[#171717] border-b border-[#222] p-5 flex flex-col justify-between overflow-hidden group-hover:bg-[#1a1a1a] transition-colors">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  {/* Top Bar with Number & Category */}
                  <div className="relative z-10 flex items-center justify-between font-['Fragment_Mono'] text-[10px] uppercase text-[#777]">
                    <span className="font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {(index + 1).toString().padStart(2, '0')} // WORK
                    </span>
                    <span className="border border-[#2a2a2a] px-2 py-0.5 bg-[#121212] text-[#aaa]">
                      {project.category}
                    </span>
                  </div>

                  {/* Centered Monodrift Wireframe Graphic */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
                    <div className="w-16 h-16 rounded border border-[#333] group-hover:border-[var(--color-accent)] transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border border-dashed border-[#555] group-hover:rotate-90 transition-transform duration-700" />
                    </div>
                    {project.metrics && (
                      <div
                        className="mt-3 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider px-2 py-0.5 font-bold text-[#0e0e0e]"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      >
                        {project.metrics}
                      </div>
                    )}
                  </div>

                  {/* Bottom bar in preview */}
                  <div className="relative z-10 flex items-center justify-between font-['Fragment_Mono'] text-[9px] uppercase text-[#666]">
                    <span>STATUS: DEPLOYED</span>
                    <span>CLICK FOR SPECS &gt;</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="font-['Tektur'] text-xl font-bold uppercase text-white group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="font-['Figtree'] text-xs text-[#8a8a8a] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-['Fragment_Mono'] text-[9px] uppercase px-2 py-0.5 bg-[#181818] border border-[#262626] text-[#888]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="font-['Fragment_Mono'] text-[9px] text-[#555] px-1 py-0.5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-[#141414] border-t border-[#222] flex items-center justify-between font-['Fragment_Mono'] text-[10px] uppercase">
                <span className="text-[#666]">INSPECT ARCHITECTURE</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Project Detail Modal / Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#121212] border border-[#333] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-[#888] hover:text-white border border-[#2a2a2a] bg-[#1a1a1a] transition-colors font-['Fragment_Mono'] text-xs uppercase"
                  aria-label="Close project modal"
                >
                  ESC &times;
                </button>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2 font-['Fragment_Mono'] text-xs text-[#777] uppercase">
                    <span>{selectedProject.category}</span>
                    <span>/</span>
                    <span style={{ color: 'var(--color-accent)' }}>{selectedProject.metrics}</span>
                  </div>
                  <h3 className="font-['Tektur'] text-2xl sm:text-4xl font-bold uppercase text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="font-['Figtree'] text-sm sm:text-base text-[#aaa] mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Problem Solved & Deep Details */}
                <div className="space-y-6 my-6 border-y border-[#262626] py-6">
                  <div>
                    <h4 className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#8a8a8a] mb-2">
                      [ SYSTEM OVERVIEW ]
                    </h4>
                    <p className="font-['Figtree'] text-sm sm:text-base text-[#ccc] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#8a8a8a] mb-2">
                      [ CHALLENGE &amp; ARCHITECTURAL SOLUTION ]
                    </h4>
                    <p className="font-['Figtree'] text-sm sm:text-base text-[#ccc] leading-relaxed">
                      {selectedProject.problemSolved}
                    </p>
                  </div>

                  {/* Quantitative Stats Grid */}
                  {selectedProject.stats && (
                    <div>
                      <h4 className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#8a8a8a] mb-3">
                        [ VERIFIED TELEMETRY METRICS ]
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {selectedProject.stats.map((stat) => (
                          <div key={stat.label} className="p-3 bg-[#181818] border border-[#262626]">
                            <div className="font-['Fragment_Mono'] text-[9px] uppercase text-[#777]">
                              {stat.label}
                            </div>
                            <div className="font-['Tektur'] text-sm sm:text-base font-bold text-white mt-1">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Complete Tech Stack */}
                  <div>
                    <h4 className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#8a8a8a] mb-2">
                      [ STACK &amp; DEPENDENCIES ]
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-['Fragment_Mono'] text-xs uppercase px-2.5 py-1 bg-[#1a1a1a] border border-[#333] text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 border border-[#333] bg-[#1a1a1a] hover:bg-[#222] font-['Tektur'] text-xs font-bold uppercase text-white transition-colors"
                      >
                        VIEW REPOSITORY &rarr;
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 font-['Tektur'] text-xs font-bold uppercase transition-colors"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          color: '#0e0e0e',
                        }}
                      >
                        OPEN DEMO LINK &nearr;
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-['Fragment_Mono'] text-xs uppercase text-[#8a8a8a] hover:text-white"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
