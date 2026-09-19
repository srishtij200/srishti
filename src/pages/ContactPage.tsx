import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { FlowerMark, WashiTape } from '../components/CustomDoodles';
import { portfolioData } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const { contact, student } = portfolioData;

  return (
    <div className="bg-[#F5F5ED] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between font-mono-code text-xs text-[#182018]/50 pb-4 border-b border-[#182018]/10 mb-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#182018]">HOME</Link>
            <span>/</span>
            <span className="text-[#182018] font-semibold">CORRESPONDENCE & INQUIRIES</span>
          </div>
          <span>STUDIO DISPATCH // {student.name.toUpperCase()}</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#182018] rounded-full text-xs font-mono-code uppercase tracking-widest text-[#182018] mb-4 paper-shadow-sm">
            <FlowerMark size={14} />
            <span>STUDIO INTAKE & DIALOGUE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl text-[#182018] leading-[1.05] tracking-tight mb-4">
            Contact & Inquiries
          </h1>

          <p className="font-body text-base text-[#182018]/85 leading-relaxed">
            Currently accepting opportunities in visual merchandising, fashion marketing, e-commerce styling, and creative direction. Feel free to send a note or request complete project catalogs.
          </p>
        </div>

        {/* Two-Column: Contact Information & Socials (Left) + Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 paper-shadow-lg relative">
              <div className="absolute -top-3 left-10">
                <WashiTape color="#C9FF8C" width="w-24" />
              </div>

              <div className="font-mono-code text-xs font-bold uppercase text-[#182018]/60 mb-6 pb-2 border-b border-[#182018]/10">
                Direct Correspondence
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[#182018]/60 uppercase mb-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>ELECTRONIC MAIL</span>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-serif-display text-2xl text-[#182018] hover:underline underline-offset-4 decoration-[#C9FF8C]"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[#182018]/60 uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>LOCATION</span>
                  </div>
                  <p className="font-body text-sm text-[#182018] leading-relaxed">
                    {contact.location}
                  </p>
                  <span className="font-mono-code text-[11px] text-[#182018]/60 mt-1 block">
                    Available for on-site & remote projects
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[#182018]/60 uppercase mb-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>TELEPHONE & SIGNAL</span>
                  </div>
                  <p className="font-mono-code text-sm text-[#182018]">
                    {contact.phone}
                  </p>
                </div>

                <div className="p-4 bg-[#F5F5ED] rounded-xl border border-[#182018]/15 font-mono-code text-xs">
                  <div className="font-bold text-[#182018] uppercase text-[11px] mb-1">CURRENT STATUS:</div>
                  <p className="text-[#182018]/80">{contact.availability}</p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 paper-shadow">
              <div className="font-mono-code text-xs font-bold uppercase text-[#182018]/60 mb-4 pb-2 border-b border-[#182018]/10">
                Digital Channels & Profiles
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                {contact.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F5F5ED] hover:bg-[#182018] hover:text-[#F5F5ED] border border-[#182018]/20 transition-all group"
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
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-3 sm:p-4 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-28" />
              </div>
              <img
                src="/portfolio-assets/IMG_2187.jpg"
                alt="Srishti Jain — curated creative exploration"
                className="w-full h-[420px] lg:h-[560px] object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between px-3 pt-4 pb-1">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#182018]/70">
                  <FlowerMark size={14} className="inline mr-1.5" />
                  CLOSER LOOK
                </span>
                <Link
                  to="/about"
                  className="text-xs font-mono-code text-[#182018] hover:underline underline-offset-4 decoration-[#C9FF8C] decoration-2"
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
