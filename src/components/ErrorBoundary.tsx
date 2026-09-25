import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  resetKey?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(previousProps: ErrorBoundaryProps): void {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20" role="alert">
        <div className="max-w-lg text-center">
          <AlertTriangle className="w-10 h-10 mx-auto mb-5 text-[var(--c-ink)]" aria-hidden="true" />
          <h1 className="font-serif-display text-4xl sm:text-5xl text-[var(--c-ink)] mb-4">
            This page could not be loaded
          </h1>
          <p className="font-body text-base text-[var(--c-ink)]/80 mb-7">
            The content may be temporarily unavailable. Return home or try this page again.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--c-ink)] rounded-xl font-mono-code text-sm hover:bg-[var(--c-highlight-light)]"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--c-ink)] text-[var(--c-bg)] rounded-xl font-mono-code text-sm hover:bg-[var(--c-ink-hover)]"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Return home
            </a>
          </div>
        </div>
      </section>
    );
  }
}
