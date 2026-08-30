'use client';

import { useState } from 'react';

const links = ['Menu', 'Reservas', 'Sobre', 'Galeria', 'Contato'];
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'TripAdvisor', href: 'https://www.tripadvisor.com.br/', icon: TripAdvisorIcon },
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.7 20v-7h2.4l.4-2.8h-2.8V8.5c0-.8.2-1.3 1.4-1.3h1.5V4.7c-.7-.1-1.4-.1-2.1-.1-2.2 0-3.7 1.3-3.7 3.8v1.8H8.4V13h2.4v7h2.9Z" />
    </svg>
  );
}

function TripAdvisorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M4.5 8.7 2.8 6.6h4.6A12 12 0 0 1 12 5.8c1.7 0 3.2.3 4.6.8h4.6l-1.7 2.1c.7.8 1.1 1.8 1.1 2.9a4.6 4.6 0 0 1-8.2 2.8L12 16l-.4-1.6a4.6 4.6 0 0 1-8.2-2.8c0-1.1.4-2.1 1.1-2.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="11.6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="11.6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="11.6" r=".6" fill="currentColor" />
      <circle cx="16" cy="11.6" r=".6" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setMessage(
      isValid
        ? 'Obrigado. Um pedacinho da Itália chegará ao seu e-mail.'
        : 'Digite um endereço de e-mail válido.',
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
            <span className="font-serif text-4xl">Resto Cucina</span>
            <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold)]">
              Cozinha italiana
            </span>
          </a>
          <nav aria-label="Navegação do rodapé" className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link === 'Sobre' ? 'about' : link === 'Reservas' ? 'reservations' : link === 'Galeria' ? 'gallery' : link === 'Contato' ? 'contact' : link.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]/68 transition hover:text-[var(--color-cream)]"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-cream)]/18 text-[10px] font-bold transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="max-w-xl font-serif text-[clamp(1.9rem,3.2vw,3.2rem)] leading-[1.04]">
            Um pequeno sabor da Itália no seu e-mail.
          </h2>
          <form onSubmit={onSubmit} className="mt-8 max-w-xl" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Seu e-mail
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Seu e-mail"
                className="min-h-12 flex-1 border border-[var(--color-cream)]/22 bg-transparent px-4 text-sm text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:bg-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              >
                Assinar
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
          <p>© 2026 Resto Cucina</p>
          <div className="flex gap-5">
            <a href="#home" className="transition hover:text-[var(--color-cream)]">
              Política de Privacidade
            </a>
            <a href="#home" className="transition hover:text-[var(--color-cream)]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
