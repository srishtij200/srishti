import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-[var(--c-ink)]/60">
          Error 404
        </p>
        <h1 className="font-serif-display text-5xl sm:text-7xl text-[var(--c-ink)] mt-4 mb-6">
          Page not found
        </h1>
        <p className="text-base sm:text-lg text-[var(--c-ink)]/75 leading-relaxed mb-8">
          The page may have moved, or the address may be incomplete. Return home or continue to a
          selected project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[var(--c-ink)] text-[var(--c-bg)] px-5 py-3 rounded-xl font-bold hover:bg-[var(--c-ink-hover)]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/projects/marketing"
            className="inline-flex items-center justify-center border border-[var(--c-ink)] text-[var(--c-ink)] px-5 py-3 rounded-xl font-bold hover:bg-[var(--c-warm)]"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
