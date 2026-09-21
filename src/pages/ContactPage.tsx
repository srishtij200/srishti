import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const { contact, student } = portfolioData;

  return (
    <div className="bg-[var(--c-bg)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[var(--c-ink)]/50 pb-4 border-b border-[var(--c-ink)]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[var(--c-ink)]">HOME</Link>
            <span>/</span>
            <span className="text-[var(--c-ink)] font-semibold">CORRESPONDENCE & INQUIRIES</span>
          </div>
          <span>STUDIO DISPATCH // {student.name.toUpperCase()}</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[var(--c-ink)] rounded-full text-xs font-mono-code uppercase tracking-widest text-[var(--c-ink)] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>STUDIO INTAKE & DIALOGUE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[var(--c-ink)] leading-[1.05] tracking-tight mb-4">
            Contact & Inquiries
          </h1>

          <p className="font-body text-base text-[var(--c-ink)]/85 leading-relaxed">
            Currently accepting opportunities in visual merchandising, fashion marketing, e-commerce styling, and creative direction. Feel free to send a note or request complete project catalogs.
          </p>
        </div>

        {/* Two-Column: Contact Information & Socials (Left) + Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 paper-shadow-lg relative">
              <div className="absolute -top-3 left-10">
                <WashiTape color="#C9FF8C" width="w-24" />
              </div>

              <div className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)]/60 mb-6 pb-2 border-b border-[var(--c-ink)]/10">
                Direct Correspondence
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--c-ink)]/60 uppercase mb-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>ELECTRONIC MAIL</span>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-serif-display text-2xl text-[var(--c-ink)] hover:underline underline-offset-4 decoration-[var(--c-highlight)]"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--c-ink)]/60 uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>LOCATION</span>
                  </div>
                  <p className="font-body text-sm text-[var(--c-ink)] leading-relaxed">
                    {contact.location}
                  </p>
                  <span className="font-mono-code text-[11px] text-[var(--c-ink)]/60 mt-1 block">
                    Available for on-site & remote projects
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--c-ink)]/60 uppercase mb-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>TELEPHONE & SIGNAL</span>
                  </div>
                  <p className="font-mono-code text-sm text-[var(--c-ink)]">
                    {contact.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-8 paper-shadow">
              <div className="font-mono-code text-xs font-bold uppercase text-[var(--c-ink)]/60 mb-4 pb-2 border-b border-[var(--c-ink)]/10">
                Digital Channels & Profiles
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                {contact.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[var(--c-bg)] hover:bg-[var(--c-ink)] hover:text-[var(--c-bg)] border border-[var(--c-ink)]/20 transition-all group"
                  >
                    <div>
                      <span className="font-bold block">{soc.name}</span>
                      <span className="text-[10px] opacity-70">{soc.handle}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[var(--c-ink)] rounded-3xl p-3 sm:p-4 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-28" />
              </div>
              <img
                src="/portfolio-assets/IMG_2187.jpg"
                alt="Srishti Jain — curated creative exploration"
                className="w-full h-[420px] lg:h-[560px] object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between px-3 pt-4 pb-1">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]/70">
                  <FlowerMark size={14} className="inline mr-1.5" />
                  CLOSER LOOK
                </span>
                <Link
                  to="/about"
                  className="text-xs font-mono-code text-[var(--c-ink)] hover:underline underline-offset-4 decoration-[var(--c-highlight)] decoration-2"
                >
                  More About Me →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
