import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;
  const sectionTitles = portfolioData.ui.contact;
  const reduceMotion = useReducedMotion();
  const revealInitial = reduceMotion ? false : { opacity: 0, y: 15 };
  const revealWhileInView = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-[var(--c-ink)]/10">
          <motion.div
            initial={revealInitial}
            whileInView={revealWhileInView}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
              {sectionTitles.sectionTitleFirst}{' '}
              <span className="relative inline-block whitespace-nowrap">
                <motion.span
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.3 }}
                  className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20"
                />
                <span className="relative z-10 italic font-serif-display font-normal">
                  {sectionTitles.sectionTitleSecond}
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Contact Details (Centered Block, Left-Aligned Rows) */}
        <div className="flex justify-center">
          <div className="flex flex-col space-y-7">
            <motion.a
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              href={`mailto:${contact.email}`}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80 hover:text-[var(--c-ink)] hover:underline underline-offset-4 decoration-[var(--c-warm)] break-all transition-colors"
            >
              <Mail aria-hidden="true" className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-[var(--c-ink)]" />
              <span>{contact.email}</span>
            </motion.a>

            <motion.p
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.05 }}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80"
            >
              <MapPin aria-hidden="true" className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>{contact.location}</span>
            </motion.p>

            <motion.a
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
              href={`tel:${contact.phone}`}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[var(--c-ink)] hover:underline underline-offset-4 decoration-[var(--c-warm)] transition-colors"
            >
              <Phone aria-hidden="true" className="w-6 h-6 text-[var(--c-ink)] shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-6" />
              <span>{contact.phone}</span>
            </motion.a>

            {contact.socials.map((soc, i) => (
              <motion.a
                key={i}
                initial={revealInitial}
                whileInView={revealWhileInView}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.12 + i * 0.05 }}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80 hover:text-[var(--c-ink)] hover:underline underline-offset-4 decoration-[var(--c-warm)] transition-colors"
              >
                <Linkedin aria-hidden="true" className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-[var(--c-ink)]" />
                <span>{soc.name} — {soc.handle} <span className="sr-only">(opens in a new tab)</span></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};