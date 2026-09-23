import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Target, 
  Lightbulb, 
  Search, 
  Award, 
  Image as ImageIcon, 
  TrendingUp, 
  Users, 
  Tag, 
  Eye, 
  MessageSquare, 
  BarChart2, 
  ArrowRight, 
  ArrowDown 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;
  const u = portfolioData.ui.projectMarketing;
  const p2 = pm.page2BriefToConcept;
  const p4 = pm.page4ConceptToConsumer;
  const p5 = pm.page5IdeaToImpact;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)] flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{u.breadcrumbProjects}</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{u.breadcrumbCurrent}</span>
          </div>
          <span className="hidden sm:inline">{u.breadcrumbTag}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PAGE 1: HERO (full-bleed image background, overlay text removed)       */}
      {/* Image: /portfolio-assets/project1-hero-bg.png (drop your PNG there)   */}
      {/* ========================================================================= */}
      <section id="page-1" className="relative border-b border-[var(--c-ink)]/15 scroll-mt-24 overflow-hidden bg-[var(--c-soft)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/portfolio-assets/project1-hero-bg.png')" }}
          aria-hidden="true"
        />
        {/* Content slot — headings + two texts will go here (cleared for now) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 min-h-[70vh] lg:min-h-[85vh] flex items-end">
          <div className="space-y-6">
            {/* TODO(project1): add few headings + two texts here */}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 2: FROM BRIEF TO CONCEPT (Exact 4 Quadrants: 01, 02, 03, 04)         */}
      {/* ========================================================================= */}
      <section id="page-2" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">
            {/* Slide Top Header Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[var(--c-ink)]/15 mb-10 gap-4">
              <div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                  {p2.title}
                </h2>
                <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-1">
                  {p2.subtitle}
                </p>
              </div>
            </div>

            {/* 4 Quadrants Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 01: PROJECT BRIEF                                    */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] font-bold">
                      {p2.quadrant01.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--c-ink)]">
                      {p2.quadrant01.title}
                    </h3>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed mb-6">
                    {p2.quadrant01.text}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="border-l-2 border-[var(--c-ink)]/30 pl-4">
                    <span className="font-serif-display italic text-base sm:text-lg text-[var(--c-ink)] font-bold">
                      "{p2.quadrant01.scriptCallout}"
                    </span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 02: RESEARCH & INVESTIGATION                         */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] font-bold">
                      {p2.quadrant02.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--c-ink)]">
                      {p2.quadrant02.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[var(--c-ink)]/80 mb-5">
                    {p2.quadrant02.lead}
                  </p>

                  <div className="grid grid-cols-1 gap-4 items-start mb-6">
                    {/* Left: 3 Pillars */}
                    <div className="space-y-3">
                      {p2.quadrant02.pillars.map((pillar, idx) => {
                        const IconComponent = idx === 0 ? TrendingUp : idx === 1 ? Users : Target;
                        return (
                          <div key={idx} className="border-t border-[var(--c-ink)]/20 pt-3">
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="w-5 h-5 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center">
                                <IconComponent className="w-3 h-3 text-[var(--c-ink)]" />
                              </div>
                              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase">
                                {pillar.name}
                              </span>
                            </div>
                            <ul className="space-y-0.5 font-body text-xs text-[var(--c-ink)]/80 pl-2">
                              {pillar.points.map((pt, ptIdx) => (
                                <li key={ptIdx} className="flex items-center gap-1.5">
                                  <span className="w-1 h-1 rounded-full bg-[var(--c-ink)]/40 shrink-0"></span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>

                <div>
                  <p className="font-body text-xs text-[var(--c-ink)]/75 mb-3">
                    {p2.quadrant02.frameworkSentence}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p2.quadrant02.frameworkBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-md font-mono-code text-[10px] font-bold text-[var(--c-ink)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 03: HOW I CAME UP WITH THE CONCEPT                   */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] font-bold">
                      {p2.quadrant03.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--c-ink)]">
                      {p2.quadrant03.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
                    {/* Flow Column */}
                    <div className="space-y-2.5">
                      <div className="border-t border-[var(--c-ink)]/20 pt-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-1.5 py-0.5 bg-[var(--c-warm)] text-[var(--c-ink)] font-bold text-[10px] rounded tracking-wider">
                            {u.p2Flow.brandChip}
                          </span>
                          <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                            {u.p2Flow.brandName}
                          </span>
                        </div>
                        <p className="font-body text-xs text-[var(--c-ink)]/70">
                          {u.p2Flow.brandDesc}
                        </p>
                      </div>

                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-4 h-4 text-[var(--c-ink)]/40" />
                      </div>

                      <div className="border-t border-[var(--c-ink)]/20 pt-3 text-center">
                        <p className="font-serif-display italic text-xs sm:text-sm text-[var(--c-ink)] leading-snug">
                          "{u.p2Flow.question}"
                        </p>
                      </div>

                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-4 h-4 text-[var(--c-ink)]/40" />
                      </div>

                      <div className="border-t border-[#C9A0A4] pt-3">
                        <span className="font-mono-code text-xs font-bold text-[#7A4F54] block mb-0.5">
                          {u.p2Flow.fragranceName}
                        </span>
                        <p className="font-body text-xs text-[#7A4F54]">
                          {u.p2Flow.fragranceDesc}
                        </p>
                      </div>
                    </div>

                    {/* Nature Inspiration Column */}
                    <div className="space-y-3">
                      <div>
                        <span className="font-mono-code text-[11px] font-bold text-[var(--c-ink)] uppercase tracking-wider block mb-1">
                          {p2.quadrant03.natureTitle}
                        </span>
                        <div className="flex flex-wrap gap-2 text-xs font-mono-code text-[var(--c-ink)]/70">
                          {p2.quadrant03.naturePillars.map((pil, idx) => (
                            <span key={idx} className="after:content-['•'] after:ml-2 last:after:content-none">
                              {pil}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 4 Variant Palette Swatches */}
                      <div className="grid grid-cols-4 gap-1.5 pt-1">
                        {p2.quadrant03.variants.map((v, vIdx) => (
                          <div key={vIdx} className="text-center">
                            <div 
                              className="w-8 h-8 rounded-full mx-auto mb-1 border border-[var(--c-ink)]/20 flex items-center justify-center shadow-xs"
                              style={{ backgroundColor: v.color }}
                            >
                              <span 
                                className="w-2.5 h-2.5 rounded-full" 
                                style={{ backgroundColor: v.dotColor }}
                              />
                            </div>
                            <span className="font-mono-code text-[10px] font-bold block text-[var(--c-ink)]">
                              {v.name}
                            </span>
                            <span className="font-mono-code text-[8px] text-[var(--c-ink)]/50 block">
                              ({v.label})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--c-ink)]/20 pt-3 font-body text-xs text-[var(--c-ink)]/85 leading-relaxed">
                  {p2.quadrant03.takeaway}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 04: SKILLS I APPLIED                                 */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] font-bold">
                      {p2.quadrant04.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--c-ink)]">
                      {p2.quadrant04.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[var(--c-ink)]/80 mb-5">
                    {p2.quadrant04.lead}
                  </p>

                  {/* 5 Skills Row / Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                    {p2.quadrant04.skills.map((sk, sIdx) => {
                      const IconComp = sIdx === 0 ? Search : sIdx === 1 ? Target : sIdx === 2 ? Lightbulb : sIdx === 3 ? Tag : ImageIcon;
                      return (
                        <div key={sIdx} className="border-t border-[var(--c-ink)]/20 pt-3 text-center flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center mb-1.5 shadow-xs">
                            <IconComp className="w-4 h-4 text-[var(--c-ink)]" />
                          </div>
                          <span className="font-mono-code text-[10px] font-bold text-[var(--c-ink)] uppercase leading-tight mb-1">
                            {sk.title}
                          </span>
                          <span className="font-body text-[9px] text-[var(--c-ink)]/65 leading-tight">
                            {sk.subtitle}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between gap-3 border-t border-[var(--c-ink)]/20 pt-3">
                    <span className="font-serif-display italic text-xs text-[var(--c-ink)]/90">
                      "{p2.quadrant04.quote}"
                    </span>
                    <span className="font-mono-code text-[10px] text-[var(--c-ink)]/60 font-bold shrink-0">
                      {p2.quadrant04.tag}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 3: DESIGN DECISIONS & 4 VARIANTS                                     */}
      {/* ========================================================================= */}
      <section id="page-3" className="bg-[var(--c-highlight)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
                {u.p3PageTag}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] mb-4">
                {u.p3Title}
              </h2>
              <p className="font-body text-base text-[var(--c-ink)]/80">
                {u.p3Intro}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 items-start mb-10">
              <div className="space-y-4">
                {pm.page3DesignDecisions.map((item) => (
                  <div
                    key={item.number}
                    className="border-t border-[var(--c-ink)]/20 pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-code text-base font-bold text-[var(--c-ink)] bg-[var(--c-highlight)] w-8 h-8 rounded-full border border-[var(--c-ink)] flex items-center justify-center shrink-0">
                        {item.number}
                      </span>
                      <h3 className="font-serif-display text-2xl text-[var(--c-ink)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-[var(--c-ink)]/85 max-w-sm sm:text-right">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Strategic Frameworks Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[var(--c-ink)]/15">
              <div className="border-t border-[var(--c-ink)]/20 pt-3">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] block mb-1">
                  {u.strategyStpLabel}
                </span>
                <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                  {pm.page4Strategy.stp}
                </p>
              </div>

              <div className="border-t border-[var(--c-ink)]/20 pt-3">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] block mb-1">
                  {u.strategy7psLabel}
                </span>
                <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                  {pm.page4Strategy.sevenPs}
                </p>
              </div>

              <div className="border-t border-[var(--c-ink)]/20 pt-3">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] block mb-1">
                  {u.strategyBcgLabel}
                </span>
                <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                  {pm.page4Strategy.bcg}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 4: FROM CONCEPT TO CONSUMER (Exact 3-Column Architecture & Banner)   */}
      {/* ========================================================================= */}
      <section id="page-4" className="bg-[var(--c-warm)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">

            {/* Slide Header Bar */}
            <div className="pb-6 border-b border-[var(--c-ink)]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest mb-1">
                {p4.pageLabel}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                {p4.title}
              </h2>
              <p className="font-mono-code text-xs sm:text-sm text-[var(--c-ink)]/70 uppercase tracking-wider font-semibold mt-2">
                {p4.subtitle}
              </p>
            </div>

            {/* 3 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 1: THE TEST (2x2 Photo Grid)                           */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-5">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {u.p4TestHeader}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {p4.testPhotos.map((photo, pIdx) => (
                    <div key={pIdx} className="border-t border-[var(--c-ink)]/20 pt-3">
                      <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] block leading-tight">
                        {photo.caption}
                      </span>
                      <span className="font-body text-[10px] text-[var(--c-ink)]/60 block leading-tight">
                        {photo.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 2: THE PROCESS (Funnel Flow)                           */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    {u.p4ProcessHeader}
                  </h3>

                  <div className="space-y-2">
                    {p4.processSteps.map((step, sIdx) => {
                      const StepIcon = sIdx === 0 ? Eye : sIdx === 1 ? Users : sIdx === 2 ? MessageSquare : sIdx === 3 ? BarChart2 : Lightbulb;
                      return (
                        <React.Fragment key={sIdx}>
                          <div className="border-t border-[var(--c-ink)]/20 pt-3 flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center shrink-0">
                              <StepIcon className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                            </div>
                            <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]">
                              {step.label}
                            </span>
                          </div>
                          {sIdx < p4.processSteps.length - 1 && (
                            <div className="flex justify-center py-0.5">
                              <ArrowDown className="w-3.5 h-3.5 text-[var(--c-ink)]/40" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--c-ink)]/15">
                  <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                    {p4.processDescription}
                  </p>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 3: KEY INSIGHTS (4 Colored Cards)                      */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-4">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {u.p4InsightsHeader}
                </h3>

                <div className="space-y-3">
                  {p4.keyInsights.map((insight, inIdx) => (
                    <div
                      key={inIdx}
                      className="border-t border-[var(--c-ink)]/20 pt-3"
                    >
                      <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase tracking-wider block mb-1">
                        {insight.title}
                      </span>
                      <p className="font-body text-xs text-[var(--c-ink)]/85 leading-relaxed">
                        {insight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Statement Banner */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-[var(--c-ink)]/60 block mb-1">
                  {u.p4SynthesisLabel}
                </span>
                <span className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)] font-bold tracking-wide">
                  {p4.bottomStatement}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-mono-code text-xs text-[var(--c-ink)]/70 font-semibold px-3 py-1 bg-[var(--c-bg)] rounded-full border border-[var(--c-ink)]/20">
                  {p4.pagePagination}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAGE 5: FROM IDEA TO IMPACT (4 Pillars, Quote Banner, Journey & Skills)  */}
      {/* ========================================================================= */}
      <section id="page-5" className="bg-[var(--c-soft)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">

            {/* Slide Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[var(--c-ink)]/15 mb-10 gap-4">
              <div>
                <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest mb-1">
                  {p5.pageLabel}
                </div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                  {p5.title}
                </h2>
                <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-1">
                  {p5.subheadline}
                </p>
              </div>

            </div>

            {/* Top 4 Learning Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {p5.learnings.map((learn, lIdx) => {
                const LearnIcon = lIdx === 0 ? Search : lIdx === 1 ? Target : lIdx === 2 ? Lightbulb : Award;
                return (
                  <div key={lIdx} className="border-t-2 border-[var(--c-ink)]/20 pt-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif-display text-2xl font-bold text-[var(--c-ink)]">
                          {learn.num}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center">
                          <LearnIcon className="w-4 h-4 text-[var(--c-ink)]" />
                        </div>
                      </div>

                      <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-2">
                        {learn.name}
                      </h3>

                      <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed mb-4">
                        {learn.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Two Columns: Journey in Action & Skills I Developed */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

              {/* THE JOURNEY IN ACTION (8 cols) */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]">
                    {p5.journeyInAction.title}
                  </h3>
                  <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 uppercase">
                    {u.p5PipelineTag}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {p5.journeyInAction.steps.map((step, stIdx) => (
                    <div key={stIdx} className="border-t border-[var(--c-ink)]/20 pt-3 text-center">
                      <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 font-bold block">
                        0{stIdx + 1}
                      </span>
                      <span className="font-mono-code text-[11px] font-bold text-[var(--c-ink)] block leading-tight">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS I DEVELOPED (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    {u.p5SkillsHeader}
                  </h3>

                  <div className="space-y-2.5">
                    {p5.skillsDeveloped.map((skill, skIdx) => {
                      const SIcon = skIdx === 0 ? Search : skIdx === 1 ? Target : skIdx === 2 ? Lightbulb : skIdx === 3 ? Award : ImageIcon;
                      return (
                        <div
                          key={skIdx}
                          className="border-t border-[var(--c-ink)]/20 pt-3 flex items-center gap-3"
                        >
                          <div className="w-7 h-7 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center shrink-0 shadow-xs">
                            <SIcon className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                          </div>
                          <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--c-ink)]/10 text-center">
                  <span className="font-mono-code text-[11px] text-[var(--c-ink)]/60">
                    {u.p5Capstone}
                  </span>
                </div>
              </div>

            </div>

            {/* Next Project Footer Link */}
            <div className="flex justify-between items-center pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
              <Link
                to="/"
                className="hover:text-[var(--c-ink)] flex items-center gap-1.5 text-[var(--c-ink)]/70"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{u.footerAll}</span>
              </Link>

              <Link
                to="/projects/visual-merchandising"
                className="bg-[var(--c-ink)] text-[var(--c-bg)] px-5 py-2.5 rounded-xl font-bold hover:bg-[var(--c-ink-hover)] cursor-pointer flex items-center gap-2 transition-all shadow-sm"
              >
                <span>{u.footerNext}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
