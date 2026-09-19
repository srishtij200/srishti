import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { FlowerMark, WashiTape } from '../CustomDoodles';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact, student } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Visual Merchandising / Window Commission',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    const ticket = Math.floor(1000 + Math.random() * 9000);
    setTicketNumber(ticket);
    setSubmitted(true);
  };

  const renderMessageForm = () => {
    if (!submitted) {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FlowerMark size={20} />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#182018]/70">
              TRANSMISSION FORM
            </span>
          </div>

          <h3 className="font-serif-display text-3xl sm:text-4xl text-[#182018] mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono-code text-xs uppercase tracking-wider text-[#182018] mb-1.5">
                Your Name / Organization
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Brand Curator / Recruiter"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-xl px-4 py-3 font-mono-code text-sm text-[#182018] focus:outline-hidden focus:ring-2 focus:ring-[#C9FF8C]"
              />
            </div>

            <div>
              <label className="block font-mono-code text-xs uppercase tracking-wider text-[#182018] mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-xl px-4 py-3 font-mono-code text-sm text-[#182018] focus:outline-hidden focus:ring-2 focus:ring-[#C9FF8C]"
              />
            </div>

            <div>
              <label className="block font-mono-code text-xs uppercase tracking-wider text-[#182018] mb-1.5">
                Inquiry Category
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-xl px-4 py-3 font-mono-code text-xs text-[#182018] focus:outline-hidden focus:ring-2 focus:ring-[#C9FF8C]"
              >
                <option value="Visual Merchandising / Window Commission">Visual Merchandising / Window Commission</option>
                <option value="Brand Marketing / Campaign Strategy">Brand Marketing / Campaign Strategy</option>
                <option value="E-Commerce & Digital Merchandising">E-Commerce & Digital Merchandising</option>
                <option value="Full-Time / Freelance Role">Full-Time / Freelance Role</option>
                <option value="General Hello & Collaborative Chat">General Hello & Collaborative Chat</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-code text-xs uppercase tracking-wider text-[#182018] mb-1.5">
                Project Details / Inquiry Note
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about the role, project scope, timeline, or required deliverables..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-xl p-4 font-body text-sm text-[#182018] focus:outline-hidden focus:ring-2 focus:ring-[#C9FF8C]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#182018] text-[#F5F5ED] hover:bg-[#253325] border-[1.5px] border-[#182018] py-4 px-6 rounded-xl font-mono-code text-sm tracking-wider uppercase font-bold paper-shadow-hover transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Inquiry</span>
            </button>

            <p className="font-mono-code text-[11px] text-center text-[#182018]/60 pt-2">
              ✦ Srishti Jain will review your message and respond promptly within 24–48 hours.
            </p>
          </form>
        </div>
      );
    }

    return (
      <div className="py-8 text-center space-y-6">
        <div className="bg-[#F5F5ED] border-[1.5px] border-[#182018] rounded-2xl p-6 text-left paper-shadow relative overflow-hidden">
          <div className="flex justify-between items-start border-b border-[#182018]/20 pb-4 mb-4">
            <div>
              <div className="font-mono-code text-xs text-[#182018]/60 uppercase">
                STUDIO LOG TICKET
              </div>
              <div className="font-serif-display text-2xl text-[#182018]">
                Inquiry Dispatched
              </div>
            </div>
            <span className="bg-[#C9FF8C] border border-[#182018] px-3 py-1 rounded-full font-mono-code text-xs font-bold">
              #{ticketNumber}
            </span>
          </div>

          <div className="space-y-2 font-mono-code text-xs">
            <div className="flex justify-between">
              <span className="text-[#182018]/60">SENDER:</span>
              <span className="font-bold text-[#182018]">{formData.name || 'Anonymous'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#182018]/60">EMAIL:</span>
              <span className="font-bold text-[#182018]">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#182018]/60">NATURE:</span>
              <span className="text-[#182018]">{formData.inquiryType}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif-display text-2xl text-[#182018]">
            Thank you for reaching out.
          </h3>
          <p className="font-body text-sm text-[#182018]/80 max-w-md mx-auto">
            Your note has been received. Srishti Jain will review your message and reply promptly.
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', inquiryType: 'Visual Merchandising / Window Commission', message: '' });
          }}
          className="font-mono-code text-xs text-[#182018] underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
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

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFFFF] border-[1.5px] border-[#182018] rounded-3xl p-8 sm:p-12 paper-shadow-lg relative">
              <div className="absolute -top-3 right-12">
                <WashiTape color="#F4B6D4" width="w-28" />
              </div>
              {renderMessageForm()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};