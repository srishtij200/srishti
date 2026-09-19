import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { FlowerMark, WashiTape } from '../CustomDoodles';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-[#182018]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#182018]/60 mb-2">
              <FlowerMark className="w-3.5 h-3.5 text-[#182018]" />
              <span>CONTACT ME</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#182018]">
              Contact & Inquiries
            </h2>
          </motion.div>

          <Link
            to="/contact"
            className="mt-4 sm:mt-0 text-sm text-[#182018] hover:underline underline-offset-4 decoration-[#C9FF8C] decoration-2 flex items-center gap-1.5"
          >
            <span>Full Contact Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-base text-[#182018]/85 leading-relaxed max-w-3xl mb-14"
        >
          Currently accepting opportunities in visual merchandising, fashion marketing, e-commerce styling, and creative direction. Feel free to send a note or request complete project catalogs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Information Boxes */}
          <div className="contents">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 paper-shadow-lg relative"
            >
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
                    className="font-serif-display text-xl sm:text-2xl text-[#182018] hover:underline underline-offset-4 decoration-[#C9FF8C] break-all"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 paper-shadow"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};