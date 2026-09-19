import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { FlowerMark } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  onOpenWaitlist: () => void;
  ambientSound: boolean;
  onToggleAmbient: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWaitlist, ambientSound, onToggleAmbient }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [internshipDropdownOpen, setInternshipDropdownOpen] = useState(false);
  const location = useLocation();

  const isProjectsActive = location.pathname.startsWith('/projects');
  const isInternshipActive = location.pathname.startsWith('/internship');

  return (
    <header className="sticky top-0 z-40 bg-[#F5F5ED]/90 backdrop-blur-md border-b border-[#182018]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity (Left) */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group cursor-pointer"
          id="brand-logo"
        >
          <div className="transition-transform duration-300 group-hover:rotate-45">
            <FlowerMark size={26} />
          </div>
          <span className="font-serif-display text-2xl sm:text-3xl tracking-tight text-[#182018] font-bold">
            {portfolioData.student.name}
          </span>
        </Link>

        {/* Center Editorial Navigation with Clean Dropdowns */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#C9FF8C] decoration-2 cursor-pointer ${
                isActive ? 'text-[#182018] font-bold underline decoration-[#C9FF8C]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#AFC8FF] decoration-2 cursor-pointer ${
                isActive ? 'text-[#182018] font-bold underline decoration-[#AFC8FF]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`
            }
          >
            About Me
          </NavLink>

          {/* Internship Menu with Clean Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setInternshipDropdownOpen(true)}
            onMouseLeave={() => setInternshipDropdownOpen(false)}
          >
            <Link
              to="/internship/experience"
              className={`flex items-center gap-1 font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#F8DD65] decoration-2 cursor-pointer ${
                isInternshipActive ? 'text-[#182018] font-bold underline decoration-[#F8DD65]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`}
            >
              <span>Internship</span>
              <ChevronDown className="w-3 h-3 text-[#182018]/50" />
            </Link>

            {internshipDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl shadow-md p-1.5 font-mono-code text-xs">
                  <Link
                    to="/internship/experience"
                    onClick={() => setInternshipDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#F5F5ED] transition-colors"
                  >
                    <span className="block font-bold">Aadiya Jewels</span>
                    <span className="text-[11px] text-[#182018]/60">Page 1 Social & Page 2 E-Commerce</span>
                  </Link>
                  <Link
                    to="/internship/learnings"
                    onClick={() => setInternshipDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#F5F5ED] transition-colors border-t border-[#182018]/10"
                  >
                    <span className="block font-bold">Learning Outcomes</span>
                    <span className="text-[11px] text-[#182018]/60">4 Core industry learnings</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Selected Projects Menu with Clean Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <Link
              to="/projects"
              className={`flex items-center gap-1 font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#F4B6D4] decoration-2 cursor-pointer ${
                isProjectsActive ? 'text-[#182018] font-bold underline decoration-[#F4B6D4]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`}
            >
              <span>Selected Projects</span>
              <ChevronDown className="w-3 h-3 text-[#182018]/50" />
            </Link>

            {projectsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-xl shadow-md p-1.5 font-mono-code text-xs">
                  <Link
                    to="/projects"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#F5F5ED] transition-colors border-b border-[#182018]/10 font-bold"
                  >
                    All Projects Overview
                  </Link>
                  <Link
                    to="/projects/marketing"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#C9FF8C]/30 transition-colors"
                  >
                    <span className="block font-bold">01 Marketing</span>
                    <span className="text-[11px] text-[#182018]/60">UNIQLO Fragrance Extension</span>
                  </Link>
                  <Link
                    to="/projects/visual-merchandising"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#F4B6D4]/30 transition-colors"
                  >
                    <span className="block font-bold">02 Visual Merchandising</span>
                    <span className="text-[11px] text-[#182018]/60">Cover Story — Future Florals</span>
                  </Link>
                  <Link
                    to="/projects/project-3"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[#182018] hover:bg-[#AFC8FF]/30 transition-colors"
                  >
                    <span className="block font-bold">03 Start Up</span>
                    <span className="text-[11px] text-[#182018]/60">Athleisure Hybrid MVP</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#AFC8FF] decoration-2 cursor-pointer ${
                isActive ? 'text-[#182018] font-bold underline decoration-[#AFC8FF]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-mono-code text-xs uppercase tracking-wider transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#C9FF8C] decoration-2 cursor-pointer ${
                isActive ? 'text-[#182018] font-bold underline decoration-[#C9FF8C]' : 'text-[#182018]/70 hover:text-[#182018]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right CTA & Ambient button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleAmbient}
            title={ambientSound ? "Mute studio atmosphere" : "Play subtle studio room ambience"}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#182018]/25 hover:border-[#182018] font-mono-code text-xs text-[#182018]/80 hover:text-[#182018] transition-all bg-white/60 cursor-pointer"
          >
            {ambientSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
                <span>Studio Hum: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#182018]/60" />
                <span>Studio Hum</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenWaitlist}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#C9FF8C] text-[#182018] border-[1.5px] border-[#182018] px-4 py-2 rounded-full font-mono-code text-xs uppercase tracking-wider font-bold paper-shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer"
          >
            <span>Inquire</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#182018] hover:text-[#182018]/70 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5ED] border-b border-[#182018]/15 px-6 pt-4 pb-6 space-y-3 font-mono-code text-xs uppercase">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            About Me
          </NavLink>
          <NavLink
            to="/internship/experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            Internship (Aadiya Jewels)
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            Selected Projects
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#182018]"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};
