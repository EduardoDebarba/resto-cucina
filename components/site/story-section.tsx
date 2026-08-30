import { images } from '@/lib/site-content';

export function StorySection() {
  return (
    <section id="story" className="relative min-h-[680px] overflow-hidden bg-[var(--color-forest)] text-[var(--color-cream)]">
      <img
        src={images.story}
        alt="Chef preparando massa artesanal em uma cozinha italiana"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,52,40,0.88),rgba(31,52,40,0.54)_48%,rgba(31,52,40,0.18)),linear-gradient(0deg,rgba(31,52,40,0.7),rgba(31,52,40,0.1))]" />
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="reveal max-w-xl border-l border-[var(--color-gold)]/70 pl-7 md:pl-10">
          <p className="eyebrow text-[var(--color-gold)]">Desde 1987</p>
          <h2 className="mt-5 font-serif text-[clamp(2.35rem,4.4vw,4.6rem)] leading-[0.98]">
            Receitas passadas de geração em geração.
          </h2>
          <p className="mt-7 text-base leading-8 text-[var(--color-cream)]/78">
            O que nasceu em torno de uma mesa familiar tornou-se um restaurante
            em Milão marcado por molhos de domingo, massas frescas e o ritmo
            generoso da hospitalidade italiana.
          </p>
        </div>
      </div>
    </section>
  );
}
