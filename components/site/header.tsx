'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ReservationButton } from './reservation-button';

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'O restaurante', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Nossa história', href: '#story' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Contato', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        isScrolled || isOpen
          ? 'bg-[var(--color-cream)]/94 text-[var(--color-forest)] shadow-[0_14px_35px_rgba(31,52,40,0.08)] backdrop-blur-md'
          : 'bg-transparent text-[var(--color-cream)]'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-serif text-3xl tracking-normal">
            Resto Cucina
          </span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.34em] text-current/70">
            Cozinha italiana
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[11px] font-bold uppercase tracking-[0.16em]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ReservationButton
            variant={isScrolled ? 'secondary' : 'primary'}
          >
            Reservar uma mesa
          </ReservationButton>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center border border-current/30 transition hover:bg-current/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 lg:hidden ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <div className="mx-5 mb-5 border-t border-[var(--color-forest)]/15 pt-5 sm:mx-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2 font-serif text-2xl text-[var(--color-forest)]"
                >
                  {item.label}
                  <span className="h-px w-10 bg-[var(--color-gold)]" />
                </a>
              ))}
              <ReservationButton
                variant="secondary"
                className="mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                Reservar uma mesa
              </ReservationButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
