import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTES_ARTICLES } from '../data/portfolioData';
import type { Article } from '../types';

export default function NotesSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="notes" className="bg-[#121212] py-24 sm:py-32 border-b border-[#222]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-16">
          <div>
            <span className="font-['Fragment_Mono'] text-xs text-[#777] uppercase tracking-widest block mb-2">
              [ 07 / NOTES &amp; JOURNAL ]
            </span>
            <div
              className="h-[2px] w-16 mb-4"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div className="font-['Fragment_Mono'] text-[11px] text-[#555]">
              CMS COLLECTION: NOTES
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#262626] pb-8">
              <div>
                <p className="mb-3 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#666]">
                  [ TECHNICAL THOUGHTS &amp; SYSTEM OBSERVATIONS ]
                </p>
                <h2 className="font-['Tektur'] text-3xl sm:text-5xl font-bold uppercase text-white leading-[0.95]">
                  ENGINEERING
                  <br />
                  <span
                    className="px-2 text-[#0e0e0e] inline-block"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    NOTES &amp; DISPATCHES.
                  </span>
                </h2>
              </div>
              <p className="max-w-xs font-['Figtree'] text-xs text-[#888] leading-relaxed">
                Essays on state reconciliation, transactional integrity, and hardware-accelerated web graphics.
              </p>
            </div>
          </div>
        </div>

        {/* Articles List Table */}
        <div className="divide-y divide-[#222] border-y border-[#222]">
          {NOTES_ARTICLES.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onClick={() => setSelectedArticle(article)}
              className="py-8 grid grid-cols-1 lg:grid-cols-[180px_1fr_auto] gap-6 items-center group cursor-pointer hover:bg-[#161616] px-4 transition-colors"
            >
              <div className="font-['Fragment_Mono'] text-xs text-[#777]">
                <div className="text-white font-semibold mb-1">{article.date}</div>
                <div className="text-[10px] text-[#555]">{article.readTime}</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2 font-['Fragment_Mono'] text-[10px] uppercase">
                  <span
                    className="px-1.5 py-0.5 text-[#0e0e0e] font-bold"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="font-['Tektur'] text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="font-['Figtree'] text-sm text-[#888] line-clamp-2 max-w-3xl leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-end font-['Fragment_Mono'] text-xs text-[#777] group-hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-2">
                  <span>READ ESSAY</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#121212] border border-[#333] w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 text-[#888] hover:text-white border border-[#2a2a2a] bg-[#1a1a1a] transition-colors font-['Fragment_Mono'] text-xs uppercase"
                  aria-label="Close article reader"
                >
                  ESC &times;
                </button>

                {/* Article Header */}
                <div className="mb-8 border-b border-[#262626] pb-6">
                  <div className="flex items-center gap-3 mb-3 font-['Fragment_Mono'] text-xs text-[#777]">
                    <span
                      className="px-2 py-0.5 text-[#0e0e0e] font-bold"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      {selectedArticle.category}
                    </span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h3 className="font-['Tektur'] text-2xl sm:text-4xl font-bold uppercase text-white leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none font-['Figtree'] text-base sm:text-lg leading-relaxed text-[#ccc] space-y-6">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-10 pt-6 border-t border-[#262626] flex items-center justify-between font-['Fragment_Mono'] text-xs text-[#777]">
                  <span>AUTHOR: SHIVANK</span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="hover:text-white text-xs uppercase"
                  >
                    CLOSE ESSAY &times;
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
