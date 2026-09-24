import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, TrendingUp, Scissors, Users, BarChart2, Lightbulb, Target, type LucideIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { PlaceholderImage } from '../components/PlaceholderImage';

export const ProjectThreePage: React.FC = () => {
  const { projectThree: p3 } = portfolioData;
  const u = portfolioData.ui.projectThree;

  const skillIcons: Record<string, LucideIcon> = {
    TrendingUp, Users, BarChart2, Lightbulb, Target
  };

  // Cover gallery strip: rendered from Sanity-backed data, with the local
  // assets kept as a fallback so the strip is never empty without a CMS.
  const coverGalleryFallback = [
    { label: 'GYM', image: '/portfolio-assets/project3-image3.jpeg', alt: 'Woman in dark fitted athleisure seated in a gym' },
    { label: 'CAFÉ', image: '/portfolio-assets/project3-image2.jpeg', alt: 'Woman in light neutral outfit at cafe with cup' },
    { label: 'AIRPORT', image: '/portfolio-assets/project3-image1.jpeg', alt: 'Woman in athleisure walking through airport with suitcase' }
  ];
  const coverGallery = p3.cover.gallery?.length ? p3.cover.gallery : coverGalleryFallback;

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">

      {/* SECTION: COVER PAGE - ATHERA Layout */}
      <section className="scroll-mt-24 relative min-h-[90vh] lg:min-h-[95vh]" style={{ backgroundColor: '#F7F5F0' }}>
        {/* Full background hero image - ENTIRE background */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={p3.cover.heroImage}
            alt="Woman in muted sage green athleisure outfit with black shoulder bag walking outdoors beside architectural glass environment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative leaf element - top left */}
        <div className="absolute top-0 left-0 w-[212px] h-[270px] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/portfolio-assets/project3-page1.png')] bg-cover bg-center opacity-30 transform rotate-12 scale-125 -translate-x-1/4 -translate-y-1/4" />
        </div>

        {/* Breadcrumb overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2">
                <Link to="/" className="hover:opacity-80 flex items-center gap-1 transition-opacity">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{u.breadcrumbProjects}</span>
                </Link>
                <span>/</span>
                <span className="font-semibold">{u.breadcrumbCurrent}</span>
              </div>
              <span>{u.breadcrumbTag}</span>
            </div>
          </div>
        </div>

        {/* Left content column */}
        <div className="relative max-w-7xl mx-auto h-full min-h-[90vh] lg:min-h-[95vh]">
          {/* LEFT COLUMN - Content Area (63%) */}
          <div className="absolute inset-y-0 left-0 w-[63%] lg:w-[63%] px-8 sm:px-12 lg:px-16 pt-24 lg:pt-32 pb-12 flex flex-col justify-between z-10">
            
            {/* Brand Header */}
            <div className="space-y-4">
              {/* ATHERA Title */}
              <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight" style={{ color: '#12352A' }}>
                ATHERA
              </h1>
              
              {/* Subtitle: ATHLEISURE WEAR BRAND */}
              <h2 className="font-mono-code text-base sm:text-lg lg:text-xl uppercase tracking-widest font-medium" style={{ color: '#24332F' }}>
                ATHLEISURE WEAR BRAND
              </h2>
              
              {/* Divider */}
              <div className="w-[68px] h-[4px] mt-4" style={{ backgroundColor: '#9C9C91' }} />
              
              {/* Positioning Statement: MODEST • VERSATILE • EVERYDAY */}
              <p className="font-mono-code text-sm sm:text-base lg:text-lg uppercase tracking-widest font-medium mt-6" style={{ color: '#26342F' }}>
                MODEST • VERSATILE • EVERYDAY
              </p>
            </div>

            {/* Gallery Strip - 3 images horizontal */}
            <div className="hidden lg:flex gap-3 pt-8 pb-4">
              {coverGallery.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 min-w-0">
                  <PlaceholderImage
                    src={item.image}
                    label={item.label}
                    alt={item.alt}
                    aspect="aspect-[216/251]"
                    className="object-top"
                  />
                  <span className="font-mono-code text-[10px] font-bold tracking-wider mt-2 text-center" style={{ color: '#26342F' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Statement */}
            <p className="font-body text-sm sm:text-base leading-relaxed pb-8" style={{ color: '#26342F' }}>
              Designed to move beyond the gym.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FROM AN OBSERVATION TO AN OPPORTUNITY */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Section Header */}
            <div className="max-w-4xl mb-10">
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] leading-tight mb-4 whitespace-pre-line">
                {u.page2Headline1}
                <br />
                {u.page2Headline2}
              </h2>
              <h3 className="font-mono-code text-xs font-bold uppercase tracking-[0.2em] text-[var(--c-ink)]/60 mt-6 mb-3">
                {u.page2BriefLabel}
              </h3>
              {p3.page2SurveyInsights.subtitle && (
                <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed border-l-2 border-[var(--c-ink)]/30 pl-4 mb-0">
                  {p3.page2SurveyInsights.subtitle}
                </p>
              )}
            </div>

            {/* 2x2 Quadrant Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {p3.page2SurveyInsights.quadrants.map((q, qIdx) => (
                <div key={qIdx} className="border-t-2 border-[var(--c-ink)]/20 pt-8 h-full flex flex-col">
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
                      {q.text && (
                        <p className="font-body text-sm text-[var(--c-ink)]/80 leading-relaxed">
                          {q.text}
                        </p>
                      )}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 sm:pl-20">
                        {q.images!.map((img, i) => (
                          <div key={i} data-obs-card className="space-y-2">
                            <PlaceholderImage
                              src={img.image}
                              label={img.label}
                              alt={img.label}
                              aspect="aspect-[3/4]"
                              className="object-top"
                            />
                            <span className="font-mono-code text-[10px] font-bold text-[var(--c-ink)]/70 block tracking-wider border-t border-[var(--c-ink)]/20 pt-2">
                              {img.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      {q.scriptCallout && (
                        <div className="inline-flex items-center gap-2 border-l-2 border-[var(--c-warm)] pl-4 font-serif-display italic text-sm text-[var(--c-ink)] whitespace-pre-line">
                          <Scissors className="w-4 h-4 shrink-0" />
                          {q.scriptCallout}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Q2 THE JOURNEY — compact o—o—o—o timeline */}
                  {q.number === "02" && (
                    <div className="space-y-5">
                      <p className="font-mono-code text-[11px] font-bold text-[var(--c-ink)]/70 uppercase tracking-wider">
                        {q.lead}
                      </p>

                      {/* Connected step timeline — big numbered circles, no inner content */}
                      <div className="relative py-4">
                        <div className="absolute top-[44px] left-[12.5%] right-[12.5%] border-t border-dashed border-[var(--c-ink)]/40" aria-hidden="true" />
                        <div className="relative grid grid-cols-4 gap-2">
                          {[...(q.pillars ?? []), { name: "OPPORTUNITY", points: [] as string[] }].map((step, i, arr) => {
                            const isLast = i === arr.length - 1;
                            return (
                              <div key={i} className="flex flex-col items-center text-center gap-3">
                                <span
                                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center font-mono-code text-sm sm:text-base font-bold shrink-0 ${
                                    isLast
                                      ? "bg-[var(--c-ink)] text-[var(--c-bg)] border-[var(--c-ink)] ring-4 ring-[var(--c-ink)]/10"
                                      : "bg-[var(--c-bg)] text-[var(--c-ink)] border-[var(--c-ink)]/60"
                                  }`}
                                >
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="font-mono-code text-[10px] sm:text-xs font-bold text-[var(--c-ink)] uppercase tracking-[0.14em]">
                                  {step.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {q.frameworkSentence && (
                        <div className="inline-flex items-center gap-2 border-l-2 border-[var(--c-warm)] pl-4 font-serif-display italic text-sm text-[var(--c-ink)] whitespace-pre-line">
                          <Scissors className="w-4 h-4 shrink-0" />
                          {q.frameworkSentence}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Q3 WHAT I INVESTIGATED — elegant editorial rows, stretched to match Q4 height */}
                  {q.number === "03" && (
                    <div className="flex-1 flex flex-col border-b border-[var(--c-ink)]/15">
                      {q.flow!.map((f, i) => (
                        <div key={i} className="flex-1 flex items-center border-t border-[var(--c-ink)]/15 py-4">
                          <div className="flex items-baseline gap-4 sm:gap-6">
                            <span className="font-serif-display italic text-2xl sm:text-3xl text-[var(--c-ink)]/25 w-10 shrink-0 select-none leading-none">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-serif-display text-base sm:text-lg text-[var(--c-ink)] uppercase tracking-wide">
                                  {f.step}
                                </h4>
                                {f.isHighlight && (
                                  <span className="font-mono-code text-[9px] font-bold bg-[var(--c-ink)] text-[var(--c-bg)] px-2 py-0.5 rounded-full shrink-0">
                                    {u.opportunityGap}
                                  </span>
                                )}
                              </div>
                              {f.desc && (
                                <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                                  {f.desc.split("\n").filter(Boolean).map((line, j) => (
                                    <li key={j} className="flex items-start gap-2 font-body text-xs text-[var(--c-ink)]/75 leading-relaxed">
                                      <span className="text-[var(--c-ink)]/40 select-none">✦</span>
                                      {line}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Q4 MY APPROACH */}
                  {q.number === "04" && (
                    <div className="space-y-5">
                      {q.lead && (
                        <p className="font-body text-sm text-[var(--c-ink)]/80 leading-relaxed">
                          {q.lead}
                        </p>
                      )}
                      <div className="border-b border-[var(--c-ink)]/15">
                        {q.skills!.map((s, i) => (
                          <div key={i} className="flex items-center gap-4 sm:gap-6 border-t border-[var(--c-ink)]/15 py-3.5">
                            <span className="font-serif-display italic text-2xl sm:text-3xl text-[var(--c-ink)]/25 w-10 shrink-0 select-none leading-none">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="font-serif-display text-base sm:text-lg text-[var(--c-ink)] leading-tight">
                                {s.title}
                              </div>
                              <div className="font-hand text-lg text-[var(--c-ink)]/70 leading-snug">
                                {s.subtitle}
                              </div>
                            </div>
                            <span className="w-10 h-10 shrink-0 rounded-full border border-[var(--c-ink)]/30 flex items-center justify-center">
                              {(() => {
                                const SkillIcon = skillIcons[s.icon] ?? Sparkles;
                                return <SkillIcon className="w-4 h-4 text-[var(--c-ink)]" />;
                              })()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* SECTION: DESIGN, MATERIAL & PROTOTYPE */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-8">
              {u.p3PageLabel}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {/* 01 DESIGN WITH TECHNICAL FLAT DRAWING */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.design.title}
                  </h2>
                  <div className="flex flex-wrap gap-2.5 font-mono-code text-xs">
                    {p3.page3DesignAndMaterial.design.points.map((pt, i) => {
                      const tints = [
                        "bg-[var(--c-soft-light)] border-[var(--c-soft)]",
                        "bg-[var(--c-highlight-light)] border-[var(--c-highlight)]",
                        "bg-[var(--c-warm-light)] border-[var(--c-warm)]"
                      ];
                      return (
                        <span key={i} className={`px-4 py-2 border rounded-xl font-bold ${tints[i % tints.length]}`}>
                          ✦ {pt}
                        </span>
                      );
                    })}
                  </div>
                  <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed pt-2">
                    {u.p3DesignParagraph}
                  </p>
                </div>

                <div className="max-w-xl mx-auto w-full">
                  <PlaceholderImage
                    src={p3.page3DesignAndMaterial.design.image}
                    label="DESIGN FLAT DRAWING"
                    alt="Technical flat drawing of the design"
                    aspect="aspect-[741/1199]"
                  />
                </div>
              </div>
            </div>

            {/* 02 MATERIAL WITH MATERIAL SPEC SHEET */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.material.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-[var(--c-soft-light)] border border-[var(--c-soft)] rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] mb-1">
                        {p3.page3DesignAndMaterial.material.lycra.name}
                      </div>
                      <div className="font-body text-xs text-[var(--c-ink)]/80">
                        {p3.page3DesignAndMaterial.material.lycra.attributes}
                      </div>
                    </div>

                    <div className="p-4 bg-[var(--c-highlight-light)] border border-[var(--c-highlight)] rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] mb-1">
                        {p3.page3DesignAndMaterial.material.terryCotton.name}
                      </div>
                      <div className="font-body text-xs text-[var(--c-ink)]/80">
                        {p3.page3DesignAndMaterial.material.terryCotton.attributes}
                      </div>
                    </div>
                    <div className="p-4 bg-[var(--c-warm-light)] border border-[var(--c-warm)] rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                        {p3.page3DesignAndMaterial.material.colorNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-xl mx-auto w-full">
                  <PlaceholderImage
                    src={p3.page3DesignAndMaterial.material.image}
                    label="MATERIAL SPEC SHEET"
                    alt="Material specification sheet"
                    aspect="aspect-[1312/1075]"
                  />
                </div>
              </div>
            </div>

            {/* 03 FINAL PROTOTYPE (MVP PHOTO) */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)]">
                    {p3.page3DesignAndMaterial.prototype.title}
                  </h2>
                </div>

                <div className="max-w-xl mx-auto w-full">
                  <PlaceholderImage
                    src={p3.page3DesignAndMaterial.prototype.image}
                    label="FINAL PROTOTYPE — MVP PHOTO"
                    alt="Final MVP prototype garment photo"
                    aspect="aspect-[971/1447]"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

      {/* SECTION: FEEDBACK & ITERATION */}
      <div className="bg-[var(--c-highlight-light)] border-b border-[var(--c-ink)]/15 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            {/* Header */}
            <div className="flex items-baseline justify-end font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest mb-4">
              <span>{u.p4Brand}</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-[var(--c-ink)]">
              {u.p4Title}
            </h2>
            <p className="font-body text-sm text-[var(--c-ink)]/70 mt-2 mb-12">
              {u.p4Subtitle}
            </p>

            {/* Two-column research dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
              {/* WHAT I HEARD */}
              <div className="lg:col-span-5">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4">
                  {u.p4HeardTitle}
                </div>
                <div className="space-y-4">
                  {p3.page4FeedbackAndIteration.whatIHeard.map((quote, qIdx) => {
                    const tints = [
                      "bg-[var(--c-soft-light)] border-[var(--c-soft)]",
                      "bg-[var(--c-highlight-light)] border-[var(--c-highlight)]",
                      "bg-[var(--c-warm-light)] border-[var(--c-warm)]"
                    ];
                    return (
                      <div key={qIdx} className={`p-5 border rounded-xl font-serif-display italic text-base text-[var(--c-ink)] leading-relaxed ${tints[qIdx % tints.length]}`}>
                        {quote}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* DATA INSIGHTS */}
              <div className="lg:col-span-7">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4">
                  {p3.page4FeedbackAndIteration.dataInsights.title}
                </div>
                <p className="font-body text-xs text-[var(--c-ink)]/70 leading-relaxed mb-1.5">
                  {p3.page4FeedbackAndIteration.dataInsights.question}
                </p>
                <div className="font-mono-code text-[10px] uppercase tracking-wider text-[var(--c-ink)]/60 mb-8">
                  {p3.page4FeedbackAndIteration.dataInsights.responses} responses
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                  {/* Donut chart */}
                  <div className="relative w-44 h-44 shrink-0">
                    <svg viewBox="0 0 180 180" className="w-full h-full">
                      <circle cx="90" cy="90" r="70" fill="none" stroke="var(--c-warm-light)" strokeWidth="24" />
                      <circle
                        cx="90" cy="90" r="70" fill="none"
                        stroke="var(--c-highlight)" strokeWidth="24"
                        strokeDasharray={`${(p3.page4FeedbackAndIteration.dataInsights.chart[0].percentage / 100) * 2 * Math.PI * 70} ${2 * Math.PI * 70}`}
                        transform="rotate(-90 90 90)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-serif-display text-3xl text-[var(--c-ink)]">
                        {p3.page4FeedbackAndIteration.dataInsights.primaryMetric.value}
                      </span>
                      <span className="font-mono-code text-[10px] uppercase tracking-wider text-[var(--c-ink)]/70">
                        {p3.page4FeedbackAndIteration.dataInsights.primaryMetric.label}
                      </span>
                    </div>
                  </div>

                  {/* Primary metric + legend */}
                  <div className="space-y-5">
                    <div>
                      <div className="font-serif-display text-4xl text-[var(--c-ink)]">
                        {p3.page4FeedbackAndIteration.dataInsights.primaryMetric.value}
                      </div>
                      <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)]">
                        {p3.page4FeedbackAndIteration.dataInsights.primaryMetric.label}
                      </div>
                      <div className="font-body text-xs text-[var(--c-ink)]/70 mt-1">
                        {p3.page4FeedbackAndIteration.dataInsights.primaryMetric.supportingText}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {p3.page4FeedbackAndIteration.dataInsights.chart.map((row, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5 font-mono-code text-xs text-[var(--c-ink)]">
                          <span className={`w-3 h-3 rounded-sm border border-[var(--c-ink)]/20 ${cIdx === 0 ? "bg-[var(--c-highlight)]" : "bg-[var(--c-warm-light)]"}`} />
                          <span>{row.label} — {row.responses} responses ({row.percentage}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key signal */}
                <div className="p-5 bg-[var(--c-highlight)] border border-[var(--c-ink)]/20 rounded-xl">
                  <div className="font-mono-code text-[10px] font-bold uppercase tracking-widest text-[var(--c-ink)]/70 mb-1.5">
                    {p3.page4FeedbackAndIteration.dataInsights.keySignalTitle}
                  </div>
                  <p className="font-body text-sm text-[var(--c-ink)] leading-relaxed">
                    {p3.page4FeedbackAndIteration.dataInsights.keySignal}
                  </p>
                </div>
              </div>
            </div>

            {/* FEEDBACK → ITERATION → IMPACT */}
            <div className="border-t-2 border-[var(--c-ink)]/20 pt-8 mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-6">
                {u.p4LoopHeader}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {p3.page4FeedbackAndIteration.feedbackIterationImpact.map((card, cIdx) => (
                  <div key={cIdx} className="p-5 bg-[var(--c-bg)] border border-[var(--c-ink)]/15 rounded-xl">
                    <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase tracking-wide mb-2">
                      {card.heading}
                    </div>
                    <div className="text-lg text-[var(--c-ink)]/50 mb-2">→</div>
                    <div className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                      {card.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-[var(--c-ink)]/15 font-mono-code text-xs">
              <Link
                to="/"
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
