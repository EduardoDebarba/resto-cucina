'use client';

import { useState } from 'react';

const links = ['Menu', 'Reservations', 'About', 'Gallery', 'Contact'];

export function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setMessage(
      isValid
        ? 'Grazie. Your table-side note from Italy is on its way.'
        : 'Please enter a valid email address.',
    );
    if (isValid) {
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#141713] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.15fr] lg:px-10">
        <div>
          <a href="#home" className="inline-flex flex-col leading-none">
            <span className="font-serif text-5xl">Casa Bellini</span>
            <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold)]">
              Cucina Italiana
            </span>
          </a>
          <nav aria-label="Footer navigation" className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link === 'About' ? 'about' : link === 'Reservations' ? 'reservations' : link.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]/68 transition hover:text-[var(--color-cream)]"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex gap-3">
            <a
              href="#home"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-cream)]/18 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              IG
            </a>
            <a
              href="#home"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-cream)]/18 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              FB
            </a>
            <a
              href="#home"
              aria-label="TripAdvisor"
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-cream)]/18 text-[10px] font-bold transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              TA
            </a>
          </div>
        </div>

        <div>
          <h2 className="max-w-xl font-serif text-[clamp(3rem,6vw,5.6rem)] leading-[0.9]">
            A little taste of Italy in your inbox.
          </h2>
          <form onSubmit={onSubmit} className="mt-8 max-w-xl" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="min-h-12 flex-1 border border-[var(--color-cream)]/22 bg-transparent px-4 text-sm text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:bg-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              >
                Subscribe
              </button>
            </div>
            {message ? (
              <p className="mt-3 text-sm text-[var(--color-cream)]/72" aria-live="polite">
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
      <div className="border-t border-[var(--color-cream)]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-[var(--color-cream)]/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Casa Bellini</p>
          <div className="flex gap-5">
            <a href="#home" className="transition hover:text-[var(--color-cream)]">
              Privacy Policy
            </a>
            <a href="#home" className="transition hover:text-[var(--color-cream)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
