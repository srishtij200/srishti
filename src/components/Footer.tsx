import React from 'react';
import { Link } from 'react-router-dom';
import { FlowerMark, HandDrawnStar } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#182018]/15 py-16 lg:py-20 text-[#182018]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#182018]/15">
          {/* Brand Info (Left) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <FlowerMark size={26} />
              <span className="font-serif-display text-3xl font-bold tracking-tight text-[#182018]">
                {portfolioData.student.name}
              </span>
            </Link>

            <p className="font-mono-code text-xs text-[#182018]/70 leading-relaxed max-w-sm">
              {portfolioData.student.tagline} {portfolioData.student.degree} candidate ({portfolioData.student.year}).
            </p>

            <div className="pt-2 font-mono-code text-[11px] text-[#182018]/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{portfolioData.student.location}</span>
            </div>
          </div>

          {/* Links: Projects */}
          <div className="md:col-span-2 space-y-3 font-mono-code text-xs">
            <span className="uppercase tracking-widest text-[#182018]/50 block font-bold text-[10px]">
              PROJECTS
            </span>
            <ul className="space-y-2 text-[#182018]/80">
              <li><Link to="/projects" className="hover:text-[#182018] transition-colors">Overview Gallery</Link></li>
              <li><Link to="/projects/marketing" className="hover:text-[#182018] transition-colors">01 Marketing (UNIQLO)</Link></li>
              <li><Link to="/projects/visual-merchandising" className="hover:text-[#182018] transition-colors">02 VM (Cover Story)</Link></li>
              <li><Link to="/projects/project-3" className="hover:text-[#182018] transition-colors">03 Start Up (MVP)</Link></li>
            </ul>
          </div>

          {/* Links: Portfolio */}
          <div className="md:col-span-2 space-y-3 font-mono-code text-xs">
            <span className="uppercase tracking-widest text-[#182018]/50 block font-bold text-[10px]">
              ARCHIVE
            </span>
            <ul className="space-y-2 text-[#182018]/80">
              <li><Link to="/about" className="hover:text-[#182018] transition-colors">About Me</Link></li>
              <li><Link to="/internship/experience" className="hover:text-[#182018] transition-colors">Aadiya Jewels Internship</Link></li>
              <li><Link to="/internship/learnings" className="hover:text-[#182018] transition-colors">Learning Outcomes</Link></li>
              <li><Link to="/skills" className="hover:text-[#182018] transition-colors">Skills Matrix</Link></li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="md:col-span-3 space-y-3 font-mono-code text-xs">
            <span className="uppercase tracking-widest text-[#182018]/50 block font-bold text-[10px]">
              CORRESPONDENCE
            </span>
            <ul className="space-y-2 text-[#182018]/80">
              <li>
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-[#182018] transition-colors font-bold">
                  {portfolioData.contact.email}
                </a>
              </li>
              {portfolioData.contact.socials.map((s, idx) => (
                <li key={idx}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="hover:text-[#182018] transition-colors">
                    {s.name} ({s.handle})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Monospace Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[#182018]/60">
          <div className="flex items-center gap-2">
            <span>© 2026 {portfolioData.student.name}</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#182018] transition-colors">Inquire</Link>
            <span>•</span>
            <Link to="/projects" className="hover:text-[#182018] transition-colors">Curated Folio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
