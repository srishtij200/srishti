import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { WashiTape } from '../components/CustomDoodles';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { portfolioData } from '../data/portfolioData';
import { isSectionVisible, isProjectVisible, getHomeSectionOrder } from '../lib/sanity';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { selectedProjects, internship, student } = portfolioData;
  const ui = portfolioData.ui;
  const hero = ui.home.hero;
  const aboutUi = ui.about;
  const projectsSection = ui.home.projects;
  const internshipCallout = ui.home.internship;

  const heroSpecializations = hero.specializations;

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
    <div className="bg-[var(--c-bg)] flex flex-col">
      {/* 1. HERO / ABOUT SECTION */}
      {isSectionVisible('home.hero') && (
      <section
        id="about"
        style={{ order: sectionOrder['home.hero'] }}
        className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-graph-paper border-b border-[var(--c-ink)]/15"
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
                  <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20" />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    {hero.headlineSecond}
                  </span>
                </span>
              </motion.h1>

              {/* About Metadata */}
              <div className="font-mono-code text-xs sm:text-sm text-[var(--c-ink)]/70 flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
                <span className="bg-[var(--c-highlight)] text-[var(--c-ink)] px-2.5 py-0.5 rounded border border-[var(--c-ink)] font-bold">
                  {student.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {student.location}
                </span>
                <span className="border-l border-[var(--c-ink)]/20 pl-3">{student.degree}</span>
              </div>

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

                <p className="relative z-10 font-serif-display text-xl sm:text-2xl text-[var(--c-ink)] italic leading-snug pt-2 border-l-2 border-[var(--c-highlight)] pl-4">
                  "{student.statement}"
                </p>

                <p className="font-serif-display text-2xl sm:text-2xl text-[var(--c-ink)] italic leading-snug pt-1">
                  {hero.signature}
                </p>

                <div className="flex flex-wrap gap-2">
                  {heroSpecializations.map((spec, i) => (
                    <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)]/30 rounded-lg text-[var(--c-ink)]">
                      ✦ {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -top-3 left-10 z-10">
                  <WashiTape color="#F4B6D4" width="w-24" />
                </div>

                <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-3 paper-shadow-lg">
                  <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    className="w-full h-[420px] lg:h-[560px] object-cover rounded-2xl"
                  />
                </div>

                <span className="absolute -bottom-3 right-8 bg-[var(--c-ink)] text-[var(--c-bg)] font-mono-code text-xs px-3 py-1.5 rounded-full paper-shadow-sm uppercase tracking-wider">
                  {hero.badge}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Scope */}
          <div className="mt-14">
            <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]/60 mb-4">{aboutUi.scopeHeader}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutUi.scopeItems.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[var(--c-ink)]/20 pt-5"
                >
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">{item.title}</div>
                  <div className="font-body text-sm text-[var(--c-ink)]/80 mt-1.5 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 3. THREE FEATURED PROJECTS PREVIEW */}
      {isSectionVisible('home.projects') && (
      <section className="py-20 bg-[#FFFFFF] border-b border-[var(--c-ink)]/15" style={{ order: sectionOrder['home.projects'] }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[var(--c-ink)]/10">
            <div>
              <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
                {projectsSection.titleFirst}{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20" />
                  <span className="relative z-10 italic font-serif-display font-normal">
                    {projectsSection.titleSecond}
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.filter((proj) => isProjectVisible(proj.slug)).map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col justify-between relative group border-t-2 border-[var(--c-ink)]/20 pt-6"
              >
                <div>
                  <div className="text-xs text-[var(--c-ink)]/60 mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    <span className="font-bold text-[var(--c-ink)]">{projectsSection.projectPrefix} {proj.number}</span>
                  </div>

                  <span className="text-xs uppercase px-2.5 py-0.5 rounded-full border border-[var(--c-ink)]/30 inline-block mb-3 bg-[#FFFFFF]">
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
                    className="w-full flex items-center justify-between py-2.5 px-4 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-xl text-xs uppercase tracking-wider text-[var(--c-ink)] font-bold group-hover:bg-[var(--c-ink)] group-hover:text-[var(--c-bg)] transition-colors"
                  >
                    <span>{projectsSection.readComplete}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 2. INTERNSHIP FEATURE CALLOUT */}
      {isSectionVisible('home.internship') && (
      <section className="py-20 bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15" style={{ order: sectionOrder['home.internship'] }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-t-2 border-[var(--c-ink)]/20 pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-sm uppercase font-bold text-[var(--c-ink)]/60 block tracking-wider">
                  {internshipCallout.eyebrow}
                </span>
                <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--c-ink)]">
                  {internship.company}{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-highlight)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20" />
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
                    <span key={i} className="text-xs px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-md text-[var(--c-ink)]">
                      ✦ {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center">
                <Link
                  to="/internship/experience"
                  aria-label="View internship experience"
                  className="group flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--c-highlight)] text-[var(--c-ink)] border-[1.5px] border-[var(--c-ink)] hover:bg-[var(--c-ink)] hover:text-[var(--c-highlight)] transition-colors"
                >
                  <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
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
  );
};
