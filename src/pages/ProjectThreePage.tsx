import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, MessageSquare, TrendingUp, Scissors, Users, BarChart2, Lightbulb, Target, type LucideIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectThreePage: React.FC = () => {
  const { projectThree: p3 } = portfolioData;
  const u = portfolioData.ui.projectThree;

  const skillIcons: Record<string, LucideIcon> = {
    TrendingUp, Users, BarChart2, Lightbulb, Target
  };

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:text-[var(--c-ink)] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{u.breadcrumbProjects}</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{u.breadcrumbCurrent}</span>
          </div>
          <span>{u.breadcrumbTag}</span>
        </div>

        {/* SECTION: COVER PAGE */}
        <section className="space-y-8 mb-16">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#AFC8FF" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>{p3.cover.pageLabel}</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[var(--c-ink)] leading-[1.02] tracking-tight">
                    {p3.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]/80 italic leading-snug">
                    {p3.cover.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    {p3.cover.tagline.split(" • ").map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-[var(--c-soft)]/25 border border-[var(--c-ink)]/25 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaTypeLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">{u.metaTypeValue}</span>
                    </div>
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaConceptLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">{p3.cover.conceptSubtitle}</span>
                    </div>
                    <div>
                      <span className="text-[var(--c-ink)]/50 block text-[10px] uppercase">{u.metaScopeLabel}</span>
                      <span className="font-bold text-[var(--c-ink)]">{u.metaScopeValue}</span>
                    </div>
                  </div>
                </div>

                {/* Cover Hero Image */}
                <div className="lg:col-span-5">
                  <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 paper-shadow">
                    <img
                      src={p3.cover.heroImage}
                      alt={u.coverImageAlt}
                      className="w-full h-auto object-cover rounded-xl border border-[var(--c-ink)]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[var(--c-ink)]/70 text-center mt-2">
                      {p3.cover.heroCaption}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GALLERY — FOUR LIFESTYLE MOMENTS */}
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-6 sm:p-10 paper-shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-[var(--c-ink)]/15">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]">
                  {u.galleryTitle}
                </span>
                <span className="font-serif-display italic text-sm text-[var(--c-ink)]/70">
                  "{p3.cover.bottomStatement}"
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {p3.cover.gallery.map((g, gIdx) => (
                  <div key={gIdx} className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 bg-[var(--c-bg)] aspect-[3/4]">
                      <img src={g.image} alt={g.label} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] block text-center tracking-wider">
                      {g.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

        </section>

        {/* SECTION: FROM AN OBSERVATION TO AN OPPORTUNITY */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#AFC8FF" width="w-28" />
            </div>

            {/* Section Header */}
            <div className="max-w-4xl mb-10">
              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
                PAGE 2 — {p3.page2SurveyInsights.pageLabel} // {p3.page2SurveyInsights.headerTag}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] leading-tight mb-4 whitespace-pre-line">
                {u.page2Headline1}
                <br />
                {u.page2Headline2}
              </h2>
              <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed p-4 bg-[var(--c-bg)] rounded-2xl border border-[var(--c-ink)]/20 mb-0">
                {p3.page2SurveyInsights.subtitle}
              </p>
            </div>

            {/* 2x2 Quadrant Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {p3.page2SurveyInsights.quadrants.map((q, qIdx) => (
                <div key={qIdx} className="p-8 bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl paper-shadow-sm">
                  {/* Quadrant header */}
                  <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-[var(--c-ink)]/15">
                    <span className="font-mono-code text-sm font-bold text-[var(--c-ink)]/50">
                      {q.number}.
                    </span>
                    <h3 className="font-serif-display text-2xl text-[var(--c-ink)] tracking-wide">
                      {q.title}
                    </h3>
                  </div>

                  {/* Q1 THE OBSERVATION */}
                  {q.number === "01" && (
                    <div className="space-y-5">
                      <p className="font-body text-sm text-[var(--c-ink)]/80 leading-relaxed">
                        {q.text}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {q.images!.map((img, i) => (
                          <div key={i} className="space-y-1.5">
                            <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 bg-white aspect-[3/4]">
                              <img src={img.image} alt={img.label} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-mono-code text-[10px] font-bold text-[var(--c-ink)]/70 block tracking-wider">
                              {img.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--c-soft)]/25 border border-[var(--c-ink)] rounded-xl font-serif-display italic text-sm text-[var(--c-ink)] whitespace-pre-line">
                        <Scissors className="w-4 h-4 shrink-0" />
                        {q.scriptCallout}
                      </div>
                    </div>
                  )}

                  {/* Q2 THE JOURNEY */}
                  {q.number === "02" && (
                    <div className="space-y-5">
                      <p className="font-mono-code text-[11px] font-bold text-[var(--c-ink)]/70 uppercase tracking-wider flex items-center gap-2">
                        <span className="flex-1">{q.lead}</span>
                      </p>
                      <div className="space-y-4">
                        {q.pillars!.map((pillar, i) => (
                          <div key={i} className="p-4 bg-[#FFFFFF] border border-[var(--c-ink)]/20 rounded-xl">
                            <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] mb-2">
                              {String(i + 1).padStart(2, "0")} — {pillar.name}
                            </div>
                            <ul className="space-y-1.5 font-body text-xs text-[var(--c-ink)]/80">
                              {pillar.points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-ink)] mt-1.5 shrink-0" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {q.frameworkBadges!.map((b, i) => (
                          <span key={i} className="px-3 py-1 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-full font-mono-code text-[10px] font-bold tracking-wider">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Q3 WHAT I INVESTIGATED */}
                  {q.number === "03" && (
                    <div className="space-y-5">
                      <div className="space-y-3">
                        {q.flow!.map((f, i) => (
                          <div
                            key={i}
                            className={`p-4 rounded-xl border ${
                              f.isHighlight
                                ? "bg-[var(--c-soft)]/30 border-[var(--c-ink)] paper-shadow-sm"
                                : "bg-[#FFFFFF] border-[var(--c-ink)]/20"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] tracking-wider">
                                {String(i + 1).padStart(2, "0")} — {f.step}
                              </span>
                              {f.isHighlight && (
                                <span className="font-mono-code text-[9px] font-bold bg-[var(--c-ink)] text-[var(--c-bg)] px-2 py-0.5 rounded-full">
                                  {u.opportunityGap}
                                </span>
                              )}
                            </div>
                            <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                              {f.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)] mb-2">
                          {q.natureTitle}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {q.naturePillars!.map((p, i) => (
                            <span key={i} className="px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)]/30 rounded-full font-mono-code text-[10px] font-bold tracking-wider">
                              ✦ {p}
                            </span>
                          ))}
                        </div>
                        <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 bg-white aspect-[16/9]">
                          <img src={q.natureImage} alt={q.natureCaption} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-mono-code text-[10px] text-[var(--c-ink)]/60 block mt-1.5">
                          {q.natureCaption}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Q4 MY APPROACH */}
                  {q.number === "04" && (
                    <div className="space-y-5">
                      <p className="font-body text-sm text-[var(--c-ink)]/80 leading-relaxed">
                        {q.lead}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.skills!.map((s, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-[#FFFFFF] border border-[var(--c-ink)]/20 rounded-xl">
                            <div className="w-9 h-9 shrink-0 rounded-lg bg-[var(--c-soft)]/30 border border-[var(--c-ink)]/25 flex items-center justify-center">
                              {(() => {
                                const SkillIcon = skillIcons[s.icon] ?? Sparkles;
                                return <SkillIcon className="w-4.5 h-4.5 text-[var(--c-ink)]" />;
                              })()}
                            </div>
                            <div>
                              <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                                {s.title}
                              </div>
                              <div className="font-body text-[11px] text-[var(--c-ink)]/70">
                                {s.subtitle}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 bg-white aspect-[16/9]">
                        <img src={q.bottlesImage} alt={q.bottlesCaption} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-mono-code text-[10px] text-[var(--c-ink)]/60 block -mt-2">
                        {q.bottlesCaption}
                      </span>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--c-soft)]/25 border border-[var(--c-ink)] rounded-xl font-serif-display italic text-sm text-[var(--c-ink)] whitespace-pre-line">
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        {q.quote}
                        <span className="font-mono-code text-[10px] font-bold bg-[var(--c-ink)] text-[var(--c-bg)] px-2 py-0.5 rounded-full not-italic">
                          {q.tag}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>

        {/* SECTION: DESIGN, MATERIAL & PROTOTYPE */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-4">
              {u.p3PageLabel}
            </span>

            {/* 01 DESIGN WITH TECHNICAL FLAT DRAWING */}
            <div className="p-8 bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.design.title}
                  </h2>
                  <div className="flex flex-wrap gap-2.5 font-mono-code text-xs">
                    {p3.page3DesignAndMaterial.design.points.map((pt, i) => (
                      <span key={i} className="px-4 py-2 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-xl font-bold">
                        ✦ {pt}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed pt-2">
                    {u.p3DesignParagraph}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white rounded-xl overflow-hidden border border-[var(--c-ink)]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src={u.designFlatImage}
                      alt={u.designFlatAlt}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[var(--c-ink)]/60 block mt-1.5 text-center">
                    {u.designFlatCaption}
                  </span>
                </div>
              </div>
            </div>

            {/* 02 MATERIAL WITH MATERIAL SPEC SHEET */}
            <div className="p-8 bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.material.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#FFFFFF] border border-[var(--c-ink)]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] mb-1">
                        {p3.page3DesignAndMaterial.material.lycra.name}
                      </div>
                      <div className="font-body text-xs text-[var(--c-ink)]/80">
                        {p3.page3DesignAndMaterial.material.lycra.attributes}
                      </div>
                    </div>

                    <div className="p-4 bg-[#FFFFFF] border border-[var(--c-ink)]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] mb-1">
                        {p3.page3DesignAndMaterial.material.terryCotton.name}
                      </div>
                      <div className="font-body text-xs text-[var(--c-ink)]/80">
                        {p3.page3DesignAndMaterial.material.terryCotton.attributes}
                      </div>
                    </div>
                  </div>
                  <p className="font-mono-code text-xs text-[var(--c-ink)]/80 font-semibold">
                    ✦ {p3.page3DesignAndMaterial.material.colorNote}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white rounded-xl overflow-hidden border border-[var(--c-ink)]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src={u.materialSheetImage}
                      alt={u.materialSheetAlt}
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[var(--c-ink)]/60 block mt-1.5 text-center">
                    {u.materialSheetCaption}
                  </span>
                </div>
              </div>
            </div>

            {/* 03 FINAL PROTOTYPE (MVP PHOTO) */}
            <div className="p-8 bg-[var(--c-soft)]/30 border-[1.5px] border-[var(--c-ink)] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-3">
                  <span className="font-mono-code text-xs font-bold bg-[var(--c-ink)] text-[var(--c-bg)] px-3 py-1 rounded-full uppercase inline-block">
                    {p3.page3DesignAndMaterial.prototype.badge}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.prototype.tagline}
                  </h3>
                  <p className="font-mono-code text-xs sm:text-sm text-[var(--c-ink)]/90 uppercase tracking-wider font-bold">
                    {p3.page3DesignAndMaterial.prototype.coreProposition}
                  </p>
                  <p className="font-body text-xs text-[var(--c-ink)]/80 pt-2 leading-relaxed">
                    {u.prototypeParagraph}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-white rounded-2xl overflow-hidden border-[1.5px] border-[var(--c-ink)] p-3 paper-shadow">
                    <img
                      src={u.prototypeImage}
                      alt={u.prototypeAlt}
                      className="w-full h-auto max-h-80 object-contain mx-auto"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[var(--c-ink)]/70 block mt-2 text-center font-bold">
                    {u.prototypeCaption}
                  </span>
                </div>
              </div>
            </div>

        </div>

        {/* SECTION: FEEDBACK & ITERATION */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-4">
              {u.p4PageLabel}
            </span>

            {/* WHAT I HEARD */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-4">
                {u.p4HeardTitle}
              </h2>
              <div className="space-y-3">
                {p3.page4FeedbackAndIteration.whatIHeard.map((quote, qIdx) => (
                  <div key={qIdx} className="p-4 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-xl font-serif-display text-lg text-[var(--c-ink)] italic">
                    {quote}
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT THIS TAUGHT ME */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-4">
                {u.p4TaughtTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {p3.page4FeedbackAndIteration.whatThisTaughtMe.map((item, tIdx) => (
                  <div key={tIdx} className="p-6 bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-2xl">
                    <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-2">
                      {item.headline}
                    </h3>
                    <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FEEDBACK → ITERATION → IMPACT */}
            <div className="p-8 bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-6 text-center">
                {u.p4LoopHeader}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono-code text-xs">
                <div className="md:col-span-1 p-5 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-xl">
                  <span className="text-[var(--c-ink)]/60 uppercase text-[10px] block mb-1">{u.p4FeedbackLabel}</span>
                  <strong className="text-sm text-[var(--c-ink)]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.feedback}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[var(--c-ink)]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[var(--c-highlight)] border border-[var(--c-ink)] rounded-xl">
                  <span className="text-[var(--c-ink)]/60 uppercase text-[10px] block mb-1">{u.p4IterationLabel}</span>
                  <strong className="text-sm text-[var(--c-ink)]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.iteration}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[var(--c-ink)]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-xl">
                  <span className="text-[var(--c-ink)]/60 uppercase text-[10px] block mb-1">{u.p4ImpactLabel}</span>
                  <strong className="text-sm text-[var(--c-ink)]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.impact}
                  </strong>
                </div>
              </div>

              {/* Graphical Feedback Loop Diagram */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[var(--c-ink)]/20 bg-white max-h-48 flex items-center justify-center p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-18 at 8.44.29 PM.png"
                  alt="Feedback Iteration Impact Flow"
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
              <Link
                to="/skills"
                className="bg-[var(--c-ink)] text-[var(--c-bg)] px-5 py-2.5 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-1.5"
              >
                <span>{u.footerNext}</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
