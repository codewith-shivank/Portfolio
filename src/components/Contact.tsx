import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Platform',
    budget: '$5,000 - $10,000',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous delivery feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="bg-[#0e0e0e] py-24 sm:py-32 border-b border-[#222]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div
          className="mb-14 h-[2px] w-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Direct Inquiries & Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-['Fragment_Mono'] text-xs uppercase tracking-widest text-[#777]">
                [ 09 / INITIATE CONTACT ]
              </span>
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.92] text-white"
            >
              LET&apos;S START
              <br />
              <span
                className="px-2 text-[#0e0e0e] inline-block"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                A CONVERSATION.
              </span>
            </motion.h2>

            <p className="mt-6 max-w-md font-['Figtree'] text-base leading-relaxed text-[#8a8a8a]">
              Have a product to build, an engineering architecture to untangle, or a 60 FPS interactive experience to design? Send a message directly to Shivank.
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-[#141414] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-['Fragment_Mono'] text-[10px] text-[#666] uppercase block">
                    DIRECT INBOX
                  </span>
                  <span className="font-['Tektur'] text-sm sm:text-base font-bold text-white uppercase">
                    {PERSONAL_DETAILS.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 font-['Fragment_Mono'] text-xs uppercase transition-colors border border-[#333] hover:border-white text-white"
                >
                  {copiedEmail ? '✓ COPIED' : 'COPY EMAIL'}
                </button>
              </div>

              {/* Verified Handles */}
              <div className="grid grid-cols-2 gap-3 font-['Fragment_Mono'] text-xs">
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#141414] border border-[#222] hover:border-[#444] transition-colors flex items-center justify-between group"
                >
                  <span className="text-[#888]">GITHUB</span>
                  <span className="text-white group-hover:text-[var(--color-accent)]">&rarr;</span>
                </a>
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#141414] border border-[#222] hover:border-[#444] transition-colors flex items-center justify-between group"
                >
                  <span className="text-[#888]">LINKEDIN</span>
                  <span className="text-white group-hover:text-[var(--color-accent)]">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Real-time Status Card */}
            <div className="mt-8 pt-6 border-t border-[#222] font-['Fragment_Mono'] text-xs text-[#777] space-y-1">
              <div>RESPONSE WINDOW: WITHIN 12 HOURS</div>
              <div>AVAILABILITY: OPEN FOR CONTRACTS &amp; SPRINT RETRACTS</div>
              <div>LOCATION: {PERSONAL_DETAILS.location}</div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="bg-[#121212] border border-[#222] p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-['Tektur'] text-2xl font-bold text-[#0e0e0e]"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    ✓
                  </div>
                  <h3 className="font-['Tektur'] text-2xl font-bold uppercase text-white">
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className="font-['Figtree'] text-sm text-[#888] max-w-sm mx-auto">
                    Thank you, {formData.name}. Your inquiry has been received. Shivank will follow up at {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Full-Stack Platform',
                        budget: '$5,000 - $10,000',
                        message: '',
                      });
                    }}
                    className="mt-6 px-4 py-2 border border-[#333] font-['Fragment_Mono'] text-xs text-white uppercase hover:bg-[#1a1a1a]"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#888]">
                        YOUR NAME *
                      </span>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ALICE CHEN"
                        className="form-input bg-[#161616] border-[#2a2a2a] text-white p-3 font-['Fragment_Mono'] text-xs w-full focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#888]">
                        EMAIL ADDRESS *
                      </span>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ALICE@COMPANY.COM"
                        className="form-input bg-[#161616] border-[#2a2a2a] text-white p-3 font-['Fragment_Mono'] text-xs w-full focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#888]">
                        PROJECT DISCIPLINE
                      </span>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="form-input bg-[#161616] border-[#2a2a2a] text-white p-3 font-['Fragment_Mono'] text-xs w-full focus:outline-none focus:border-[var(--color-accent)]"
                      >
                        <option value="Full-Stack Platform">FULL-STACK PLATFORM</option>
                        <option value="3D / WebGL Experience">3D / WEBGL EXPERIENCE</option>
                        <option value="Design System & Architecture">DESIGN SYSTEM & ARCHITECTURE</option>
                        <option value="Sprint Retainer">MONTHLY SPRINT RETAINER</option>
                        <option value="Advisory / Code Review">ADVISORY / CODE AUDIT</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#888]">
                        ESTIMATED BUDGET
                      </span>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="form-input bg-[#161616] border-[#2a2a2a] text-white p-3 font-['Fragment_Mono'] text-xs w-full focus:outline-none focus:border-[var(--color-accent)]"
                      >
                        <option value="<$5,000">&lt; $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                        <option value="Monthly Retainer">MONTHLY RETAINER</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#888]">
                      PROJECT DETAILS &amp; TIMELINE *
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="DESCRIBE THE SYSTEM, SCOPE, DELIVERABLES, AND ANTICIPATED LAUNCH DATE..."
                      className="form-input bg-[#161616] border-[#2a2a2a] text-white p-3 font-['Fragment_Mono'] text-xs w-full focus:outline-none focus:border-[var(--color-accent)] resize-y min-h-[110px]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 font-['Tektur'] text-sm font-bold uppercase transition-all flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: '#0e0e0e',
                    }}
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>&gt; TRANSMIT PROJECT BRIEF</span>
                        <span>&rarr;</span>
                      </>
                    )}
                  </button>

                  <p className="font-['Fragment_Mono'] text-[10px] uppercase text-[#666] text-center">
                    ENCRYPTED TRANSMISSION · CONFIDENTIALITY GUARANTEED
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
