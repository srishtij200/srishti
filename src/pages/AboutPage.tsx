import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Compass, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const { student } = portfolioData;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)]">HOME</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">ABOUT ME</span>
          </div>
          <span>FOLIO ETHOS & BACKGROUND</span>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] paper-shadow-sm">
              <FlowerMark size={14} />
              <span>STUDENT BIOGRAPHY</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight">
              {student.degree}
            </h1>

            <div className="font-mono-code text-xs sm:text-sm text-[var(--c-ink)]/70 flex flex-wrap items-center gap-3">
              <span className="bg-[var(--c-highlight)] text-[var(--c-ink)] px-2.5 py-0.5 rounded border border-[var(--c-ink)] font-bold">
                {student.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {student.location}
              </span>
            </div>

            <p className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)] italic leading-snug pt-2">
              "{student.statement}"
            </p>

            <div className="space-y-4 font-body text-base text-[var(--c-ink)]/85 leading-relaxed pt-2">
              <p>
                {student.secondaryStatement}
              </p>
              <p>
                My foundation integrates hands-on making with strategic rigor: from conducting consumer interviews and testing fabric breathability, to building 1:1 scale floral window displays and executing daily e-commerce operations.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {student.specializations.map((spec, i) => (
                <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)]/30 rounded-lg text-[var(--c-ink)]">
                  ✦ {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 paper-shadow-lg relative">
              <div className="absolute -top-3 left-10">
                <WashiTape color="#F4B6D4" width="w-24" />
              </div>

              <div className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)]/60 mb-6 pb-2 border-b border-[var(--c-ink)]/15">
                PORTFOLIO SCOPE & EXPERIENCE
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    01. AADIYA JEWELS (INTERNSHIP)
                  </div>
                  <div className="font-body text-xs text-[var(--c-ink)]/80 mt-1">
                    Social Media Content Production (videos & reels) + E-Commerce Shopify management.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    02. UNIQLO FRAGRANCE (PROJECT 1)
                  </div>
                  <div className="font-body text-xs text-[var(--c-ink)]/80 mt-1">
                    Marketing Management, STP, 7Ps, and 5 Core Design Decisions.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    03. COVER STORY (PROJECT 2)
                  </div>
                  <div className="font-body text-xs text-[var(--c-ink)]/80 mt-1">
                    Spring/Summer VM Concept, Future Florals, Holographic sheets & 6 VM Principles.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                    04. FASHION START-UP (PROJECT 3)
                  </div>
                  <div className="font-body text-xs text-[var(--c-ink)]/80 mt-1">
                    Survey research, Lycra & Terry cotton fabric testing, and physical MVP iteration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[var(--c-ink)]/60">NEXT IN PORTFOLIO</div>
            <div className="font-serif-display text-2xl text-[var(--c-ink)]">Explore Aadiya Jewels Internship</div>
          </div>
          <Link
            to="/internship/experience"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#253325] transition-colors"
          >
            <span>View Internship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
