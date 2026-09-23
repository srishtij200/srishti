import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectVisualMerchandisingPage: React.FC = () => {
  const { projectVM: vm } = portfolioData;
  const u = portfolioData.ui.projectVM;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">

      {/* SECTION: COVER (full-bleed image background, overlay text removed) */}
      {/* Image: /portfolio-assets/project2-hero-bg.png */}
      <section className="relative border-b border-[var(--c-ink)]/15 scroll-mt-24 overflow-hidden bg-[var(--c-bg)]">
        <img
          src="/portfolio-assets/project2-hero-bg.png"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            if (!t.dataset.fbk && t.src.indexOf('project2-hero-bg.png') !== -1) {
              t.dataset.fbk = '1';
              t.src = '/portfolio-assets/project2.png';
            } else {
              (t as HTMLElement).style.display = 'none';
            }
          }}
          alt="Cover Story Future Florals hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Breadcrumb overlay on hero image */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-14 lg:pb-20 min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center gap-4">
          <div className="flex items-center font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:opacity-80 flex items-center gap-1 transition-opacity">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{u.breadcrumbProjects}</span>
              </Link>
            </div>
          </div>
          <div className="max-w-4xl">
            <h1 className="font-serif-display font-bold text-[var(--c-ink)] leading-[1.02] tracking-tight text-3xl sm:text-5xl lg:text-6xl drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] uppercase">
              {vm.cover.title.split(', ')[0]},<br />
              {vm.cover.title.split(', ')[1]}
            </h1>
            <p className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)]/85 italic leading-snug drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] mt-2">
              {vm.cover.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: PAGE 2 — FROM INSIGHT TO CONCEPT */}
      <section
        id="page-2"
        className="relative border-b border-[var(--c-ink)]/15 scroll-mt-24 overflow-hidden"
        style={{ backgroundColor: '#F8F1EF' }}
      >
        {/* Corner Botanical Illustrations & Iridescent Ribbon */}
        <img
          src="/portfolio-assets/project-2/line-art-flower-top-right.png"
          alt=""
          aria-hidden="true"
          className="absolute -top-2 -right-2 w-32 sm:w-48 lg:w-60 pointer-events-none opacity-45 mix-blend-multiply select-none z-0"
        />
        <img
          src="/portfolio-assets/project-2/line-art-flower-bottom-left.png"
          alt=""
          aria-hidden="true"
          className="absolute -bottom-2 -left-2 w-28 sm:w-40 lg:w-52 pointer-events-none opacity-40 mix-blend-multiply select-none z-0"
        />
        <img
          src="/portfolio-assets/project-2/iridescent-ribbon-bottom.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full max-w-xl pointer-events-none opacity-40 mix-blend-multiply select-none z-0"
        />

        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
          {/* Top Title Header */}
          <div className="mb-8 max-w-3xl">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[var(--c-ink)] uppercase leading-[1.04] tracking-tight font-normal">
              FROM INSIGHT<br />TO CONCEPT
            </h2>
            <p className="font-hand text-2xl sm:text-3xl lg:text-4xl text-[var(--c-ink)]/85 mt-2 mb-4 leading-snug">
              {vm.page2Brief.subtitle}
            </p>
            <div className="w-20 sm:w-28 h-[1px] bg-[var(--c-ink)]/30" />
          </div>

          {/* 3-Column Editorial Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* COLUMN 1 (LEFT): THE BRIEF + WHAT I INVESTIGATED */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              {/* The Brief */}
              <div>
                <h3 className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[var(--c-ink)] mb-3">
                  {vm.page2Brief.briefTitle}
                </h3>
                <p className="font-serif-display italic text-base sm:text-lg lg:text-[19px] text-[var(--c-ink)]/90 leading-snug">
                  {vm.page2Brief.briefText}
                </p>
              </div>

              {/* What I Investigated */}
              <div className="pt-4 border-t border-[var(--c-ink)]/15">
                <h3 className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[var(--c-ink)] mb-5">
                  {vm.page2Brief.investigationTitle}
                </h3>
                <div className="grid grid-cols-3 divide-x divide-[var(--c-ink)]/20">
                  {vm.page2Brief.whatIInvestigated.map((item, idx) => (
                    <div key={idx} className="px-2 sm:px-3 text-center flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[var(--c-ink)]/20 shadow-xs mb-3 bg-white/60">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-mono-code text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--c-ink)] mb-1.5 leading-tight">
                        {item.name}
                      </h4>
                      <ul className="space-y-0.5">
                        {item.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="font-serif-display italic text-xs sm:text-[13px] text-[var(--c-ink)]/80 leading-tight"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMN 2 (CENTER): HOW I REACHED THE CONCEPT (Vertical Flow Journey) */}
            <div className="lg:col-span-3 lg:border-l lg:border-[var(--c-ink)]/15 lg:pl-8 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[var(--c-ink)] mb-6">
                  {vm.page2Brief.conceptFlowTitle}
                </h3>

                <div className="space-y-1">
                  {vm.page2Brief.howIReachedTheConcept.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <div className="flex items-center gap-3.5">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[var(--c-ink)]/25 shadow-xs shrink-0 bg-white/70">
                          <img
                            src={node.image}
                            alt={node.label.replace('\n', ' ')}
                            className="w-full h-full object-cover scale-[1.7]"
                          />
                        </div>
                        <div className="min-w-0">
                          <span className={`font-mono-code text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] leading-tight block whitespace-pre-line ${node.isHighlight ? 'underline decoration-1 underline-offset-4' : ''}`}>
                            {node.label}
                          </span>
                        </div>
                      </div>

                      {nIdx < vm.page2Brief.howIReachedTheConcept.length - 1 && (
                        <div className="w-13 sm:w-14 flex justify-center py-0.5">
                          <ArrowDown className="w-3.5 h-3.5 text-[var(--c-ink)]/45" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Takeaway Quote */}
              <div className="pt-4 border-t border-[var(--c-ink)]/15">
                <p className="font-serif-display italic text-sm sm:text-base text-[var(--c-ink)]/85 leading-snug">
                  "{vm.page2Brief.conceptSummary}"
                </p>
              </div>
            </div>

            {/* COLUMN 3 (RIGHT): HERO BLOOM COMPOSITION + COLLAGE + DESIGN INSIGHT */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Hero Blooming Visual Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--c-ink)]/20 shadow-md bg-[#FAF4F2]">
                <img
                  src={vm.page2Brief.heroImage}
                  alt="Future Florals blooming concept hero"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Lower Section: Design Insight Card */}
              <div className="grid grid-cols-1 gap-4 items-stretch">

                {/* Design Insight Card */}
                <div className="relative rounded-xl border border-[var(--c-ink)]/15 p-4 flex flex-col justify-center bg-white/60 shadow-xs overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-mono-code text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--c-ink)] mb-1">
                      {vm.page2Brief.designInsightTitle}
                    </h4>
                    <div className="w-10 h-[1px] bg-[var(--c-ink)]/30 mb-2.5" />
                    <p className="font-serif-display italic text-xs sm:text-[13px] text-[var(--c-ink)]/85 leading-snug">
                      "{vm.page2Brief.designInsight}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: PAGE 3 — THE VISUAL LANGUAGE (MOOD & COLOUR BOARDS) */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Slide Header */}
            <div className="pb-6 border-b border-[var(--c-ink)]/15 mb-10">
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                {vm.page3Boards.title}
              </h2>
            </div>

            {/* MOOD BOARD — keep heading, image + content + tiny keywords */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-10">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Mood Board Image - LEFT (native 1280x720, 16:9) */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)]">
                  <img
                    src={vm.page3Boards.moodBoard.image}
                    alt="Mood Board - Future Florals"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Mood Board Content - RIGHT */}
                <div className="space-y-6">
                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
                    {vm.page3Boards.moodBoard.title}
                  </h2>
                  <p className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)]/85 italic leading-snug">
                    {(vm.page3Boards.moodBoard as { tagline?: string }).tagline}
                  </p>
                  <p className="font-body text-base sm:text-lg text-[var(--c-ink)]/85 leading-relaxed">
                    {vm.page3Boards.moodBoard.content}
                  </p>
                  <p className="font-mono-code text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--c-ink)]/70">
                    {vm.page3Boards.moodBoard.keywords.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            {/* COLOUR BOARD */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-8">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Colour Board Image - LEFT (native 1280x720, 16:9) */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)]">
                  <img
                    src={vm.page3Boards.colourBoard.image}
                    alt="Colour Board - Future Florals"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Colour Board Content - RIGHT */}
                <div className="space-y-4">
                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
                    {vm.page3Boards.colourBoard.title}
                  </h2>
                  <p className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)]/85 italic leading-snug">
                    {(vm.page3Boards.colourBoard as { subtitle?: string }).subtitle}
                  </p>
                  <p className="font-body text-base sm:text-lg text-[var(--c-ink)]/85 leading-relaxed">
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

            <div className="space-y-10 sm:space-y-12 lg:space-y-16 mb-10">
              {vm.page4BehindTheDisplay.map((step, idx) => {
                const imageLeft = idx % 2 === 0;
                return (
                <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center`}>
                  <div className={`rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)] shadow-sm w-full max-w-md mx-auto ${imageLeft ? 'lg:order-1 lg:ml-auto lg:mr-0' : 'lg:order-2 lg:mr-auto lg:ml-0'}`}>
                    <img
                      src={(step as { image?: string }).image}
                      alt={`${step.imageIndex}: ${step.title}`}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`space-y-2 text-left ${imageLeft ? 'lg:order-2' : 'lg:order-1 lg:text-right'}`}>
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
                </div>
                );
              })}
            </div>
          </div>
        </div>

      {/* SECTION: PAGE 5 — FROM CONCEPT TO CAPABILITY (SKILLS & PRINCIPLES) */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
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

            {/* PAGE 5 TOP: SINGLE HERO IMAGE (LEFT) + SKILLS/PRINCIPLES BOXES (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-10">
              <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)] shadow-sm">
                <img
                  src={(vm.page5SkillsAndPrinciples.quoteBanner as { image?: string }).image ?? "/portfolio-assets/project-2/page5-final-installation.jpg"}
                  alt={`${vm.page5SkillsAndPrinciples.quoteBanner.accent} — ${vm.page5SkillsAndPrinciples.quoteBanner.caption}`}
                  className="w-full h-full min-h-[320px] lg:min-h-[520px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="border border-[var(--c-ink)]/25 bg-[var(--c-bg)] rounded-none px-6 py-6 flex-1 flex flex-col">
                  <div className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] text-center pb-4 border-b border-[var(--c-ink)]/15">
                    {u.p5SkillsHeader}
                  </div>
                  <ul className="flex-1 flex flex-col justify-evenly divide-y divide-[var(--c-ink)]/10">
                    {vm.page5SkillsAndPrinciples.skillsApplied.map((sk, idx) => (
                      <li key={idx} className="py-3 text-center font-mono-code text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--c-ink)]/85">
                        {sk.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-[var(--c-ink)]/25 bg-[var(--c-bg)] rounded-none px-6 py-6 flex-1 flex flex-col">
                  <div className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] text-center pb-4 border-b border-[var(--c-ink)]/15">
                    {u.p5PrinciplesHeader}
                  </div>
                  <ul className="flex-1 flex flex-col justify-evenly divide-y divide-[var(--c-ink)]/10">
                    {vm.page5SkillsAndPrinciples.vmPrinciplesApplied.map((p, idx) => (
                      <li key={idx} className="py-3 flex items-baseline justify-between gap-4">
                        <span className="font-serif-display italic text-base text-[var(--c-ink)]/60">
                          {String(p.number).padStart(2, '0')}
                        </span>
                        <span className="font-mono-code text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--c-ink)]/85">
                          {p.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* WHAT I LEARNED + PROJECT TAKEAWAY — soft pastel wash panel */}
            <div
              className="border border-[var(--c-ink)]/10 px-6 sm:px-10 py-8 sm:py-10 mb-8"
              style={{ background: 'linear-gradient(135deg, rgba(243,231,228,0.55) 0%, rgba(232,237,247,0.55) 55%, rgba(230,216,226,0.45) 100%)' }}
            >
            {/* WHAT I LEARNED */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-8">
              <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-3">
                {u.p5LearnedTitle}
              </h2>
              <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                {vm.page5SkillsAndPrinciples.whatILearned}
              </p>
            </div>

            {/* PROJECT TAKEAWAY */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8">
              <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-3">
                PROJECT TAKEAWAY
              </h2>
              <p className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)] italic leading-snug">
                “{vm.page5SkillsAndPrinciples.quoteBanner.quote}”
              </p>
            </div>
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
