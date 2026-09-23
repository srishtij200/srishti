import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { FlowerMark } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipLearningsPage: React.FC = () => {
  const { internship } = portfolioData;
  const ui = portfolioData.ui.internshipLearnings;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)]">{ui.breadcrumbHome}</Link>
            <span>/</span>
            <Link to="/internship/experience" className="hover:text-[var(--c-ink)]">{ui.breadcrumbInternship}</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{ui.breadcrumbCurrent}</span>
          </div>
          <span>{ui.breadcrumbTag}</span>
        </div>
      </div>

      {/* Hero Title — dusty blue band */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--c-bg)] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4">
              <FlowerMark size={14} />
              <span>{ui.badge}</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-4">
              {ui.title}
            </h1>

            <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-3xl mb-8">
              {ui.intro}
            </p>

            <div className="flex items-center gap-3 font-mono-code text-xs">
              <Link
                to="/internship/experience"
                className="bg-[var(--c-bg)] hover:bg-[var(--c-bg)] text-[var(--c-ink)] px-4 py-2 rounded-xl border border-[var(--c-ink)]/30 hover:border-[var(--c-ink)] transition-colors"
              >
                ← {ui.backLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4 LEARNING OUTCOMES — sage band */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internship.learningOutcomes.map((lo) => (
              <div
                key={lo.number}
                className="relative border-t-2 border-[var(--c-ink)]/20 pt-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/60 mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                    <span className="font-bold text-[var(--c-ink)]">{ui.outcomePrefix} {lo.number}</span>
                    <span>{ui.brandTag}</span>
                  </div>

                  <h2 className="font-serif-display text-3xl text-[var(--c-ink)] mb-4">
                    {lo.title}
                  </h2>

                  <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed">
                    {lo.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--c-ink)]/10 font-mono-code text-xs text-[var(--c-ink)]/60 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F5B4A]" />
                  <span>{ui.verifiedLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Pagination — dusty rose band */}
      <div className="bg-[var(--c-warm)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col sm:flex-row items-center justify-between border-t-2 border-[var(--c-ink)]/20 pt-8 gap-4">
            <Link
              to="/internship/experience"
              className="font-mono-code text-xs uppercase text-[var(--c-ink)]/70 hover:text-[var(--c-ink)] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{ui.backCta}</span>
            </Link>

            <Link
              to="/projects/marketing"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[var(--c-ink-hover)] transition-colors"
            >
              <span>{ui.nextCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
