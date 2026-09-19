import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle2, MessageSquare, TrendingUp, Scissors, BarChart3, Layers } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectThreePage: React.FC = () => {
  const { projectThree: p3 } = portfolioData;

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
            <span className="text-[#182018] font-semibold">PROJECT 3 — START UP</span>
          </div>
          <span>ATHLEISURE HYBRID // STRUCTURED × RELAXED</span>
        </div>

        {/* SECTION: COVER PAGE */}
        <section className="space-y-12 mb-16">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative overflow-hidden">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#AFC8FF" width="w-32" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5ED] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] paper-shadow-sm">
                    <FlowerMark size={14} />
                    <span>PROJECT 3 (START UP) // PAGE 1</span>
                  </div>

                  <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#182018] leading-[1.02] tracking-tight">
                    {p3.cover.title}
                  </h1>

                  <p className="font-serif-display text-2xl sm:text-3xl text-[#182018]/80 italic leading-snug">
                    {p3.cover.conceptSubtitle}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">PROJECT TYPE:</span>
                      <span className="font-bold text-[#182018]">Fashion Start-Up & Athleisure</span>
                    </div>
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">DELIVERABLE:</span>
                      <span className="font-bold text-[#182018]">Physical MVP Prototype</span>
                    </div>
                    <div>
                      <span className="text-[#182018]/50 block text-[10px] uppercase">SCOPE:</span>
                      <span className="font-bold text-[#182018]">Research to Fabrication</span>
                    </div>
                  </div>
                </div>

                {/* Cover Graphic Image */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.51.59 PM.png"
                      alt="Athleisure Start-up Cover"
                      className="w-full h-auto object-cover rounded-xl border border-[#182018]/15"
                    />
                    <div className="font-mono-code text-[11px] text-[#182018]/70 text-center mt-2">
                      Athleisure Venture Cover Dossier
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </section>

        {/* SECTION: SURVEY INSIGHTS & THE BRIEF */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#AFC8FF" width="w-28" />
            </div>

            <div className="max-w-4xl mb-10">
              <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
                PAGE 2 — SURVEY INSIGHTS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] mb-4">
                THE BRIEF
              </h2>
              <p className="font-body text-base text-[#182018]/85 leading-relaxed p-4 bg-[#F5F5ED] rounded-2xl border border-[#182018]/20 mb-6">
                {p3.page2SurveyInsights.brief}
              </p>

              <div className="p-4 bg-[#AFC8FF]/20 rounded-2xl border border-[#182018]/20 font-mono-code text-xs font-bold text-[#182018]">
                THE JOURNEY: {p3.page2SurveyInsights.journey}
              </div>
            </div>

            {/* Real Survey Insights Diagram */}
            <div className="mb-10 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Survey Insights & Consumer Data Analysis</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#182018]/20 bg-white max-h-[420px] flex items-center justify-center p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-18 at 7.12.03 PM.png"
                  alt="Survey Insights Breakdown"
                  className="max-h-[380px] w-auto object-contain"
                />
              </div>
              <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-2 text-center">
                Direct consumer feedback matrix measuring versatility, tightness, and comfort ratings
              </span>
            </div>

            {/* THE OBSERVATION */}
            <div className="mb-10">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                THE OBSERVATION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {p3.page2SurveyInsights.theObservation.map((obs) => (
                  <div key={obs.num} className="p-6 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                    <span className="font-mono-code text-xs text-[#182018]/50 font-bold block mb-1">
                      {obs.num}.
                    </span>
                    <h3 className="font-serif-display text-xl text-[#182018] mb-2">
                      {obs.title}
                    </h3>
                    <p className="font-body text-xs text-[#182018]/75">
                      {obs.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT I INVESTIGATED & MY APPROACH */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              <div className="lg:col-span-5 p-6 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  WHAT I INVESTIGATED
                </div>
                <ul className="space-y-3 font-mono-code text-xs text-[#182018]/85">
                  {p3.page2SurveyInsights.whatIInvestigated.map((inv, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#182018] mt-1.5 shrink-0" />
                      <span>{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7 p-6 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl">
                <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  MY APPROACH
                </div>
                <div className="space-y-3">
                  {p3.page2SurveyInsights.myApproach.map((app, aIdx) => (
                    <div key={aIdx} className="font-mono-code text-xs">
                      <strong className="text-[#182018]">{app.step}:</strong>{" "}
                      <span className="text-[#182018]/75">{app.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>

        {/* SECTION: DESIGN, MATERIAL & PROTOTYPE */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative mb-16">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#C9FF8C" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-4">
              PAGE 3
            </span>

            {/* 01 DESIGN WITH TECHNICAL FLAT DRAWING */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[#182018]">
                    {p3.page3DesignAndMaterial.design.title}
                  </h2>
                  <div className="flex flex-wrap gap-2.5 font-mono-code text-xs">
                    {p3.page3DesignAndMaterial.design.points.map((pt, i) => (
                      <span key={i} className="px-4 py-2 bg-[#FFFFFF] border border-[#182018] rounded-xl font-bold">
                        ✦ {pt}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-xs text-[#182018]/75 leading-relaxed pt-2">
                    Structured crop top tailored with compressive chest support paired with airy, comfortable relaxed joggers for effortless movement.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white rounded-xl overflow-hidden border border-[#182018]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.12 PM.png"
                      alt="Design Flats Structured Crop Top and Joggers"
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-1.5 text-center">
                    01 Design — Structured Crop Top & Joggers Flat
                  </span>
                </div>
              </div>
            </div>

            {/* 02 MATERIAL WITH MATERIAL SPEC SHEET */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-display text-3xl text-[#182018]">
                    {p3.page3DesignAndMaterial.material.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#FFFFFF] border border-[#182018]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[#182018] mb-1">
                        {p3.page3DesignAndMaterial.material.lycra.name}
                      </div>
                      <div className="font-body text-xs text-[#182018]/80">
                        {p3.page3DesignAndMaterial.material.lycra.attributes}
                      </div>
                    </div>

                    <div className="p-4 bg-[#FFFFFF] border border-[#182018]/25 rounded-xl">
                      <div className="font-mono-code text-xs font-bold text-[#182018] mb-1">
                        {p3.page3DesignAndMaterial.material.terryCotton.name}
                      </div>
                      <div className="font-body text-xs text-[#182018]/80">
                        {p3.page3DesignAndMaterial.material.terryCotton.attributes}
                      </div>
                    </div>
                  </div>
                  <p className="font-mono-code text-xs text-[#182018]/80 font-semibold">
                    ✦ {p3.page3DesignAndMaterial.material.colorNote}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white rounded-xl overflow-hidden border border-[#182018]/25 p-2 paper-shadow-sm flex items-center justify-center">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.20 PM.png"
                      alt="Material Testing Lycra and Terry Cotton"
                      className="max-h-64 object-contain"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#182018]/60 block mt-1.5 text-center">
                    02 Material — Lycra & Terry Cotton Functional Pairing
                  </span>
                </div>
              </div>
            </div>

            {/* 03 FINAL PROTOTYPE (MVP PHOTO) */}
            <div className="p-8 bg-[#AFC8FF]/30 border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-3">
                  <span className="font-mono-code text-xs font-bold bg-[#182018] text-[#F5F5ED] px-3 py-1 rounded-full uppercase inline-block">
                    {p3.page3DesignAndMaterial.prototype.badge}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
                    {p3.page3DesignAndMaterial.prototype.tagline}
                  </h3>
                  <p className="font-mono-code text-xs sm:text-sm text-[#182018]/90 uppercase tracking-wider font-bold">
                    {p3.page3DesignAndMaterial.prototype.coreProposition}
                  </p>
                  <p className="font-body text-xs text-[#182018]/80 pt-2 leading-relaxed">
                    The physical MVP garment produced and evaluated through user wear-testing sessions to gauge breathability and silhouette comfort.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-white rounded-2xl overflow-hidden border-[1.5px] border-[#182018] p-3 paper-shadow">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-18 at 7.03.30 PM.png"
                      alt="03 Physical MVP Prototype"
                      className="w-full h-auto max-h-80 object-contain mx-auto"
                    />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#182018]/70 block mt-2 text-center font-bold">
                    03 Final Prototype — Physical MVP Sample
                  </span>
                </div>
              </div>
            </div>

        </div>

        {/* SECTION: FEEDBACK & ITERATION */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-14 paper-shadow-lg relative">
            <div className="absolute -top-3 right-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-4">
              PAGE 4
            </span>

            {/* WHAT I HEARD */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[#182018] mb-4">
                WHAT I HEARD
              </h2>
              <div className="space-y-3">
                {p3.page4FeedbackAndIteration.whatIHeard.map((quote, qIdx) => (
                  <div key={qIdx} className="p-4 bg-[#F5F5ED] border border-[#182018]/20 rounded-xl font-serif-display text-lg text-[#182018] italic">
                    {quote}
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT THIS TAUGHT ME */}
            <div className="mb-10">
              <h2 className="font-serif-display text-3xl text-[#182018] mb-4">
                WHAT THIS TAUGHT ME
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {p3.page4FeedbackAndIteration.whatThisTaughtMe.map((item, tIdx) => (
                  <div key={tIdx} className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                    <h3 className="font-serif-display text-xl text-[#182018] mb-2">
                      {item.headline}
                    </h3>
                    <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FEEDBACK → ITERATION → IMPACT */}
            <div className="p-8 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl mb-8">
              <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-6 text-center">
                FEEDBACK → ITERATION → IMPACT
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono-code text-xs">
                <div className="md:col-span-1 p-5 bg-[#FFFFFF] border border-[#182018] rounded-xl">
                  <span className="text-[#182018]/60 uppercase text-[10px] block mb-1">FEEDBACK</span>
                  <strong className="text-sm text-[#182018]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.feedback}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[#182018]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[#C9FF8C] border border-[#182018] rounded-xl">
                  <span className="text-[#182018]/60 uppercase text-[10px] block mb-1">ITERATION</span>
                  <strong className="text-sm text-[#182018]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.iteration}
                  </strong>
                </div>

                <div className="text-2xl font-bold text-[#182018]/50 hidden md:block">
                  →
                </div>

                <div className="md:col-span-1 p-5 bg-[#FFFFFF] border border-[#182018] rounded-xl">
                  <span className="text-[#182018]/60 uppercase text-[10px] block mb-1">IMPACT</span>
                  <strong className="text-sm text-[#182018]">
                    {p3.page4FeedbackAndIteration.feedbackLoop.impact}
                  </strong>
                </div>
              </div>

              {/* Graphical Feedback Loop Diagram */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[#182018]/20 bg-white max-h-48 flex items-center justify-center p-2">
                <img
                  src="/portfolio-assets/Screenshot 2026-09-18 at 8.44.29 PM.png"
                  alt="Feedback Iteration Impact Flow"
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-[#182018]/15 font-mono-code text-xs">
              <Link
                to="/skills"
                className="bg-[#182018] text-[#F5F5ED] px-5 py-2.5 rounded-xl font-bold hover:bg-[#253325] cursor-pointer flex items-center gap-1.5"
              >
                <span>View Skills Matrix →</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
