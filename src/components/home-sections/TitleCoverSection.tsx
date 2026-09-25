import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/** 4-point sparkle/star used throughout the title cover. */
const SparkleStar = ({
  size,
  color = 'var(--c-bg)',
  className = '',
  style,
  delay = 0,
}: {
  size: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className={`cover-star absolute ${className}`}
    style={
      {
        width: size,
        height: size,
        fill: color,
        '--star-delay': `${delay}s`,
        ...style,
      } as React.CSSProperties
    }
  >
    <path d='M12 0L13.66 6.34L20 12L13.66 17.66L12 24L10.34 17.66L4 12L10.34 6.34L12 0Z' />
  </svg>
);

/**
 * Title cover — exact reproduction of the reference slide.
 *
 * Original canvas: 1424 x 860. Every element is positioned with percentages
 * derived from the spec's approximateBounds, and font sizes use cqw
 * (% of canvas width) so the whole slide scales proportionally at any
 * viewport width, exactly like the source design.
 *
 * Layout map (x% of 1424, y% of 860):
 *  - top-center star ............ x 50%,   y 25.3%
 *  - name "Srishti Jain" ........ y 27.3% (bounds x 465-952, y 235-367)
 *  - flanking lines ............. y 29%,   left x 20-30%, right x 70-80%
 *  - title "portfolio" .......... y 43.3% (bounds x 104-1318, y 372-711)
 *  - left-center star pair ...... x 3.5-6%, y 50%
 *  - center-left small star ..... x 30%,   y 62%
 *  - upper-right large star ..... x 81%,   y 47%
 *  - lower-left large star ...... x 12%,   y 71%
 *  - lower-right star ........... x 79%,   y 76%
 *  - subtitle ................... y 87%   (bounds x 400-1007, y 748-800)
 *  - bottom sparkle + lines ..... y 94.5%
 */
export const TitleCoverSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className='w-full bg-[var(--c-warm)]' aria-label='Srishti Jain portfolio cover'>
      <div
        className='relative w-full overflow-hidden'
        style={{ aspectRatio: '1424 / 860', containerType: 'inline-size' }}
      >
        {/* --- Orbital curve: thin white line sweeping from the left side
               around the portfolio lettering toward the upper-right --- */}
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1424 860'
          fill='none'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <motion.path
            d='M -40 560 C 250 300, 620 240, 900 330 C 1120 405, 1310 330, 1470 235'
            style={{ stroke: 'var(--c-bg)' }}
            strokeWidth='2.5'
            strokeLinecap='round'
            opacity='0.85'
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          />
        </svg>

        {/* ===== Name — top-center ===== */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className='absolute left-1/2 -translate-x-1/2 font-hand text-[var(--c-ink)] whitespace-nowrap'
          style={{ top: '32.5%', fontSize: 'clamp(2.75rem, 10.5cqw, 9.5rem)', lineHeight: 1 }}
        >
          Srishti Jain
        </motion.p>

        {/* Thin dark purple horizontal lines flanking the name (upper-left / upper-right) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.9, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className='absolute h-px bg-[var(--c-bg)] origin-right'
          style={{ top: '35%', left: '20%', width: '10%' }}
        />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.9, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className='absolute h-px bg-[var(--c-bg)] origin-left'
          style={{ top: '35%', left: '70%', width: '10%' }}
        />

        {/* Small dark purple sparkle — top-center above name */}
        <SparkleStar size='1.15cqw' color='var(--c-bg)' delay={0.45} style={{ left: '49.4%', top: '30.6%' }} />

        {/* ===== Title — center ===== */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className='absolute left-1/2 -translate-x-1/2 font-body font-extrabold text-[var(--c-bg)] lowercase whitespace-nowrap'
          style={{ top: '42.2%', fontSize: 'clamp(3.5rem, 23.8cqw, 16rem)', lineHeight: 1, letterSpacing: '-0.02em' }}
        >
          portfolio
        </motion.p>

        {/* Left-center: large white sparkle with a smaller sparkle beside it */}
        <SparkleStar size='2.3cqw' color='var(--c-bg)' delay={0.6} style={{ left: '3.5%', top: '48.5%' }} />
        <SparkleStar size='0.85cqw' color='var(--c-bg)' delay={0.65} style={{ left: '6.6%', top: '47.5%' }} />

        {/* Center-left over portfolio lettering: small white sparkle */}
        <SparkleStar size='0.95cqw' color='var(--c-bg)' delay={0.7} style={{ left: '30%', top: '61.5%' }} />

        {/* Upper-right near portfolio lettering: large white sparkle */}
        <SparkleStar size='2.1cqw' color='var(--c-bg)' delay={0.75} style={{ left: '81%', top: '46.5%' }} />

        {/* Lower-left over portfolio lettering: large white sparkle */}
        <SparkleStar size='2.5cqw' color='var(--c-bg)' delay={0.8} style={{ left: '12%', top: '70.5%' }} />

        {/* Lower-right over portfolio lettering: white sparkle */}
        <SparkleStar size='1.2cqw' color='var(--c-bg)' delay={0.85} style={{ left: '79%', top: '75.5%' }} />

        {/* ===== Subtitle — bottom-center beneath title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='absolute left-1/2 -translate-x-1/2 text-center font-body uppercase text-[var(--c-ink)] whitespace-nowrap'
          style={{ top: '87.5%', fontSize: 'clamp(0.75rem, 1cqw, 1rem)', lineHeight: 1.6, letterSpacing: 'clamp(0.08em, 0.26em, 0.26em)' }}
        >
          Masters in Fashion and Lifestyle
          <br />
          Business Management
        </motion.div>

        {/* Bottom-center: dark purple sparkle between two horizontal lines */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className='absolute left-1/2 -translate-x-1/2 flex items-center'
          style={{ top: '94.2%', gap: '1.4cqw' }}
        >
          <div className='h-px bg-[var(--c-bg)]' style={{ width: '6cqw', opacity: 0.9 }} />
          <SparkleStar size='1.3cqw' color='var(--c-bg)' className='!relative' delay={1.1} />
          <div className='h-px bg-[var(--c-bg)]' style={{ width: '6cqw', opacity: 0.9 }} />
        </motion.div>
      </div>
    </section>
  );
};
