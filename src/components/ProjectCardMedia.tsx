import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface ProjectCardMediaProps {
  image?: string;
  alt?: string;
}

export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({ image, alt = '' }) => {
  const placeholder = portfolioData.ui.cardPlaceholder;

  if (image) {
    return (
      <div className="mb-5 overflow-hidden rounded-xl border-[1.5px] border-[var(--c-ink)] bg-[#FFFFFF]">
        <img src={image} alt={alt} className="w-full aspect-[16/9] object-cover" />
      </div>
    );
  }

  return (
    <div className="mb-5 aspect-[16/9] rounded-xl border-2 border-dashed border-[var(--c-ink)]/30 bg-[#EFEDE0] flex flex-col items-center justify-center gap-2">
      <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]/50 font-bold">
        {placeholder.title}
      </span>
      <span className="font-mono-code text-[10px] text-[var(--c-ink)]/40">
        {placeholder.subtitle}
      </span>
    </div>
  );
};