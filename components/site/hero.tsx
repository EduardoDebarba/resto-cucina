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
        alt="Mesa italiana com massa artesanal, vinho e luz de velas"
        className="absolute inset-0 h-full w-full object-cover object-left md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,28,22,0.56),rgba(20,28,22,0.28)_46%,rgba(20,28,22,0.1)),linear-gradient(0deg,rgba(20,28,22,0.72),rgba(20,28,22,0.05)_42%)]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 md:pb-20 md:pt-36 lg:px-10">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--color-gold)]">
            Cozinha italiana autêntica
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3rem,6.6vw,6.2rem)] leading-[0.92] tracking-normal">
            Um Sabor da Itália,
            <span className="block italic">feito com amor.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-cream)]/82 md:text-lg">
            Tradição italiana, ingredientes frescos e sabores que contam uma
            história.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <SiteButton href="#reservations">Reservar uma mesa</SiteButton>
            <SiteButton href="#menu" variant="outline">
              Conhecer o menu
            </SiteButton>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Rolar para Nossa Filosofia"
        className="absolute bottom-8 right-5 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]/70 transition hover:text-[var(--color-cream)] sm:right-8 md:flex lg:right-10"
      >
        Role
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
