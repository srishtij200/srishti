import React from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { FlowerMark } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipLearningsPage: React.FC = () => {
  const { internship } = portfolioData;
  const ui = portfolioData.ui.internshipLearnings;

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-[var(--c-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link to="/" className="hover:text-[var(--c-ink)] transition-colors">{ui.breadcrumbHome}</Link>
            <span>/</span>
            <Link to="/internship/experience" className="hover:text-[var(--c-ink)] transition-colors">{ui.breadcrumbInternship}</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">{ui.breadcrumbCurrent}</span>
          </motion.div>
          <span>{ui.breadcrumbTag}</span>
        </div>
      </div>

      {/* Hero Title — dusty blue band */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
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
                className="group bg-[var(--c-bg)] text-[var(--c-ink)] px-4 py-2 rounded-xl border border-[var(--c-ink)]/30 hover:border-[var(--c-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:paper-shadow-sm"
              >
                ← {ui.backLabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4 LEARNING OUTCOMES — sage band */}
      <div className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internship.learningOutcomes.map((lo, loIdx) => (
              <motion.div
                key={lo.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: loIdx * 0.08 }}
                className="group relative border-t-2 border-[var(--c-ink)]/20 pt-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
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
                  <CheckCircle2 className="w-4 h-4 text-[#4F5B4A] transition-transform duration-300 group-hover:scale-110" />
                  <span>{ui.verifiedLabel}</span>
                </div>
              </motion.div>
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
              className="group font-mono-code text-xs uppercase text-[var(--c-ink)]/70 hover:text-[var(--c-ink)] flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="group-hover:underline underline-offset-4">{ui.backCta}</span>
            </Link>

            <Link
              to="/projects/marketing"
              className="group flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[var(--c-ink-hover)] transition-all duration-300 hover:-translate-y-0.5 hover:paper-shadow-sm"
            >
              <span>{ui.nextCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
};
