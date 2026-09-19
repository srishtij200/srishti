import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FlowerMark, WashiTape } from '../CustomDoodles';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#182018]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#182018]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#182018]/60 mb-2">
              <FlowerMark className="w-3.5 h-3.5 text-[#182018]" />
              <span>SKILLS</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
              Skills & Applied Disciplines
            </h2>
          </motion.div>

          <Link
            to="/skills"
            className="mt-4 sm:mt-0 text-sm text-[#182018] hover:underline underline-offset-4 decoration-[#AFC8FF] decoration-2 flex items-center gap-1.5"
          >
            <span>Full Skills Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-base text-[#182018]/85 leading-relaxed max-w-3xl mb-12"
        >
          A versatile skill set developed across real-world jewellery e-commerce at Aadiya Jewels, marketing frameworks for UNIQLO, in-store window fabrication for Cover Story, and user research for an athleisure startup.
        </motion.p>

        {/* 4 Disciplinary Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-3xl p-6 sm:p-8 paper-shadow-lg relative"
            >
              <div className="absolute -top-3 right-8">
                <WashiTape color={cat.color} width="w-24" />
              </div>

              <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 mb-3 pb-2 border-b border-[#182018]/10">
                <span className="font-bold text-[#182018]">DISCIPLINE 0{idx + 1}</span>
                <span className="bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#182018]/20">{cat.tag}</span>
              </div>

              <h3 className="font-serif-display text-2xl text-[#182018] mb-6">
                {cat.name}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx} className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#182018]/15">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-mono-code text-xs font-bold text-[#182018]">{s.name}</span>
                      <span className="font-mono-code text-[10px] text-emerald-800 bg-[#C9FF8C] px-1.5 py-0.5 rounded border border-[#182018]/20 font-bold">
                        {s.proficiency}
                      </span>
                    </div>
                    <div className="font-body text-xs text-[#182018]/70">
                      {s.note}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow"
          >
            <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
              Digital Tools & Software
            </div>
            <div className="space-y-2 font-mono-code text-xs text-[#182018]/80">
              {skills.softwareProficiency.map((sw, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>{sw}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-2xl p-6 paper-shadow"
          >
            <div className="font-mono-code text-xs font-bold uppercase text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
              Studio & Retail Practices
            </div>
            <div className="space-y-2 font-mono-code text-xs text-[#182018]/80">
              {skills.studioPractices.map((prac, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{prac}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};