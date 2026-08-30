import { images } from '@/lib/site-content';
import { SiteButton } from './button';

export function About() {
  return (
    <section id="about" className="section-shell bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:px-10">
        <div className="reveal relative min-h-[560px] sm:min-h-[680px]">
          <img
            src={images.aboutChef}
            alt="Chef preparing fresh pasta in a warm Italian kitchen"
            className="h-[560px] w-[78%] object-cover sm:h-[680px]"
            loading="lazy"
          />
          <img
            src={images.aboutPasta}
            alt="Fresh handmade pasta resting on a floured table"
            className="absolute bottom-8 right-0 h-56 w-52 border-[10px] border-[var(--color-cream)] object-cover shadow-[0_24px_60px_rgba(37,35,31,0.18)] sm:h-72 sm:w-64"
            loading="lazy"
          />
          <span className="absolute left-[74%] top-7 hidden h-32 w-px bg-[var(--color-gold)]/70 sm:block" />
          <span className="absolute left-[calc(74%+14px)] top-7 hidden origin-top-left rotate-90 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)] sm:block">
            Pasta fatta a mano
          </span>
        </div>

        <div className="reveal">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-serif text-6xl italic text-[var(--color-gold)]">01</span>
            <span className="h-px flex-1 bg-[var(--color-gold)]/40" />
          </div>
          <p className="eyebrow text-[var(--color-bordeaux)]">La Nostra Filosofia</p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3.4rem,7vw,7rem)] leading-[0.88] text-[var(--color-forest)]">
            Italian tradition, served with passion.
          </h2>
          <div className="mt-8 grid gap-5 text-base leading-8 text-[var(--color-muted)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <p>
              At Casa Bellini, every dish begins with the patience of an Italian
              table: flour on marble, tomatoes warmed by the sun, and recipes
              carried carefully from one generation to the next.
            </p>
            <p>
              Our kitchen pairs selected Mediterranean ingredients with
              contemporary technique, creating a room where handmade pasta,
              wine and hospitality feel quietly unforgettable.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
            <SiteButton href="#story" variant="secondary">
              Scopri la nostra storia
            </SiteButton>
            <span className="font-serif text-4xl italic text-[var(--color-forest)]">
              Matteo Bellini
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
