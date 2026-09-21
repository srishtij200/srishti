import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, Pin, CheckCircle2, Bookmark } from 'lucide-react';
import { FlowerMark, HandDrawnArrow, HandDrawnStar, WashiTape, PaperClip } from './CustomDoodles';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  const scrollToExplore = () => {
    const el = document.getElementById('chaos-to-creativity');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-graph-paper">
      {/* Editorial Decorative Stamps & Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center text-[11px] font-mono-code text-[var(--c-ink)]/50 pb-6 border-b border-[var(--c-ink)]/10 mb-10">
          <span>ISSUE NO. 01 — SPRING EDITION</span>
          <span className="hidden sm:inline">CURATED THOUGHT APPARATUS</span>
          <span>FOLIO / 001–088</span>
        </div>

        {/* Centered Editorial Composition */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center relative z-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code tracking-widest uppercase text-[var(--c-ink)] mb-6 paper-shadow-sm"
          >
            <FlowerMark size={14} />
            <span>A NEW WAY TO WORK WITH YOUR IDEAS</span>
          </motion.div>

          {/* Headline with Instrument Serif typography and soft pink highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-display text-5xl sm:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-[var(--c-ink)] max-w-4xl mb-6"
          >
            Give your ideas a glow up. Meet your new{' '}
            <span className="relative inline-block whitespace-nowrap">
              {/* Soft pink handwritten/marker-style highlight background */}
              <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[var(--c-warm)] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[var(--c-ink)]/20" />
              <span className="relative z-10 italic font-serif-display font-normal">
                AI creative collaborator.
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono-code text-sm sm:text-base text-[var(--c-ink)]/80 max-w-[540px] leading-relaxed mb-9"
          >
            Capture, organize, and elevate your ideas across work, life, and leisure. An infinite desk for your curious mind.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-primary-cta"
              onClick={onOpenWaitlist}
              className="flex items-center gap-3 bg-[var(--c-highlight)] text-[var(--c-ink)] border-[1.5px] border-[var(--c-ink)] px-8 py-3.5 rounded-full font-mono-code text-sm uppercase tracking-wider font-bold paper-shadow hover:translate-y-[-2px] hover:paper-shadow-lg active:translate-y-[1px] transition-all cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-[var(--c-ink)] group-hover:rotate-12 transition-transform" />
              <span>Join the Waitlist</span>
            </button>

            <button
              onClick={scrollToExplore}
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-[var(--c-ink)] hover:text-[var(--c-ink)] border-b border-[var(--c-ink)] pb-0.5 hover:border-[var(--c-ink)]/40 transition-colors group cursor-pointer"
            >
              <span>See how it works</span>
              <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* LAYERED EDITORIAL DESK COLLAGE */}
        <div className="relative mt-14 lg:mt-20 max-w-6xl mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] border border-[var(--c-ink)]/15 rounded-3xl p-4 sm:p-8 bg-[#FBFBFA]/60 relative z-10 overflow-hidden">
          {/* Subtle desk background coordinates */}
          <div className="absolute top-4 left-6 font-mono-code text-[10px] text-[var(--c-ink)]/40 flex items-center gap-3">
            <span>STAGE: DESK 01</span>
            <span>•</span>
            <span>LAYER: 12 OBJECTS PINNED</span>
          </div>

          <div className="absolute top-4 right-6 font-hand text-lg text-[var(--c-ink)]/60 -rotate-2">
            "Everything begins as a scribble"
          </div>

          {/* 1. Main Digital Canvas Mockup (Center-Right Anchor) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[680px] bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 sm:p-6 paper-shadow-lg mx-auto lg:ml-auto lg:mr-8 relative z-20 mt-4 lg:mt-6"
          >
            {/* Top window bar */}
            <div className="flex items-center justify-between border-b border-[var(--c-ink)]/15 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--c-ink)] bg-[var(--c-warm)]" />
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--c-ink)] bg-[#F8DD65]" />
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--c-ink)] bg-[var(--c-highlight)]" />
                <span className="font-mono-code text-xs text-[var(--c-ink)]/70 ml-2 font-medium">
                  curio://workspace/nordic-lighting-study.canvas
                </span>
              </div>
              <span className="bg-[var(--c-highlight)] text-[var(--c-ink)] border border-[var(--c-ink)] text-[10px] font-mono-code px-2 py-0.5 rounded-full font-bold">
                AI SYNCING
              </span>
            </div>

            {/* Inner workspace blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              {/* Left Column in mockup */}
              <div className="sm:col-span-7 space-y-3">
                <div className="p-3.5 bg-[var(--c-bg)] border border-[var(--c-ink)]/40 rounded-xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--c-ink)]/60">
                      RAW VOICE THOUGHT (11:42 PM)
                    </span>
                    <span className="text-[10px] font-mono-code bg-[var(--c-warm)] px-1.5 py-0.5 rounded border border-[var(--c-ink)]/30">
                      AUDIO
                    </span>
                  </div>
                  <p className="font-serif-display text-lg text-[var(--c-ink)] italic leading-snug">
                    "What if lighting fixtures aged like brass instruments? Instead of lacquered perfection, patinas that tell stories of touch..."
                  </p>
                </div>

                <div className="p-3.5 bg-[var(--c-soft)]/20 border border-[var(--c-ink)]/40 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1 text-xs font-mono-code text-[var(--c-ink)] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                    <span>CURIO SYNTHESIS & CONNECTIONS</span>
                  </div>
                  <p className="font-body text-xs text-[var(--c-ink)]/80 leading-relaxed">
                    Identified connection with your Kyoto lacquerware bookmark (Nov 2) and Nordic tallow wax study. Suggesting material test matrix:
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] font-mono-code px-2 py-0.5 bg-[#FFFFFF] border border-[var(--c-ink)]/30 rounded">
                      #brass-patina
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 bg-[#FFFFFF] border border-[var(--c-ink)]/30 rounded">
                      #wabi-sabi
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 bg-[var(--c-highlight)] border border-[var(--c-ink)]/40 rounded">
                      #q2-prototype
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column in mockup */}
              <div className="sm:col-span-5 space-y-2.5">
                <div className="border border-[var(--c-ink)]/30 rounded-xl overflow-hidden bg-[#FFFFFF] p-2">
                  <div className="h-28 bg-[#EAE8DD] rounded-lg overflow-hidden relative">
                    <img
                      src="/src/assets/images/curated_moodboard_art_1789788458713.jpg"
                      alt="Curated moodboard art"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 font-mono-code text-[9px] bg-[var(--c-ink)] text-[#FFFFFF] px-1.5 py-0.5 rounded">
                      FIG. 4A
                    </span>
                  </div>
                  <div className="mt-2 text-left">
                    <span className="text-[10px] font-mono-code text-[var(--c-ink)]/60">MATTE CERAMIC TONE</span>
                    <p className="font-mono-code text-[11px] text-[var(--c-ink)] font-bold">Stoneware Glaze #7</p>
                  </div>
                </div>

                <div className="p-2.5 bg-[#F8DD65]/30 border border-[var(--c-ink)]/40 rounded-xl text-left">
                  <span className="text-[10px] font-mono-code uppercase text-[var(--c-ink)]/60 block mb-1">
                    ACTION NEXT
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--c-ink)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Order 3 test blanks from foundry</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Overlapping Notebook-Style Card (Left / -3 deg rotation) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block absolute top-12 left-6 w-80 bg-[#FFFDF7] border-[1.5px] border-[var(--c-ink)] rounded-xl p-5 paper-shadow -rotate-2 z-30"
          >
            {/* Washi tape header */}
            <div className="absolute -top-3 left-8">
              <WashiTape color="#AFC8FF" width="w-20" />
            </div>

            <div className="flex items-center justify-between text-xs font-mono-code text-[var(--c-ink)]/60 mb-2 pt-1 border-b border-[var(--c-ink)]/20 pb-1.5">
              <span>FIELD NOTES // 04</span>
              <span>PARIS / NOV 12</span>
            </div>

            <h4 className="font-serif-display text-2xl text-[var(--c-ink)] leading-tight mb-2">
              The Architecture of Waiting Rooms
            </h4>

            {/* Ruled lines pattern */}
            <div className="space-y-2 border-t border-b border-dashed border-[var(--c-ink)]/25 py-2.5 my-2">
              <p className="font-mono-code text-xs text-[var(--c-ink)]/80">
                • Why are transit hubs so loud?
              </p>
              <p className="font-mono-code text-xs text-[var(--c-ink)]/80">
                • Idea: Soft acoustic partitions made of recycled paper pulp
              </p>
              <p className="font-mono-code text-xs text-[var(--c-ink)]/80">
                • Book recommendation: In Praise of Shadows
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-hand text-lg text-emerald-800 rotate-1">
                ★ Approved by curator
              </span>
              <span className="text-[10px] font-mono-code bg-[#C7B8FF] px-2 py-0.5 rounded border border-[var(--c-ink)]">
                ESSAY DRAFT
              </span>
            </div>
          </motion.div>

          {/* 3. Sticky Note Prompt (Top Right overlap / +2 deg rotation) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:block absolute -top-4 right-12 w-64 bg-[#F8DD65] border-[1.5px] border-[var(--c-ink)] p-4 rounded-lg paper-shadow rotate-2 z-30"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Pin className="w-3.5 h-3.5 text-[var(--c-ink)]" />
              <span className="font-mono-code text-[10px] uppercase tracking-wider font-bold">
                STICKY PROMPT
              </span>
            </div>
            <p className="font-hand text-xl leading-tight text-[var(--c-ink)]">
              "What if we made the catalog feel like a 1970s library card index?"
            </p>
            <div className="mt-3 text-right">
              <span className="font-mono-code text-[10px] bg-[#FFFFFF] border border-[var(--c-ink)] px-2 py-0.5 rounded">
                CURIO REPLIED: YES
              </span>
            </div>
          </motion.div>

          {/* 4. Small Polaroid Photo Artifact (Bottom Left overlap / +3 deg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden sm:block absolute bottom-6 left-12 w-64 bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] p-3 pb-4 paper-shadow rotate-3 z-30"
          >
            <div className="relative">
              <div className="h-32 bg-[#E9E7DC] border border-[var(--c-ink)]/30 rounded overflow-hidden">
                <img
                  src="/src/assets/images/creative_chaos_collage_1789788411014.jpg"
                  alt="Surreal creativity study"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1 right-1">
                <PaperClip className="w-5 h-8 text-[var(--c-ink)]" />
              </div>
            </div>
            <div className="mt-2.5 flex justify-between items-center">
              <span className="font-hand text-lg text-[var(--c-ink)]">
                Mind collage study #01
              </span>
              <span className="font-mono-code text-[10px] text-[var(--c-ink)]/50">
                1:1 SCALE
              </span>
            </div>
          </motion.div>

          {/* 5. Handwritten Directional Arrow & Label */}
          <div className="hidden lg:block absolute bottom-12 right-24 z-30 pointer-events-none">
            <div className="flex items-center gap-2">
              <HandDrawnArrow direction="curved-left" className="w-16 h-10 text-[var(--c-ink)]" />
              <div className="font-hand text-xl text-[var(--c-ink)] -rotate-3 bg-[var(--c-warm)]/40 px-2 py-1 rounded">
                infinite zoom + canvas
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Meta Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[var(--c-ink)]/70 border-t border-[var(--c-ink)]/15 pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <HandDrawnStar className="w-3.5 h-3.5 text-amber-600" />
              <span>Zero infinite loading spinners</span>
            </span>
            <span>•</span>
            <span>Local privacy by default</span>
            <span>•</span>
            <span>Paper tactile sensory layout</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="uppercase tracking-widest text-[10px]">Beta Batch 04 open for enrolment</span>
          </div>
        </div>
      </div>
    </section>
  );
};
