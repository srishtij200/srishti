import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Target, Lightbulb, Compass, Award, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectMarketingPage: React.FC = () => {
  const { projectMarketing: pm } = portfolioData;
  const [currentPage, setCurrentPage] = useState<1 | 3 | 4 | 5>(1);

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
            <span className="text-[#182018] font-semibold">PROJECT 1 — MARKETING MANAGEMENT</span>
          </div>
          <span>UNIQLO FRAGRANCE EXTENSION</span>
        </div>

        {/* Page Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 font-mono-code text-xs">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2.5 rounded-xl border-[1.5px] transition-all cursor-pointer ${
              currentPage === 1
                ? 'bg-[#182018] text-[#F5F5ED] border-[#182018] font-bold paper-shadow-sm'
                : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/20 hover:border-[#182018]'
            }`}
          >
            Page 1 & 2: Overview & Context
          </button>
          <button
            onClick={() => setCurrentPage(3)}
            className={`px-4 py-2.5 rounded-xl border-[1.5px] transition-all cursor-pointer ${
              currentPage === 3
                ? 'bg-[#C9FF8C] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/20 hover:border-[#182018]'
            }`}
          >
            Page 3: Design Decisions
          </button>
          <button
            onClick={() => setCurrentPage(4)}
            className={`px-4 py-2.5 rounded-xl border-[1.5px] transition-all cursor-pointer ${
              currentPage === 4
                ? 'bg-[#C9FF8C] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/20 hover:border-[#182018]'
            }`}
          >
            Page 4: Strategy & Frameworks
          </button>
          <button
            onClick={() => setCurrentPage(5)}
            className={`px-4 py-2.5 rounded-xl border-[1.5px] transition-all cursor-pointer ${
              currentPage === 5
                ? 'bg-[#C9FF8C] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/20 hover:border-[#182018]'
            }`}
          >
            Page 5: From Idea to Impact
          </button>
        </div>

        {/* PAGE 1 & 2: COVER, CONTEXT & BRIEF */}
        {currentPage === 1 && (
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#C9FF8C" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5ED] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>PROJECT 1 (MARKETING MANAGEMENT) // PAGE 1 & PAGE 2</span>
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
                  PAGE 1 — CONTEXT & OPPORTUNITY
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
                    PAGE 2 — THE STRATEGIC BRIEF
                  </span>
                  <p className="font-body text-base text-[#182018]/85 leading-relaxed">
                    {pm.page1And2.brief}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#182018]/10 font-mono-code text-xs text-emerald-800 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Aligned with UNIQLO LifeWear core philosophy & global store architecture</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 font-mono-code text-xs">
              <button
                onClick={() => setCurrentPage(3)}
                className="bg-[#182018] text-[#F5F5ED] px-6 py-3 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-2"
              >
                <span>Proceed to Page 3: Design Decisions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* PAGE 3: DESIGN DECISIONS */}
        {currentPage === 3 && (
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 3 — CORE RATIONALE
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-4">
                DESIGN DECISIONS
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
                      src="/portfolio-assets/Screenshot 2026-09-15 at 7.50.52 PM.png"
                      alt="4 Variants Minimalist Bottle Packaging"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="font-mono-code text-xs font-bold text-[#182018] text-center pt-1">
                    4 Curated Variants & Minimalist Glass Packaging
                  </div>
                  <div className="font-mono-code text-[11px] text-[#182018]/60 text-center">
                    Japanese nomenclature: Hinoki, Yuzu, Sencha, Sakura
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <button
                onClick={() => setCurrentPage(1)}
                className="text-[#182018]/70 hover:text-[#182018] cursor-pointer"
              >
                ← Page 1 & 2: Overview
              </button>
              <button
                onClick={() => setCurrentPage(4)}
                className="bg-[#182018] text-[#F5F5ED] px-4 py-2 rounded-xl font-bold hover:bg-[#253325] cursor-pointer"
              >
                Proceed to Page 4: Strategy →
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4: STRATEGY & FRAMEWORKS */}
        {currentPage === 4 && (
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 4 — MARKETING FRAMEWORKS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-4">
                Strategic Marketing Architecture
              </h2>
              <p className="font-body text-base text-[#182018]/80">
                Rigorous application of STP, 7Ps of Marketing, and the BCG Matrix to de-risk market entry.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-2 pb-1 border-b border-[#182018]/15">
                  STP ANALYSIS (Segmentation, Targeting, Positioning)
                </div>
                <p className="font-body text-sm text-[#182018]/85 leading-relaxed">
                  {pm.page4Strategy.stp}
                </p>
              </div>

              {/* Marketing Mix Diagram & Framework Visual */}
              <div className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-3 pb-1 border-b border-[#182018]/15 flex items-center justify-between">
                  <span>MARKETING MIX ARCHITECTURE</span>
                  <span className="text-[11px] text-[#182018]/60">STRATEGIC SCHEMATIC</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-white mb-3">
                  <img
                    src="/portfolio-assets/Screenshot 2026-09-15 at 8.11.17 PM.png"
                    alt="Strategic 7Ps and Matrix Mapping"
                    className="w-full h-auto object-contain max-h-72 mx-auto"
                  />
                </div>
              </div>

              <div className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-2 pb-1 border-b border-[#182018]/15">
                  THE 7Ps OF MARKETING
                </div>
                <p className="font-body text-sm text-[#182018]/85 leading-relaxed">
                  {pm.page4Strategy.sevenPs}
                </p>
              </div>

              <div className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-2 pb-1 border-b border-[#182018]/15">
                  BCG GROWTH-SHARE MATRIX
                </div>
                <p className="font-body text-sm text-[#182018]/85 leading-relaxed">
                  {pm.page4Strategy.bcg}
                </p>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <button
                onClick={() => setCurrentPage(3)}
                className="text-[#182018]/70 hover:text-[#182018] cursor-pointer"
              >
                ← Page 3: Design Decisions
              </button>
              <button
                onClick={() => setCurrentPage(5)}
                className="bg-[#182018] text-[#F5F5ED] px-4 py-2 rounded-xl font-bold hover:bg-[#253325] cursor-pointer"
              >
                Proceed to Page 5: Idea to Impact →
              </button>
            </div>
          </div>
        )}

        {/* PAGE 5: FROM IDEA TO IMPACT */}
        {currentPage === 5 && (
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#AFC8FF" width="w-28" />
            </div>

            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 5 — SYNTHESIS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-2">
                {pm.page5IdeaToImpact.headline}
              </h2>
              <p className="font-mono-code text-xs text-[#182018]/70">
                {pm.page5IdeaToImpact.subheadline}
              </p>
            </div>

            {/* 4 LEARNING PILLARS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {pm.page5IdeaToImpact.learnings.map((item) => (
                <div key={item.num} className="p-6 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono-code text-xs font-bold text-[#182018]/50">
                      {item.num}.
                    </span>
                    <h3 className="font-mono-code text-xs font-bold text-[#182018] uppercase tracking-wider">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-[#182018]/85 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* SKILLS DEVELOPED */}
            <div className="p-6 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-3">
                SKILLS DEVELOPED
              </div>
              <div className="flex flex-wrap gap-2">
                {pm.page5IdeaToImpact.skillsDeveloped.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-[#FFFFFF] border border-[#182018]/30 rounded-xl font-mono-code text-xs text-[#182018] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <button
                onClick={() => setCurrentPage(4)}
                className="text-[#182018]/70 hover:text-[#182018] cursor-pointer"
              >
                ← Page 4: Strategy & Frameworks
              </button>
              <Link
                to="/projects/visual-merchandising"
                className="bg-[#182018] text-[#F5F5ED] px-5 py-2.5 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-1.5"
              >
                <span>Proceed to Project 2: Cover Story →</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
