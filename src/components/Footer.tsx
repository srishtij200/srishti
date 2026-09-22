import React from 'react';
import { Link } from 'react-router-dom';
import { FlowerMark } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { ui, student } = portfolioData;

  return (
    <footer className="bg-[#FFFFFF] border-t border-[var(--c-ink)]/15 py-16 lg:py-20 text-[var(--c-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 text-center">
        <Link to="/" className="flex items-center gap-2.5">
          <FlowerMark size={24} />
          <span className="font-serif-display text-2xl font-bold tracking-tight text-[var(--c-ink)]">
            {student.name}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono-code text-xs text-[var(--c-ink)]/70">
          {ui.nav.items.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-[var(--c-ink)] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono-code text-[11px] text-[var(--c-ink)]/50">
          © {ui.nav.footerCopyrightYear} {student.name}
        </p>
      </div>
    </footer>
  );
};