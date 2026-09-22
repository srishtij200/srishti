import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape } from '../components/CustomDoodles';
import { ProjectCardMedia } from '../components/ProjectCardMedia';
import { portfolioData } from '../data/portfolioData';

export const ProjectsOverviewPage: React.FC = () => {
  const ui = portfolioData.ui.projectsOverview;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)]">{ui.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{ui.breadcrumbCurrent}</span>
          </div>
          <span>{ui.breadcrumbTag}</span>
        </div>

        {/* Hero Title & Intro */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>{ui.badge}</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-4">
            {ui.title}
          </h1>

          <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-3xl mb-8">
            {ui.intro}
          </p>
        </div>

        {/* Projects Display List */}
        <div className="space-y-12 mb-20">
          {portfolioData.selectedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative overflow-hidden group hover:paper-shadow-xl transition-all"
            >
              <div className="absolute -top-3 right-12">
                <WashiTape color={proj.accentColor} width="w-28" />
              </div>

              <ProjectCardMedia image={proj.image} alt={proj.title} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase">
                      {ui.caseStudyPrefix} {proj.number}
                    </span>
                    <span className="text-xs font-mono-code px-2.5 py-0.5 rounded-full border border-[var(--c-ink)]/30 bg-[var(--c-bg)]">
                      {proj.category}
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--c-ink)] group-hover:underline decoration-[var(--c-ink)] underline-offset-4">
                    {proj.title}
                  </h2>

                  <p className="font-mono-code text-xs text-[var(--c-ink)]/60 font-semibold uppercase">
                    {proj.discipline}
                  </p>

                  <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-2xl">
                    {proj.summary}
                  </p>

                  {proj.brief && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {[
                        { label: ui.labelBrief, text: proj.brief },
                        { label: ui.labelResearch, text: proj.research },
                        { label: ui.labelContribution, text: proj.contribution },
                        { label: ui.labelKeyLearnings, text: proj.keyLearnings }
                      ].map((b) => (
                        <div
                          key={b.label}
                          className="p-4 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-xl"
                        >
                          <span className="font-mono-code text-[10px] font-bold text-[var(--c-ink)]/60 uppercase tracking-wider block mb-1.5">
                            {b.label}
                          </span>
<p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed whitespace-pre-line">
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-lg font-mono-code text-xs text-[var(--c-ink)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0">
                  <div className="p-6 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-2xl mb-6">
                    <span className="font-mono-code text-xs font-bold text-[var(--c-ink)] block mb-2">
                      {ui.coreFocus}
                    </span>
                    <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="flex items-center justify-between w-full py-4 px-6 bg-[var(--c-ink)] text-[var(--c-bg)] hover:bg-[#253325] rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    <span>{ui.readComplete}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
