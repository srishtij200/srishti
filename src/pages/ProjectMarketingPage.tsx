import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
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
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;
  const p2 = pm.page2BriefToConcept;
  const p4 = pm.page4ConceptToConsumer;
  const p5 = pm.page5IdeaToImpact;

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 pb-4 border-b border-[#182018]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:text-[#182018] flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </Link>
            <span>/</span>
            <span className="text-[#182018] font-semibold">PROJECT 1 — MARKETING MANAGEMENT</span>
          </div>
          <span className="hidden sm:inline">UNIQLO FRAGRANCE EXTENSION</span>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 1: COVER, CONTEXT & BRIEF                                            */}
        {/* ========================================================================= */}
        <section id="page-1" className="space-y-12 mb-20 scroll-mt-24">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-32" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5ED] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] paper-shadow-sm">
                  <FlowerMark size={14} />
                  <span>PROJECT 1 // PAGE 01</span>
                </div>

                <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#182018] leading-[1.02] tracking-tight">
                  {pm.cover.title}
                </h1>

                <p className="font-serif-display text-2xl sm:text-3xl text-[#182018]/80 italic leading-snug">
                  {pm.cover.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
                  <div>
                    <span className="text-[#182018]/50 block text-[10px] uppercase">BRAND / CLIENT:</span>
                    <span className="font-bold text-[#182018]">{pm.cover.brand}</span>
                  </div>
                  <div>
                    <span className="text-[#182018]/50 block text-[10px] uppercase">DISCIPLINE:</span>
                    <span className="font-bold text-[#182018]">{pm.cover.discipline}</span>
                  </div>
                  <div>
                    <span className="text-[#182018]/50 block text-[10px] uppercase">TIMELINE:</span>
                    <span className="font-bold text-[#182018]">{pm.cover.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Fragrance Concept Image Hero */}
              <div className="lg:col-span-5">
                <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                  <img
                    src="/portfolio-assets/01_UNIQLO_main.jpg"
                    alt="UNIQLO Fragrance Hero Concept"
                    className="w-full h-auto object-cover rounded-xl border border-[#182018]/15"
                  />
                  <div className="font-mono-code text-[11px] text-[#182018]/70 text-center mt-2">
                    UNIQLO LifeWear Fragrance Product Mockup & Identity
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl paper-shadow">
              <span className="font-mono-code text-xs font-bold uppercase text-[#182018]/60 block mb-3">
                CONTEXT & STRATEGIC OPPORTUNITY
              </span>
              <p className="font-body text-base text-[#182018]/85 leading-relaxed mb-6">
                {pm.page1And2.context}
              </p>

              {/* Market Trends Chart Image */}
              <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED] p-2">
                <img
                  src="/portfolio-assets/02_market_trends.jpg"
                  alt="Market Trends Analysis"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-2 text-center">
                  Market Analysis & Accessible Fragrance Opportunity Gap
                </span>
              </div>
            </div>

            <div className="p-8 bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl paper-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018]/60 block mb-3">
                  THE STRATEGIC BRIEF
                </span>
                <p className="font-body text-base text-[#182018]/85 leading-relaxed">
                  {pm.page1And2.brief}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#182018]/10 font-mono-code text-xs text-emerald-800 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Aligned with UNIQLO LifeWear core philosophy & global store architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 2: FROM BRIEF TO CONCEPT (Exact 4 Quadrants: 01, 02, 03, 04)         */}
        {/* ========================================================================= */}
        <section id="page-2" className="mb-20 scroll-mt-24">
          <div className="bg-[#FAF8F5] border-[1.5px] border-[#182018] rounded-3xl p-6 sm:p-12 lg:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#AFC8FF" width="w-28" />
            </div>

            {/* Slide Top Header Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#182018]/15 mb-10 gap-4">
              <div>
                <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span>{p2.pageLabel}</span>
                  <span>•</span>
                  <span>CATEGORY EXPANSION</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                  {p2.title}
                </h2>
                <p className="font-serif-display text-lg sm:text-xl text-[#182018]/80 italic mt-1">
                  {p2.subtitle}
                </p>
              </div>

              <div className="text-right flex flex-col items-start md:items-end">
                <div className="w-16 h-[1.5px] bg-[#182018]/30 mb-2 hidden md:block"></div>
                <span className="font-mono-code text-[11px] font-bold tracking-widest text-[#182018] uppercase">
                  UNIQLO FRAGRANCES
                </span>
                <span className="font-mono-code text-[10px] text-[#182018]/60 uppercase tracking-wider">
                  MARKETING MANAGEMENT PROJECT
                </span>
              </div>
            </div>

            {/* 4 Quadrants Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 01: PROJECT BRIEF                                    */}
              {/* ------------------------------------------------------------- */}
              <div className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[#182018] font-bold">
                      {p2.quadrant01.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[#182018]">
                      {p2.quadrant01.title}
                    </h3>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed mb-6">
                    {p2.quadrant01.text}
                  </p>
                </div>

                <div className="relative pt-2">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED]">
                    <img
                      src={p2.quadrant01.image}
                      alt="UNIQLO Storefront"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  {/* Handwritten Script Callout */}
                  <div className="absolute -bottom-4 right-4 sm:right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-[#182018]/30 shadow-md rotate-[-3deg]">
                    <span className="font-serif-display italic text-base sm:text-lg text-[#182018] font-bold">
                      "{p2.quadrant01.scriptCallout}"
                    </span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 02: RESEARCH & INVESTIGATION                         */}
              {/* ------------------------------------------------------------- */}
              <div className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[#182018] font-bold">
                      {p2.quadrant02.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[#182018]">
                      {p2.quadrant02.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#182018]/80 mb-5">
                    {p2.quadrant02.lead}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start mb-6">
                    {/* Left: 3 Pillars */}
                    <div className="sm:col-span-8 space-y-3">
                      {p2.quadrant02.pillars.map((pillar, idx) => {
                        const IconComponent = idx === 0 ? TrendingUp : idx === 1 ? Users : Target;
                        return (
                          <div key={idx} className="p-3 bg-[#F5F5ED] border border-[#182018]/15 rounded-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="w-5 h-5 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center">
                                <IconComponent className="w-3 h-3 text-[#182018]" />
                              </div>
                              <span className="font-mono-code text-xs font-bold text-[#182018] uppercase">
                                {pillar.name}
                              </span>
                            </div>
                            <ul className="space-y-0.5 font-body text-xs text-[#182018]/80 pl-2">
                              {pillar.points.map((pt, ptIdx) => (
                                <li key={ptIdx} className="flex items-center gap-1.5">
                                  <span className="w-1 h-1 rounded-full bg-[#182018]/40 shrink-0"></span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right: Notepad Opportunity Image */}
                    <div className="sm:col-span-4">
                      <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED] p-1">
                        <img
                          src={p2.quadrant02.notepadImage}
                          alt="Market Trends + Consumer Insights + Brand Gap = Opportunity"
                          className="w-full h-auto object-cover rounded-lg shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-body text-xs text-[#182018]/75 mb-3">
                    {p2.quadrant02.frameworkSentence}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p2.quadrant02.frameworkBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 bg-[#F5F5ED] border border-[#182018]/20 rounded-md font-mono-code text-[10px] font-bold text-[#182018]"
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
              <div className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[#182018] font-bold">
                      {p2.quadrant03.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[#182018]">
                      {p2.quadrant03.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
                    {/* Flow Column */}
                    <div className="space-y-2.5">
                      <div className="p-3 bg-[#F5F5ED] border border-[#182018]/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-1.5 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded tracking-wider">
                            UNIQLO
                          </span>
                          <span className="font-mono-code text-xs font-bold text-[#182018]">
                            LIFEWEAR
                          </span>
                        </div>
                        <p className="font-body text-xs text-[#182018]/70">
                          Simple + Functional + Japanese Minimalism
                        </p>
                      </div>

                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-4 h-4 text-[#182018]/40" />
                      </div>

                      <div className="p-3 bg-[#F5F5ED] border border-[#182018]/20 rounded-xl text-center">
                        <p className="font-serif-display italic text-xs sm:text-sm text-[#182018] leading-snug">
                          "What if Life Wear could be experienced through another sense?"
                        </p>
                      </div>

                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-4 h-4 text-[#182018]/40" />
                      </div>

                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                        <span className="font-mono-code text-xs font-bold text-red-900 block mb-0.5">
                          FRAGRANCE
                        </span>
                        <p className="font-body text-xs text-red-800">
                          Nature-inspired Japanese scents
                        </p>
                      </div>
                    </div>

                    {/* Nature Inspiration Column */}
                    <div className="space-y-3">
                      <div>
                        <span className="font-mono-code text-[11px] font-bold text-[#182018] uppercase tracking-wider block mb-1">
                          {p2.quadrant03.natureTitle}
                        </span>
                        <div className="flex flex-wrap gap-2 text-xs font-mono-code text-[#182018]/70">
                          {p2.quadrant03.naturePillars.map((pil, idx) => (
                            <span key={idx} className="after:content-['•'] after:ml-2 last:after:content-none">
                              {pil}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED]">
                        <img
                          src={p2.quadrant03.natureImage}
                          alt="Mount Fuji with Cherry Blossoms"
                          className="w-full h-28 object-cover"
                        />
                      </div>

                      {/* 4 Variant Palette Swatches */}
                      <div className="grid grid-cols-4 gap-1.5 pt-1">
                        {p2.quadrant03.variants.map((v, vIdx) => (
                          <div key={vIdx} className="text-center">
                            <div 
                              className="w-8 h-8 rounded-full mx-auto mb-1 border border-[#182018]/20 flex items-center justify-center shadow-xs"
                              style={{ backgroundColor: v.color }}
                            >
                              <span 
                                className="w-2.5 h-2.5 rounded-full" 
                                style={{ backgroundColor: v.dotColor }}
                              />
                            </div>
                            <span className="font-mono-code text-[10px] font-bold block text-[#182018]">
                              {v.name}
                            </span>
                            <span className="font-mono-code text-[8px] text-[#182018]/50 block">
                              ({v.label})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#F5F5ED] rounded-xl border border-[#182018]/15 font-body text-xs text-[#182018]/85 leading-relaxed">
                  {p2.quadrant03.takeaway}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* QUADRANT 04: SKILLS I APPLIED                                 */}
              {/* ------------------------------------------------------------- */}
              <div className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 paper-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif-display text-3xl sm:text-4xl text-[#182018] font-bold">
                      {p2.quadrant04.number}
                    </span>
                    <h3 className="font-mono-code text-sm sm:text-base font-bold uppercase tracking-wider text-[#182018]">
                      {p2.quadrant04.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#182018]/80 mb-5">
                    {p2.quadrant04.lead}
                  </p>

                  {/* 5 Skills Row / Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                    {p2.quadrant04.skills.map((sk, sIdx) => {
                      const IconComp = sIdx === 0 ? Search : sIdx === 1 ? Target : sIdx === 2 ? Lightbulb : sIdx === 3 ? Tag : ImageIcon;
                      return (
                        <div key={sIdx} className="p-2.5 bg-[#F5F5ED] rounded-xl border border-[#182018]/15 text-center flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center mb-1.5 shadow-xs">
                            <IconComp className="w-4 h-4 text-[#182018]" />
                          </div>
                          <span className="font-mono-code text-[10px] font-bold text-[#182018] uppercase leading-tight mb-1">
                            {sk.title}
                          </span>
                          <span className="font-body text-[9px] text-[#182018]/65 leading-tight">
                            {sk.subtitle}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Showcase Card */}
                <div className="rounded-xl border border-[#182018]/20 overflow-hidden bg-[#FAF8F5] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif-display italic text-xs text-[#182018]/90">
                      "{p2.quadrant04.quote}"
                    </span>
                    <span className="font-mono-code text-[10px] text-[#182018]/60 font-bold">
                      {p2.quadrant04.tag}
                    </span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-[#182018]/15">
                    <img
                      src={p2.quadrant04.bottlesImage}
                      alt="4 Fragrance Bottles: Hana, Mizu, Kaze, Sora"
                      className="w-full h-28 sm:h-32 object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 3: DESIGN DECISIONS & 4 VARIANTS                                     */}
        {/* ========================================================================= */}
        <section id="page-3" className="mb-20 scroll-mt-24">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 03 — CORE RATIONALE & PACKAGING
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-4">
                DESIGN DECISIONS & 4 VARIANTS
              </h2>
              <p className="font-body text-base text-[#182018]/80">
                Five strategic design pillars grounding the fragrance line in UNIQLO's brand DNA.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7 space-y-4">
                {pm.page3DesignDecisions.map((item) => (
                  <div
                    key={item.number}
                    className="p-5 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-code text-base font-bold text-[#182018] bg-[#C9FF8C] w-8 h-8 rounded-full border border-[#182018] flex items-center justify-center shrink-0">
                        {item.number}
                      </span>
                      <h3 className="font-serif-display text-2xl text-[#182018]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-[#182018]/85 max-w-sm sm:text-right">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* 4 Variants Bottle Packaging Graphic */}
              <div className="lg:col-span-5">
                <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-white mb-2">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-15 at 8.11.34 PM.png"
                      alt="4 Variants Minimalist Bottle Packaging"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="font-mono-code text-xs font-bold text-[#182018] text-center pt-1">
                    4 Curated Variants & Minimalist Glass Packaging
                  </div>
                  <div className="font-mono-code text-[11px] text-[#182018]/60 text-center">
                    Japanese nomenclature: Hana (Flower), Mizu (Water), Kaze (Wind), Sora (Sky)
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Frameworks Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#182018]/15">
              <div className="p-4 bg-[#F5F5ED] rounded-xl border border-[#182018]/15">
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block mb-1">
                  STP ANALYSIS
                </span>
                <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                  {pm.page4Strategy.stp}
                </p>
              </div>

              <div className="p-4 bg-[#F5F5ED] rounded-xl border border-[#182018]/15">
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block mb-1">
                  7Ps MARKETING MIX
                </span>
                <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                  {pm.page4Strategy.sevenPs}
                </p>
              </div>

              <div className="p-4 bg-[#F5F5ED] rounded-xl border border-[#182018]/15">
                <span className="font-mono-code text-xs font-bold uppercase text-[#182018] block mb-1">
                  BCG GROWTH MATRIX
                </span>
                <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                  {pm.page4Strategy.bcg}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 4: FROM CONCEPT TO CONSUMER (Exact 3-Column Architecture & Banner)   */}
        {/* ========================================================================= */}
        <section id="page-4" className="mb-20 scroll-mt-24">
          <div className="bg-[#FAF8F5] border-[1.5px] border-[#182018] rounded-3xl p-6 sm:p-12 lg:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            {/* Slide Header Bar */}
            <div className="pb-6 border-b border-[#182018]/15 mb-10">
              <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-1">
                {p4.pageLabel}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                {p4.title}
              </h2>
              <p className="font-mono-code text-xs sm:text-sm text-[#182018]/70 uppercase tracking-wider font-semibold mt-2">
                {p4.subtitle}
              </p>
            </div>

            {/* 3 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 1: THE TEST (2x2 Photo Grid)                           */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-5 bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  THE TEST
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {p4.testPhotos.map((photo, pIdx) => (
                    <div key={pIdx} className="space-y-1.5">
                      <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-[#F5F5ED] aspect-4/5">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-mono-code text-xs font-bold text-[#182018] block leading-tight">
                        {photo.caption}
                      </span>
                      <span className="font-body text-[10px] text-[#182018]/60 block leading-tight">
                        {photo.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 2: THE PROCESS (Funnel Flow)                           */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-3 bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                    THE PROCESS
                  </h3>

                  <div className="space-y-2">
                    {p4.processSteps.map((step, sIdx) => {
                      const StepIcon = sIdx === 0 ? Eye : sIdx === 1 ? Users : sIdx === 2 ? MessageSquare : sIdx === 3 ? BarChart2 : Lightbulb;
                      return (
                        <React.Fragment key={sIdx}>
                          <div className="p-3 bg-[#F5F5ED] border border-[#182018]/20 rounded-xl flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center shrink-0">
                              <StepIcon className="w-3.5 h-3.5 text-[#182018]" />
                            </div>
                            <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018]">
                              {step.label}
                            </span>
                          </div>
                          {sIdx < p4.processSteps.length - 1 && (
                            <div className="flex justify-center py-0.5">
                              <ArrowDown className="w-3.5 h-3.5 text-[#182018]/40" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#182018]/15">
                  <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                    {p4.processDescription}
                  </p>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* COLUMN 3: KEY INSIGHTS (4 Colored Cards)                      */}
              {/* ------------------------------------------------------------- */}
              <div className="lg:col-span-4 bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow">
                <h3 className="font-mono-code text-sm font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  KEY INSIGHTS
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
                      <span className="font-mono-code text-xs font-bold text-[#182018] uppercase tracking-wider block mb-1">
                        {insight.title}
                      </span>
                      <p className="font-body text-xs text-[#182018]/85 leading-relaxed">
                        {insight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Statement Banner */}
            <div className="bg-[#EFECE6] border-[1.5px] border-[#182018]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#182018]/60 block mb-1">
                  STRATEGIC SYNTHESIS
                </span>
                <span className="font-serif-display text-xl sm:text-2xl text-[#182018] font-bold tracking-wide">
                  {p4.bottomStatement}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-mono-code text-xs text-[#182018]/70 font-semibold px-3 py-1 bg-white rounded-full border border-[#182018]/20">
                  {p4.pagePagination}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* PAGE 5: FROM IDEA TO IMPACT (4 Pillars, Quote Banner, Journey & Skills)  */}
        {/* ========================================================================= */}
        <section id="page-5" className="mb-16 scroll-mt-24">
          <div className="bg-[#FAF8F5] border-[1.5px] border-[#182018] rounded-3xl p-6 sm:p-12 lg:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            {/* Slide Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#182018]/15 mb-10 gap-4">
              <div>
                <div className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest mb-1">
                  {p5.pageLabel}
                </div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] tracking-tight">
                  {p5.title}
                </h2>
                <p className="font-serif-display text-lg sm:text-xl text-[#182018]/80 italic mt-1">
                  {p5.subheadline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="font-mono-code text-xs font-bold tracking-wider text-[#182018] block uppercase">
                    UNIQLO FRAGRANCES
                  </span>
                  <span className="font-mono-code text-[10px] text-[#182018]/60 uppercase">
                    MARKETING MANAGEMENT PROJECT
                  </span>
                </div>
                <span className="px-2 py-1 bg-red-600 text-white font-bold text-xs rounded">
                  UNIQLO
                </span>
              </div>
            </div>

            {/* Top 4 Learning Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {p5.learnings.map((learn, lIdx) => {
                const LearnIcon = lIdx === 0 ? Search : lIdx === 1 ? Target : lIdx === 2 ? Lightbulb : Award;
                return (
                  <div key={lIdx} className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-5 paper-shadow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif-display text-2xl font-bold text-[#182018]">
                          {learn.num}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#F5F5ED] border border-[#182018]/20 flex items-center justify-center">
                          <LearnIcon className="w-4 h-4 text-[#182018]" />
                        </div>
                      </div>

                      <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-2">
                        {learn.name}
                      </h3>

                      <p className="font-body text-xs text-[#182018]/80 leading-relaxed mb-4">
                        {learn.detail}
                      </p>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED] aspect-4/3">
                      <img
                        src={learn.image}
                        alt={learn.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Quote Banner */}
            <div className="bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 sm:p-8 paper-shadow mb-10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-serif-display text-4xl sm:text-5xl text-[#182018]/30 leading-none">
                      “
                    </span>
                    <p className="font-serif-display text-xl sm:text-3xl text-[#182018] italic leading-snug">
                      {p5.quoteBanner.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pl-6 font-serif-display italic text-sm sm:text-base text-[#182018]/70 font-semibold">
                    {p5.quoteBanner.callouts.map((co, cIdx) => (
                      <span key={cIdx} className="after:content-['•'] after:ml-4 last:after:content-none">
                        {co}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-[#F5F5ED] max-w-[200px]">
                    <img
                      src={p5.quoteBanner.bottleImage}
                      alt="Hana Fragrance Bottle"
                      className="w-full h-auto object-cover"
                    />
                    <div className="font-mono-code text-[10px] text-center py-1 text-[#182018]/60 bg-white">
                      HANA (FLOWER) EAU DE PARFUM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Two Columns: Journey in Action & Skills I Developed */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

              {/* THE JOURNEY IN ACTION (8 cols) */}
              <div className="lg:col-span-8 bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#182018]/15">
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018]">
                    {p5.journeyInAction.title}
                  </h3>
                  <span className="font-mono-code text-[10px] text-[#182018]/50 uppercase">
                    4-PHASE COMMERCIAL PIPELINE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {p5.journeyInAction.steps.map((step, stIdx) => (
                    <div key={stIdx} className="space-y-2">
                      <div className="rounded-xl overflow-hidden border border-[#182018]/15 bg-[#F5F5ED] aspect-4/3 relative">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-white/90 backdrop-blur-xs rounded text-[9px] font-mono-code font-bold text-[#182018]">
                          0{stIdx + 1}
                        </div>
                      </div>
                      <span className="font-mono-code text-[11px] font-bold text-[#182018] block text-center leading-tight">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS I DEVELOPED (4 cols) */}
              <div className="lg:col-span-4 bg-white border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                    SKILLS I DEVELOPED
                  </h3>

                  <div className="space-y-2.5">
                    {p5.skillsDeveloped.map((skill, skIdx) => {
                      const SIcon = skIdx === 0 ? Search : skIdx === 1 ? Target : skIdx === 2 ? Lightbulb : skIdx === 3 ? Award : ImageIcon;
                      return (
                        <div
                          key={skIdx}
                          className="p-3 bg-[#F5F5ED] border border-[#182018]/15 rounded-xl flex items-center gap-3 transition-colors hover:bg-white"
                        >
                          <div className="w-7 h-7 rounded-full bg-white border border-[#182018]/20 flex items-center justify-center shrink-0 shadow-xs">
                            <SIcon className="w-3.5 h-3.5 text-[#182018]" />
                          </div>
                          <span className="font-mono-code text-xs font-bold text-[#182018]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#182018]/10 text-center">
                  <span className="font-mono-code text-[11px] text-[#182018]/60">
                    Capstone Academic & Strategic Synthesis
                  </span>
                </div>
              </div>

            </div>

            {/* Next Project Footer Link */}
            <div className="flex justify-between items-center pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <Link
                to="/projects"
                className="hover:text-[#182018] flex items-center gap-1.5 text-[#182018]/70"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </Link>

              <Link
                to="/projects/visual-merchandising"
                className="bg-[#182018] text-[#F5F5ED] px-5 py-2.5 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Next Project: Cover Story (Visual Merchandising)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
