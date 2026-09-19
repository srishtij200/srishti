import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Video, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Layers, Tag, Camera, Play, Image as ImageIcon } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const InternshipExperiencePage: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>FINE JEWELLERY BRAND INTERNSHIP</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#182018] leading-[1.05] tracking-tight mb-2">
            {internship.company}
          </h1>

          <div className="font-mono-code text-sm sm:text-base text-[#182018]/80 font-bold mb-4">
            {internship.role}
          </div>

          <p className="font-body text-base text-[#182018]/85 leading-relaxed max-w-3xl mb-8">
            {internship.overview}
          </p>

        </div>

        {/* SECTION 1: PAGE 1 — SOCIAL MEDIA */}
        <section id="social-media" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#182018]/15">
            <Video className="w-5 h-5 text-[#182018]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#182018]">
              Social Media
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#182018] mb-4">
                  Concept to Live Content Production
                </h2>
                <div className="p-4 bg-[#F5F5ED] rounded-2xl border border-[#182018]/20 font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed">
                  <strong>Short introduction:</strong> {internship.page1SocialMedia.intro}
                </div>
              </div>

              {/* Videos Callout Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF3B3] border border-[#182018] rounded-full text-xs font-mono-code font-bold text-[#182018] mb-8">
                <Camera className="w-3.5 h-3.5" />
                <span>VIDEOS & REEL PRODUCTION INCLUDED</span>
              </div>

              {/* REAL VIDEO MEDIA SHOWCASE (Reels & Studio Video) */}
              <div className="mb-12">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15 flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-[#182018]" />
                  <span>Video Content Production & Reels</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Video Reel 1 */}
                  <div className="md:col-span-5 bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
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
                    <div className="font-mono-code text-xs text-[#182018] font-bold">
                      Jewellery Reel 01 — Aesthetic & Product Styling
                    </div>
                    <p className="font-body text-xs text-[#182018]/70 mt-1">
                      Shot on set, edited, color graded and published for Aadiya Jewels social handle.
                    </p>
                  </div>

                  {/* Video Reel 2 */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
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
                      <div className="font-mono-code text-xs text-[#182018] font-bold">
                        Studio Campaign & Jewellery Showcase
                      </div>
                      <p className="font-body text-xs text-[#182018]/70 mt-1">
                        Highlighting brilliance, luxury finishes, and craftsmanship through video capture.
                      </p>
                    </div>

                    {/* On-set Photography Stills */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18.jpeg"
                          alt="Jewellery on-set photography"
                          className="w-full h-44 object-cover rounded-xl border border-[#182018]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[#182018]/70 block mt-2 px-1">
                          Macro Jewellery Styling
                        </span>
                      </div>
                      <div className="bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl p-2 paper-shadow-sm">
                        <img
                          src="/portfolio-assets/WhatsApp Image 2026-09-13 at 19.42.18 (1).jpeg"
                          alt="Product photography framing"
                          className="w-full h-44 object-cover rounded-xl border border-[#182018]/10"
                        />
                        <span className="font-mono-code text-[11px] text-[#182018]/70 block mt-2 px-1">
                          Product Photography Framing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On Grid */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  What I Worked On
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page1SocialMedia.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[#182018]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[#182018] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[#182018]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-3">
                  Skills Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page1SocialMedia.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[#F5F5ED] border border-[#182018]/30 rounded-xl font-mono-code text-xs text-[#182018] flex items-center gap-1.5"
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
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#182018]/15">
            <ShoppingBag className="w-5 h-5 text-[#182018]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#182018]">
              E-Commerce &amp; My Learning
            </h2>
          </div>
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#C9FF8C" width="w-28" />
              </div>

              <div className="max-w-3xl mb-8">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#182018] mb-4">
                  From Product to Digital Shelf
                </h2>
                <div className="p-4 bg-[#F5F5ED] rounded-2xl border border-[#182018]/20 font-body text-sm sm:text-base text-[#182018]/85 leading-relaxed">
                  <strong>Short introduction:</strong> {internship.page2Ecommerce.intro}
                </div>
              </div>

              {/* WEBSITE BANNERS MEDIA SHOWCASE */}
              <div className="mb-12 space-y-6">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] pb-2 border-b border-[#182018]/15 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[#182018]" />
                  <span>Website Banners & Storefront Visuals Designed for Aadiya Jewels</span>
                </div>

                <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 sm:p-6 paper-shadow">
                  <div className="rounded-xl overflow-hidden border border-[#182018]/20 mb-3 bg-white">
                    <img
                      src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.18 PM.png"
                      alt="Aadiya Jewels Desktop Website Hero Banner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono-code text-xs text-[#182018] pt-1">
                    <span className="font-bold">E-Commerce Desktop Hero Banner</span>
                    <span className="text-[#182018]/60">Designed for seasonal homepage campaign</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[#182018]/20 mb-3 bg-white">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.34.14 PM.png"
                        alt="Collection promotional banner"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[#182018]">
                      Jewellery Collection Category Banner
                    </div>
                  </div>

                  <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-4 paper-shadow">
                    <div className="rounded-xl overflow-hidden border border-[#182018]/20 mb-3 bg-white">
                      <img
                        src="/portfolio-assets/Screenshot 2026-09-13 at 6.31.58 PM.png"
                        alt="Shopify product listing layout"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="font-mono-code text-xs font-bold text-[#182018]">
                      Shopify Product Listing & Catalogue Management
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Worked On */}
              <div className="mb-10">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-4 pb-2 border-b border-[#182018]/15">
                  What I Worked On
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {internship.page2Ecommerce.whatIWorkedOn.map((item) => (
                    <div key={item.id} className="p-5 bg-[#F5F5ED] border border-[#182018]/20 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-code text-xs text-[#182018]/50 font-bold block mb-1">
                          {item.id}.
                        </span>
                        <h3 className="font-serif-display text-xl text-[#182018] mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs text-[#182018]/75 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#182018] mb-3">
                  Skills Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {internship.page2Ecommerce.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[#F5F5ED] border border-[#182018]/30 rounded-xl font-mono-code text-xs text-[#182018] flex items-center gap-1.5"
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

        {/* SECTION 3: LEARNING OUTCOMES (Consolidated) */}
        <section id="learning-outcomes" className="scroll-mt-24 mb-16">
          <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="font-mono-code text-xs font-bold text-[#182018]/60 uppercase tracking-widest block mb-2">
              SYNTHESIS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#182018]">
              LEARNING OUTCOME
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internship.learningOutcomes.map((lo) => (
              <div key={lo.number} className="p-6 bg-[#F5F5ED] border border-[#182018]/25 rounded-2xl">
                <div className="font-mono-code text-xs font-bold text-[#182018] uppercase mb-1">
                  {lo.number} — {lo.title}
                </div>
                <p className="font-body text-sm text-[#182018]/85 leading-relaxed pt-2">
                  {lo.desc}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-2xl gap-4">
          <div>
            <div className="font-mono-code text-xs uppercase text-[#182018]/60">NEXT PROJECT</div>
            <div className="font-serif-display text-2xl text-[#182018]">Project 1 — Marketing (UNIQLO)</div>
          </div>
          <Link
            to="/projects/marketing"
            className="flex items-center gap-2 px-6 py-3 bg-[#182018] text-[#F5F5ED] rounded-xl font-mono-code text-xs uppercase tracking-wider hover:bg-[#253325] transition-colors"
          >
            <span>View UNIQLO Fragrance Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
