import { Clock } from 'lucide-react';
import { images } from '@/lib/site-content';
import { SiteButton } from './button';

export function ReservationCTA() {
  return (
    <section
      id="reservations"
      className="relative min-h-[650px] overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]"
    >
      <img
        src={images.reservation}
        alt="Sophisticated table prepared for evening dinner"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,16,0.78),rgba(18,18,16,0.46)_48%,rgba(18,18,16,0.18)),linear-gradient(0deg,rgba(18,18,16,0.68),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-[var(--color-gold)]">Reservations</p>
          <h2 className="mt-5 font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.84]">
            Your table is waiting.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-cream)]/78">
            Experience the warmth, flavours and traditions of Italy.
          </p>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center">
            <SiteButton href="#contact">Prenota un Tavolo</SiteButton>
            <div className="flex items-start gap-4 border-l border-[var(--color-gold)]/60 pl-5">
              <Clock className="mt-1 h-5 w-5 text-[var(--color-gold)]" />
              <p className="text-sm leading-7 text-[var(--color-cream)]/76">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Dinner
                </span>
                Tuesday - Sunday
                <br />
                18:00 - 23:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
