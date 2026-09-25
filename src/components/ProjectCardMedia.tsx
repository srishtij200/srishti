import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

interface ProjectCardMediaProps {
  image?: string;
  alt?: string;
}

export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({ image, alt = '' }) => {
  const placeholder = portfolioData.ui.cardPlaceholder;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [image]);

  if (image && !failed) {
    return (
      <div className="mb-5 overflow-hidden rounded-xl border-[1.5px] border-[var(--c-ink)] bg-[var(--c-bg)]">
        <img src={image} alt={alt} onError={() => setFailed(true)} className="w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>
    );
  }

  return (
    <div className="mb-5 aspect-[16/9] rounded-xl border-2 border-dashed border-[var(--c-ink)]/30 bg-[var(--c-bg)] flex flex-col items-center justify-center gap-2 transition-colors duration-300 group-hover:border-[var(--c-ink)]/60">
      <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)] font-bold">
        {placeholder.title}
      </span>
      <span className="font-mono-code text-[10px] text-[var(--c-ink)]">
        {placeholder.subtitle}
      </span>
    </div>
  );
};
