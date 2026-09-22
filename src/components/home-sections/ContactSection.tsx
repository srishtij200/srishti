import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;
  const sectionTitles = portfolioData.ui.contact;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-[var(--c-ink)]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
              {sectionTitles.sectionTitleFirst}{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-highlight)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20" />
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80 hover:underline underline-offset-4 decoration-[var(--c-highlight)] break-all"
            >
              <Mail className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0" />
              <span>{contact.email}</span>
            </motion.a>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80"
            >
              <MapPin className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0" />
              <span>{contact.location}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80"
            >
              <Phone className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0" />
              <span>{contact.phone}</span>
            </motion.p>

            {contact.socials.map((soc, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.05 }}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono-code text-lg text-[var(--c-ink)]/80 hover:underline underline-offset-4 decoration-[var(--c-highlight)]"
              >
                <Linkedin className="w-6 h-6 text-[var(--c-ink)]/60 shrink-0" />
                <span>{soc.name} — {soc.handle}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};