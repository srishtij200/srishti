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
  ArrowDown,
  Package,
  Box,
  Globe,
  Leaf,
  Circle
} from 'lucide-react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;
  const u = portfolioData.ui.projectMarketing;
  const p2 = pm.page2BriefToConcept;
  const p3 = pm.page3;
  const p4 = pm.page4ConceptToConsumer;
  const p5 = pm.page5IdeaToImpact;

  const processIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Lightbulb,
    Tag,
    Eye,
    Package,
    Box
  };
  const decisionIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe,
    Package,
    Leaf,
    Circle,
    Award
  };

  // Page 4 test photos: Sanity may hydrate without `src`, so fall back to the local assets.
  const p4PhotoFallbacks = [
    '/portfolio-assets/project-1/page4_testing_setup.jpeg',
    '/portfolio-assets/project-1/page4_consumer_feedback.jpeg'
  ];

  // Page 5 learnings: CMS learnings arrays carry no image field — component-local map.
  const p5LearningImages = [
    '/portfolio-assets/project-1/page5_research_papers.png',
    '/portfolio-assets/project-1/page5_strategy_notebook.png',
    '/portfolio-assets/project-1/page5_creative_thinking.jpeg',
    '/portfolio-assets/project-1/page5_brand_bag.png'
  ];

  // Page 5 journey steps: CMS step objects carry only `title` — image resolved by step title.
  const p5JourneyImages: Record<string, string> = {
    'STORE EXPERIENCE': '/portfolio-assets/project-1/page5_journey_store.jpg',
    'DIGITAL EXPERIENCE': '/portfolio-assets/project-1/page5_journey_digital.jpg',
    'BILLBOARDS': '/portfolio-assets/project-1/page5_journey_billboards.jpg',
    'MARKET ROLLOUT': '/portfolio-assets/project-1/page5_journey_billboards.jpg'
  };

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">

      {/* ========================================================================= */}
      {/* PAGE 1: HERO (full-bleed image background, overlay text removed)       */}
      {/* Image: /portfolio-assets/project1-hero-bg.png (drop your PNG there)   */}
      {/* ========================================================================= */}
      <section id="page-1" className="relative border-b border-[var(--c-ink)]/15 scroll-mt-24 overflow-hidden bg-[var(--c-bg)]">
        {/* Hero image: uses project1-hero-bg.png when you drop it in public/portfolio-assets/,
            falls back to project1.png so the section is never blank. */}
        <img
          src={pm.cover.heroImage}
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            if (!t.dataset.fbk && t.src.indexOf('project1-hero-bg.png') !== -1) {
              t.dataset.fbk = '1';
              t.src = '/portfolio-assets/project1.png';
            } else {
              (t as HTMLElement).style.display = 'none';
            }
          }}
          alt="UNIQLO fragrance project hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Breadcrumb overlay on hero image */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-14 lg:pb-20 min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-start gap-4">
        {/* Top breadcrumb row — sits on the image (page-specific heading removed) */}
        <div className="flex items-center justify-between font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:opacity-80 flex items-center gap-1 transition-opacity">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{u.breadcrumbProjects}</span>
            </Link>
          </div>
        </div>
        {/* Hero heading overlay — moved up (tighter top spacing) */}
        <div className="max-w-4xl mx-auto text-center pt-0 -mt-4 sm:-mt-8">
          <h1 className="font-serif-display font-bold text-[var(--c-ink)] leading-[1.02] tracking-tight text-3xl sm:text-5xl drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
            A New Dimension of Life Wear : UNIQLO Fragrances
          </h1>
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

                  <p className="font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed mb-4">
                    {p2.quadrant01.text}
                  </p>

                  <div className="mb-4">
                    <PlaceholderImage
                      src={p2.quadrant01.image.src}
                      label={p2.quadrant01.image.label}
                      alt={p2.quadrant01.image.alt}
                    />
                  </div>
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

                  {/* 3 Research Pillars — Horizontal */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {p2.quadrant02.pillars.map((pillar, idx) => {
                      const IconComponent = idx === 0 ? TrendingUp : idx === 1 ? Users : Target;
                      const bg = idx === 0 ? "#F6E7D3" : idx === 1 ? "#C9A0A4" : "#F6E7D3";
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-[var(--c-ink)]/20 p-3 flex flex-col gap-2 shadow-xs"
                          style={{ backgroundColor: bg }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-serif-display text-lg font-bold text-[var(--c-ink)]/60">
                              0{idx + 1}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-[var(--c-bg)]/70 border border-[var(--c-ink)]/20 flex items-center justify-center">
                              <IconComponent className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                            </div>
                          </div>
                          <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase tracking-wider">
                            {pillar.name}
                          </span>
                          <ul className="space-y-1 font-body text-[11px] text-[var(--c-ink)]/85">
                            {pillar.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[var(--c-ink)]/50 shrink-0 mt-1.5"></span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="font-body text-xs text-[var(--c-ink)]/75 mb-3">
                    {p2.quadrant02.frameworkSentence}
                  </p>

                  <div className="mt-4">
                    <PlaceholderImage
                      src={p2.quadrant02.image.src}
                      label={p2.quadrant02.image.label}
                      alt={p2.quadrant02.image.alt}
                      aspect="aspect-[16/6]"
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 03: HOW WE CAME UP WITH THE CONCEPT                   */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col h-full">
                <div className="flex flex-col flex-1">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] font-bold">
                      {p2.quadrant03.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--c-ink)]">
                      {p2.quadrant03.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex flex-col space-y-2.5">
                    {/* Stage 1 — Brand */}
                    <div className="rounded-xl border border-[var(--c-ink)]/20 px-3.5 py-3 shadow-xs" style={{ backgroundColor: "#C9A0A4" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src={u.p2Flow.brandLogo}
                          alt="LifeWear logo"
                          className="h-5 w-auto object-contain rounded"
                        />
                        <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                          {u.p2Flow.brandName}
                        </span>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/75">
                        {u.p2Flow.brandDesc}
                      </p>
                    </div>

                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-4 h-4 text-[var(--c-ink)]/40" />
                    </div>

                    {/* Stage 2 — Question */}
                    <div className="rounded-xl border-2 border-dashed border-[var(--c-ink)]/30 bg-[var(--c-bg)] px-4 py-3.5 text-center flex items-center justify-center flex-1">
                      <p className="font-serif-display italic text-sm sm:text-base text-[var(--c-ink)] leading-snug">
                        "{u.p2Flow.question}"
                      </p>
                    </div>

                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-4 h-4 text-[var(--c-ink)]/40" />
                    </div>

                    {/* Stage 3 — Fragrance */}
                    <div className="rounded-xl border border-[#C9A0A4] px-3.5 py-3 shadow-xs" style={{ backgroundColor: "rgba(201,160,164,0.35)" }}>
                      <span className="font-mono-code text-xs font-bold text-[#7A4F54] block mb-0.5">
                        {u.p2Flow.fragranceName}
                      </span>
                      <p className="font-body text-xs text-[#7A4F54]">
                        {u.p2Flow.fragranceDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--c-ink)]/20 px-3.5 py-2.5 mt-4 font-body text-xs text-[var(--c-ink)]/85 leading-relaxed shadow-xs" style={{ backgroundColor: "rgba(169,181,160,0.45)" }}>
                  {p2.quadrant03.takeaway}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 04: SKILLS I APPLIED                                 */}
              {/* ------------------------------------------------------------- */}
              <div className="border-t-2 border-[var(--c-ink)]/20 pt-6 flex flex-col h-full">
                <div className="flex flex-col flex-1">
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

                  {/* 5 Skill Cards — stacked flow that fills card 3 height */}
                  <div className="flex flex-col gap-2.5 flex-1 justify-center">
                    {p2.quadrant04.skills.map((sk, sIdx) => {
                      const IconComp = sIdx === 0 ? Search : sIdx === 1 ? Target : sIdx === 2 ? Lightbulb : sIdx === 3 ? Tag : ImageIcon;
                      const bg = sIdx % 2 === 0 ? "#C9A0A4" : "#F6E7D3";
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-3 rounded-xl border border-[var(--c-ink)]/20 px-3 py-2.5 shadow-xs"
                          style={{ backgroundColor: bg }}
                        >
                          <span className="font-serif-display text-lg font-bold text-[var(--c-ink)]/50 leading-none w-6 shrink-0">
                            0{sIdx + 1}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[var(--c-bg)]/70 border border-[var(--c-ink)]/20 flex items-center justify-center shrink-0">
                            <IconComp className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-mono-code text-[11px] font-bold text-[var(--c-ink)] uppercase tracking-wide block leading-tight">
                              {sk.title}
                            </span>
                            <span className="font-body text-[10px] text-[var(--c-ink)]/70 leading-tight block">
                              {sk.subtitle}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-4">
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
      {/* PAGE 3: FROM STRATEGY TO SCENT                                            */}
      {/* ========================================================================= */}
      <section id="page-3" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[var(--c-ink)]/15 mb-10 gap-4">
              <div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] tracking-tight">
                  {p3.title}
                </h2>
                <p className="font-serif-display text-lg sm:text-xl text-[var(--c-ink)]/80 italic mt-1">
                  {p3.subtitle}
                </p>
              </div>
            </div>

            {/* Concept Section — One Concept → Four Expressions */}
            <div className="mb-12">
              <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                {p3.conceptSection.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {p3.conceptSection.expressions.map((exp, eIdx) => (
                  <div
                    key={eIdx}
                    className="rounded-xl border border-[var(--c-ink)]/20 overflow-hidden shadow-xs flex flex-col"
                    style={{ backgroundColor: exp.color }}
                  >
                    <PlaceholderImage
                      src={exp.image}
                      label={exp.name}
                      alt={`${exp.name} fragrance expression`}
                      aspect="aspect-[16/10]"
                    />
                    <div className="p-3.5 flex-1 flex flex-col gap-1.5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono-code text-sm font-bold text-[var(--c-ink)] uppercase tracking-wider">
                          {exp.name}
                        </span>
                        <span className="font-mono-code text-[10px] text-[var(--c-ink)]/60">
                          {exp.label}
                        </span>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/80 whitespace-pre-line leading-relaxed flex-1">
                        {exp.notes}
                      </p>
                      <span className="font-mono-code text-[10px] font-bold text-[var(--c-ink)]/70 uppercase tracking-wide pt-1 border-t border-[var(--c-ink)]/15">
                        {exp.mood}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-12">
              <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                {p3.processSection.title}
              </h3>

              {/* 5 Process Steps — horizontal */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mb-8">
                {p3.processSection.processSteps.map((step, sIdx) => {
                  const StepIcon = processIconMap[step.icon] ?? Lightbulb;
                  return (
                    <React.Fragment key={sIdx}>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--c-ink)]/25 bg-[var(--c-bg)] shadow-xs">
                        <div className="w-6 h-6 rounded-full bg-[var(--c-bg)]/50 border border-[var(--c-ink)]/20 flex items-center justify-center shrink-0">
                          <StepIcon className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                        </div>
                        <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-[var(--c-ink)]">
                          {step.label}
                        </span>
                      </div>
                      {sIdx < p3.processSection.processSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[var(--c-ink)]/40 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Physical Packaging — compact, centered */}
              <div className="max-w-lg mx-auto">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] block mb-5 text-center">
                  {p3.processSection.physicalPackaging.title}
                </span>
                <div className="grid grid-cols-2 gap-6">
                  {p3.processSection.physicalPackaging.photos.map((photo, pIdx) => (
                    <div key={pIdx} className="text-center">
                      <PlaceholderImage
                        src={photo.src}
                        label={photo.caption}
                        alt={`${photo.caption} ${photo.desc}`}
                        aspect="aspect-[6/5]"
                      />
                      <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] block mt-2.5 leading-tight">
                        {photo.caption}
                      </span>
                      <span className="font-body text-[10px] text-[var(--c-ink)]/60 block leading-tight">
                        {photo.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Decisions */}
            <div
              className="rounded-2xl border border-[var(--c-ink)]/20 p-6 sm:p-8 mb-10 shadow-xs"
              style={{ backgroundColor: p3.designDecisions.background }}
            >
              <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-5">
                {p3.designDecisions.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {p3.designDecisions.items.map((item, dIdx) => {
                  const DecIcon = decisionIconMap[item.icon] ?? Circle;
                  return (
                    <div key={dIdx} className="border-t border-[var(--c-ink)]/25 pt-3">
                      <div className="w-7 h-7 rounded-full bg-[var(--c-bg)]/70 border border-[var(--c-ink)]/20 flex items-center justify-center mb-2">
                        <DecIcon className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                      </div>
                      <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase tracking-wider block leading-tight mb-1">
                        {item.title}
                      </span>
                      <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--c-ink)]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-[var(--c-ink)]/70 font-bold uppercase tracking-widest">
                <span>{p3.footer.brand}</span>
                <span className="text-[var(--c-ink)]/40">{p3.footer.separator}</span>
                <span className="font-serif-display italic text-sm normal-case tracking-normal text-[var(--c-ink)]">
                  {p3.footer.statement}
                </span>
              </div>
              <div className="px-3 py-1 bg-[var(--c-bg)] rounded-full border border-[var(--c-ink)]/20 text-[var(--c-ink)]/70 font-semibold">
                {p3.footer.pagePagination}
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
          <div className="bg-[#FAF8F5] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-6 sm:p-12 lg:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

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
              {/* COLUMN 1: THE TEST (Stacked: group picture, feedback form)    */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-5 bg-white border-[1.5px] border-[var(--c-ink)] rounded-2xl p-6 paper-shadow">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {u.p4TestHeader}
                </h3>

                <div className="grid grid-cols-1 gap-5">
                  {p4.testPhotos.map((photo, pIdx) => (
                    <div key={pIdx} className="space-y-1.5">
                      <PlaceholderImage
                        src={photo.src || p4PhotoFallbacks[pIdx]}
                        label={photo.caption}
                        alt={photo.caption}
                        aspect={pIdx === 0 ? 'aspect-[1562/1600]' : 'aspect-[822/1166]'}
                      />
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
              <div className="lg:col-span-3 bg-white border-[1.5px] border-[var(--c-ink)] rounded-2xl p-6 paper-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    {u.p4ProcessHeader}
                  </h3>

                  <div className="space-y-2">
                    {p4.processSteps.map((step, sIdx) => {
                      const StepIcon = sIdx === 0 ? Eye : sIdx === 1 ? Users : sIdx === 2 ? MessageSquare : sIdx === 3 ? BarChart2 : Lightbulb;
                      return (
                        <React.Fragment key={sIdx}>
                          <div className="p-3 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-xl flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-white border border-[var(--c-ink)]/20 flex items-center justify-center shrink-0">
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
              <div className="lg:col-span-4 bg-white border-[1.5px] border-[var(--c-ink)] rounded-2xl p-6 paper-shadow">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {u.p4InsightsHeader}
                </h3>

                <div className="space-y-3">
                  {p4.keyInsights.map((insight, inIdx) => (
                    <div
                      key={inIdx}
                      className="p-4 rounded-xl border transition-transform hover:-translate-y-0.5 duration-200"
                      style={{
                        backgroundColor: insight.bg,
                        borderColor: insight.border
                      }}
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
            <div className="bg-[#EFECE6] border-[1.5px] border-[var(--c-ink)]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-[var(--c-ink)]/60 block mb-1">
                  {u.p4SynthesisLabel}
                </span>
                <span className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)] font-bold tracking-wide">
                  {p4.bottomStatement}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-mono-code text-xs text-[var(--c-ink)]/70 font-semibold px-3 py-1 bg-white rounded-full border border-[var(--c-ink)]/20">
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
      <section id="page-5" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
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

                    <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)] aspect-[4/3]">
                      <img
                        src={learn.image || p5LearningImages[lIdx]}
                        alt={learn.name}
                        className="w-full h-full object-cover"
                      />
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
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {p5.journeyInAction.steps.map((step, stIdx) => {
                    const stepImage = step.image || p5JourneyImages[step.title];
                    return (
                      <div key={stIdx} className="border-t border-[var(--c-ink)]/20 pt-3 text-center">
                        <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50 font-bold block">
                          0{stIdx + 1}
                        </span>
                        <span className="font-mono-code text-[11px] font-bold text-[var(--c-ink)] block leading-tight">
                          {step.title}
                        </span>
                        {stepImage ? (
                          <div className="mt-2 rounded-xl overflow-hidden border border-[var(--c-ink)]/15 bg-[var(--c-bg)] aspect-[4/3]">
                            <img
                              src={stepImage}
                              alt={step.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
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
