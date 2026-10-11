import { useState } from 'react';
import { motion } from 'framer-motion';
import BracketLabel from './ui/BracketLabel';
import MonoArrow from './ui/MonoArrow';
import { MetaList } from './ui/SectionIntro';
import { CONTACT_CHANNELS, CONTACT_INTRO, CONTACT_QUESTIONS, SITE, SOCIAL_LINKS } from '../data/monodrift';
import type { ContactQuestion } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

function QuestionBlock({
  question,
  value,
  onAnswer,
}: {
  question: ContactQuestion;
  value: string;
  onAnswer: (id: string, value: string) => void;
}) {
  return (
    <li className="grid gap-5 border-b border-line py-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
      <div className="flex gap-5">
        <span className="kicker text-dim">{question.number}</span>
        <div>
          <h3 className="display display-sm max-w-[22ch]">{question.title}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{question.hint}</p>
        </div>
      </div>

      <div className="lg:pt-1">
        {question.kind === 'options' ? (
          <div className="flex flex-wrap gap-2" role="group" aria-label={question.title}>
            {question.options?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onAnswer(question.id, option)}
                aria-pressed={value === option}
                data-active={value === option}
                className="toggle-chip cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        ) : question.kind === 'textarea' ? (
          <textarea
            id={question.id}
            name={question.id}
            rows={4}
            required
            value={value}
            onChange={(event) => onAnswer(question.id, event.target.value)}
            placeholder={question.placeholder}
            className="w-full resize-none border border-line bg-surface px-4 py-3 font-mono text-sm uppercase tracking-[0.06em] text-white placeholder:text-dim focus:border-accent focus:outline-none"
          />
        ) : (
          <input
            id={question.id}
            name={question.id}
            type={question.kind}
            required
            value={value}
            onChange={(event) => onAnswer(question.id, event.target.value)}
            placeholder={question.placeholder}
            className="w-full border border-line bg-surface px-4 py-3 font-mono text-sm uppercase tracking-[0.06em] text-white placeholder:text-dim focus:border-accent focus:outline-none"
          />
        )}
      </div>
    </li>
  );
}

export default function ContactSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const setAnswer = (id: string, value: string) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // No backend on this build: the answers are handed to the visitor's mail client.
    const subject = `New project — ${answers.making ?? 'enquiry'} (${answers.lane ?? 'lane TBC'})`;
    const body = CONTACT_QUESTIONS.map(
      (question) => `${question.title}: ${answers[question.id] ?? '—'}`,
    ).join('\n');

    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-ink-2 border-t border-line-soft pt-16 sm:pt-24">
      <div className="shell">
        <div className="rule-t flex flex-wrap items-center justify-between gap-3 py-6">
          <BracketLabel className="text-muted">{CONTACT_INTRO.eyebrow}</BracketLabel>
          <span className="kicker text-dim">{CONTACT_INTRO.location}</span>
        </div>

        <div className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <h2 className="display display-lg max-w-[18ch]">{CONTACT_INTRO.heading}</h2>
          <div className="flex flex-col gap-8">
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {CONTACT_INTRO.intro}
            </p>
            <MetaList meta={CONTACT_INTRO.meta} />
          </div>
        </div>

        {/* Six questions */}
        <form onSubmit={handleSubmit} className="border-t border-line">
          <div className="flex flex-wrap items-center justify-between gap-3 py-5">
            <span className="kicker text-muted">[ {CONTACT_INTRO.formLabel} ]</span>
            <span className="kicker text-dim">
              {Object.values(answers).filter(Boolean).length} / {CONTACT_QUESTIONS.length} ANSWERED
            </span>
          </div>

          <ul className="border-t border-line">
            {CONTACT_QUESTIONS.map((question) => (
              <QuestionBlock
                key={question.id}
                question={question}
                value={answers[question.id] ?? ''}
                onAnswer={setAnswer}
              />
            ))}
          </ul>

          <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
            <button
              type="submit"
              disabled={sent}
              className="group inline-flex cursor-pointer items-center justify-between gap-8 bg-accent px-6 py-4 text-accent-ink transition-colors hover:bg-white disabled:cursor-default disabled:opacity-60"
            >
              <span className="mono-label font-bold">{sent ? 'SENT' : CONTACT_INTRO.submit}</span>
              <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <div className="max-w-md">
              <p className="mono-label text-white">{CONTACT_INTRO.legal}</p>
              <p className="mt-3 text-xs leading-relaxed text-dim">{CONTACT_INTRO.legalFine}</p>
            </div>
          </div>
        </form>

        {/* Other ways in */}
        <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CHANNELS.map((channel) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col justify-between gap-8 bg-page p-6"
            >
              <span className="kicker text-dim">{channel.eyebrow}</span>

              <div>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="link-underline font-heading text-lg font-bold uppercase tracking-[-0.02em] hover:text-accent"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="font-heading text-lg font-bold uppercase tracking-[-0.02em]">
                    {channel.value}
                  </span>
                )}

                {channel.lines.map((line) => (
                  <span key={line} className="mono-label mt-2 block text-muted">
                    {line}
                  </span>
                ))}

                {channel.id === 'watch' ? (
                  <span className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mono-label link-underline text-muted hover:text-accent"
                      >
                        {social.label}
                      </a>
                    ))}
                  </span>
                ) : null}
              </div>

              <span className="mono-label text-dim">{channel.note}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pb-20 sm:pb-24" />
    </section>
  );
}
