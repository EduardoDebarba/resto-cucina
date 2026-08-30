import { images } from '@/lib/site-content';

export function Chef() {
  return (
    <section className="section-shell bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
        <div className="reveal order-2 lg:order-1">
          <p className="eyebrow text-[var(--color-bordeaux)]">The Chef</p>
          <h2 className="mt-5 font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.86] text-[var(--color-forest)]">
            Matteo Bellini
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Inspired by the rolling kitchens of Tuscany and the generous
            pasta-making traditions of Emilia-Romagna, Matteo builds each menu
            around memory, seasonality and the quiet drama of simplicity.
          </p>
          <blockquote className="mt-12 border-l border-[var(--color-gold)] pl-7 font-serif text-[clamp(2.6rem,5vw,5.2rem)] italic leading-[0.96] text-[var(--color-bordeaux)]">
            &ldquo;Cooking is our way of sharing memories.&rdquo;
          </blockquote>
        </div>
        <div className="reveal relative order-1 lg:order-2">
          <img
            src={images.chef}
            alt="Chef Matteo Bellini plating an Italian dish"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -left-4 bg-[var(--color-forest)] px-6 py-5 text-[var(--color-cream)] sm:-left-8 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Toscana / Emilia-Romagna
            </p>
            <p className="mt-2 font-serif text-3xl">Seasonal by instinct</p>
          </div>
        </div>
      </div>
    </section>
  );
}
