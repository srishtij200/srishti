import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Palette, 
  Eye, 
  Lightbulb, 
  ArrowDown, 
  Layers, 
  Box, 
  Flower2, 
  Settings, 
  Target, 
  Waves, 
  Sun, 
  Maximize2, 
  Scale, 
  type LucideIcon 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectVisualMerchandisingPage: React.FC = () => {
  const { projectVM: vm } = portfolioData;
  const u = portfolioData.ui.projectVM;

  const iconMap: Record<string, LucideIcon> = {
    Lightbulb, Eye, Layers, Box, Flower2, Settings,
    Target, Waves, Sun, Maximize2, Scale, Palette, Sparkles
  };

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{u.breadcrumbProjects}</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{u.breadcrumbCurrent}</span>
          </div>
          <span>{u.breadcrumbTag}</span>
        </div>
      </div>

      {/* SECTION: COVER PAGE */}
      <section className="bg-[var(--c-soft)] border-b border-[var(--c-ink)]/15 scroll-mt-24 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <div className="relative">
              <div className="grid grid-cols-1 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[var(--c-ink)] leading-[1.02] tracking-tight">
                    {vm.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]/80 italic leading-snug">
                    {vm.cover.subtitle}
                  </p>

                  <p className="font-mono-code text-xs sm:text-sm text-[var(--c-ink)]/70 max-w-xl leading-relaxed">
                    {vm.cover.tagline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaBrandLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">{vm.cover.brand}</span>
                    </div>
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaSeasonLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">{vm.cover.season}</span>
                    </div>
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaConceptLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">"{vm.cover.conceptName}"</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </section>

      {/* SECTION: PAGE 2 — FROM INSIGHT TO CONCEPT */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Slide Header */}
            <div className="pb-6 border-b border-[var(--c-ink)]/15 mb-10">
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                {vm.page2Brief.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-2">
                {vm.page2Brief.subtitle}
              </p>
            </div>

            {/* THE BRIEF */}
            <div className="max-w-4xl mb-12">
              <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed border-l-2 border-[var(--c-ink)]/30 pl-5">
                <span className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] block mb-2">
                  {vm.page2Brief.briefTitle}
                </span>
                {vm.page2Brief.briefText}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* LEFT: WHAT I INVESTIGATED */}
              <div className="lg:col-span-4">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-5 pb-2 border-b border-[var(--c-ink)]/15">
                  {u.briefSectionHeader}
                </div>
                <div className="space-y-5">
                  {vm.page2Brief.whatIInvestigated.map((item, idx) => (
                    <div key={idx} className="border-t border-[var(--c-ink)]/20 pt-4 text-center">
                      <h3 className="font-serif-display text-lg text-[var(--c-ink)] mb-2">
                        {item.pillar}
                      </h3>
                      <ul className="space-y-1.5 font-body text-xs text-[var(--c-ink)]/80">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-ink)]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER: HOW I REACHED THE CONCEPT */}
              <div className="lg:col-span-4">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-5 pb-2 border-b border-[var(--c-ink)]/15">
                  {vm.page2Brief.conceptFlowTitle}
                </div>
                <div className="flex flex-col items-center space-y-2">
                  {vm.page2Brief.howIReachedTheConcept.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <span className={`font-mono-code text-xs font-bold text-[var(--c-ink)] leading-tight text-center py-2 ${node.isHighlight ? 'bg-[var(--c-warm)]/30 border border-[var(--c-ink)] px-2.5 py-0.5 rounded-full' : ''}`}>
                        {node.step}
                      </span>
                      {nIdx < vm.page2Brief.howIReachedTheConcept.length - 1 && (
                        <ArrowDown className="w-4 h-4 text-[var(--c-ink)]/40 pb-0.5" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="font-serif-display text-base text-center text-[var(--c-ink)] italic mt-6 border-l-2 border-[var(--c-warm)] pl-5 leading-snug">
                  "{vm.page2Brief.conceptSummary}"
                </p>
              </div>

              {/* RIGHT: HERO + DESIGN INSIGHT */}
              <div className="lg:col-span-4 space-y-6">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] pb-2 border-b border-[var(--c-ink)]/15">
                  {u.visualDirectionHeader}
                </div>
                <div className="border-t border-[var(--c-warm)]/40 pt-4">
                  <span className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] block mb-2">
                    {u.designInsightLabel}
                  </span>
                  <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed">
                    {vm.page2Brief.designInsight}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      {/* SECTION: PAGE 3 — THE VISUAL LANGUAGE (MOOD & COLOUR BOARDS) */}
      <div className="bg-[var(--c-highlight)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Slide Header */}
            <div className="pb-6 border-b border-[var(--c-ink)]/15 mb-10">
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                {vm.page3Boards.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-2">
                {vm.page3Boards.subtitle}
              </p>
            </div>

            {/* MOOD BOARD */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-10">
              <div className="grid grid-cols-1 gap-6 items-start mb-8">
                <div>
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-3">
                    {vm.page3Boards.moodBoard.title}
                  </h2>
                  <p className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)]/85 italic leading-snug mb-6">
                    {vm.page3Boards.moodBoard.content}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--c-ink)]/15 font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    {vm.page3Boards.moodBoard.keywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* MOOD THEMES */}
              <div className="pt-6 border-t border-[var(--c-ink)]/15">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4">
                  {u.moodThemesHeader}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {vm.page3Boards.moodBoard.themes.map((t, tIdx) => (
                    <div key={tIdx} className="border-t border-[var(--c-ink)]/20 pt-3">
                      <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 font-bold block mb-1">
                        0{tIdx + 1}
                      </span>
                      <h4 className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase mb-1">
                        {t.name}
                      </h4>
                      <p className="font-body text-[11px] text-[var(--c-ink)]/70 leading-snug">
                        {t.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLOUR BOARD */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-8">
              <div className="grid grid-cols-1 gap-6 items-start mb-6">
                <div>
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-3">
                    {vm.page3Boards.colourBoard.title}
                  </h2>
                  <span className="inline-block px-2.5 py-1 bg-[var(--c-highlight)] border border-[var(--c-ink)] rounded-full font-mono-code text-[10px] font-bold uppercase text-[var(--c-ink)] mb-3">
                    {vm.page3Boards.colourBoard.moodTag}
                  </span>
                  <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                    {vm.page3Boards.colourBoard.content}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      {/* SECTION: BEHIND THE DISPLAY (5 STEPS WITH REAL PHOTOS) */}
      <div className="bg-[var(--c-warm)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <div className="max-w-4xl mb-8">
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] mb-2">
                {u.behindTitle}
              </h2>
              <p className="font-mono-code text-xs text-[var(--c-ink)]/70">
                {u.behindIntro}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {vm.page4BehindTheDisplay.map((step, idx) => (
                <div key={idx} className="border-t-2 border-[var(--c-ink)]/20 pt-6 space-y-2">
                  <span className="text-[10px] font-mono-code bg-[var(--c-ink)] text-[var(--c-bg)] px-2.5 py-0.5 rounded-full font-bold uppercase inline-block">
                    {step.imageIndex}
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* SECTION: PAGE 5 — FROM CONCEPT TO CAPABILITY (SKILLS & PRINCIPLES) */}
      <div className="bg-[var(--c-soft)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Slide Header */}
            <div className="pb-6 border-b border-[var(--c-ink)]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest mb-2">
                {vm.page5SkillsAndPrinciples.pageLabel} <span className="px-1">•</span> {vm.page5SkillsAndPrinciples.headerTag}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                {vm.page5SkillsAndPrinciples.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-2">
                {vm.page5SkillsAndPrinciples.subheadline}
              </p>
            </div>

            {/* QUOTE + PROCESS PORTRAIT */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-10">
              <div className="grid grid-cols-1 gap-6 items-center">
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 bg-[var(--c-warm)]/40 border border-[var(--c-ink)] rounded-full font-mono-code text-[10px] font-bold uppercase text-[var(--c-ink)]">
                    {vm.page5SkillsAndPrinciples.quoteBanner.accent}
                  </span>
                  <p className="font-serif-display text-xl sm:text-3xl text-[var(--c-ink)] italic leading-snug">
                    "{vm.page5SkillsAndPrinciples.quoteBanner.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* THE PROCESS BEHIND THE BEAUTY */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]">
                  {vm.page5SkillsAndPrinciples.processInAction.title}
                </div>
                <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 uppercase">
                  {u.p5ProcessTag}
                </span>
              </div>
              <p className="font-serif-display text-base sm:text-lg text-[var(--c-ink)]/80 italic mb-6">
                {vm.page5SkillsAndPrinciples.processInAction.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.processInAction.steps.map((s, sIdx) => (
                  <div key={sIdx} className="border-t border-[var(--c-ink)]/20 pt-3 text-center">
                    <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 font-bold block mb-1">
                      0{sIdx + 1}
                    </span>
                    <span className="font-mono-code text-[11px] font-bold text-[var(--c-ink)] block leading-tight">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS I APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                {u.p5SkillsHeader}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.skillsApplied.map((sk, idx) => {
                  const SkillIcon = iconMap[sk.icon] ?? Lightbulb;
                  return (
                    <div key={idx} className="border-t border-[var(--c-ink)]/20 pt-4">
                      <div className="w-9 h-9 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center mb-3">
                        <SkillIcon className="w-4 h-4 text-[var(--c-ink)]" />
                      </div>
                      <h3 className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase mb-2">
                        {sk.title}
                      </h3>
                      <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                        {sk.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VM PRINCIPLES APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                {u.p5PrinciplesHeader}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.vmPrinciplesApplied.map((p, idx) => {
                  const PrIcon = iconMap[p.icon] ?? Sparkles;
                  return (
                    <div key={idx} className="border-t border-[var(--c-ink)]/20 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-code text-xs text-[var(--c-ink)]/50 font-bold">
                          {p.number}.
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[var(--c-bg)] border border-[var(--c-ink)]/20 flex items-center justify-center">
                          <PrIcon className="w-4 h-4 text-[var(--c-ink)]" />
                        </div>
                      </div>
                      <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-1">
                        {p.name}
                      </h3>
                      <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT I LEARNED */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-8">
              <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-3">
                {u.p5LearnedTitle}
              </h2>
              <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                {vm.page5SkillsAndPrinciples.whatILearned}
              </p>
            </div>

            <div className="flex justify-end pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
              <Link
                to="/projects/project-3"
                className="bg-[var(--c-ink)] text-[var(--c-bg)] px-5 py-2.5 rounded-xl font-bold hover:bg-[var(--c-ink-hover)] cursor-pointer flex items-center gap-1.5"
              >
                <span>{u.footerNext}</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
