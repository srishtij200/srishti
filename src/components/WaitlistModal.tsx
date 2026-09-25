import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X, ArrowRight, Mail } from 'lucide-react';
import { FlowerMark, WashiTape } from './CustomDoodles';
import { portfolioData } from '../data/portfolioData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  initialRole = portfolioData.ui.waitlist.roles[0],
}) => {
  const w = portfolioData.ui.waitlist;
  const reduceMotion = useReducedMotion();
  const titleId = 'waitlist-modal-title';
  const descriptionId = 'waitlist-modal-description';
  const emailId = 'waitlist-email';
  const emailHintId = 'waitlist-email-hint';
  const errorId = 'waitlist-email-error';
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(initialRole);
  const [error, setError] = useState('');
  const [draftUrl, setDraftUrl] = useState('');

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setRole(initialRole);
      setError('');
      setDraftUrl('');
      return;
    }

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => firstFieldRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previousActiveElementRef.current?.focus();
    };
  }, [initialRole, isOpen]);

  useEffect(() => {
    if (draftUrl) successHeadingRef.current?.focus();
  }, [draftUrl]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onCloseRef.current();
      return;
    }
    if (event.key !== 'Tab' || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((element) => element.getClientRects().length > 0);
    if (focusable.length === 0) {
      event.preventDefault();
      dialogRef.current.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      setError('Enter your email address so it can be included in the draft.');
      firstFieldRef.current?.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError('Enter a valid email address, such as name@example.com.');
      firstFieldRef.current?.focus();
      return;
    }

    setError('');
    const subject = `${w.title} — ${role}`;
    const body = ['Hello,', '', `Please reply to: ${normalizedEmail}`, '', `Inquiry type: ${role}`, '', 'Message:', '', ''].join('\n');
    const nextDraftUrl = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftUrl(nextDraftUrl);
    window.location.assign(nextDraftUrl);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--c-ink)]/40 backdrop-blur-xs"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            onKeyDown={handleDialogKeyDown}
            initial={reduceMotion ? false : { scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { scale: 0.94, opacity: 0, y: 15 }}
            transition={reduceMotion ? { duration: 0 } : { type: 'spring', damping: 24, stiffness: 300 }}
            className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl border-[1.5px] border-[var(--c-ink)] bg-[var(--c-bg)] p-6 paper-shadow-lg sm:p-8"
          >
            <div aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape color="#C9A0A4" width="w-28" />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--c-ink)]/50 transition-colors hover:border-[var(--c-ink)] hover:bg-[var(--c-ink)]/5"
              aria-label="Close email draft dialog"
            >
              <X aria-hidden="true" className="h-4 w-4 text-[var(--c-ink)]" />
            </button>
            <p id={descriptionId} className="sr-only">
              {draftUrl
                ? `A prefilled email draft was prepared for ${portfolioData.contact.email}. Review and send it from your email app. Nothing was submitted or saved.`
                : `Create a prefilled email draft to ${portfolioData.contact.email}.`}
            </p>
            <p role="status" aria-live="polite" className="sr-only">
              {draftUrl ? `Email draft prepared for ${portfolioData.contact.email}. Nothing was submitted or saved.` : ''}
            </p>
            {draftUrl ? (
              <div className="pt-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Mail aria-hidden="true" className="h-5 w-5 text-[var(--c-ink)]" />
                  <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]">Email draft prepared</span>
                </div>
                <h2 ref={successHeadingRef} tabIndex={-1} className="font-serif-display text-3xl leading-tight text-[var(--c-ink)] sm:text-4xl">
                  Review and send it from your email app
                </h2>
                <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-[var(--c-ink)]">
                  A prefilled draft was prepared for{' '}
                  <a className="font-bold underline underline-offset-4" href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>.
                  Your email app may ask you to confirm the recipient before sending. Nothing is submitted or saved by this site.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href={draftUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--c-ink)] bg-[var(--c-ink)] px-4 py-2 font-mono-code text-xs text-[var(--c-bg)] paper-shadow-sm">
                    Open email draft
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                  <button type="button" onClick={onClose} className="min-h-11 rounded-lg border border-[var(--c-ink)]/60 px-4 py-2 font-mono-code text-xs text-[var(--c-ink)] transition-colors hover:bg-[var(--c-ink)]/5">Close</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <FlowerMark size={22} />
                  <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]">{w.eyebrow}</span>
                </div>
                <h2 id={titleId} className="mb-3 font-serif-display text-3xl leading-tight text-[var(--c-ink)] sm:text-4xl">{w.title}</h2>
                <p className="mb-6 font-body text-sm leading-relaxed text-[var(--c-ink)]">
                  Create a prefilled email draft to {portfolioData.contact.email}. Your email app will open for you to review and send.
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor={emailId} className="mb-1.5 block font-mono-code text-xs uppercase tracking-wider text-[var(--c-ink)]">{w.emailLabel}</label>
                    <input
                      ref={firstFieldRef}
                      id={emailId}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      placeholder={w.emailPlaceholder}
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (error) setError('');
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${emailHintId} ${errorId}` : emailHintId}
                      className="w-full rounded-xl border-[1.5px] border-[var(--c-ink)] bg-[var(--c-bg)] px-4 py-3 font-mono-code text-sm text-[var(--c-ink)] placeholder:text-[var(--c-ink)]/60"
                    />
                    <p id={emailHintId} className="mt-1.5 font-mono-code text-xs text-[var(--c-ink)]">This address is included in the draft so the studio can reply.</p>
                    <p id={errorId} role="alert" className="mt-1.5 font-mono-code text-xs font-bold text-[#8B1E2D]">{error}</p>
                  </div>

                  <fieldset>
                    <legend className="mb-1.5 font-mono-code text-xs uppercase tracking-wider text-[var(--c-ink)]">{w.roleLabel}</legend>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {w.roles.map((option) => (
                        <label key={option} className="cursor-pointer">
                          <input type="radio" name="inquiry-role" value={option} checked={role === option} onChange={() => setRole(option)} className="peer sr-only" />
                          <span className="flex min-h-11 items-center justify-center rounded-lg border-[1.5px] border-[var(--c-ink)]/50 px-3 py-2 text-center font-mono-code text-xs leading-tight text-[var(--c-ink)] transition-colors hover:border-[var(--c-ink)] peer-checked:border-[var(--c-ink)] peer-checked:bg-[var(--c-warm)] peer-checked:font-bold peer-checked:paper-shadow-sm peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--c-ink)]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="pt-2">
                    <button type="submit" className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-[var(--c-ink)] bg-[var(--c-ink)] px-6 py-3.5 font-mono-code text-sm uppercase tracking-wider text-[var(--c-bg)] paper-shadow-hover transition-colors hover:bg-[var(--c-ink-hover)]">
                      <span>Create email draft</span>
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <p aria-live="polite" className="sr-only">No email has been submitted or saved.</p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};