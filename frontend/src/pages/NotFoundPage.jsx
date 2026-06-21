import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-mono-accent text-accent-3 mb-3">· Error 404</div>
        <h1 className="font-display text-white text-5xl md:text-6xl font-semibold tracking-tightest">
          Page not found.
        </h1>
        <p className="mt-4 text-white/60 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-ink-950 hover:bg-white/90 px-5 py-3 text-sm font-medium transition-colors"
          data-testid="notfound-back-home"
        >
          <ArrowLeft size={15} strokeWidth={1.6} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
