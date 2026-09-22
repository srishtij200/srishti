import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Video, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Layers, Tag, Camera, Play, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;
  const ui = portfolioData.ui.internshipExperience;

  const internshipLearnings = ui.learnings;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>{ui.badge}</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-2">
            {internship.company}
          </h1>

          <div className="font-mono-code text-sm sm:text-base text-[var(--c-ink)]/80 font-bold mb-4">
            {internship.role}
          </div>

          <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed max-w-3xl mb-8">
            {internship.overview}
          </p>

        </div>

        {/* SECTION 1: PAGE 1 — SOCIAL MEDIA */}
        <section id="social-media" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--c-ink)]/15">
            <Video className="w-5 h-5 text-[var(--c-ink)]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]">
              {ui.sectionSocialTitle}
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] mb-4">
                  {ui.socialIntroTitle}
                </h2>
                <div className="p-4 bg-[var(--c-bg)] rounded-2xl border border-[var(--c-ink)]/20 font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                  <strong>{ui.introPrefix}</strong> {internship.page1SocialMedia.intro}
                </div>
              </div>

              {/* Videos Callout Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF3B3] border border-[var(--c-ink)] rounded-full text-xs font-mono-code font-bold text-[var(--c-ink)] mb-8">
                <Camera className="w-3.5 h-3.5" />
                <span>{ui.videosBadge}</span>
              </div>

              {/* REAL VIDEO MEDIA SHOWCASE (Reels & Studio Video) */}
              <div className="mb-12">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15 flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                  <span>{ui.videosHeader}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Video Reel 1 */}
                  <div className="md:col-span-5 bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 paper-shadow">
                    <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden relative shadow-inner mb-3 max-h-[520px] mx-auto">
                      <video
                        src="/portfolio-assets/f54639f8-2182-461e-bc6b-63ce3787f763.mp4"
                        controls
                        playsInline
                        loop
                        muted
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs text-[var(--c-ink)] font-bold">
                      {ui.reel1Title}
                    </div>
                    <p className="font-body text-xs text-[var(--c-ink)]/70 mt-1">
                      {ui.reel1Desc}
                    </p>
                  </div>

                  {/* Video Reel 2 */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 paper-shadow">
                      <div className="aspect-video bg-black rounded-xl overflow-hidden relative shadow-inner mb-3">
                        <video
                          src="/portfolio-assets/B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.mp4"
                          controls
                          playsInline
                          loop
                          muted
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-mono-code text-xs text-[var(--c-ink)] font-bold">
                        {ui.reel2Title}
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/70 mt-1">
                        {ui.reel2Desc}
                      </p>
                    </div>

                    {/* On-set Photography Stills */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
                          alt="Jewellery on-set photography"
                          className="w-full h-44 object-cover rounded-xl border border-[var(--c-ink)]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[var(--c-ink)]/70 block mt-2 px-1">
                          {ui.photoCaption1}
                        </span>
                      </div>
                      <div className="bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg"
                          alt="Product photography framing"
                          className="w-full h-44 object-cover rounded-xl border border-[var(--c-ink)]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[var(--c-ink)]/70 block mt-2 px-1">
                          {ui.photoCaption2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On Grid */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {ui.workedOnLabel}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page1SocialMedia.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[var(--c-ink)]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-3">
                  {ui.skillsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page1SocialMedia.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[var(--c-bg)] border border-[var(--c-ink)]/30 rounded-xl font-mono-code text-xs text-[var(--c-ink)] flex items-center gap-1.5"
                    >
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAGE 2 — E-COMMERCE */}
        <section id="ecommerce" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--c-ink)]/15">
            <ShoppingBag className="w-5 h-5 text-[var(--c-ink)]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--c-ink)]">
              {ui.sectionEcomTitle}
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#C9FF8C" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)] mb-4">
                  {ui.ecomIntroTitle}
                </h2>
                <div className="p-4 bg-[var(--c-bg)] rounded-2xl border border-[var(--c-ink)]/20 font-body text-sm sm:text-base text-[var(--c-ink)]/85 leading-relaxed">
                  <strong>{ui.introPrefix}</strong> {internship.page2Ecommerce.intro}
                </div>
              </div>

              {/* WEBSITE BANNERS MEDIA SHOWCASE */}
              <div className="mb-12 space-y-6">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] pb-2 border-b border-[var(--c-ink)]/15 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[var(--c-ink)]" />
                  <span>{ui.bannersHeader}</span>
                </div>

                <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 sm:p-6 paper-shadow">
                  <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 mb-3 bg-white">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.18 PM.png"
                      alt="Aadiya Jewels Desktop Website Hero Banner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono-code text-xs text-[var(--c-ink)] pt-1">
                    <span className="font-bold">{ui.banner1Title}</span>
                    <span className="text-[var(--c-ink)]/60">{ui.banner1Desc}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 mb-3 bg-white">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.34.14 PM.png"
                        alt="Collection promotional banner"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                      {ui.banner2Title}
                    </div>
                  </div>

                  <div className="bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[var(--c-ink)]/20 mb-3 bg-white">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.58 PM.png"
                        alt="Shopify product listing layout"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[var(--c-ink)]">
                      {ui.banner3Title}
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-4 pb-2 border-b border-[var(--c-ink)]/15">
                  {ui.workedOnLabel}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page2Ecommerce.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[var(--c-bg)] border border-[var(--c-ink)]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[var(--c-ink)]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[var(--c-ink)] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[var(--c-ink)]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--c-ink)] mb-3">
                  {ui.skillsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page2Ecommerce.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[var(--c-bg)] border border-[var(--c-ink)]/30 rounded-xl font-mono-code text-xs text-[var(--c-ink)] flex items-center gap-1.5"
                    >
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LEARNINGS OF INTERNSHIP */}
        <section id="internship-learnings" className="scroll-mt-24 mb-16">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg">
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
                {ui.learningsLabel}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
                {ui.learningsTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {internshipLearnings.map((l, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-2xl">
                  <span className="font-mono-code text-sm font-bold text-[var(--c-ink)] bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-mono-code text-xs sm:text-sm font-bold text-[var(--c-ink)] uppercase mb-1">
                      {l.title}
                    </div>
                    <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: LEARNING OUTCOMES (Consolidated) */}
        <section id="learning-outcomes" className="scroll-mt-24 mb-16">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 sm:p-12 paper-shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="font-mono-code text-xs font-bold text-[var(--c-ink)]/60 uppercase tracking-widest block mb-2">
              {ui.synthesisLabel}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--c-ink)]">
              {ui.synthesisTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internship.learningOutcomes.map((lo) => (
              <div key={lo.number} className="p-6 bg-[var(--c-bg)] border border-[var(--c-ink)]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold text-[var(--c-ink)] uppercase mb-1">
                  {lo.number} — {lo.title}
                </div>
                <p className="font-body text-sm text-[var(--c-ink)]/85 leading-relaxed pt-2">
                  {lo.desc}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[var(--c-ink)]/60">{ui.nextLabel}</div>
            <div className="font-serif-display text-2xl text-[var(--c-ink)]">{ui.nextTitle}</div>
          </div>
          <Link
            to="/projects/marketing"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#253325] transition-colors"
          >
            <span>{ui.nextCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
