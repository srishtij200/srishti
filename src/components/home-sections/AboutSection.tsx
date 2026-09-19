import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { FlowerMark, WashiTape } from '../CustomDoodles';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { student } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F5ED] border-b border-[#182018]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-[#182018]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#182018]/60 mb-2">
              <FlowerMark className="w-3.5 h-3.5 text-[#182018]" />
              <span>ABOUT ME</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
              Behind the Folio
            </h2>
          </motion.div>

          <Link
            to="/about"
            className="mt-4 sm:mt-0 text-sm text-[#182018] hover:underline underline-offset-4 decoration-[#AFC8FF] decoration-2 flex items-center gap-1.5"
          >
            <span>Full About Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] paper-shadow-sm">
              <FlowerMark size={14} />
              <span>STUDENT BIOGRAPHY</span>
            </div>

            <h3 className="font-serif-display text-4xl sm:text-5xl text-[#182018] leading-[1.05] tracking-tight">
              {student.degree}
            </h3>

            <div className="font-mono-code text-xs sm:text-sm text-[#182018]/70 flex flex-wrap items-center gap-3">
              <span className="bg-[#C9FF8C] text-[#182018] px-2.5 py-0.5 rounded border border-[#182018] font-bold">
                {student.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {student.location}
              </span>
            </div>

            <p className="font-serif-display text-2xl sm:text-3xl text-[#182018] italic leading-snug pt-2">
              "{student.statement}"
            </p>

            <div className="space-y-4 font-body text-base text-[#182018]/85 leading-relaxed pt-2">
              <p>{student.secondaryStatement}</p>
              <p>
                My foundation integrates hands-on making with strategic rigor: from conducting consumer interviews and testing fabric breathability, to building 1:1 scale floral window displays and executing daily e-commerce operations.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {student.specializations.map((spec, i) => (
                <span key={i} className="font-mono-code text-xs px-3 py-1 bg-[#FFFFFF] border border-[#182018]/30 rounded-lg text-[#182018]">
                  ✦ {spec}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 paper-shadow-lg relative">
              <div className="absolute -top-3 left-10">
                <WashiTape color="#F4B6D4" width="w-24" />
              </div>

              <div className="font-mono-code text-xs font-bold uppercase text-[#182018]/60 mb-6 pb-2 border-b border-[#182018]/15">
                PORTFOLIO SCOPE & EXPERIENCE
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono-code text-xs font-bold text-[#182018]">
                    01. AADIYA JEWELS (INTERNSHIP)
                  </div>
                  <div className="font-body text-xs text-[#182018]/80 mt-1">
                    Social Media Content Production (videos & reels) + E-Commerce Shopify management.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[#182018]">
                    02. UNIQLO FRAGRANCE (PROJECT 1)
                  </div>
                  <div className="font-body text-xs text-[#182018]/80 mt-1">
                    Marketing Management, STP, 7Ps, and 5 Core Design Decisions.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[#182018]">
                    03. COVER STORY (PROJECT 2)
                  </div>
                  <div className="font-body text-xs text-[#182018]/80 mt-1">
                    Spring/Summer VM Concept, Future Florals, Holographic sheets & 6 VM Principles.
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-xs font-bold text-[#182018]">
                    04. FASHION START-UP (PROJECT 3)
                  </div>
                  <div className="font-body text-xs text-[#182018]/80 mt-1">
                    Survey research, Lycra & Terry cotton fabric testing, and physical MVP iteration.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};