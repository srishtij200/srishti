import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Lightbulb, Compass, BookOpen } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipLearningsPage: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)]">HOME</Link>
            <span>/</span>
            <Link to="/internship/experience" className="hover:text-[var(--c-ink)]">INTERNSHIP</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">LEARNINGS</span>
          </div>
          <span>AADIYA JEWELS // 4 LEARNING OUTCOMES</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>INTERNSHIP SYNTHESIS</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-4">
            Internship Learnings
          </h1>

          <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-3xl mb-8">
            Detailed breakdown of my 4 core learning outcomes from the marketing and e-commerce residency at Aadiya Jewels, bridging creative content with practical business deadlines.
          </p>

          <div className="flex items-center gap-3 font-mono-code text-xs">
            <Link
              to="/internship/experience"
              className="bg-[#FFFFFF] hover:bg-[var(--c-bg)] text-[var(--c-ink)] px-4 py-2 rounded-xl border border-[var(--c-ink)]/30 hover:border-[var(--c-ink)] transition-colors"
            >
              ← Back to Page 1 & Page 2 Overview
            </Link>
          </div>
        </div>

        {/* 4 LEARNING OUTCOMES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {internship.learningOutcomes.map((lo, idx) => (
            <div
              key={lo.number}
              className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 paper-shadow-lg relative flex flex-col justify-between"
            >
              <div className="absolute -top-3 right-8">
                <WashiTape color={idx % 2 === 0 ? "#C9FF8C" : "#F4B6D4"} width="w-20" />
              </div>

              <div>
                <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/60 mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  <span className="font-bold text-[var(--c-ink)]">OUTCOME {lo.number}</span>
                  <span>AADIYA JEWELS</span>
                </div>

                <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-4">
                  {lo.title}
                </h2>

                <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed">
                  {lo.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--c-ink)]/10 font-mono-code text-xs text-[var(--c-ink)]/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Verified in production & store management</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-2xl gap-4">
          <Link
            to="/internship/experience"
            className="font-mono-code text-xs uppercase text-[var(--c-ink)]/70 hover:text-[var(--c-ink)] flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Internship Experience</span>
          </Link>

          <Link
            to="/projects/marketing"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#253325] transition-colors"
          >
            <span>Proceed to Project 1 (Marketing Management)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
