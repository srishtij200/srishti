import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 pb-4 border-b border-[#182018]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#182018]">HOME</Link>
            <span>/</span>
            <span className="text-[#182018] font-semibold">SKILLS MATRIX</span>
          </div>
          <span>PRACTICAL & STRATEGIC COMPETENCIES</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>DISCIPLINARY PROFICIENCIES</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#182018] leading-[1.05] tracking-tight mb-4">
            Skills & Applied Disciplines
          </h1>

          <p className="font-body text-base text-[#182018]/85 leading-relaxed max-w-3xl mb-8">
            A versatile skill set developed across real-world jewellery e-commerce at Aadiya Jewels, marketing frameworks for UNIQLO, in-store window fabrication for Cover Story, and user research for an athleisure startup.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-6 sm:p-8 paper-shadow-lg relative"
            >
              <div className="absolute -top-3 right-8">
                <WashiTape color={cat.color} width="w-24" />
              </div>

              <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 mb-3 pb-2 border-b border-[#182018]/10">
                <span className="font-bold text-[#182018]">DISCIPLINE 0{idx + 1}</span>
                <span className="bg-[#F5F5ED] px-2 py-0.5 rounded border border-[#182018]/20">{cat.tag}</span>
              </div>

              <h2 className="font-serif-display text-2xl text-[#182018] mb-6">
                {cat.name}
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-2 bg-[#F5F5ED] rounded-xl border border-[#182018]/15 font-mono-code text-xs font-bold text-[#182018]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[#182018]/60">NEXT STEP</div>
            <div className="font-serif-display text-2xl text-[#182018]">Inquire for Commissions or Roles</div>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-[#182018] text-[#F5F5ED] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#253325] transition-colors"
          >
            <span>Proceed to Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
