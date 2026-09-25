export const RouteLoading = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-4" role="status" aria-live="polite">
    <div className="text-center">
      <span className="inline-block w-10 h-1 bg-[var(--c-ink)] overflow-hidden rounded-full motion-safe:animate-pulse" />
      <p className="mt-4 font-mono-code text-xs uppercase tracking-widest text-[var(--c-ink)]/70">
        Loading portfolio page
      </p>
    </div>
  </div>
);
