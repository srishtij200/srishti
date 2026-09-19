import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { portfolioData } from '../data/portfolioData';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { student, selectedProjects, internship } = portfolioData;

  return (
    <div className="bg-[#F5F5ED]">
      {/* 1. HERO / ABOUT SECTION */}
      <section
        id="about"
        className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-graph-paper border-b border-[#182018]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered Hero Headline */}
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs uppercase tracking-wider text-[#182018] mb-6 paper-shadow-sm"
            >
              <FlowerMark size={14} />
              <span>{student.degree}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif-display text-5xl sm:text-7xl lg:text-[82px] leading-[1.05] tracking-tight text-[#182018] max-w-4xl mb-6"
            >
              Srishti&apos;s{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#F4B6D4] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#182018]/20" />
                <span className="relative z-10 italic font-serif-display font-normal">
                  Portfolio
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif-display text-xl sm:text-2xl text-[#182018] italic leading-snug mb-9"
            >
              From raw creative concepts to{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-0 -inset-x-1.5 bottom-0.5 bg-[#C9FF8C] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#182018]/20" />
                <span className="relative z-10">impactful execution.</span>
              </span>
            </motion.p>

            {/* SAVED FOR LATER USE — Explore Selected Works CTA (hidden for now) */}
            {false && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-[#C9FF8C] text-[#182018] border-[1.5px] border-[#182018] px-7 py-3 rounded-full text-sm uppercase tracking-wider font-bold paper-shadow hover:translate-y-[-2px] hover:paper-shadow-lg transition-all cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-[#182018] group-hover:rotate-12 transition-transform" />
                  <span>Explore Selected Works</span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* About Biography */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
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

              <p className="font-serif-display text-2xl sm:text-3xl text-[#182018] italic leading-snug">
                "{student.statement}"
              </p>

              <div className="space-y-4 font-body text-base text-[#182018]/85 leading-relaxed">
                <p>{student.secondaryStatement}</p>
                <p>
                  My foundation integrates hands-on making with strategic rigor: from conducting consumer interviews and testing fabric breathability, to building 1:1 scale floral window displays and executing daily e-commerce operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
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
              <div className="relative">
                <div className="absolute -top-3 left-10 z-10">
                  <WashiTape color="#F4B6D4" width="w-24" />
                </div>

                <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-3 paper-shadow-lg">
                  <img
                    src="/src/assets/images/curated_moodboard_art_1789788458713.jpg"
                    alt="Srishti Jain moodboard — curated creative exploration"
                    className="w-full h-[420px] lg:h-[480px] object-cover rounded-2xl"
                  />
                </div>

                <span className="absolute -bottom-3 right-8 bg-[#182018] text-[#F5F5ED] font-mono-code text-xs px-3 py-1.5 rounded-full paper-shadow-sm uppercase tracking-wider">
                  Creative Producer
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURED PROJECTS PREVIEW */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#182018]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#182018]/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#182018]/60 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#182018]" />
                <span>CASE STUDIES</span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
                Selected Projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="mt-4 sm:mt-0 text-sm text-[#182018] hover:underline underline-offset-4 decoration-[#C9FF8C] decoration-2 flex items-center gap-1.5"
            >
              <span>View All Projects in Detail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((proj) => (
              <div
                key={proj.id}
                className={`bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow hover:translate-y-[-4px] hover:paper-shadow-lg transition-all flex flex-col justify-between relative group ${proj.rotation}`}
              >
                <div className="absolute -top-3 right-8">
                  <WashiTape color={proj.accentColor} width="w-20" />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-[#182018]/60 mb-4 pb-2 border-b border-[#182018]/15">
                    <span className="font-bold text-[#182018]">PROJECT {proj.number}</span>
                    <span>{proj.year}</span>
                  </div>

                  <span className="text-xs uppercase px-2.5 py-0.5 rounded-full border border-[#182018]/30 inline-block mb-3 bg-[#FFFFFF]">
                    {proj.category}
                  </span>

                  <h3 className="font-serif-display text-2xl text-[#182018] mb-3 leading-snug group-hover:underline decoration-[#182018] underline-offset-4">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-[#182018]/80 leading-relaxed mb-6">
                    {proj.tagline}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-[#FFFFFF] border border-[#182018]/20 rounded text-[#182018]/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="w-full flex items-center justify-between py-2.5 px-4 bg-[#FFFFFF] border border-[#182018] rounded-xl text-xs uppercase tracking-wider text-[#182018] font-bold group-hover:bg-[#182018] group-hover:text-[#F5F5ED] transition-colors"
                  >
                    <span>Read Complete Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERNSHIP FEATURE CALLOUT */}
      <section className="py-20 bg-[#F5F5ED] border-b border-[#182018]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
            <div className="absolute -top-3 left-12">
              <WashiTape color="#F4B6D4" width="w-28" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold text-[#182018]/60 block tracking-wider">
                  PRACTICAL INDUSTRY RESIDENCY
                </span>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
                  {internship.company} — {internship.role}
                </h2>
                <p className="text-base text-[#182018]/85 leading-relaxed max-w-2xl">
                  {internship.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {internship.page1SocialMedia.skillsApplied.slice(0, 5).map((sk, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#F5F5ED] border border-[#182018]/25 rounded-md text-[#182018]">
                      ✦ {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
                <Link
                  to="/internship/experience"
                  className="w-full flex items-center justify-between py-3 px-5 bg-[#182018] text-[#F5F5ED] rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-[#253325] transition-colors"
                >
                  <span>Page 1: Social Media</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/internship/experience"
                  className="w-full flex items-center justify-between py-3 px-5 bg-[#FFFFFF] text-[#182018] border border-[#182018] rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-[#F5F5ED] transition-colors"
                >
                  <span>Page 2: E-Commerce & Learnings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <SkillsSection />

      {/* 5. CONTACT ME SECTION */}
      <ContactSection />
    </div>
  );
};
