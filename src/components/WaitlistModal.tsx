import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Sparkles, ArrowRight } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape } from './CustomDoodles';
import { WaitlistSubmission } from '../types';
import { portfolioData } from '../data/portfolioData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, initialRole = portfolioData.ui.waitlist.roles[0] }) => {
  const w = portfolioData.ui.waitlist;
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(initialRole);
  const [submitted, setSubmitted] = useState<WaitlistSubmission | null>(() => {
    try {
      const saved = localStorage.getItem('aria_portfolio_inquiry_ticket');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newSubmission: WaitlistSubmission = {
        email: email.trim(),
        role,
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        ticketNumber: Math.floor(1000 + Math.random() * 9000),
      };
      setSubmitted(newSubmission);
      try {
        localStorage.setItem('aria_portfolio_inquiry_ticket', JSON.stringify(newSubmission));
      } catch {
        // ignore
      }
      setIsSubmitting(false);
    }, 600);
  };

  const copyTicket = () => {
    if (!submitted) return;
    navigator.clipboard.writeText(`STUDIO-INQUIRY-PASS-#${submitted.ticketNumber} (${submitted.email})`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with faint paper blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--c-ink)]/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-2xl p-6 sm:p-8 paper-shadow-lg z-10 overflow-hidden"
          >
            {/* Washi tape decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape color="#C9A0A4" width="w-28" />
            </div>

            {/* Close button */}
            <button
              id="close-waitlist-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-[var(--c-ink)]/30 hover:border-[var(--c-ink)] hover:bg-[var(--c-ink)]/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-[var(--c-ink)]" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlowerMark size={22} />
                  <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]/70">
                    {w.eyebrow}
                  </span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl leading-tight text-[var(--c-ink)] mb-3">
                  {w.title}
                </h3>

                <p className="font-body text-sm text-[var(--c-ink)]/80 leading-relaxed mb-6">
                  {w.intro}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono-code text-xs uppercase tracking-wider text-[var(--c-ink)] mb-1.5">
                      {w.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={w.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-xl px-4 py-3 font-mono-code text-sm text-[var(--c-ink)] placeholder-[var(--c-ink)]/40 focus:outline-hidden focus:ring-2 focus:ring-[var(--c-highlight)]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs uppercase tracking-wider text-[var(--c-ink)] mb-1.5">
                      {w.roleLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {w.roles.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`py-2 px-2 text-xs font-mono-code rounded-lg border-[1.5px] transition-all text-center leading-tight ${
                            role === r
                              ? 'bg-[var(--c-highlight)] border-[var(--c-ink)] font-bold paper-shadow-sm'
                              : 'bg-transparent border-[var(--c-ink)]/40 hover:border-[var(--c-ink)] text-[var(--c-ink)]/80'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[var(--c-ink)] text-[var(--c-bg)] hover:bg-[var(--c-ink-hover)] border-[1.5px] border-[var(--c-ink)] py-3.5 px-6 rounded-xl font-mono-code text-sm tracking-wider uppercase paper-shadow-hover transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{w.submitBusy}</span>
                      ) : (
                        <>
                          <span>{w.submitIdle}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-mono-code text-[11px] text-center text-[var(--c-ink)]/60 mt-3">
                    {w.footnote}
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-2">
                {/* Physical ticket look */}
                <div className="relative bg-[var(--c-bg)] border-[1.5px] border-[var(--c-ink)] rounded-xl p-6 mb-6 paper-shadow text-left overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[var(--c-highlight)]/30 border border-[var(--c-ink)]/10" />
                  
                  <div className="flex items-start justify-between border-b border-[var(--c-ink)]/20 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase text-[var(--c-ink)]/70">
                        <FlowerMark size={16} />
                        {portfolioData.student.name} {w.ticketBrand}
                      </div>
                      <div className="font-serif-display text-2xl text-[var(--c-ink)] mt-1">
                        {w.ticketReceived}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[var(--c-warm)] text-[var(--c-ink)] border border-[var(--c-ink)] px-2 py-0.5 rounded text-[11px] font-mono-code font-bold">
                        #{submitted.ticketNumber}
                      </span>
                      <div className="font-mono-code text-[10px] text-[var(--c-ink)]/60 mt-1">
                        {submitted.submittedAt}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono-code">
                    <div className="flex justify-between">
                      <span className="text-[var(--c-ink)]/60">{w.labelContact}</span>
                      <span className="font-bold text-[var(--c-ink)] truncate max-w-[200px]">{submitted.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--c-ink)]/60">{w.labelInquiryType}</span>
                      <span className="text-[var(--c-ink)]">{submitted.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--c-ink)]/60">{w.labelStatus}</span>
                      <span className="text-[var(--c-ink)] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#4F5B4A]" />
                        {w.statusQueued}
                      </span>
                    </div>
                  </div>

                  {/* Perforation line */}
                  <div className="border-t-2 border-dashed border-[var(--c-ink)]/30 mt-4 pt-3 flex justify-between items-center text-[10px] font-mono-code text-[var(--c-ink)]/50">
                    <span>{w.dossierPass}</span>
                    <span>{w.cityTag}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[var(--c-highlight)]" />
                  <span className="font-serif-display text-xl text-[var(--c-ink)]">{w.loggedTitle}</span>
                </div>
                <p className="font-body text-xs text-[var(--c-ink)]/80 max-w-sm mx-auto mb-6">
                  {w.thanks}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={copyTicket}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[var(--c-soft)] border border-[var(--c-ink)] rounded-lg text-xs font-mono-code text-[var(--c-ink)] paper-shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? w.copiedLabel : w.copyLabel}</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-transparent hover:bg-[var(--c-ink)]/5 border border-[var(--c-ink)]/40 rounded-lg text-xs font-mono-code text-[var(--c-ink)] transition-all cursor-pointer"
                  >
                    {w.closeLabel}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
