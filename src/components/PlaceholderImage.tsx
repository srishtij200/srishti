import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  src?: string;
  label?: string;
  alt?: string;
  aspect?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  label = 'IMAGE PLACEHOLDER',
  alt = '',
  aspect = 'aspect-[16/9]'
}) => {
  if (src) {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--c-ink)]/20 bg-[var(--c-bg)]">
        <img src={src} alt={alt} className={`w-full ${aspect} object-cover`} />
      </div>
    );
  }

  return (
    <div
      className={`${aspect} rounded-xl border-2 border-dashed border-[var(--c-ink)]/30 bg-[var(--c-bg)] flex flex-col items-center justify-center gap-1.5 px-3 text-center`}
    >
      <ImageIcon className="w-5 h-5 text-[var(--c-ink)]/35" />
      <span className="font-mono-code text-[10px] uppercase tracking-widest text-[var(--c-ink)]/50 font-bold">
        {label}
      </span>
      <span className="font-mono-code text-[9px] text-[var(--c-ink)]/35">IMAGE PLACEHOLDER</span>
    </div>
  );
};
