import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Palette, 
  Hammer, 
  Eye, 
  Lightbulb, 
  CheckCircle2, 
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
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectVisualMerchandisingPage: React.FC = () => {
  const { projectVM: vm } = portfolioData;

  const iconMap: Record<string, LucideIcon> = {
    Lightbulb, Eye, Layers, Box, Flower2, Settings,
    Target, Waves, Sun, Maximize2, Scale, Palette, Sparkles
  };

  // Exact 5 step images from behind the display photoshoot
  const stepImages = [
    {
      src: "/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg",
      caption: "Holographic sheets shaped with wire"
    },
    {
      src: "/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg",
      caption: "First floral structure emerging"
    },
    {
      src: "/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg",
      caption: "Refining petal curvature and fold geometry"
    },
    {
      src: "/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg",
      caption: "Clustered floral arrangement and composition"
    },
    {
      src: "/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg",
      caption: "Backdrop, organza drapes, and lighting installation"
    }
  ];

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 pb-4 border-b border-[#182018]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:text-[#182018] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </Link>
            <span>/</span>
            <span className="text-[#182018] font-semibold">PROJECT 2 — VISUAL MERCHANDISING</span>
          </div>
          <span>COVER STORY // FUTURE FLORALS</span>
        </div>

        {/* SECTION: COVER PAGE */}
        <section className="space-y-12 mb-16">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5ED] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>VISUAL MERCHANDISING PROJECT 2 // PAGE 1</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#182018] leading-[1.02] tracking-tight">
                    {vm.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[#182018]/80 italic leading-snug">
                    {vm.cover.subtitle}
                  </p>

                  <p className="font-mono-code text-xs sm:text-sm text-[#182018]/70 max-w-xl leading-relaxed">
                    {vm.cover.tagline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">CLIENT / BRAND:</span>
                      <span className="font-bold text-[#182018]">{vm.cover.brand}</span>
                    </div>
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">SEASON:</span>
                      <span className="font-bold text-[#182018]">{vm.cover.season}</span>
                    </div>
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">CONCEPT:</span>
                      <span className="font-bold text-[#182018]">"{vm.cover.conceptName}"</span>
                    </div>
                  </div>
                </div>

                {/* Brand Book Cover Graphic */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 1.png"
                      alt="Cover Story S/S Brand Book"
                      className="w-full h-auto object-cover rounded-xl border border-[#182018]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[#182018]/70 text-center mt-2">
                      Cover Story Spring/Summer In-Store Experience Dossier
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </section>

        {/* SECTION: PAGE 2 — FROM INSIGHT TO CONCEPT */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            {/* Slide Header */}
            <div className="pb-6 border-b border-[#182018]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-2">
                {vm.page2Brief.pageLabel} <span className="px-1">•</span> {vm.page2Brief.headerTag}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                {vm.page2Brief.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[#182018]/80 italic mt-2">
                {vm.page2Brief.subtitle}
              </p>
            </div>

            {/* THE BRIEF */}
            <div className="max-w-4xl mb-12">
              <p className="font-body text-base text-[#182018]/85 leading-relaxed p-5 bg-[#F5F5ED] rounded-2xl border border-[#182018]/20">
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block mb-2">
                  {vm.page2Brief.briefTitle}
                </span>
                {vm.page2Brief.briefText}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* LEFT: WHAT I INVESTIGATED */}
              <div className="lg:col-span-4">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-5 pb-2 border-b border-[#182018]/15">
                  WHAT I INVESTIGATED
                </div>
                <div className="space-y-5">
                  {vm.page2Brief.whatIInvestigated.map((item, idx) => (
                    <div key={idx} className="p-5 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-[1.5px] border-[#182018]/25 mb-3 mx-auto shadow-xs">
                        <img src={item.image} alt={item.pillar} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-serif-display text-lg text-[#182018] mb-2">
                        {item.pillar}
                      </h3>
                      <ul className="space-y-1.5 font-body text-xs text-[#182018]/80">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#182018]" />
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
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-5 pb-2 border-b border-[#182018]/15">
                  {vm.page2Brief.conceptFlowTitle}
                </div>
                <div className="flex flex-col items-center space-y-2">
                  {vm.page2Brief.howIReachedTheConcept.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <div className={`w-32 h-32 rounded-full overflow-hidden border-[1.5px] shadow-sm ${node.isHighlight ? 'border-[#182018] ring-2 ring-[#F4B6D4]/70' : 'border-[#182018]/25'}`}>
                        <img src={node.image} alt={node.step} className="w-full h-full object-cover" />
                      </div>
                      <span className={`font-mono-code text-xs font-bold text-[#182018] leading-tight text-center ${node.isHighlight ? 'bg-[#F4B6D4]/30 border border-[#182018] px-2.5 py-0.5 rounded-full' : ''}`}>
                        {node.step}
                      </span>
                      {nIdx < vm.page2Brief.howIReachedTheConcept.length - 1 && (
                        <ArrowDown className="w-4 h-4 text-[#182018]/40 pb-0.5" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="font-serif-display text-base text-center text-[#182018] italic mt-6 p-5 bg-[#F4B6D4]/20 rounded-2xl border border-[#182018]/15 leading-snug">
                  "{vm.page2Brief.conceptSummary}"
                </p>
              </div>

              {/* RIGHT: HERO + DESIGN INSIGHT */}
              <div className="lg:col-span-4 space-y-6">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] pb-2 border-b border-[#182018]/15">
                  VISUAL DIRECTION
                </div>
                <div className="rounded-2xl overflow-hidden border-[1.5px] border-[#182018]/20 paper-shadow-sm">
                  <img
                    src={vm.page2Brief.heroImage.src}
                    alt="Future Florals in-store display environment"
                    className="w-full h-auto object-cover max-h-[440px]"
                  />
                  <span className="font-mono-code text-[10px] text-[#182018]/60 bg-white block text-center py-1.5 px-2">
                    {vm.page2Brief.heroImage.caption}
                  </span>
                </div>
                <div className="p-6 bg-[#F4B6D4]/25 border border-[#182018]/25 rounded-2xl">
                  <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block mb-2">
                    MY DESIGN INSIGHT
                  </span>
                  <p className="font-body text-sm text-[#182018]/85 leading-relaxed">
                    {vm.page2Brief.designInsight}
                  </p>
                </div>
              </div>

            </div>

        </div>

        {/* SECTION: PAGE 3 — THE VISUAL LANGUAGE (MOOD & COLOUR BOARDS) */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            {/* Slide Header */}
            <div className="pb-6 border-b border-[#182018]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-2">
                {vm.page3Boards.pageLabel} <span className="px-1">•</span> {vm.page3Boards.headerTag}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                {vm.page3Boards.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[#182018]/80 italic mt-2">
                {vm.page3Boards.subtitle}
              </p>
            </div>

            {/* MOOD BOARD */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
                <div className="lg:col-span-6">
                  <h2 className="font-serif-display text-3xl text-[#182018] mb-3">
                    {vm.page3Boards.moodBoard.title}
                  </h2>
                  <p className="font-serif-display text-xl sm:text-2xl text-[#182018]/85 italic leading-snug mb-6">
                    {vm.page3Boards.moodBoard.content}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#182018]/15 font-mono-code text-xs font-bold text-[#182018]">
                    {vm.page3Boards.moodBoard.keywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 paper-shadow-sm bg-white">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 16.png"
                      alt="Future Florals Mood Board"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-1.5 text-center">
                    Mood Board Visual Collages & Material Invocations
                  </span>
                </div>
              </div>

              {/* MOOD THEMES */}
              <div className="pt-6 border-t border-[#182018]/15">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4">
                  MOOD IN THEMES
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {vm.page3Boards.moodBoard.themes.map((t, tIdx) => (
                    <div key={tIdx} className="p-4 bg-[#FFFFFF] border border-[#182018]/20 rounded-xl">
                      <span className="font-mono-code text-[10px] text-[#182018]/50 font-bold block mb-1">
                        0{tIdx + 1}
                      </span>
                      <h4 className="font-mono-code text-xs font-bold text-[#182018] uppercase mb-1">
                        {t.name}
                      </h4>
                      <p className="font-body text-[11px] text-[#182018]/70 leading-snug">
                        {t.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLOUR BOARD */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                <div className="lg:col-span-6">
                  <h2 className="font-serif-display text-3xl text-[#182018] mb-3">
                    {vm.page3Boards.colourBoard.title}
                  </h2>
                  <span className="inline-block px-2.5 py-1 bg-[#C9FF8C] border border-[#182018] rounded-full font-mono-code text-[10px] font-bold uppercase text-[#182018] mb-3">
                    {vm.page3Boards.colourBoard.moodTag}
                  </span>
                  <p className="font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed">
                    {vm.page3Boards.colourBoard.content}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 paper-shadow-sm bg-white">
                    <img
                      src="/portfolio-assets/BRAND BOOK  - 18.png"
                      alt="Colour Board Palette"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-1.5 text-center">
                    Spring/Summer Colour Harmony & Iridescent Accents
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-[#182018]/15">
                {vm.page3Boards.colourBoard.palette.map((color, idx) => (
                  <div key={idx} className="bg-[#FFFFFF] border border-[#182018]/25 rounded-xl p-3 text-center">
                    <div
                      className="w-full h-16 rounded-lg border border-[#182018]/20 mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="font-mono-code text-xs font-bold text-[#182018]">{color.name}</div>
                    <div className="font-body text-[10px] text-[#182018]/65 leading-tight mt-1">
                      {color.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

        </div>

        {/* SECTION: BEHIND THE DISPLAY (5 STEPS WITH REAL PHOTOS) */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 4 — FABRICATION & ASSEMBLY
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-2">
                Behind the Display
              </h2>
              <p className="font-mono-code text-xs text-[#182018]/70">
                5-step progression from raw holographic sheets to spatial environmental installation.
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {vm.page4BehindTheDisplay.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center paper-shadow-sm"
                >
                  {/* Photo Slot */}
                  <div className="md:col-span-5">
                    <div className="rounded-xl overflow-hidden border border-[#182018]/25 bg-black/5 aspect-[4/3] sm:aspect-[16/10]">
                      <img
                        src={stepImages[idx]?.src}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Description Slot */}
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono-code bg-[#182018] text-[#F5F5ED] px-2.5 py-0.5 rounded-full font-bold uppercase inline-block">
                      {step.imageIndex}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#182018]">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed pt-1">
                      {step.desc}
                    </p>
                    <div className="font-mono-code text-xs text-[#182018]/60 pt-2 border-t border-[#182018]/15">
                      Process Note: {stepImages[idx]?.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>

        {/* SECTION: PAGE 5 — FROM CONCEPT TO CAPABILITY (SKILLS & PRINCIPLES) */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            {/* Slide Header */}
            <div className="pb-6 border-b border-[#182018]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-2">
                {vm.page5SkillsAndPrinciples.pageLabel} <span className="px-1">•</span> {vm.page5SkillsAndPrinciples.headerTag}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                {vm.page5SkillsAndPrinciples.title}
              </h2>
              <p className="font-serif-display text-lg sm:text-xl text-[#182018]/80 italic mt-2">
                {vm.page5SkillsAndPrinciples.subheadline}
              </p>
            </div>

            {/* QUOTE + PROCESS PORTRAIT */}
            <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="inline-block px-2.5 py-1 bg-[#F4B6D4]/40 border border-[#182018] rounded-full font-mono-code text-[10px] font-bold uppercase text-[#182018]">
                    {vm.page5SkillsAndPrinciples.quoteBanner.accent}
                  </span>
                  <p className="font-serif-display text-xl sm:text-3xl text-[#182018] italic leading-snug">
                    "{vm.page5SkillsAndPrinciples.quoteBanner.quote}"
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-white paper-shadow-sm">
                    <img
                      src={vm.page5SkillsAndPrinciples.quoteBanner.image}
                      alt="Future Florals process portrait"
                      className="w-full h-auto object-cover max-h-[300px]"
                    />
                    <span className="font-mono-code text-[10px] text-[#182018]/60 bg-white block text-center py-1.5 px-2">
                      {vm.page5SkillsAndPrinciples.quoteBanner.caption}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* THE PROCESS BEHIND THE BEAUTY */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4 pb-2 border-b border-[#182018]/15">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018]">
                  {vm.page5SkillsAndPrinciples.processInAction.title}
                </div>
                <span className="font-mono-code text-[10px] text-[#182018]/50 uppercase">
                  IDEATION → INSTALLATION
                </span>
              </div>
              <p className="font-serif-display text-base sm:text-lg text-[#182018]/80 italic mb-6">
                {vm.page5SkillsAndPrinciples.processInAction.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.processInAction.steps.map((s, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-[#F5F5ED] aspect-[4/5] relative">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-white/90 rounded text-[9px] font-mono-code font-bold text-[#182018]">
                        {sIdx + 1}
                      </div>
                    </div>
                    <span className="font-mono-code text-[11px] font-bold text-[#182018] block text-center leading-tight">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS I APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                SKILLS I APPLIED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.skillsApplied.map((sk, idx) => {
                  const SkillIcon = iconMap[sk.icon] ?? Lightbulb;
                  return (
                    <div key={idx} className="p-5 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center mb-3">
                        <SkillIcon className="w-4 h-4 text-[#182018]" />
                      </div>
                      <h3 className="font-mono-code text-xs font-bold text-[#182018] uppercase mb-2">
                        {sk.title}
                      </h3>
                      <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                        {sk.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VM PRINCIPLES APPLIED */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                VM PRINCIPLES APPLIED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vm.page5SkillsAndPrinciples.vmPrinciplesApplied.map((p, idx) => {
                  const PrIcon = iconMap[p.icon] ?? Sparkles;
                  return (
                    <div key={idx} className="p-5 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-code text-xs text-[#182018]/50 font-bold">
                          {p.number}.
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center">
                          <PrIcon className="w-4 h-4 text-[#182018]" />
                        </div>
                      </div>
                      <h3 className="font-serif-display text-xl text-[#182018] mb-1">
                        {p.name}
                      </h3>
                      <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT I LEARNED */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <h2 className="font-serif-display text-3xl text-[#182018] mb-3">
                WHAT I LEARNED
              </h2>
              <p className="font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed">
                {vm.page5SkillsAndPrinciples.whatILearned}
              </p>
            </div>

            <div className="flex justify-end pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <Link
                to="/projects/project-3"
                className="bg-[#182018] text-[#F5F5ED] px-5 py-2.5 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Project: Start Up →</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
