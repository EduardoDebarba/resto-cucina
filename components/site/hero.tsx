import { ChevronDown } from 'lucide-react';
import { images } from '@/lib/site-content';
import { SiteButton } from './button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--color-forest)] text-[var(--color-cream)]"
    >
      <img
        src={images.hero}
        alt="Elegant Italian restaurant dining room prepared for dinner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,28,22,0.78),rgba(20,28,22,0.45)_46%,rgba(20,28,22,0.2)),linear-gradient(0deg,rgba(20,28,22,0.72),rgba(20,28,22,0.05)_42%)]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-24 pt-36 sm:px-8 md:pb-28 lg:px-10">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--color-gold)]">
            Authentic Italian Cuisine
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.82] tracking-normal">
            A Taste of Italy,
            <span className="block italic">Made with Amore.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-cream)]/82 md:text-xl">
            Tradizione italiana, ingredienti freschi e sapori che raccontano
            una storia.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <SiteButton href="#reservations">Prenota un Tavolo</SiteButton>
            <SiteButton href="#menu" variant="outline">
              Scopri il Menu
            </SiteButton>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to La Nostra Filosofia"
        className="absolute bottom-8 right-5 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]/70 transition hover:text-[var(--color-cream)] sm:right-8 md:flex lg:right-10"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
