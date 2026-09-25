import React from 'react';
import { motion, MotionConfig } from 'motion/react';
import { Heart, Search } from 'lucide-react';
import { FlowerMark } from '../components/CustomDoodles';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { portfolioData } from '../data/portfolioData';

const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-44 sm:w-52 shrink-0 aspect-[391/800] drop-shadow-[0_18px_22px_rgba(60,63,58,0.35)]">
    <div className="absolute inset-x-[4.5%] inset-y-[3%] rounded-[1.6rem] overflow-hidden bg-[var(--c-bg)]">
      {children}
    </div>
    <img
      src="/portfolio-assets/internship/iphone-15-pro.png"
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  </div>
);

const LaptopFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-full aspect-[800/489] drop-shadow-[0_18px_24px_rgba(60,63,58,0.3)]">
    <div className="absolute inset-x-[11.8%] top-[4.5%] bottom-[15.5%] rounded-[4px] overflow-hidden bg-[var(--c-bg)]">
      {children}
    </div>
    <img
      src="/portfolio-assets/internship/macbook-pro-16.png"
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  </div>
);

const profileTints = [
  "bg-[var(--c-warm-light)] border border-[var(--c-ink)]/10",
  "bg-[var(--c-soft-light)] border border-[var(--c-ink)]/10",
  "bg-[var(--c-highlight-light)] border border-[var(--c-ink)]/10"
];

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;
  const ui = portfolioData.ui.internshipExperience;
  const sm = internship.page1SocialMedia.showcase;
  const es = internship.page2Ecommerce.showcase;


  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-[var(--c-bg)] min-h-screen">
      {/* PAGE 1 — HEADER — full-bleed editorial hero */}
      <div className="relative bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 overflow-hidden">
        {sm.headerImage && (
          <img
            src={sm.headerImage}
            alt="Luxury gold jewellery still life for Aadiya Jewels"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-5 mb-6">
              <span className="font-mono-code text-xs uppercase tracking-[0.35em] text-[var(--c-ink)]/70">
                {ui.heroEyebrow}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="h-px w-24 bg-[var(--c-ink)]/30 origin-left"
              />
            </div>

            <h1 className="font-serif-display uppercase text-5xl sm:text-6xl lg:text-7xl text-[var(--c-ink)] leading-[1.02] tracking-wide mb-5">
              {ui.heroTitle}
            </h1>

            <div className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--c-ink)] font-bold">
              {ui.heroSubtitle}
            </div>

            <p className="font-serif-display italic text-lg sm:text-xl text-[var(--c-ink)]/85 leading-relaxed mt-6 max-w-xl">
              {ui.heroDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION 1: PAGE 1 — SOCIAL MEDIA SHOWCASE — cream band */}
      <section id="social-media" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Section title row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-3"
          >
            <h2 className="font-serif-display uppercase text-3xl sm:text-5xl text-[var(--c-ink)] tracking-wide whitespace-nowrap">
              {ui.sectionSocialTitle}
            </h2>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px flex-1 bg-[var(--c-ink)]/25 origin-left"
            />
          </motion.div>
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-12">
            <h3 className="font-serif-display text-xl sm:text-2xl text-[var(--c-ink)]">
              {ui.contentCreationLabel}
            </h3>
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--c-ink)]/60">
              {ui.formatsLabel}
            </span>
          </div>

          {/* Three-part composition: reel phone — 2x2 grid — profile phone */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12"
          >
            {/* Left: reel mockup — real video when available, still otherwise */}
            <PhoneFrame>
              <div className="relative h-full">
                {sm.reelVideo ? (
                  <video
                    src={sm.reelVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover scale-110"
                  />
                ) : (
                  <PlaceholderImage
                    src={sm.reelImage}
                    alt="Instagram reel shot for Aadiya Jewels"
                    label="Reel"
                    aspect="aspect-[9/19]"
                  />
                )}
              </div>
            </PhoneFrame>

            {/* Center: 2x2 content grid */}
            <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
              {sm.tiles.map((tile, tIdx) => (
                <motion.div
                  key={tIdx}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: 0.2 + tIdx * 0.08 }}
                  className="group relative rounded-lg overflow-hidden transition-shadow duration-300 hover:paper-shadow"
                >
                  <PlaceholderImage
                    src={tile.image}
                    alt={tile.overlay}
                    label="Post"
                    aspect="aspect-square"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: profile grid mockup — real screenshot when available */}
            <PhoneFrame>
              {sm.profileImage ? (
                <img
                  src={sm.profileImage}
                  alt="Aadiya Jewels social media profile on mobile"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center scale-110"
                />
              ) : (
              <div className="h-full px-3 py-3 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--c-warm-light)] border border-[var(--c-ink)]/30 flex items-center justify-center">
                    <FlowerMark size={14} />
                  </div>
                  <div>
                    <div className="font-mono-code text-[10px] font-bold text-[var(--c-ink)]">
                      {ui.profileHandle}
                    </div>
                    <div className="font-mono-code text-[8px] uppercase tracking-widest text-[var(--c-ink)]/55">
                      {ui.profileTagline}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-1 flex-1">
                  {Array.from({ length: 9 }).map((_, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: 0.3 + pIdx * 0.04 }}
                      className={`rounded-sm ${profileTints[pIdx % profileTints.length]}`}
                    />
                  ))}
                </div>
              </div>
              )}
            </PhoneFrame>
          </motion.div>

          {/* Bottom caption */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-16 text-center"
          >
            <div className="group inline-flex items-center gap-3 bg-[var(--c-warm-light)] border border-[var(--c-warm)] rounded-full px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:paper-shadow cursor-default">
              <p className="font-serif-display italic text-base sm:text-lg text-[var(--c-ink)]">
                {ui.socialCaption}
              </p>
              <Heart className="w-4 h-4 text-[var(--c-ink)]/60 transition-transform duration-300 group-hover:scale-125" strokeWidth={1.5} />
            </div>
            <div className="absolute right-0 -bottom-4 hidden sm:block opacity-70">
              <FlowerMark size={26} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PAGE 2 — E-COMMERCE SHOWCASE — cream band */}
      <section id="ecommerce" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Header + botanical */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <h2 className="font-serif-display uppercase text-4xl sm:text-6xl text-[var(--c-ink)] leading-none tracking-tight">
              {ui.ecomTitle}
            </h2>
            <p className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]/85 mt-3">
              {ui.ecomSubtitle}
            </p>
            <div className="absolute right-0 top-0 hidden md:block opacity-70">
              <FlowerMark size={30} />
            </div>
          </motion.div>

          {/* Main showcase: laptop + description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-9 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <LaptopFrame>
                <div className="h-full flex flex-col bg-[#FBF8F0]">
                  {/* Site header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--c-ink)]/10">
                    <span className="font-serif-display text-xs tracking-[0.2em] text-[var(--c-ink)]">
                      {es.siteLogo}
                    </span>
                    <div className="flex items-center gap-3">
                      {es.siteNav.map((navItem) => (
                        <span key={navItem} className="font-mono-code text-[7px] tracking-[0.15em] text-[var(--c-ink)]/70">
                          {navItem}
                        </span>
                      ))}
                      <Search className="w-2.5 h-2.5 text-[var(--c-ink)]/70" />
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="relative flex-1">
                    {es.heroImage ? (
                      <img
                        src={es.heroImage}
                        alt="Aadiya Jewels website hero"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#B29B80]" />
                    )}
                    <div className="absolute inset-0 flex flex-col justify-center px-5">
                      <span className="mt-3 w-fit bg-white text-[#333333] font-mono-code text-[8px] tracking-[0.2em] px-3 py-1.5">
                        {es.heroCta}
                      </span>
                    </div>
                  </div>
                </div>
              </LaptopFrame>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="lg:col-span-5"
            >
              <p className="font-serif-display italic text-xl sm:text-2xl text-[var(--c-ink)]/80 leading-[1.35] lg:pt-6">
                {es.description}
              </p>
            </motion.div>
          </div>

          {/* Bottom interface cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Product uploads table */}
            <motion.img
              src={es.uploadsImage}
              alt="Shopify product uploads management table"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full h-auto rounded-md border border-[#DDD5C8] shadow-[0_2px_8px_rgba(80,70,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:paper-shadow cursor-default"
            />
            {/* Product detail */}
            <motion.img
              src={es.detail.image}
              alt={es.detail.name}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-auto rounded-md border border-[#DDD5C8] shadow-[0_2px_8px_rgba(80,70,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:paper-shadow cursor-default"
            />

            {/* Catalogue */}
            <motion.img
              src={es.catalogueImage}
              alt={es.catalogueTitle}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full h-auto rounded-md border border-[#DDD5C8] shadow-[0_2px_8px_rgba(80,70,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:paper-shadow cursor-default"
            />

          </div>
        </div>
      </section>
      {/* SECTION 4: LEARNING OUTCOMES (Consolidated) — dusty blue band + bottom navigation */}
      <section id="learning-outcomes" className="bg-[var(--c-bg)] border-b border-[var(--c-ink)]/15 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="relative">
            <div className="max-w-2xl mb-8">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2"
              >
                {ui.synthesisLabel}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]"
              >
                {ui.synthesisTitle}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {internship.learningOutcomes.map((lo, loIdx) => (
                <motion.div
                  key={lo.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: loIdx * 0.08 }}
                  className="group border-t border-[var(--c-ink)]/20 pt-4 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                >
                  <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase mb-1 transition-colors duration-300 group-hover:text-[var(--c-ink)]">
                    {lo.number} — {lo.title}
                  </div>
                  <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed pt-2">
                    {lo.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
    </MotionConfig>
  );
};
