import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WashiTape } from '../components/CustomDoodles';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { TitleCoverSection } from '../components/home-sections/TitleCoverSection';
import { portfolioData } from '../data/portfolioData';
import { isSectionVisible, isProjectVisible, getHomeSectionOrder } from '../lib/sanity';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { selectedProjects, internship, student } = portfolioData;
  const ui = portfolioData.ui;
  const hero = ui.home.hero;
  const projectsSection = ui.home.projects;
  const internshipCallout = ui.home.internship;

  const homeProjectTitles: Record<string, string> = Object.fromEntries(
    projectsSection.cardTitles.map((item) => [item.id, item.title])
  );

  const homeProjectCategories: Record<string, string> = Object.fromEntries(
    projectsSection.cardCategories.map((item) => [item.id, item.title])
  );

  /* Visual order is driven by Site Settings — Studio can reorder/renumber the
     sections freely. The numbers in the comments below follow the fallback
     order used when no Site Settings document exists. */
  const sectionOrder = getHomeSectionOrder();

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-[var(--c-bg)] flex flex-col">
      <TitleCoverSection />
      {/* 1. HERO / ABOUT SECTION */}
      {isSectionVisible('home.hero') && (
      <section
        id="about"
        style={{ order: sectionOrder['home.hero'] }}
        className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-[var(--c-bg)] bg-graph-paper border-b border-[var(--c-ink)]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Combined Hero + About: Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif-display text-5xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-[var(--c-ink)] max-w-4xl mb-6"
              >
                {hero.headlineFirst}{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20"
                  />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    {hero.headlineSecond}
                  </span>
                </span>
              </motion.h1>

              {/* About Biography */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-3 space-y-5"
              >
                <div className="space-y-4 font-body text-base text-[var(--c-ink)]/85 leading-relaxed">
                  {hero.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <p className="relative z-10 font-serif-display text-xl sm:text-2xl text-[var(--c-ink)] italic leading-snug pt-2 border-l-2 border-[var(--c-warm)] pl-4">
                  "{student.statement}"
                </p>

                <p className="font-serif-display text-2xl sm:text-2xl text-[var(--c-ink)] italic leading-snug pt-1">
                  {hero.signature}
                </p>

                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--c-ink)] px-5 py-3 font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-bg)] transition-all duration-200 hover:-translate-y-0.5 hover:paper-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-ink)]"
                >
                  {ui.waitlist.submitIdle}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="group relative">
                <div className="absolute -top-3 left-10 z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-3">
                  <WashiTape color="#C9A0A4" width="w-24" />
                </div>

                <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-3 paper-shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:paper-shadow-xl">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={hero.image}
                      alt={hero.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[420px] lg:h-[560px] object-cover scale-[1.4] origin-top transition-transform duration-500 group-hover:scale-[1.45]"
                    />
                  </div>
                </div>

                <span className="absolute -bottom-3 right-8 bg-[var(--c-ink)] text-[var(--c-bg)] font-mono-code text-xs px-3 py-1.5 rounded-full paper-shadow-sm uppercase tracking-wider transition-transform duration-300 group-hover:-translate-y-1.5">
                  {hero.badge}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* 3. THREE FEATURED PROJECTS PREVIEW */}
      {isSectionVisible('home.projects') && (
      <section className="py-20 bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15" style={{ order: sectionOrder['home.projects'] }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[var(--c-ink)]/10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
                {projectsSection.titleFirst}{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20"
                  />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    {projectsSection.titleSecond}
                  </span>
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.filter((proj) => isProjectVisible(proj.slug)).map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div
                  className={`bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-6 paper-shadow hover:translate-y-[-4px] hover:paper-shadow-lg transition-all flex flex-col justify-between relative group h-full ${proj.rotation}`}
                >
                <div className="absolute -top-3 right-8 transition-transform duration-300 group-hover:rotate-6 group-hover:-translate-y-0.5">
                  <WashiTape color={proj.accentColor} width="w-20" />
                </div>

                <ProjectCardMedia image={proj.image} alt={proj.title} />

                <div>
                  <div className="text-xs text-[var(--c-ink)]/60 mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    <span className="font-bold text-[var(--c-ink)]">{projectsSection.projectPrefix} {proj.number}</span>
                  </div>

                  <span className="text-xs uppercase px-2.5 py-0.5 rounded-full border border-[var(--c-ink)]/30 inline-block mb-3 bg-[var(--c-bg)] transition-colors duration-300 group-hover:border-[var(--c-ink)]/70 group-hover:bg-[var(--c-warm)]">
                    {homeProjectCategories[proj.id] ?? proj.category}
                  </span>

                  <h3 className="font-serif-display text-2xl text-[var(--c-ink)] mb-3 leading-snug group-hover:underline decoration-[var(--c-ink)] underline-offset-4">
                    {homeProjectTitles[proj.id] ?? proj.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--c-ink)]/50 font-bold block mb-1">
                        {projectsSection.labels.brief}
                      </span>
                      <p className="text-sm text-[var(--c-ink)]/80 leading-relaxed whitespace-pre-line">
                        {proj.brief}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--c-ink)]/50 font-bold block mb-1">
                        {projectsSection.labels.research}
                      </span>
                      <p className="text-sm text-[var(--c-ink)]/80 leading-relaxed whitespace-pre-line">
                        {proj.research}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--c-ink)]/50 font-bold block mb-1">
                        {projectsSection.labels.contribution}
                      </span>
                      <p className="text-sm text-[var(--c-ink)]/80 leading-relaxed whitespace-pre-line">
                        {proj.contribution}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--c-ink)]/50 font-bold block mb-1">
                        {projectsSection.labels.learning}
                      </span>
                      <p className="text-sm text-[var(--c-ink)]/80 leading-relaxed whitespace-pre-line">
                        {proj.keyLearnings}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="w-full flex items-center justify-between py-2.5 px-4 bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-xl text-xs uppercase tracking-wider text-[var(--c-ink)] font-bold group-hover:bg-[var(--c-ink)] group-hover:text-[var(--c-bg)] transition-colors"
                  >
                    <span>{projectsSection.readComplete}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 2. INTERNSHIP FEATURE CALLOUT */}
      {isSectionVisible('home.internship') && (
      <section className="py-20 bg-[var(--c-warm)] border-b border-[var(--c-ink)]/15" style={{ order: sectionOrder['home.internship'] }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-t-2 border-[var(--c-ink)]/20 pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-8 space-y-4"
              >
                <span className="text-sm uppercase font-bold text-[var(--c-ink)]/60 block tracking-wider">
                  {internshipCallout.eyebrow}
                </span>
                <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
                  {internship.company}{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-bg)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20"
                    />
                    <span className="relative z-10 italic font-serif-display font-normal">
                      {internshipCallout.titleWord}
                    </span>
                  </span>
                </h2>
                <p className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]/60">
                  {internship.role}
                </p>
                <p className="text-base text-[var(--c-ink)]/85 leading-relaxed max-w-2xl">
                  {internship.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {internship.page1SocialMedia.skillsApplied.slice(0, 5).map((sk, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-md text-[var(--c-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--c-ink)]/60 hover:paper-shadow-sm cursor-default">
                      ✦ {sk}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-4 flex items-center justify-center"
              >
                <Link
                  to="/internship/experience"
                  aria-label="View internship experience"
                  className="group flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--c-bg)] text-[var(--c-ink)] border-[1.5px] border-[var(--c-ink)] hover:bg-[var(--c-ink)] hover:text-[var(--c-bg)] hover:paper-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-6"
                >
                  <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 4. SKILLS SECTION */}
      {isSectionVisible('home.skills') && (
        <div style={{ order: sectionOrder['home.skills'] }}>
          <SkillsSection />
        </div>
      )}

      {/* 5. CONTACT ME SECTION */}
      {isSectionVisible('home.contact') && (
        <div style={{ order: sectionOrder['home.contact'] }}>
          <ContactSection />
        </div>
      )}
    </div>
    </MotionConfig>
  );
};
