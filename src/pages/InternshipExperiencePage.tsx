import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Video, ShoppingBag, ArrowRight } from 'lucide-react';
import { FlowerMark } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;
  const ui = portfolioData.ui.internshipExperience;

  const internshipLearnings = ui.learnings;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">
      {/* Company Header — dusty blue band */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4">
              <FlowerMark size={14} />
              <span>{ui.badge}</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-2">
              {internship.company}
            </h1>

            <div className="font-mono-code text-sm sm:text-base text-[var(--c-ink)]/80 font-bold mb-4">
              {internship.role}
            </div>

            <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-3xl mb-8">
              {internship.overview}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: PAGE 1 — SOCIAL MEDIA — cream band */}
      <section id="social-media" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--c-ink)]/15">
            <Video className="w-5 h-5 text-[var(--c-ink)]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]">
              {ui.sectionSocialTitle}
            </h2>
          </div>
          <div className="space-y-12">
            <div className="relative">
              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] mb-4">
                  {ui.socialIntroTitle}
                </h2>
                <div className="border-l-2 border-[var(--c-ink)]/30 pl-4 font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                  <strong>{ui.introPrefix}</strong> {internship.page1SocialMedia.intro}
                </div>
              </div>

              {/* What I Worked On Grid */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {ui.workedOnLabel}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page1SocialMedia.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="border-t border-[var(--c-ink)]/20 pt-4 flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[var(--c-ink)]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-3">
                  {ui.skillsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page1SocialMedia.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[var(--c-bg)] border border-[var(--c-ink)]/30 rounded-xl font-mono-code text-xs text-[var(--c-ink)] flex items-center gap-1.5"
                    >
                      <span className="text-[#4F5B4A] font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAGE 2 — E-COMMERCE — sage band */}
      <section id="ecommerce" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--c-ink)]/15">
            <ShoppingBag className="w-5 h-5 text-[var(--c-ink)]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]">
              {ui.sectionEcomTitle}
            </h2>
          </div>
          <div className="space-y-12">
            <div className="relative">
              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] mb-4">
                  {ui.ecomIntroTitle}
                </h2>
                <div className="border-l-2 border-[var(--c-ink)]/30 pl-4 font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                  <strong>{ui.introPrefix}</strong> {internship.page2Ecommerce.intro}
                </div>
              </div>

              {/* What I Worked On */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {ui.workedOnLabel}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page2Ecommerce.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="border-t border-[var(--c-ink)]/20 pt-4 flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[var(--c-ink)]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-3">
                  {ui.skillsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page2Ecommerce.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[var(--c-bg)] border border-[var(--c-ink)]/30 rounded-xl font-mono-code text-xs text-[var(--c-ink)] flex items-center gap-1.5"
                    >
                      <span className="text-[#4A6A85] font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEARNINGS OF INTERNSHIP — dusty rose band */}
      <section id="internship-learnings" className="bg-[var(--c-warm)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
                {ui.learningsLabel}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
                {ui.learningsTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {internshipLearnings.map((l, idx) => (
                <div key={idx} className="flex items-start gap-4 border-t border-[var(--c-ink)]/20 pt-4">
                  <span className="font-mono-code text-sm font-bold text-[var(--c-ink)] bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-mono-code text-xs sm:text-sm font-bold text-[var(--c-ink)] uppercase mb-1">
                      {l.title}
                    </div>
                    <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LEARNING OUTCOMES (Consolidated) — dusty blue band + bottom navigation */}
      <section id="learning-outcomes" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
                {ui.synthesisLabel}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
                {ui.synthesisTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {internship.learningOutcomes.map((lo) => (
                <div key={lo.number} className="border-t border-[var(--c-ink)]/20 pt-4">
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase mb-1">
                    {lo.number} — {lo.title}
                  </div>
                  <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed pt-2">
                    {lo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t-2 border-[var(--c-ink)]/20 pt-8 gap-4">
            <div>
              <div className="font-mono-code text-xs uppercase text-[var(--c-ink)]/60">{ui.nextLabel}</div>
              <div className="font-serif-display text-2xl text-[var(--c-ink)]">{ui.nextTitle}</div>
            </div>
            <Link
              to="/projects/marketing"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[var(--c-ink-hover)] transition-colors"
            >
              <span>{ui.nextCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
