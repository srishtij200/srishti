import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ProjectsOverviewPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'marketing' | 'vm' | 'startup'>('all');

  const filteredProjects = portfolioData.selectedProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'marketing') return p.slug === 'marketing';
    if (filter === 'vm') return p.slug === 'visual-merchandising';
    if (filter === 'startup') return p.slug === 'project-3';
    return true;
  });

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 pb-4 border-b border-[#182018]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#182018]">HOME</Link>
            <span>/</span>
            <span className="text-[#182018] font-semibold">SELECTED PROJECTS</span>
          </div>
          <span>FOLIO: 001–003 // CASE STUDIES</span>
        </div>

        {/* Hero Title & Intro */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>CURATED WORKS ARCHIVE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#182018] leading-[1.05] tracking-tight mb-4">
            Selected Projects
          </h1>

          <p className="font-body text-base text-[#182018]/85 leading-relaxed max-w-3xl mb-8">
            Three comprehensive projects investigating marketing management & brand expansion (UNIQLO), Spring/Summer visual merchandising (Cover Story), and founding an athleisure startup from consumer observation to physical MVP.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl border-[1.5px] transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#182018] text-[#F5F5ED] border-[#182018] font-bold paper-shadow-sm'
                  : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/25 hover:border-[#182018]'
              }`}
            >
              All Projects (3)
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-4 py-2 rounded-xl border-[1.5px] transition-all cursor-pointer ${
                filter === 'marketing'
                  ? 'bg-[#C9FF8C] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                  : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/25 hover:border-[#182018]'
              }`}
            >
              01 Marketing (UNIQLO)
            </button>
            <button
              onClick={() => setFilter('vm')}
              className={`px-4 py-2 rounded-xl border-[1.5px] transition-all cursor-pointer ${
                filter === 'vm'
                  ? 'bg-[#F4B6D4] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                  : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/25 hover:border-[#182018]'
              }`}
            >
              02 Visual Merchandising (Cover Story)
            </button>
            <button
              onClick={() => setFilter('startup')}
              className={`px-4 py-2 rounded-xl border-[1.5px] transition-all cursor-pointer ${
                filter === 'startup'
                  ? 'bg-[#AFC8FF] text-[#182018] border-[#182018] font-bold paper-shadow-sm'
                  : 'bg-[#FFFFFF] text-[#182018]/80 border-[#182018]/25 hover:border-[#182018]'
              }`}
            >
              03 Start Up (Athleisure MVP)
            </button>
          </div>
        </div>

        {/* Projects Display List */}
        <div className="space-y-12 mb-20">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative overflow-hidden group hover:paper-shadow-xl transition-all"
            >
              <div className="absolute -top-3 right-12">
                <WashiTape color={proj.accentColor} width="w-28" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase">
                      CASE STUDY {proj.number}
                    </span>
                    <span className="text-xs font-mono-code px-2.5 py-0.5 rounded-full border border-[#182018]/30 bg-[#F5F5ED]">
                      {proj.category}
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018] group-hover:underline decoration-[#182018] underline-offset-4">
                    {proj.title}
                  </h2>

                  <p className="font-mono-code text-xs text-[#182018]/60 font-semibold uppercase">
                    {proj.discipline}
                  </p>

                  <p className="font-body text-base text-[#182018]/85 leading-relaxed max-w-2xl">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#F5F5ED] border border-[#182018]/20 rounded-lg font-mono-code text-xs text-[#182018]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0">
                  <div className="p-6 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl mb-6">
                    <span className="font-mono-code text-xs font-bold text-[#182018] block mb-2">
                      CORE FOCUS
                    </span>
                    <p className="font-body text-xs text-[#182018]/80 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="flex items-center justify-between w-full py-4 px-6 bg-[#182018] text-[#F5F5ED] hover:bg-[#253325] rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    <span>Read Complete Study</span>
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
